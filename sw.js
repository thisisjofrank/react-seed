var __wpo = {"assets":{"main":["./","./app.1585d430ed343d134188.css","./app.1585d430ed343d134188.js"],"additional":[],"optional":[]},"hashesMap":{"65689e20d53f4bbedf8ac800e0b4c2b4":"./app.1585d430ed343d134188.js","2d8e583d5c36c2159d49ac7f5824b17c":"./app.1585d430ed343d134188.css","25a918d95ef67d340ddf0d956924ac90":"./"},"strategy":"all","version":"7/5/2016, 5:49:47 PM","name":"webpack-offline","relativePaths":true};

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){"use strict";function r(n){function e(){if(!v.additional.length)return Promise.resolve();var n=void 0;return n="changed"===d?r("additional"):t("additional"),n["catch"](function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function t(e){var t=v[e];return caches.open(O).then(function(e){return o(e,t,{bust:n.version})}).then(function(){s("Cached assets: "+e,t)})["catch"](function(n){throw console.error(n),n})}function r(e){return u().then(function(r){if(!r)return t(e);var i=r[0],a=r[1],c=r[2],u=c.hashmap,f=c.version;if(!c.hashmap||f===n.version)return t(e);var l=Object.keys(u).map(function(n){return u[n]}),h=a.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),d=v[e],m=[],g=d.filter(function(n){return h.indexOf(n)===-1||l.indexOf(n)===-1});Object.keys(p).forEach(function(n){var e=p[n];if(d.indexOf(e)!==-1&&g.indexOf(e)===-1&&m.indexOf(e)===-1){var t=u[n];t&&h.indexOf(t)!==-1?m.push([t,e]):g.push(e)}}),s("Changed assets: "+e,g),s("Moved assets: "+e,m);var x=Promise.all(m.map(function(n){return i.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(O).then(function(e){var t=x.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,o(e,g,{bust:n.version})])})})}function a(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(g)&&0!==n.indexOf(O))return console.log("[SW]:","Delete cache:",n),caches["delete"](n)});return Promise.all(e)})}function u(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(g)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(k,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function f(){return caches.open(O).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:p}));return e.put(new URL(k,location).toString(),t)})}function l(n){return n["catch"](function(){}).then(function(n){return n&&n.ok?n:i(S,O)})}function h(){Object.keys(v).forEach(function(n){v[n]=v[n].map(function(n){var e=new URL(n,location);return e.search="",e.toString()})}),p=Object.keys(p).reduce(function(n,e){var t=new URL(p[e],location);return t.search="",n[e]=t.toString(),n},{})}var d=n.strategy,v=n.assets,p=n.hashesMap,m={all:n.version,changed:n.version},g=n.name,x=m[d],O=g+":"+x,k="__offline_webpack__data";h();var w=[].concat(v.main,v.additional,v.optional),S=n.navigateFallbackURL;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===d?r("main"):t("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var t=e();t=t.then(f),t=t.then(a),t=t.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(t)}),self.addEventListener("fetch",function(n){var e=new URL(n.request.url);e.search="";var t=e.toString();if("GET"!==n.request.method||w.indexOf(t)===-1)return S&&c(n.request)?void n.respondWith(l(fetch(n.request))):void(e.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&n.respondWith(fetch(n.request)));var r=i(t,O).then(function(e){if(e)return e;var r=fetch(n.request).then(function(n){if(!n||!n.ok)return n;var e=n.clone();return caches.open(O).then(function(n){return n.put(t,e)}).then(function(){console.log("[SW]:","Cache asset: "+t)}),n});return S&&c(n.request)?l(r):r});n.respondWith(r)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(n,e,t){var r=t&&t.bust;return Promise.all(e.map(function(n){return r&&(n=a(n,r)),fetch(n)})).then(function(t){if(t.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var r=t.map(function(t,r){return n.put(e[r],t)});return Promise.all(r)})}function i(n,e){return caches.match(n,{cacheName:e})["catch"](function(){})}function a(n,e){var t=n.indexOf("?")!==-1;return n+(t?"&":"?")+"__uncache="+encodeURIComponent(e)}function c(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||(n.headers.get("Accept")||"").indexOf("text/html")!==-1}function s(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}t(1),r(__wpo),n.exports=t(2)},function(n,e){"use strict"},function(n,e){}]);