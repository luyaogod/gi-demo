import{d as r,i as s,o as l,g as d,e as u,u as t,Z as m,_ as f}from"./index-dec34743.js";const p=["xlink:href"],g=r({name:"GiSvgIcon"}),h=r({...g,props:{name:{default:""},color:{default:""},size:{default:20}},setup(o){const n=o,a=e=>/(px|em|rem|%)$/.test(e.toString())?e:e+"px",c=s(()=>a(n.size)),i=s(()=>`#icon-${n.name}`),_=s(()=>n.name?`svg-icon icon-${n.name}`:"svg-icon");return(e,v)=>(l(),d("svg",m({"aria-hidden":"true",class:t(_)},e.$attrs,{style:{color:o.color,fill:o.color,width:t(c),height:t(c)}}),[u("use",{"xlink:href":t(i)},null,8,p)],16))}});const k=f(h,[["__scopeId","data-v-d201f40d"]]);export{k as _};
