import{u as e}from"./useDept-87d246a7.js";import{d as a,g as l,l as t,N as d,r as o,o as s,e as i,w as n,a as u,u as m,H as r}from"./index-a4638611.js";const p=a({__name:"AddDeptModal",setup(a,{expose:p}){const c=l(""),f=l(!1),V=t((()=>c.value?"编辑部门":"新增部门")),{deptList:h,getDeptList:v}=e();v();const b=d({id:"",parentId:"",name:"",sort:0,description:""}),g={name:[{required:!0,message:"请输入部门名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}]};return p({add:()=>{c.value="",f.value=!0},edit:async e=>{h.value.length||await v(),c.value=e,f.value=!0}}),(e,a)=>{const l=o("a-tree-select"),t=o("a-form-item"),d=o("a-input"),p=o("a-input-number"),c=o("a-textarea"),v=o("a-form"),w=o("a-modal");return s(),i(w,{visible:m(f),"onUpdate:visible":a[4]||(a[4]=e=>r(f)?f.value=e:null),title:m(V),"mask-closable":!1},{default:n((()=>[u(v,{ref:"formRef",model:m(b),rules:g,size:"medium","auto-label-width":""},{default:n((()=>[u(t,{label:"上级部门",name:"parentId"},{default:n((()=>[u(l,{modelValue:m(b).parentId,"onUpdate:modelValue":a[0]||(a[0]=e=>m(b).parentId=e),"allow-clear":"",data:m(h),placeholder:"请选择",fieldNames:{key:"id",title:"name",children:"children"}},null,8,["modelValue","data"])])),_:1}),u(t,{label:"部门名称",field:"name","validate-trigger":["change","input"]},{default:n((()=>[u(d,{modelValue:m(b).name,"onUpdate:modelValue":a[1]||(a[1]=e=>m(b).name=e),placeholder:"请输入部门名称","allow-clear":""},null,8,["modelValue"])])),_:1}),u(t,{label:"排序",field:"sort"},{default:n((()=>[u(p,{modelValue:m(b).sort,"onUpdate:modelValue":a[2]||(a[2]=e=>m(b).sort=e),style:{width:"120px"}},null,8,["modelValue"])])),_:1}),u(t,{label:"描述",field:"description"},{default:n((()=>[u(c,{modelValue:m(b).description,"onUpdate:modelValue":a[3]||(a[3]=e=>m(b).description=e),"max-length":200,placeholder:"请输入描述","auto-size":{minRows:3},"show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{p as _};