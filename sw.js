/**
 * CoCoFlix Web - Service Worker
 * Provides offline caching, PWA installation support, and instant loading
 */

const CACHE_NAME = 'cocoflix-web-v1';
const STATIC_ASSETS = [
  './index.html',
  './assets/css/styles.css',
  './assets/js/data.js',
  './assets/js/app.js',
  './assets/images/logo_icon.png',
  './assets/images/placeholder_1.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(err => console.log('SW cache partial:', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Let network handle media streaming and data files directly
  const url = e.request.url;
  if (url.includes('.m3u8') || url.includes('.mp4') || url.includes('awsindstream') || url.includes('yplay')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cached) => {
      return cached || fetch(e.request).catch(() => {
        if (e.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
