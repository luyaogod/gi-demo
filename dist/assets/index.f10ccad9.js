var z=Object.defineProperty;var V=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(l,a,o)=>a in l?z(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,C=(l,a)=>{for(var o in a||(a={}))N.call(a,o)&&y(l,o,a[o]);if(V)for(var o of V(a))$.call(a,o)&&y(l,o,a[o]);return l};import{d as w,r as E,D as j,g as u,o as b,j as k,w as t,b as e,h as i,i as x,k as B,_ as q,f as D,$ as G,c as L,a as h,G as O,B as H,p as J,e as K,M as P}from"./index.7465b258.js";import{b as Q}from"./system.4e54efb9.js";import"./axios.d3a53dd8.js";const W=B("role_code_"),X=w({props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:a}){const o=l,c=E({name:"",roleCode:"",remarks:""});let n=j({get:()=>o.modelValue,set:F=>{a("update:modelValue",F)}});return(F,d)=>{const g=u("a-input"),s=u("a-form-item"),_=u("a-textarea"),v=u("a-form"),m=u("a-modal");return b(),k(m,{visible:i(n),"onUpdate:visible":d[3]||(d[3]=r=>x(n)?n.value=r:n=r),title:"\u65B0\u589E\u89D2\u8272"},{default:t(()=>[e(v,null,{default:t(()=>[e(s,{label:"\u89D2\u8272\u540D\u79F0",name:"name",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:"blur"},{min:3,max:10,message:"\u957F\u5EA6\u5728 3 - 10\u4E2A\u5B57\u7B26",trigger:"blur"}],"validate-trigger":["change","input"]},{default:t(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",modelValue:i(c).name,"onUpdate:modelValue":d[0]||(d[0]=r=>i(c).name=r)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u89D2\u8272\u7F16\u53F7",name:"roleCode"},{default:t(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u53F7",modelValue:i(c).roleCode,"onUpdate:modelValue":d[1]||(d[1]=r=>i(c).roleCode=r)},{prepend:t(()=>[W]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u63CF\u8FF0",name:"remarks"},{default:t(()=>[e(_,{modelValue:i(c).remarks,"onUpdate:modelValue":d[2]||(d[2]=r=>i(c).remarks=r),placeholder:"\u89D2\u8272\u63CF\u8FF0","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});const Y=l=>(J("data-v-278f19d6"),l=l(),K(),l),Z={class:"role-manage"},ee=Y(()=>h("span",null,"\u65B0\u589E\u89D2\u8272",-1)),te={class:"table-box"},ae=B("\u83DC\u5355\u6743\u9650"),oe=w({setup(l){let a=D(!1);const o=D([]);let c=D(0),n=D(!1);const F=E({pageCount:1,pageSize:500});(async()=>{try{a.value=!0;const s=await Q(C({},F));s.success&&(o.value=s.data.list,c.value=s.data.total,a.value=!1)}catch(s){return s}})();const g=()=>{P.info("\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE")};return(s,_)=>{const v=u("icon-plus"),m=u("a-button"),r=u("a-row"),p=u("a-table-column"),A=u("icon-delete"),R=u("a-popconfirm"),S=u("icon-edit"),I=u("icon-safe"),U=u("a-space"),M=u("a-table"),T=G("loading");return b(),L("div",Z,[e(r,{class:"head"},{default:t(()=>[e(m,{type:"primary",onClick:_[0]||(_[0]=f=>x(n)?n.value=!0:n=!0)},{icon:t(()=>[e(v)]),default:t(()=>[ee]),_:1})]),_:1}),h("section",te,[O((b(),k(M,{data:o.value,"row-key":"id",scroll:{x:"100%",y:"100%"},pagination:{"show-page-size":!0}},{columns:t(()=>[e(p,{title:"\u5E8F\u53F7",width:"60"},{cell:t(f=>[B(H(f.rowIndex+1),1)]),_:1}),e(p,{title:"\u89D2\u8272\u540D\u79F0","data-index":"name"}),e(p,{title:"\u89D2\u8272\u7F16\u53F7","data-index":"roleCode"}),e(p,{title:"\u89D2\u8272\u63CF\u8FF0","data-index":"description"}),e(p,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"}),e(p,{title:"\u64CD\u4F5C",width:"220"},{cell:t(({record:f})=>[e(U,null,{default:t(()=>[e(R,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?",onOk:g},{default:t(()=>[e(m,{type:"primary",status:"danger"},{icon:t(()=>[e(A)]),_:1})]),_:1}),e(m,{type:"primary"},{icon:t(()=>[e(S)]),_:1}),e(m,{type:"primary",status:"success"},{icon:t(()=>[e(I)]),default:t(()=>[ae]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[T,i(a)]])]),e(X,{modelValue:i(n),"onUpdate:modelValue":_[1]||(_[1]=f=>x(n)?n.value=f:n=f)},null,8,["modelValue"])])}}});var re=q(oe,[["__scopeId","data-v-278f19d6"]]);export{re as default};
