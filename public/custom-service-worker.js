importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

workbox.routing.registerRoute(
  'http://localhost:8000/todos',
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  workbox.strategies.networkFirst(),
)
workbox.routing.registerRoute(
  'http://localhost:3000',
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  new RegExp('https://randomuser.me/api'),
  workbox.strategies.staleWhileRevalidate()
)

/*
workbox.routing.registerRoute(
  new RegExp('https://randomuser.me/api'),
  workbox.strategies.cacheFirst()
)
*/