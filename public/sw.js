const CACHE_NAME = 'argentina-familia-cache-v2'; // Incremented version
const urlsToCache = [
  '/',
  '/index.html',
  // Tailwind CSS from CDN
  'https://cdn.tailwindcss.com',
  // FontAwesome from CDN
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
  // Leaflet CSS & JS from CDN
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js',
  // Icons for PWA (ensure these paths are correct relative to public folder)
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Main JS bundle (Vite usually hashes this, so this specific path might need adjustment
  // or use workbox-vite-plugin for more robust caching)
  // '/src/index.tsx', // This will be handled by the browser cache primarily due to type="module"
  // Potentially add main images if they are critical and local
  // '/docs/imagenes/buenosaires/buenosaires.jpg',
];

self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching app shell');
        const cachePromises = urlsToCache.map(urlToCache => {
          // For CDN assets, create a request with 'no-cors' if you don't control headers
          // This allows caching but not inspection of the response.
          // For local assets, 'cors' or default mode is fine.
          const request = new Request(urlToCache, { mode: urlToCache.startsWith('http') ? 'no-cors' : 'cors' });
          return cache.add(request).catch(err => {
            console.warn(`Service Worker: Failed to cache ${urlToCache} during install:`, err);
          });
        });
        return Promise.all(cachePromises);
      })
      .then(() => {
        console.log('Service Worker: Install completed');
        return self.skipWaiting(); // Force the waiting service worker to become the active service worker.
      })
      .catch(error => {
        console.error('Service Worker: Installation failed:', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activation completed');
      return self.clients.claim(); // Become available to all pages or tabs that load within the SW's scope.
    })
  );
});

self.addEventListener('fetch', event => {
  // We only want to handle GET requests for caching
  if (event.request.method !== 'GET') {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // For navigation requests, try network first, then cache (NetworkFirst strategy)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
        .catch(() => caches.match('/index.html')) // Fallback to index.html if specific page not cached
    );
    return;
  }

  // For other requests (assets), try cache first, then network (CacheFirst strategy)
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(
          networkResponse => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || (networkResponse.type !== 'basic' && networkResponse.type !== 'opaque' && networkResponse.type !== 'cors')) {
              return networkResponse;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        ).catch(error => {
          console.error('Service Worker: Fetch failed; returning offline page instead.', error);
          // Optionally, return a custom offline fallback page or resource
          // For example, if you have an offline.html:
          // return caches.match('/offline.html');
          // Or simply re-throw to let the browser handle the network error:
          throw error;
        });
      })
  );
});
