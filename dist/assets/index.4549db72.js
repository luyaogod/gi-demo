import{$ as L,q as R,L as q,a0 as A,a1 as M,f as v,k as m,C as W,a2 as V,a3 as j,I as F,v as S}from"./index.9e02daa4.js";function b(e){return A()?(M(e),!0):!1}var T;const y=typeof window!="undefined",H=e=>typeof e=="string",E=()=>{};y&&((T=window==null?void 0:window.navigator)==null?void 0:T.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);var U=Object.defineProperty,X=Object.defineProperties,B=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t)=>{for(var n in t||(t={}))G.call(t,n)&&k(e,n,t[n]);if(x)for(var n of x(t))Y.call(t,n)&&k(e,n,t[n]);return e},Q=(e,t)=>X(e,B(t));function J(e){if(!W(e))return V(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=j(()=>({get(){return e.value[n]},set(r){if(Array.isArray(e.value)){const a=[...e.value];a[n]=r,e.value=a}else{const a=Q(K({},e.value),{[n]:r});Object.setPrototypeOf(a,e.value),e.value=a}}}));return t}function Z(e,t=!0){L()?R(e):t?e():q(e)}function ee(e,t,n={}){const{immediate:r=!0}=n,a=v(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function u(){a.value=!1,s()}function i(...d){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...d)},m(t))}return r&&(a.value=!0,y&&i()),b(u),{isPending:a,start:i,stop:u}}function _(e){var t;const n=m(e);return(t=n==null?void 0:n.$el)!=null?t:n}const O=y?window:void 0,te=y?window.document:void 0,ne=y?window.navigator:void 0;y&&window.location;function g(...e){let t,n,r,a;if(H(e[0])?([n,r,a]=e,t=O):[t,n,r,a]=e,!t)return E;let o=E;const s=F(()=>_(t),i=>{o(),i&&(i.addEventListener(n,r,a),o=()=>{i.removeEventListener(n,r,a),o=E})},{immediate:!0,flush:"post"}),u=()=>{s(),o()};return b(u),u}function we(e,t,n={}){const{window:r=O,ignore:a,capture:o=!0}=n;if(!r)return;const s=v(!0);let u;const i=c=>{r.clearTimeout(u);const l=_(e),f=c.composedPath();!l||l===c.target||f.includes(l)||!s.value||a&&a.length>0&&a.some(h=>{const p=_(h);return p&&(c.target===p||f.includes(p))})||t(c)},d=[g(r,"click",i,{passive:!0,capture:o}),g(r,"pointerdown",c=>{const l=_(e);s.value=!!l&&!c.composedPath().includes(l)},{passive:!0}),g(r,"pointerup",c=>{u=r.setTimeout(()=>i(c),50)},{passive:!0})];return()=>d.forEach(c=>c())}function ge(e={}){const{navigator:t=ne,read:n=!1,source:r,copiedDuring:a=1500}=e,o=["copy","cut"],s=Boolean(t&&"clipboard"in t),u=v(""),i=v(!1),d=ee(()=>i.value=!1,a);function w(){t.clipboard.readText().then(l=>{u.value=l})}if(s&&n)for(const l of o)g(l,w);async function c(l=m(r)){s&&l!=null&&(await t.clipboard.writeText(l),u.value=l,i.value=!0,d.start())}return{isSupported:s,text:u,copied:i,copy:c}}const P=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$="__vueuse_ssr_handlers__";P[$]=P[$]||{};P[$];var re=Object.defineProperty,le=Object.defineProperties,oe=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ue=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&C(e,n,t[n]);if(I)for(var n of I(t))se.call(t,n)&&C(e,n,t[n]);return e},ie=(e,t)=>le(e,oe(t));function me(e,t={}){var n,r;const a=(n=t.draggingElement)!=null?n:O,o=v((r=t.initialValue)!=null?r:{x:0,y:0}),s=v(),u=l=>t.pointerTypes?t.pointerTypes.includes(l.pointerType):!0,i=l=>{m(t.preventDefault)&&l.preventDefault(),m(t.stopPropagation)&&l.stopPropagation()},d=l=>{var f;if(!u(l)||m(t.exact)&&l.target!==m(e))return;const h=m(e).getBoundingClientRect(),p={x:l.pageX-h.left,y:l.pageY-h.top};((f=t.onStart)==null?void 0:f.call(t,p,l))!==!1&&(s.value=p,i(l))},w=l=>{var f;!u(l)||!s.value||(o.value={x:l.pageX-s.value.x,y:l.pageY-s.value.y},(f=t.onMove)==null||f.call(t,o.value,l),i(l))},c=l=>{var f;!u(l)||!s.value||(s.value=void 0,(f=t.onEnd)==null||f.call(t,o.value,l),i(l))};return y&&(g(e,"pointerdown",d,!0),g(a,"pointermove",w,!0),g(a,"pointerup",c,!0)),ie(ue({},J(o)),{position:o,isDragging:S(()=>!!s.value),style:S(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var D=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,pe=(e,t)=>{var n={};for(var r in e)ce.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&D)for(var r of D(e))t.indexOf(r)<0&&fe.call(e,r)&&(n[r]=e[r]);return n};function de(e,t,n={}){const r=n,{window:a=O}=r,o=pe(r,["window"]);let s;const u=a&&"ResizeObserver"in a,i=()=>{s&&(s.disconnect(),s=void 0)},d=F(()=>_(e),c=>{i(),u&&a&&c&&(s=new ResizeObserver(t),s.observe(c,o))},{immediate:!0,flush:"post"}),w=()=>{i(),d()};return b(w),{isSupported:u,stop:w}}function _e(e,t={width:0,height:0},n={}){const r=v(t.width),a=v(t.height);return de(e,([o])=>{r.value=o.contentRect.width,a.value=o.contentRect.height},n),F(()=>_(e),o=>{r.value=o?t.width:0,a.value=o?t.height:0}),{width:r,height:a}}const N=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function ye(e,t={}){const{document:n=te,autoExit:r=!1}=t,a=e||(n==null?void 0:n.querySelector("html")),o=v(!1);let s=!1,u=N[0];if(!n)s=!1;else for(const p of N)if(p[1]in n){u=p,s=!0;break}const[i,d,w,,c]=u;async function l(){!s||(n!=null&&n[w]&&await n[d](),o.value=!1)}async function f(){if(!s)return;await l();const p=_(a);p&&(await p[i](),o.value=!0)}async function h(){o.value?await l():await f()}return n&&g(n,c,()=>{o.value=!!(n!=null&&n[w])},!1),r&&b(l),{isSupported:s,isFullscreen:o,enter:f,exit:l,toggle:h}}var z;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(z||(z={}));function he({window:e=O,initialWidth:t=1/0,initialHeight:n=1/0}={}){const r=v(t),a=v(n),o=()=>{e&&(r.value=e.innerWidth,a.value=e.innerHeight)};return o(),Z(o),g("resize",o,{passive:!0}),{width:r,height:a}}export{_e as a,me as b,ye as c,ge as d,we as o,he as u};
