const CACHE="unoapp-b1v6";
const ASSETS=["./","./index.html","./manifest.json","./uno-reverse-pack.jpg"];
self.addEventListener("install",event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));});
self.addEventListener("activate",event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith("unoapp-")&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();})());});
self.addEventListener("fetch",event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=="GET"||url.hostname==="cdnjs.cloudflare.com")return;
 if(url.origin===self.location.origin&&(url.pathname.endsWith("/index.html")||url.pathname.endsWith("/sw.js")||url.pathname==="/")){
  event.respondWith((async()=>{try{const response=await fetch(event.request,{cache:"no-store"});if(response.ok){caches.open(CACHE).then(c=>c.put(event.request,response.clone()));}return response;}catch(e){return(await caches.match(event.request))||Response.error();}})());
 }else event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});