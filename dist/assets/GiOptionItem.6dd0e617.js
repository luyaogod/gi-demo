import{_ as i,o as t,c as l,m as n,d as _,h as p,a as o,l as c,H as m,Y as u,V as f,I as v}from"./index.646f20fd.js";const y={},h={class:"gi-option"};function g(e,s){return t(),l("ul",h,[n(e.$slots,"default",{},void 0,!0)])}const $=i(y,[["render",g],["__scopeId","data-v-1ad5e92d"]]),k={class:"wrap"},I={class:"icon-wrapper"},C=_({name:"GiOptionItem"}),B=_({...C,props:{icon:{type:String,default:""},label:{type:String,default:""},more:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:s}){const r=()=>{s("click")};return(a,G)=>{const d=p("IconRight");return t(),l("li",{class:u(["gi-option-item",{more:e.more,active:e.active}]),onClick:r},[o("section",k,[o("span",I,[n(a.$slots,"icon",{},()=>[(t(),c(f(e.icon),{size:16,"stroke-width":2}))],!0)]),n(a.$slots,"default",{},()=>[o("span",null,v(e.label),1)],!0)]),e.more?(t(),c(d,{key:0})):m("",!0)],2)}}});const S=i(B,[["__scopeId","data-v-07ff3c27"]]);export{S as G,$ as a};