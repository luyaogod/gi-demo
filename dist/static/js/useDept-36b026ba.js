import{g as a}from"./index-06cb2dae.js";import{g as t}from"./index-18740acb.js";function l(l){const i=a(!1),n=a([]);return{deptList:n,getDeptList:async()=>{try{i.value=!0;const a=await t();n.value=a.data,(null==l?void 0:l.callback)&&l.callback()}catch(a){}finally{i.value=!1}},loading:i}}export{l as u};
