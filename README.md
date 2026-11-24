# CoCoFlix Web Edition 🎬

> A fully responsive, modern entertainment streaming web platform with 9,000+ movies, web series, and 24/7 live sports channels. Built as a pure static Progressive Web App (PWA) with zero `.apk` dependencies.

---

## 🌟 Highlights

- **Pure HTML5/CSS/JavaScript:** 100% static, client-side, and deployable to any hosting platform (GitHub Pages, Netlify, Cloudflare Pages, Vercel).
- **No APK Required:** Runs in any browser on iPhone, iPad, Android, Mac, Windows, and Smart TVs.
- **PWA Ready:** Includes `manifest.json` and `sw.js` for 1-click "Add to Home Screen" installation.
- **Over 9,000+ Titles:**
  - Bollywood (2,450+ Movies)
  - Hollywood & Dual Audio (3,570+ Movies)
  - South Indian Hindi Dubbed (620+ Movies)
  - Trending Web Series (2,360+ Series)
  - Live Sports & News Channels (ZIM v IND Cricket, Aaj Tak HD, NDTV 24x7, NDTV India)
- **Multi-Server Streaming Player:**
  - **Server 1:** Cloud Web Player (in-page responsive embed)
  - **Server 2:** Direct HLS Stream (`.m3u8` via Hls.js)
  - **VLC / IINA Support:** 1-click "Copy Link" to stream directly in desktop media players.
- **Performance Optimized:** Progressive chunked loading (40 titles per page) and instant real-time search across all 9,000+ titles.

---

## 🚀 How to Run Locally

### Option 1: Standard Python HTTP Server
```bash
cd /Users/hitansh/.gemini/antigravity/scratch/cocoflix-web
python3 -m http.server 8080
```
Open **`http://localhost:8080`** in your browser.

### Option 2: CoCoFlix Auto-Syncing Server (with Auto-Updater)
```bash
cd /Users/hitansh/.gemini/antigravity/scratch/cocoflix-web
python3 server.py 8080
```
- Includes automatic background synchronization with live releases every 30 minutes.
- Includes `/proxy_stream` endpoint to bypass browser CORS on external streaming servers.

---

## 🌐 1-Click Free Web Deployment

Because this project is built entirely with standard `.html`, `.js`, and `.json`, you can publish it anywhere in seconds:

### 1. GitHub Pages (Free)
1. Push this directory to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial CoCoFlix Web Release"
   git remote add origin https://github.com/YOUR_USERNAME/cocoflix-web.git
   git push -u origin main
   ```
2. Go to your repo **Settings &rarr; Pages &rarr; Branch: `main` &rarr; Save**.
3. Your site will be live at `https://YOUR_USERNAME.github.io/cocoflix-web/`!

### 2. Cloudflare Pages (Free & Ultra-Fast)
1. Log in to [Cloudflare Dashboard](https://pages.cloudflare.com/).
2. Select **Pages &rarr; Create a project &rarr; Direct Upload**.
3. Drag & drop the `cocoflix-web` folder.
4. Your website is immediately published with free SSL on `*.pages.dev`!

### 3. Netlify / Vercel (Free)
- Drag and drop this folder onto [Netlify Drop](https://app.netlify.com/drop) to publish in 30 seconds.

---

## 📱 How to Install on Mobile & Desktop (PWA)

- **iPhone / iPad (Safari):** Open the site, tap the **Share** button at the bottom &rarr; **Add to Home Screen**.
- **Android (Chrome / Brave):** Tap the **⋮ menu** &rarr; **Install App** or **Add to Home screen**.
- **Mac / Windows (Chrome):** Click the **Install** button in the URL address bar.

---

## 📁 Directory Structure

```
cocoflix-web/
├── index.html           # Main Web Application & Player UI
├── manifest.json        # PWA Web Manifest (No APK Needed)
├── sw.js                # Service Worker (Offline cache & instant load)
├── server.py            # Local Streaming & Auto-Sync Server
├── updater.py           # Catalog Synchronizer from App Backend
├── assets/
│   ├── css/styles.css   # Modern Dark Cinema Theme
│   ├── js/app.js        # Controller, Search, Virtual Scrolling & Player
│   ├── js/data.js       # Fast Initial In-Memory Dataset
│   └── images/          # Favicon, Logo & Graphic Assets
└── data/
    ├── bollywood.json   # 2,450+ Bollywood Titles
    ├── hollywood.json   # 3,570+ Hollywood Titles
    ├── south.json       # 620+ South Indian Hindi Dubbed Titles
    ├── series.json      # 2,360+ Web Series Titles
    └── live.json        # Live Cricket & News Streams
```
