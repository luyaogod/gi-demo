var A=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(a,e,n)=>e in a?A(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,p=(a,e)=>{for(var n in e||(e={}))b.call(e,n)&&d(a,n,e[n]);if(_)for(var n of _(e))w.call(e,n)&&d(a,n,e[n]);return a},f=(a,e)=>D(a,E(e));import F from"./index.2b580880.js";import I from"./index.8d58f98a.js";import L from"./index.bbef0245.js";import N from"./index.64d1b3ea.js";import S from"./index.64e56b75.js";import{_ as U,d as k,f as v,r as V,g,o as t,c as y,a as u,b as q,w as r,F as z,t as J,u as s,q as i,J as h,v as K}from"./index.c32563ee.js";import"./avatar.d240db71.js";import"./system.2c3172ec.js";import"./axios.0d1baa0a.js";const R={class:"system-manage"},$={class:"left"},j={class:"right"},G=k({name:"SystemManage"}),H=k(f(p({},G),{setup(a){let e=v("01"),n=v(0);const c=V([{id:"01",name:"\u90E8\u95E8\u7BA1\u7406",value:I,icon:"icon-mind-mapping"},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:L,icon:"icon-user-group"},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:N,icon:"icon-robot"},{id:"04",name:"\u83DC\u5355\u7BA1\u7406",value:S,icon:"icon-menu"},{id:"05",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:F,icon:"icon-user"}]),x=(l,m)=>{e.value=l.id,n.value=m};return(l,m)=>{const C=g("a-menu-item"),B=g("a-menu");return t(),y("div",R,[u("section",$,[q(B,{style:{width:"200px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[s(e)],"show-collapse-button":""},{default:r(()=>[(t(!0),y(z,null,J(s(c),(o,M)=>(t(),i(C,{key:o.id,onClick:O=>x(o,M)},{icon:r(()=>[(t(),i(h(o.icon),{size:18}))]),default:r(()=>[u("span",null,K(o.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["default-selected-keys"])]),u("section",j,[(t(),i(h(s(c)[s(n)].value)))])])}}}));var te=U(H,[["__scopeId","data-v-25f7018a"]]);export{te as default};
