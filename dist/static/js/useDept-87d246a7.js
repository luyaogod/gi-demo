import{g as a}from"./index-a4638611.js";import{g as t}from"./index-cbdc0464.js";function l(l){const i=a(!1),n=a([]);return{deptList:n,getDeptList:async()=>{try{i.value=!0;const a=await t();n.value=a.data,(null==l?void 0:l.callback)&&l.callback()}catch(a){}finally{i.value=!1}},loading:i}}export{l as u};