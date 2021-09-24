let cacheName = "pwa"
var url = [
 '/static/js/bundle.js',
 '/static/js/vendors~main.chunk.js',
 '/static/js/main.chunk.js',
 '/sockjs-node',
 '/favicon.ico',
 '/manifest.json',
 '/logo192.png',
 '/'
]

//install service worker 
this.addEventListener("install", (event) => {
 event.waitUntil(
  caches.open(cacheName)
   .then((cache) => {
       return cache.addAll(url)
   })
 )
})

//fetch cache data
this.addEventListener("fetch", (event) => {
 if (!navigator.onLine) {
  event.respondWith(
   caches.match(event.request)
    .then(res => {
     if (res) {
      return res
     }
     let fUrl = event.request.clone()
     fetch(fUrl)
    })
  )
 }
})