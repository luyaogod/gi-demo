import{N as e,q as a}from"./index-2eeb6417.js";function t(t,n={defaultPageSize:10}){const o=e({showPageSize:!0,showTotal:!0,current:1,pageSize:n.defaultPageSize,total:0,onChange:e=>{o.current=e,t&&t()},onPageSizeChange:e=>{o.current=1,o.pageSize=e,t&&t()}}),g=o.onChange,r=o.onPageSizeChange;const{current:i,pageSize:u,total:c}=a(o);return{current:i,pageSize:u,total:c,pagination:o,changeCurrent:g,changePageSize:r,setTotal:function(e){o.total=e}}}export{t as u};