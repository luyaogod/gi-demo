var T=Object.defineProperty;var V=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var B=(l,o,t)=>o in l?T(l,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[o]=t,w=(l,o)=>{for(var t in o||(o={}))N.call(o,t)&&B(l,t,o[t]);if(V)for(var t of V(o))q.call(o,t)&&B(l,t,o[t]);return l};import{d as h,r as C,y as L,g as u,o as v,q as E,w as a,b as e,u as b,i as D,h as y,_ as O,f as x,X as W,c as X,a as k,A as $,v as j,p as G,e as H,M as J}from"./index.ab7eeba1.js";import{b as K}from"./system.c7ebb7c9.js";import"./axios.b1ed0c9a.js";const P=y("role_code_"),Q=h({__name:"AddRoleModal",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:o}){const t=l,i=C({name:"",roleCode:"",remarks:""});let n=L({get:()=>t.modelValue,set:f=>{o("update:modelValue",f)}});return(f,r)=>{const g=u("a-input"),s=u("a-form-item"),c=u("a-textarea"),F=u("a-form"),_=u("a-modal");return v(),E(_,{visible:b(n),"onUpdate:visible":r[3]||(r[3]=d=>D(n)?n.value=d:n=d),title:"\u65B0\u589E\u89D2\u8272"},{default:a(()=>[e(F,null,{default:a(()=>[e(s,{label:"\u89D2\u8272\u540D\u79F0",name:"name",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:"blur"},{min:3,max:10,message:"\u957F\u5EA6\u5728 3 - 10\u4E2A\u5B57\u7B26",trigger:"blur"}],"validate-trigger":["change","input"]},{default:a(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",modelValue:i.name,"onUpdate:modelValue":r[0]||(r[0]=d=>i.name=d)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u89D2\u8272\u7F16\u53F7",name:"roleCode"},{default:a(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u53F7",modelValue:i.roleCode,"onUpdate:modelValue":r[1]||(r[1]=d=>i.roleCode=d)},{prepend:a(()=>[P]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u63CF\u8FF0",name:"remarks"},{default:a(()=>[e(c,{modelValue:i.remarks,"onUpdate:modelValue":r[2]||(r[2]=d=>i.remarks=d),placeholder:"\u89D2\u8272\u63CF\u8FF0","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});const Y=l=>(G("data-v-06028a00"),l=l(),H(),l),Z={class:"role-manage"},ee=Y(()=>k("span",null,"\u65B0\u589E\u89D2\u8272",-1)),ae={class:"table-box"},oe=y("\u83DC\u5355\u6743\u9650"),te=h({__name:"index",setup(l){let o=x(!1);const t=x([]);let i=x(0),n=x(!1);const f=C({pageCount:1,pageSize:500});(async()=>{try{o.value=!0;const s=await K(w({},f));s.success&&(t.value=s.data.list,i.value=s.data.total,o.value=!1)}catch(s){return s}})();const g=()=>{J.info("\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE")};return(s,c)=>{const F=u("icon-plus"),_=u("a-button"),d=u("a-row"),m=u("a-table-column"),A=u("icon-delete"),R=u("a-popconfirm"),S=u("icon-edit"),I=u("icon-safe"),M=u("a-space"),U=u("a-table"),z=W("loading");return v(),X("div",Z,[e(d,{class:"head"},{default:a(()=>[e(_,{type:"primary",onClick:c[0]||(c[0]=p=>D(n)?n.value=!0:n=!0)},{icon:a(()=>[e(F)]),default:a(()=>[ee]),_:1})]),_:1}),k("section",ae,[$((v(),E(U,{data:t.value,"row-key":"id",scroll:{x:"100%",y:"100%",minWidth:900},pagination:{"show-page-size":!0}},{columns:a(()=>[e(m,{title:"\u5E8F\u53F7",width:"60"},{cell:a(p=>[y(j(p.rowIndex+1),1)]),_:1}),e(m,{title:"\u89D2\u8272\u540D\u79F0","data-index":"name"}),e(m,{title:"\u89D2\u8272\u7F16\u53F7","data-index":"roleCode"}),e(m,{title:"\u89D2\u8272\u63CF\u8FF0","data-index":"description"}),e(m,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"}),e(m,{title:"\u64CD\u4F5C",width:"220"},{cell:a(({record:p})=>[e(M,null,{default:a(()=>[e(R,{content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?",onOk:g},{default:a(()=>[e(_,{type:"primary",status:"danger"},{icon:a(()=>[e(A)]),_:1})]),_:1}),e(_,{type:"primary"},{icon:a(()=>[e(S)]),_:1}),e(_,{type:"primary",status:"success"},{icon:a(()=>[e(I)]),default:a(()=>[oe]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[z,b(o)]])]),e(Q,{modelValue:b(n),"onUpdate:modelValue":c[1]||(c[1]=p=>D(n)?n.value=p:n=p)},null,8,["modelValue"])])}}});var de=O(te,[["__scopeId","data-v-06028a00"]]);export{de as default};
