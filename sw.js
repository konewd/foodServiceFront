self.addEventListener("install", (event) => {
  console.log("Service Worker: instalado");
  event.waitUntil(
    caches.open("v1").then((cache) => cache.addAll(["/", "/manifest.json"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
