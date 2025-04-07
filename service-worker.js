self.addEventListener('install', (event) => {
    console.log('Service Worker: Installato');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});