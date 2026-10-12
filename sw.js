const CACHE="unoapp-b1v9";
const ASSETS=["./","./index.html","./manifest.json","./uno-reverse-pack.jpg"];
self.addEventListener("install",event=>{
  event.waitUntil((async()=>{await caches.open(CACHE).then(cache=>cache.addAll(ASSETS));await self.skipWaiting();})());
});
self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith("unoapp-")&&k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch",event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=="GET"||url.hostname==="cdnjs.cloudflare.com")return;
  if(url.origin===self.location.origin){
    const scopePath=new URL(self.registration.scope).pathname;
    const rootPath=scopePath.endsWith("/")?scopePath:scopePath+"/";
    const isAppShell=url.pathname===rootPath||url.pathname===rootPath.slice(0,-1)||url.pathname===rootPath+"index.html"||url.pathname.endsWith("/index.html")||url.pathname.endsWith("/sw.js");
    if(isAppShell){
      event.respondWith((async()=>{
        try{
          const response=await fetch(request,{cache:"no-store"});
          if(response.ok)caches.open(CACHE).then(cache=>cache.put(request,response.clone()));
          return response;
        }catch(error){
          return (await caches.match(request))||(await caches.match(self.registration.scope))||(await caches.match(new URL("index.html",self.registration.scope).href))||Response.error();
        }
      })());
      return;
    }
  }
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
