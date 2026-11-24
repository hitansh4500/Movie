#!/usr/bin/env python3
"""
CoCoFlix All-in-One Streaming Server & Auto-Sync Engine
1. Serves static web application files (HTML, CSS, JS, JSON).
2. Background Auto-Sync Thread: Automatically fetches latest movies from dxk.pages.dev every 30 mins.
3. Live Sync API (/api/sync and /api/status).
4. Media Proxy Endpoint (/proxy_stream?url=...) to bypass browser CORS on streams.
"""

import http.server
import socketserver
import urllib.request
import urllib.parse
import threading
import json
import time
import os
import sys

# Import local updater routine
try:
    from updater import sync_catalog
except ImportError:
    sync_catalog = None

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CoCoFlixHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS for all local requests
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)

        # 1. API: Check Sync Status
        if parsed.path == '/api/status':
            status_path = os.path.join(DIRECTORY, 'data', 'sync_status.json')
            if os.path.exists(status_path):
                with open(status_path, 'rb') as f:
                    content = f.read()
            else:
                content = json.dumps({'status': 'ready', 'message': 'Catalog loaded'}).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(content)))
            self.end_headers()
            self.wfile.write(content)
            return

        # 2. API: Trigger Instant Sync from App Backend
        if parsed.path == '/api/sync':
            try:
                if sync_catalog:
                    result = sync_catalog()
                else:
                    result = {'status': 'error', 'message': 'Updater module not found'}
                content = json.dumps(result).encode('utf-8')
                self.send_response(200)
            except Exception as e:
                content = json.dumps({'status': 'error', 'error': str(e)}).encode('utf-8')
                self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(content)))
            self.end_headers()
            self.wfile.write(content)
            return

        # 3. Stream Proxy to Bypass Browser CORS
        if parsed.path == '/proxy_stream':
            query = urllib.parse.parse_qs(parsed.query)
            target_url = query.get('url', [''])[0]
            if not target_url:
                self.send_error(400, "Missing target url")
                return

            try:
                req = urllib.request.Request(
                    target_url,
                    headers={
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept': '*/*',
                        'Referer': 'https://pikachu.app/'
                    }
                )
                with urllib.request.urlopen(req, timeout=15) as resp:
                    self.send_response(resp.status)
                    for k, v in resp.headers.items():
                        if k.lower() not in ['x-frame-options', 'content-security-policy', 'access-control-allow-origin']:
                            self.send_header(k, v)
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(resp.read())
            except Exception as e:
                self.send_error(502, f"Proxy Error: {e}")
            return

        # Serve static web app files normally
        return super().do_GET()

def background_sync_worker():
    """Periodically fetches latest movies from dxk.pages.dev every 30 minutes."""
    while True:
        try:
            time.sleep(1800) # 30 minutes
            if sync_catalog:
                sync_catalog()
        except Exception as e:
            print(f"[Auto-Updater] Background sync notice: {e}")

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    
    # Start background auto-updater daemon thread
    sync_thread = threading.Thread(target=background_sync_worker, daemon=True)
    sync_thread.start()

    try:
        with socketserver.TCPServer(("", PORT), CoCoFlixHandler) as httpd:
            print("=================================================================")
            print(f" 🚀 CoCoFlix Auto-Updating Server running at: http://localhost:{PORT}")
            print(f" 🔄 Auto-Sync: Active (Syncs latest movies from APK backend)")
            print(f" 🎬 Catalog: 9,000+ Movies, Web Series & Live Channels Ready")
            print("=================================================================")
            httpd.serve_forever()
    except Exception as e:
        print(f"Server notice: {e}")
