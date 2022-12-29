import{_ as te}from"./GiSvgIcon-f0d8bb1d.js";import{_ as ae}from"./GiHead-f7ef0233.js";import"./index-03184213.js";import{u as oe}from"./usePagination-97e6fcb8.js";import"./viewer-fd111406.js";import"./index-cab4b3d6.js";import{u as ne,g as se}from"./useApiSystem-a1967ee3.js";import{u as le}from"./useArea-54d40cc1.js";import{f as T,h as u,j as ie,J as ce,r as a,o as s,c as r,w as t,a as e,V as h,u as m,e as f,N as de,ad as _e,b as U,a1 as F,i as A,p as re,d as ue,_ as pe}from"./_plugin-vue_export-helper-916c4ad5.js";import"./GiTitle-09905d62.js";import"./runtime-dom.esm-bundler-fb8da9e1.js";import"./index-47217453.js";import"./vue-router-7a234af7.js";import"./index-faf5766f.js";const me="/gi-demo/assets/avatar-a3ca9f0c.jpg",fe=f("img",{src:me},null,-1),ge=T({__name:"EditUserModal",setup(y,{expose:V}){const{getAreaTreeData:x}=le(),b=u(""),z=ie(()=>b.value?"编辑用户":"新增用户"),d=u(!1),l=ce({userName:"",sex:0,address:""}),C=u([]);return C.value=x(),V({add:()=>{b.value="",d.value=!0},edit:N=>{b.value=N,d.value=!0}}),(N,i)=>{const D=a("a-input"),g=a("a-form-item"),R=a("IconCamera"),P=a("a-avatar"),S=a("a-radio"),v=a("a-radio-group"),o=a("a-cascader"),p=a("a-form"),I=a("a-modal");return s(),r(I,{visible:d.value,"onUpdate:visible":i[3]||(i[3]=c=>d.value=c),title:m(z)},{default:t(()=>[e(p,{ref:"formRef",model:l,size:"medium","auto-label-width":""},{default:t(()=>[e(g,{label:"姓名",field:"userName",rules:[{required:!0,message:"请输入部门名称"},{min:2,max:4,message:"长度在 2 - 4个字符"}],"validate-trigger":["change","input"]},{default:t(()=>[e(D,{placeholder:"请输入用户姓名",modelValue:l.userName,"onUpdate:modelValue":i[0]||(i[0]=c=>l.userName=c)},null,8,["modelValue"])]),_:1}),e(g,{label:"头像",field:"avatar"},{default:t(()=>[e(P,{size:60,"trigger-icon-style":{color:"#3491FA"}},{"trigger-icon":t(()=>[e(R)]),default:t(()=>[fe]),_:1})]),_:1}),e(g,{label:"性别",field:"sex"},{default:t(()=>[e(v,{modelValue:l.sex,"onUpdate:modelValue":i[1]||(i[1]=c=>l.sex=c)},{default:t(()=>[e(S,{value:1},{default:t(()=>[h("男")]),_:1}),e(S,{value:0},{default:t(()=>[h("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"地址",field:"address"},{default:t(()=>[e(o,{modelValue:l.address,"onUpdate:modelValue":i[2]||(i[2]=c=>l.address=c),options:C.value,"field-names":{value:"code",label:"label"},placeholder:"请选择省市区"},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])}}}),H=y=>(re("data-v-871d50d7"),y=y(),ue(),y),ve={class:"user-manage"},he={class:"left"},ye={class:"content"},xe={class:"tree-box"},be={class:"right"},ke=H(()=>f("span",null,"新增用户",-1)),we=H(()=>f("span",null,"搜索",-1)),Ve={class:"table-box"},ze={key:0},Ce={key:1},Ne=T({name:"UserManage"}),Se=T({...Ne,setup(y){const V=u(),x=u(),b=u(!1),z=u(""),d=u(!1),l=u([]),{current:C,pageSize:E,total:M,changeCurrent:N,changePageSize:i,setTotal:D}=oe(()=>{v()}),{deptList:g,getDeptList:R}=ne();de(()=>{var o;(o=V.value)==null||o.expandAll()});const P=()=>{var o;(o=x.value)==null||o.add()},S=o=>{var p;(p=x.value)==null||p.edit(o.id)},v=async()=>{d.value=!0;const o=await se();o.success&&(l.value=o.data.list,D(o.data.total)),d.value=!1};return v(),(o,p)=>{const I=ae,c=a("icon-search"),B=a("a-input"),J=a("IconDown"),k=te,W=a("a-tree"),K=a("icon-plus"),w=a("a-button"),L=a("a-option"),O=a("a-select"),Q=a("a-input-group"),$=a("a-space"),j=a("icon-delete"),X=a("a-row"),_=a("a-table-column"),G=a("a-tag"),Y=a("icon-edit"),Z=a("a-popconfirm"),ee=a("a-table"),q=_e("loading");return s(),U("div",ve,[f("section",he,[e(I,{title:"部门列表"}),f("div",ye,[e(B,{modelValue:z.value,"onUpdate:modelValue":p[0]||(p[0]=n=>z.value=n),placeholder:"请输入搜索关键词","allow-clear":"",style:{"margin-bottom":"10px"}},{prefix:t(()=>[e(c)]),_:1},8,["modelValue"]),F((s(),U("div",xe,[e(W,{ref_key:"treeRef",ref:V,"block-node":"","default-expand-all":"",data:m(g),"field-names":{key:"id",title:"name",children:"children"},onSelect:v},{"switcher-icon":t(()=>[e(J)]),icon:t(({node:n})=>[n.level==1?(s(),r(k,{key:0,name:"com-dept",size:14})):A("",!0),n.level==2?(s(),r(k,{key:1,name:"com-sub-dept",size:12})):A("",!0),n.level==3?(s(),r(k,{key:2,name:"com-group",size:12})):A("",!0)]),_:1},8,["data"])])),[[q,b.value]])])]),f("section",be,[e(I,{title:"用户列表"}),e(X,{justify:"space-between",class:"head"},{default:t(()=>[e($,null,{default:t(()=>[e(w,{type:"primary",onClick:P},{icon:t(()=>[e(K)]),default:t(()=>[ke]),_:1}),e(Q,null,{default:t(()=>[e(O,{placeholder:"部门状态","allow-clear":"",style:{width:"120px"}},{default:t(()=>[e(L,{value:1},{default:t(()=>[h("正常")]),_:1}),e(L,{value:0},{default:t(()=>[h("禁用")]),_:1})]),_:1}),e(B,{placeholder:"请输入关键词...","allow-clear":"",style:{width:"250px"}}),e(w,{type:"primary",onClick:v},{icon:t(()=>[e(c)]),default:t(()=>[we]),_:1})]),_:1})]),_:1}),e(w,{type:"primary",status:"danger"},{icon:t(()=>[e(j)]),_:1})]),_:1}),f("section",Ve,[F((s(),r(ee,{"row-key":"id",data:l.value,scroll:{x:"100%",y:"100%",minWidth:900},pagination:{showPageSize:!0,total:m(M),current:m(C),pageSize:m(E)},onPageChange:m(N),onPageSizeChange:m(i)},{columns:t(()=>[e(_,{title:"用户编号","data-index":"userNo"}),e(_,{title:"用户名","data-index":"userName"}),e(_,{title:"用户昵称","data-index":"nickName"}),e(_,{title:"性别","data-index":"sex"},{cell:t(({record:n})=>[n.sex===1?(s(),U("span",ze,"男")):(s(),U("span",Ce,"女"))]),_:1}),e(_,{title:"头像","data-index":"avatar"},{cell:t(({record:n})=>[n.sex===1?(s(),r(k,{key:0,name:"avatar-man",size:40})):(s(),r(k,{key:1,name:"avatar-woman",size:40}))]),_:1}),e(_,{title:"地址","data-index":"address"}),e(_,{title:"状态",width:100},{cell:t(({record:n})=>[n.status==1?(s(),r(G,{key:0,color:"green"},{default:t(()=>[h("正常")]),_:1})):(s(),r(G,{key:1,color:"red"},{default:t(()=>[h("禁用")]),_:1}))]),_:1}),e(_,{title:"创建时间","data-index":"createTime"}),e(_,{title:"操作",width:100,align:"center"},{cell:t(({record:n})=>[e($,null,{default:t(()=>[e(w,{type:"primary",size:"mini",onClick:Ie=>S(n)},{icon:t(()=>[e(Y)]),_:2},1032,["onClick"]),e(Z,{type:"warning",content:"您确定要删除该项吗?"},{default:t(()=>[e(w,{type:"primary",status:"danger",size:"mini"},{icon:t(()=>[e(j)]),_:1})]),_:1})]),_:2},1024)]),_:1})]),_:1},8,["data","pagination","onPageChange","onPageSizeChange"])),[[q,d.value]])])]),e(ge,{ref_key:"EditUserModalRef",ref:x},null,512)])}}});const Fe=pe(Se,[["__scopeId","data-v-871d50d7"]]);export{Fe as default};