import h from"./index.f0442e45.js";import k from"./index.f97e983b.js";import x from"./index.421d65ac.js";import C from"./index.a27e3a8b.js";import B from"./index.bf0d717f.js";import{d,r as m,g as M,h as l,o as e,c as p,a as o,b as A,w as t,l as a,V as _,K as D,J as E,I as b,_ as w}from"./index.646f20fd.js";import"./index.f1f06201.js";import"./index.e3a6c0dc.js";import"./GiSvgIcon.e1aa7599.js";import"./GiTitle.def2a764.js";import"./index.463d26de.js";import"./usePagination.282c419c.js";import"./viewer.d809b3d2.js";import"./avatar.b315abf9.js";import"./useArea.a1c854e7.js";const I={class:"system-manage"},V={class:"left"},F={class:"right"},K=d({name:"SystemManage"}),L=d({...K,setup(N){const s=m("01"),i=m(0),u=M([{id:"01",name:"\u90E8\u95E8\u7BA1\u7406",value:k,icon:"icon-mind-mapping"},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:x,icon:"icon-user-group"},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:C,icon:"icon-robot"},{id:"04",name:"\u83DC\u5355\u7BA1\u7406",value:B,icon:"icon-menu"},{id:"05",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:h,icon:"icon-user"}]),f=(c,r)=>{s.value=c.id,i.value=r};return(c,r)=>{const v=l("a-menu-item"),g=l("a-menu");return e(),p("div",I,[o("section",V,[A(g,{style:{width:"200px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[s.value],"show-collapse-button":""},{default:t(()=>[(e(!0),p(D,null,E(u,(n,y)=>(e(),a(v,{key:n.id,onClick:S=>f(n,y)},{icon:t(()=>[(e(),a(_(n.icon),{size:18}))]),default:t(()=>[o("span",null,b(n.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["default-selected-keys"])]),o("section",F,[(e(),a(_(u[i.value].value)))])])}}});const Y=w(L,[["__scopeId","data-v-d97680c0"]]);export{Y as default};