import t from"./FileImg-78813152.js";import e from"./FileRightMenu-5d66e607.js";import{d as i,N as a,r as o,o as l,c as n,a as s,w as c,h as d,t as r,u as m,_ as p}from"./index-06cb2dae.js";import"./file-map-2a15779f.js";const f={class:"file-list"},u=["onClick"],g={class:"file-image"},h=p(i({__name:"FileList",props:{data:{default:()=>[]},isBatchMode:{type:Boolean,default:!1}},emits:["click","right-menu-click"],setup(i,{emit:p}){const h=i,k=a({type:"checkbox",showCheckedAll:!0}),_=(t,e)=>{p("right-menu-click",t,e)};return(i,a)=>{const w=o("a-trigger"),x=o("a-table-column"),y=o("icon-more"),b=o("a-button"),C=o("a-popover"),v=o("a-table");return l(),n("div",f,[s(v,{"row-key":"id",scroll:{x:"100%",y:"100%",minWidth:600},data:h.data,bordered:!1,pagination:!1,"row-selection":i.isBatchMode?m(k):void 0},{columns:c((()=>[s(x,{title:"名称"},{cell:c((({record:i})=>[s(w,{trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":"","scroll-to-close":""},{content:c((()=>[s(e,{"file-info":i,onClick:t=>_(t,i)},null,8,["file-info","onClick"])])),default:c((()=>[d("div",{class:"file-name",onClick:t=>{p("click",i)}},[d("div",g,[s(t,{data:i},null,8,["data"])]),d("span",null,r(i.name),1)],8,u)])),_:2},1024)])),_:1}),s(x,{title:"扩展名","data-index":"extendName",width:100}),s(x,{title:"更改时间","data-index":"updateTime",width:200}),s(x,{title:"操作",width:120,align:"center"},{cell:c((({record:t})=>[s(C,{trigger:"click",position:"bottom","content-class":"more-option","content-style":{padding:0,"margin-top":0}},{content:c((()=>[s(e,{"file-info":t,"show-class-style":!1,onClick:e=>_(e,t)},null,8,["file-info","onClick"])])),default:c((()=>[s(b,{type:"text"},{default:c((()=>[s(y,{size:16})])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["data","row-selection"])])}}}),[["__scopeId","data-v-66dfcc32"]]);export{h as default};