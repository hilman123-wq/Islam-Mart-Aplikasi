// File sw.js - Service Worker Minimal untuk memicu Install PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Kosong saja sudah cukup untuk memanipulasi syarat PWA dari Google
});