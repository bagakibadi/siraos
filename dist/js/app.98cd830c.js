(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"40e05839"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"fa6da889"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a,o=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],c={},s=c,l=(n("034f"),n("2877")),p=Object(l["a"])(s,u,i,!1,null,null,null),f=p.exports,d=(n("d3b7"),n("8c4f")),m=(n("ac1f"),n("5319"),{name:"Home",created:function(){localStorage.token?this.$router.replace("/home"):this.$router.replace("/login")}}),h=m,b=Object(l["a"])(h,r,a,!1,null,null,null),g=b.exports;o["a"].use(d["a"]);var v=[{path:"/",name:"Home",component:g},{path:"/home",name:"Home",component:function(){return n.e("about").then(n.bind(null,"7277"))},meta:{title:"Test"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/logout",name:"Logout",component:function(){return n.e("about").then(n.bind(null,"c100"))}},{path:"/absensi",name:"Absensi",component:function(){return n.e("about").then(n.bind(null,"d090"))}},{path:"/pengajuan",name:"Pengajuan",component:function(){return n.e("about").then(n.bind(null,"3d54"))}},{path:"/shift",name:"Shift",component:function(){return n.e("about").then(n.bind(null,"7a9c"))}}],y=new d["a"]({mode:"history",base:"/",routes:v}),O=y,w=(n("d81d"),n("5530")),E=n("2f62"),T=n("bc3a"),j=n.n(T);o["a"].use(E["a"]);var A=new E["a"].Store({state:{data:[],pengajuan:[],attendance:[],shift:[]},mutations:{GET_SUMMARYATTENDANCE:function(e,t){var n=t.message.totalPresentEmployees.data,r=n.map((function(e){var t=Object(w["a"])({},e),n=JSON.parse(e.clockIn),r=JSON.parse(e.clockOut);if(null===n)t.timeIn="-",t.addressIn="-";else{var a=n.time.replace("T"," ");t.timeIn=a,t.addressIn=n.address}if(null===r)t.timeOut="-",t.addressOut="-";else{var o=r.time.replace("T"," ");t.timeOut=o,t.addressOut=r.address}return t.clockIn=n,t.clockOut=r,t}));e.attendance=r},GET_DATA:function(e,t){e.data=t.message},GET_PENGAJUAN:function(e,t){var n=t.message,r=n.map((function(e){var t=Object(w["a"])({},e),n=JSON.parse(e.location);t.address=n.address;var r=t.createdOn.replace("T"," ");return t.createdOn=r,t.clockIn=n,t}));e.pengajuan=r},GET_SHIFT:function(e,t){e.shift=t.message}},actions:{getApi:function(e,t){var n=e.commit;return new Promise((function(e,r){j.a.get("".concat("https://siraos.itopsp3.my.id/api/admin/"+t.url),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(r){n(t.mutation,r.data),e(r.data),console.log(r)})).catch((function(e){r(new Error(e))}))}))},postApi:function(e,t){var n=e.commit;return new Promise((function(e,r){j.a.post("".concat("https://siraos.itopsp3.my.id/api/admin/"+t.url),t.data,{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(r){n(t.mutation,r.data),e(r)})).catch((function(e){r(new Error(e))}))}))}},modules:{}}),S=n("f309");o["a"].use(S["a"]);var k=new S["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:O,store:A,vuetify:k,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.98cd830c.js.map