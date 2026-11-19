const CACHE="unoapp-b1v27";
const ASSETS=["./", "./index.html", "./manifest.json", "./uno-reverse-pack.jpg", "./sounds/index.json"];
const OPTIONAL_SOUNDS=["./sounds/Paula_Big_Loser.mp3", "./sounds/Paula_Lost_Again_Loser.mp3", "./sounds/Paula_Uno_Master.mp3", "./sounds/Sorry%20to%20see%20you%20lose%2C%20Don.mp3"];
self.addEventListener("install",event=>{
  event.waitUntil((async()=>{await caches.open(CACHE).then(cache=>cache.addAll(ASSETS));await Promise.allSettled(OPTIONAL_SOUNDS.map(async path=>(await caches.open(CACHE)).add(path)));await self.skipWaiting();})());
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
  if(request.method!=="GET"||url.origin!==self.location.origin)return;
  if(url.origin===self.location.origin){
    const scopePath=new URL(self.registration.scope).pathname;
    const rootPath=scopePath.endsWith("/")?scopePath:scopePath+"/";
    const isAppShell=url.pathname===rootPath||url.pathname===rootPath.slice(0,-1)||url.pathname===rootPath+"index.html"||url.pathname.endsWith("/index.html")||url.pathname.endsWith("/sw.js");
    if(isAppShell||url.pathname===rootPath+"sounds/index.json"){
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
  event.respondWith(caches.match(request).then(async cached=>{if(cached)return cached;const response=await fetch(request);if(response.ok && url.pathname.includes("/sounds/")){const cache=await caches.open(CACHE);await cache.put(request,response.clone());}return response;}));
});
