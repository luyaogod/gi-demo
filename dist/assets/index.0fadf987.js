var j=Object.defineProperty,U=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var q=(o,a,u)=>a in o?j(o,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[a]=u,A=(o,a)=>{for(var u in a||(a={}))G.call(a,u)&&q(o,u,a[u]);if(k)for(var u of k(a))O.call(a,u)&&q(o,u,a[u]);return o},g=(o,a)=>U(o,L(a));import{d as y,g as S,r as D,h as n,o as b,c as E,b as e,w as t,_ as C,j as s,p as P,e as H,a as w,t as T,y as v,m as J,R as K,G as V,ex as N}from"./index.27ff5a55.js";import{_ as M}from"./GiSvgIcon.65bc2288.js";const I=o=>(P("data-v-5f13b38b"),o=o(),H(),o),Q={class:"step-1"},W=s("326***228@qq.com"),X=s("768***579@qq.com"),Y=I(()=>w("span",null,"\u5FAE\u4FE1",-1)),Z=I(()=>w("span",null,"\u652F\u4ED8\u5B9D",-1)),ee=s("\uFFE5"),te=s("\u4E0B\u4E00\u6B65"),ue=y({name:"Step1"}),ae=y(g(A({},ue),{emits:["next"],setup(o,{emit:a}){const u=S({payAccount:"",recAccount:"1997***6962@qq.com",payType:1,recName:"Lin",amount:1980}),i={payAccount:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],recAccount:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u6237"}],recName:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],amount:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"}]},d=D(),f=()=>{T(async()=>{await d.value.validate()||a("next",u)})};return(c,l)=>{const r=n("a-option"),m=n("a-select"),_=n("a-form-item"),F=M,x=n("a-input"),$=n("a-input-group"),B=n("a-button"),h=n("a-form");return b(),E("div",Q,[e(h,{ref_key:"formRef",ref:d,model:u,size:"medium","auto-label-width":""},{default:t(()=>[e(_,{field:"payAccount",label:"\u4ED8\u6B3E\u8D26\u6237",rules:i.payAccount},{default:t(()=>[e(m,{modelValue:u.payAccount,"onUpdate:modelValue":l[0]||(l[0]=p=>u.payAccount=p),placeholder:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"},{default:t(()=>[e(r,{value:"326***228@qq.com"},{default:t(()=>[W]),_:1}),e(r,{value:"768***579@qq.com"},{default:t(()=>[X]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(_,{field:"recAccount",label:"\u6536\u6B3E\u8D26\u6237",rules:i.recAccount},{default:t(()=>[e($,{style:{width:"100%"}},{default:t(()=>[e(m,{modelValue:u.payType,"onUpdate:modelValue":l[1]||(l[1]=p=>u.payType=p),style:{width:"150px"}},{default:t(()=>[e(r,{value:1},{icon:t(()=>[e(F,{name:"wechat"})]),default:t(()=>[Y]),_:1}),e(r,{value:2},{icon:t(()=>[e(F,{name:"alipay"})]),default:t(()=>[Z]),_:1})]),_:1},8,["modelValue"]),e(x,{modelValue:u.recAccount,"onUpdate:modelValue":l[2]||(l[2]=p=>u.recAccount=p),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u6237"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules"]),e(_,{field:"recName",label:"\u6536\u6B3E\u4EBA\u59D3\u540D",rules:i.recName},{default:t(()=>[e(x,{modelValue:u.recName,"onUpdate:modelValue":l[3]||(l[3]=p=>u.recName=p),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1},8,["rules"]),e(_,{field:"amount",label:"\u8F6C\u8D26\u91D1\u989D",rules:i.amount},{default:t(()=>[e(x,{modelValue:u.amount,"onUpdate:modelValue":l[4]||(l[4]=p=>u.amount=p),placeholder:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{prefix:t(()=>[ee]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(_,null,{default:t(()=>[e(B,{type:"primary",onClick:f},{default:t(()=>[te]),_:1})]),_:1})]),_:1},8,["model"])])}}}));var oe=C(ae,[["__scopeId","data-v-5f13b38b"]]);const ne={class:"step-2"},se=s("\u63D0\u4EA4"),le=s("\u4E0A\u4E00\u6B65"),ce=y({name:"Step2"}),re=y(g(A({},ce),{props:{form:{type:Object,default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:0})}},emits:["next","prev"],setup(o,{emit:a}){const u=S({password:"123456"}),i={password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},d=D(!1),f=D(),c=()=>{T(async()=>{try{d.value=!0,await f.value.validate()?d.value=!1:setTimeout(()=>{a("next"),d.value=!1},1e3)}catch(r){return r}})},l=()=>{a("prev")};return(r,m)=>{const _=n("a-descriptions-item"),F=n("a-descriptions"),x=n("a-divider"),$=n("a-input-password"),B=n("a-form-item"),h=n("a-button"),p=n("a-space"),z=n("a-form");return b(),E("div",ne,[e(F,{column:1,size:"medium"},{default:t(()=>[e(_,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:t(()=>[s(v(o.form.payAccount),1)]),_:1}),e(_,{label:"\u6536\u6B3E\u8D26\u6237"},{default:t(()=>[s(v(o.form.recAccount),1)]),_:1}),e(_,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:t(()=>[s(v(o.form.recName),1)]),_:1}),e(_,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:t(()=>[s(v(o.form.amount),1)]),_:1})]),_:1}),e(x,{style:{"border-bottom-style":"dashed"}}),e(z,{ref_key:"formRef",ref:f,size:"medium",model:u,"auto-label-width":""},{default:t(()=>[e(B,{field:"password",label:"\u652F\u4ED8\u5BC6\u7801",rules:i.password},{default:t(()=>[e($,{modelValue:u.password,"onUpdate:modelValue":m[0]||(m[0]=R=>u.password=R),placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801"},null,8,["modelValue"])]),_:1},8,["rules"]),e(B,null,{default:t(()=>[e(p,null,{default:t(()=>[e(h,{type:"primary",loading:d.value,onClick:c},{default:t(()=>[se]),_:1},8,["loading"]),e(h,{onClick:l},{default:t(()=>[le]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])}}}));var _e=C(re,[["__scopeId","data-v-4e01f2c1"]]);const ie={class:"step-3"},de=s("\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26"),pe={class:"info-box"},me=s("\uFFE5"),fe=s("\u5143"),ve=s("\u518D\u8F6C\u4E00\u7B14"),ye=s("\u67E5\u770B\u8D26\u5355"),Fe=y({name:"Step3"}),De=y(g(A({},Fe),{props:{form:{type:Object,default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:0})}},emits:["again"],setup(o,{emit:a}){const u=()=>{a("again")};return(i,d)=>{const f=n("a-result"),c=n("a-descriptions-item"),l=n("a-statistic"),r=n("a-descriptions"),m=n("a-button"),_=n("a-space"),F=n("a-row");return b(),E("div",ie,[e(f,{status:"success",title:"\u64CD\u4F5C\u6210\u529F"},{subtitle:t(()=>[de]),_:1}),w("section",pe,[e(r,{size:"medium",column:1},{default:t(()=>[e(c,{label:"\u4ED8\u6B3E\u8D26\u6237\uFF1A"},{default:t(()=>[s(v(o.form.payAccount),1)]),_:1}),e(c,{label:"\u6536\u6B3E\u8D26\u6237\uFF1A"},{default:t(()=>[s(v(o.form.recAccount),1)]),_:1}),e(c,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D\uFF1A"},{default:t(()=>[s(v(o.form.recName),1)]),_:1}),e(c,{label:"\u8F6C\u8D26\u91D1\u989D\uFF1A"},{default:t(()=>[e(l,{value:o.form.amount,precision:2,"value-from":0,animation:"","animation-duration":600},{prefix:t(()=>[me]),suffix:t(()=>[fe]),_:1},8,["value"])]),_:1})]),_:1})]),e(F,{justify:"center"},{default:t(()=>[e(_,null,{default:t(()=>[e(m,{type:"primary",size:"medium",onClick:u},{default:t(()=>[ve]),_:1}),e(m,{size:"medium"},{default:t(()=>[ye]),_:1})]),_:1})]),_:1})])}}}));var xe=C(De,[["__scopeId","data-v-34a66dd4"]]);const be={class:"step-form"},Ee={class:"form-box"},Be=s("\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"),he=s("\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"),Ae=s("\u5B8C\u6210\u8F6C\u8D26"),ge=y({__name:"index",setup(o){const a=D(1),u=D({payAccount:"",recAccount:"",payType:1,recName:"",amount:0}),i=D("to-right"),d=c=>{a.value++,c&&(u.value=c)},f=()=>{a.value--};return J(()=>a.value,(c,l)=>{c>l||c===1&&l===3?i.value="to-right":i.value="to-left"}),(c,l)=>{const r=n("a-step"),m=n("a-steps");return b(),E("div",be,[w("section",Ee,[e(m,{current:a.value},{default:t(()=>[e(r,{description:"\u786E\u4FDD\u586B\u5199\u6B63\u786E"},{default:t(()=>[Be]),_:1}),e(r,{description:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"},{default:t(()=>[he]),_:1}),e(r,{description:"\u606D\u559C\u60A8\uFF0C\u8F6C\u8D26\u6210\u529F"},{default:t(()=>[Ae]),_:1})]),_:1},8,["current"]),(b(),E("div",{key:a.value,class:K(i.value)},[V(e(oe,{onNext:d},null,512),[[N,a.value===1]]),V(e(_e,{form:u.value,onNext:d,onPrev:f},null,8,["form"]),[[N,a.value===2]]),V(e(xe,{form:u.value,onAgain:l[0]||(l[0]=_=>a.value=1)},null,8,["form"]),[[N,a.value===3]])],2))])])}}});var Ve=C(ge,[["__scopeId","data-v-4a1b2292"]]);export{Ve as default};