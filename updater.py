#!/usr/bin/env python3
"""
CoCoFlix Auto-Updater & Catalog Sync Engine
Fetches the latest live movie, series, and TV datasets directly from the APK Cloudflare backend (dxk.pages.dev).
Decrypts streams, normalizes metadata, and updates local database files.
"""

import json
import os
import sys
import time
import urllib.request
import urllib.parse
import ssl

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
os.makedirs(DATA_DIR, exist_ok=True)

# CoCoFlix Backend Endpoints (Cloudflare Pages)
ENDPOINTS = {
    'bollywood': {
        'meta': 'https://dxk.pages.dev/b.json',
        'link': 'https://dxk.pages.dev/lb.json',
        'cat': 'bollywood',
        'type': 'movie',
        'outfile': os.path.join(DATA_DIR, 'bollywood.json')
    },
    'hollywood': {
        'meta': 'https://dxk.pages.dev/h.json',
        'link': 'https://dxk.pages.dev/lh.json',
        'cat': 'hollywood',
        'type': 'movie',
        'outfile': os.path.join(DATA_DIR, 'hollywood.json')
    },
    'south': {
        'meta': 'https://dxk.pages.dev/o.json',
        'link': 'https://dxk.pages.dev/lo.json',
        'cat': 'south',
        'type': 'movie',
        'outfile': os.path.join(DATA_DIR, 'south.json')
    },
    'series': {
        'meta': 'https://dxk.pages.dev/s.json',
        'link': 'https://dxk.pages.dev/lbs.json',
        'cat': 'series',
        'type': 'series',
        'outfile': os.path.join(DATA_DIR, 'series.json')
    },
    'live': {
        'meta': 'https://dxk.pages.dev/t.json',
        'cat': 'live',
        'type': 'live',
        'outfile': os.path.join(DATA_DIR, 'live.json')
    }
}

# Android APK Katakana XOR Decryption Routine
def decrypt_stream_url(encrypted_str):
    if not encrypted_str:
        return ''
    chars = []
    for i, c in enumerate(encrypted_str):
        k = 0x3089 if (i % 2 == 0) else 0x3027
        chars.append(chr(ord(c) ^ k))
    dec = ''.join(chars)
    # Replace outdated mirror domain per app config
    return dec.replace('tufg01gamis2.site', 'pikadro4k.site')

def fetch_json(url):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 CoCoFlix/0.0.3',
            'Accept': 'application/json, text/plain, */*'
        }
    )
    with urllib.request.urlopen(req, timeout=20, context=ctx) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        return json.loads(content)

def sync_catalog():
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] Starting CoCoFlix Catalog Auto-Sync...")
    summary = {}
    total_titles = 0

    for section_name, conf in ENDPOINTS.items():
        try:
            print(f"Fetching {section_name} metadata from {conf['meta']}...")
            meta_data = fetch_json(conf['meta'])
            
            # Fetch and map decrypted streams if separate link endpoint exists
            links_map = {}
            if 'link' in conf:
                try:
                    print(f"Fetching {section_name} links from {conf['link']}...")
                    links_data = fetch_json(conf['link'])
                    for item in links_data:
                        so = item.get('so')
                        enc_l = item.get('l', '')
                        if so is not None and enc_l:
                            links_map[so] = decrypt_stream_url(enc_l)
                except Exception as e_link:
                    print(f"Notice: Could not load separate links for {section_name}: {e_link}")

            # Merge metadata and decrypted stream links
            normalized_list = []
            for item in meta_data:
                so = item.get('so', 0)
                decrypted_stream = links_map.get(so, '')
                # If stream already present in item, check if encrypted
                if not decrypted_stream and item.get('stream_url'):
                    decrypted_stream = item['stream_url']
                elif not decrypted_stream and item.get('l'):
                    decrypted_stream = decrypt_stream_url(item['l'])

                norm_item = {
                    'id': f"{conf['cat'][:1]}_{so}" if so else f"{conf['cat']}_{item.get('id', '')}",
                    'so': so,
                    'title': item.get('title', item.get('t', 'Untitled')),
                    'year': item.get('year', item.get('y', 2024)),
                    'quality': item.get('quality', item.get('q', 'HD')),
                    'genre': item.get('genre', item.get('g', 'Movie')),
                    'poster': item.get('poster', item.get('p', '')),
                    'stream_url': decrypted_stream,
                    'download_url': item.get('download_url', ''),
                    'category': conf['cat'],
                    'type': conf['type']
                }
                if 'rating' in item or 'r' in item:
                    norm_item['rating'] = str(item.get('rating', item.get('r', '8.0')))
                if 'seasons' in item:
                    norm_item['seasons'] = item['seasons']

                normalized_list.append(norm_item)

            # Inverted order matching APK Collections.reverse()
            # Newest additions appear at the beginning
            normalized_list.reverse()

            # Save to disk
            with open(conf['outfile'], 'w', encoding='utf-8') as f:
                json.dump(normalized_list, f, ensure_ascii=False)

            summary[section_name] = len(normalized_list)
            total_titles += len(normalized_list)
            print(f"✓ Saved {len(normalized_list)} {section_name} titles to {conf['outfile']}")

        except Exception as e:
            print(f"Warning: Failed to sync {section_name}: {e}")
            # If fetch fails, keep existing file count in summary
            if os.path.exists(conf['outfile']):
                try:
                    with open(conf['outfile']) as f:
                        existing = json.load(f)
                        summary[section_name] = len(existing)
                        total_titles += len(existing)
                except Exception:
                    summary[section_name] = 0

    # Save sync status metadata
    status_file = os.path.join(DATA_DIR, 'sync_status.json')
    status_data = {
        'last_sync': time.strftime('%Y-%m-%d %H:%M:%S UTC', time.gmtime()),
        'timestamp': int(time.time()),
        'summary': summary,
        'total_titles': total_titles,
        'status': 'success'
    }
    with open(status_file, 'w', encoding='utf-8') as f:
        json.dump(status_data, f, indent=2)

    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] Sync Complete! Total titles available: {total_titles:,}")
    return status_data

if __name__ == '__main__':
    sync_catalog()
