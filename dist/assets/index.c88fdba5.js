var xe=Object.defineProperty,$e=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var ae=(e,t,o)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,P=(e,t)=>{for(var o in t||(t={}))Fe.call(t,o)&&ae(e,o,t[o]);if(se)for(var o of se(t))Ae.call(t,o)&&ae(e,o,t[o]);return e},V=(e,t)=>$e(e,we(t));import{f as M,i as re,s as N,j as le,d as b,g as u,o as h,k as p,w as l,b as s,h as x,t as H,c as w,l as F,F as A,_ as B,u as K,m as W,n as Ee,q as f,v as ce,x as U,y as T,z as He,A as Be,B as ze,C as X,D as De,p as ue,e as de,a as k,E as Te,G as Le,H as he,T as Ie,K as Me,I as Ne,J as Re,L as je}from"./index.0b6ee4a9.js";import{_ as Oe}from"./logo.f6fa5301.js";import{_ as Pe}from"./avatar.d240db71.js";function Ve(){const e=M(!1),t=()=>{e.value=N.isFullscreen},o=()=>{N.toggle()};return re(()=>{N.on("change",t)}),le(()=>{N.off("change",t)}),{isFullScreen:e,onToggleFullScreen:o}}const Ge=b({name:"MenuItem"}),Ke=b(V(P({},Ge),{props:{data:{type:Object,default:()=>{}}},emits:["click"],setup(e,{emit:t}){const o=n=>{t("click",n)};return(n,a)=>{const i=u("GiSvgIcon"),r=u("MenuItem",!0),c=u("a-sub-menu"),d=u("icon-unordered-list"),_=u("a-menu-item");return e.data.children&&e.data.children.length?(h(),p(c,{key:e.data.path},{icon:l(()=>[s(i,{size:24,name:e.data.icon},null,8,["name"])]),title:l(()=>[x(H(e.data.name),1)]),default:l(()=>[(h(!0),w(A,null,F(e.data.children,m=>(h(),p(r,{key:m.id,data:m,onClick:o},null,8,["data"]))),128))]),_:1})):(h(),p(_,{key:e.data.path,onClick:a[0]||(a[0]=m=>o(e.data))},{icon:l(()=>[e.data.icon?(h(),p(i,{key:0,size:24,name:e.data.icon},null,8,["name"])):(h(),p(d,{key:1,size:20}))]),default:l(()=>[x(" "+H(e.data.name),1)]),_:1}))}}}));const We=b({__name:"Aside",setup(e){const t=K(),o=W(),n=Ee(),a=i=>{i.path&&(o.setActivePath(i.path),t.push({path:i.path}))};return(i,r)=>{const c=u("a-menu"),d=u("a-layout-sider");return h(),p(d,{collapsible:"",breakpoint:"xl",class:"aside"},{default:l(()=>[s(c,{"selected-keys":[f(o).activePath],"default-open-keys":["/"],style:{width:"100%",height:"100%"}},{default:l(()=>[(h(!0),w(A,null,F(f(n).list,_=>(h(),p(Ke,{key:_.id,data:_,onClick:a},null,8,["data"]))),128))]),_:1},8,["selected-keys"])]),_:1})}}});var Ue=B(We,[["__scopeId","data-v-79c32c83"]]);/*!
  * vue-color-kit v1.0.4
  * (c) 2021 
  * @license MIT
  */function E(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Ye(e):/rgb/.test(e)?t=ie(e):typeof e=="string"?t=ie(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:o,g:n,b:a,a:i}=t,{h:r,s:c,v:d}=qe(t);return{r:o,g:n,b:a,a:i===void 0?1:i,h:r,s:c,v:d}}function Y(e){const t=document.createElement("canvas"),o=t.getContext("2d"),n=e*2;return t.width=n,t.height=n,o.fillStyle="#ffffff",o.fillRect(0,0,n,n),o.fillStyle="#ccd5db",o.fillRect(0,0,e,e),o.fillRect(e,e,e,e),t}function G(e,t,o,n,a,i){const r=e==="l",c=t.createLinearGradient(0,0,r?o:0,r?0:n);c.addColorStop(.01,a),c.addColorStop(.99,i),t.fillStyle=c,t.fillRect(0,0,o,n)}function Xe({r:e,g:t,b:o},n){const a=r=>("0"+Number(r).toString(16)).slice(-2),i=`#${a(e)}${a(t)}${a(o)}`;return n?i.toUpperCase():i}function Ye(e){e=e.slice(1);const t=o=>parseInt(o,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function ie(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function qe({r:e,g:t,b:o}){e=e/255,t=t/255,o=o/255;const n=Math.max(e,t,o),a=Math.min(e,t,o),i=n-a;let r=0;n===a?r=0:n===e?t>=o?r=60*(t-o)/i:r=60*(t-o)/i+360:n===t?r=60*(o-e)/i+120:n===o&&(r=60*(e-t)/i+240),r=Math.floor(r);let c=parseFloat((n===0?0:1-a/n).toFixed(2)),d=parseFloat(n.toFixed(2));return{h:r,s:c,v:d}}var q=b({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,t=this.size,o=e.getContext("2d");e.width=t,e.height=t,o.fillStyle=this.color,o.fillRect(0,0,t,t),G("l",o,t,t,"#FFFFFF","rgba(255,255,255,0)"),G("p",o,t,t,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:t,left:o}=this.$el.getBoundingClientRect(),n=e.target.getContext("2d"),a=r=>{let c=r.clientX-o,d=r.clientY-t;c<0&&(c=0),d<0&&(d=0),c>this.size&&(c=this.size),d>this.size&&(d=this.size),this.slideSaturationStyle={left:c-5+"px",top:d-5+"px"};const _=n.getImageData(Math.min(c,this.size-1),Math.min(d,this.size-1),1,1),[m,y,g]=_.data;this.$emit("selectSaturation",{r:m,g:y,b:g})};a(e);const i=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",i)}}});const Je={ref:"canvasSaturation"};function Ze(e,t,o,n,a,i){return h(),p("div",{class:"saturation",onMousedown:t[1]||(t[1]=U((...r)=>e.selectSaturation&&e.selectSaturation(...r),["prevent","stop"]))},[s("canvas",Je,null,512),s("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}q.render=Ze;q.__file="src/color/Saturation.vue";var J=b({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,t=this.width,o=this.height,n=e.getContext("2d");e.width=t,e.height=o;const a=n.createLinearGradient(0,0,0,o);a.addColorStop(0,"#FF0000"),a.addColorStop(.17*1,"#FF00FF"),a.addColorStop(.17*2,"#0000FF"),a.addColorStop(.17*3,"#00FFFF"),a.addColorStop(.17*4,"#00FF00"),a.addColorStop(.17*5,"#FFFF00"),a.addColorStop(1,"#FF0000"),n.fillStyle=a,n.fillRect(0,0,t,o)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:t}=this.$el.getBoundingClientRect(),o=e.target.getContext("2d"),n=i=>{let r=i.clientY-t;r<0&&(r=0),r>this.height&&(r=this.height),this.slideHueStyle={top:r-2+"px"};const c=o.getImageData(0,Math.min(r,this.height-1),1,1),[d,_,m]=c.data;this.$emit("selectHue",{r:d,g:_,b:m})};n(e);const a=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)}}});const Qe={ref:"canvasHue"};function et(e,t,o,n,a,i){return h(),p("div",{class:"hue",onMousedown:t[1]||(t[1]=U((...r)=>e.selectHue&&e.selectHue(...r),["prevent","stop"]))},[s("canvas",Qe,null,512),s("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}J.render=et;J.__file="src/color/Hue.vue";var Z=b({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,t=this.width,o=this.height,n=this.alphaSize,a=Y(n),i=e.getContext("2d");e.width=t,e.height=o,i.fillStyle=i.createPattern(a,"repeat"),i.fillRect(0,0,t,o),G("p",i,t,o,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:t}=this.$el.getBoundingClientRect(),o=a=>{let i=a.clientY-t;i<0&&(i=0),i>this.height&&(i=this.height);let r=parseFloat((i/this.height).toFixed(2));this.$emit("selectAlpha",r)};o(e);const n=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",n)}}});const tt={ref:"canvasAlpha"};function ot(e,t,o,n,a,i){return h(),p("div",{class:"color-alpha",onMousedown:t[1]||(t[1]=U((...r)=>e.selectAlpha&&e.selectAlpha(...r),["prevent","stop"]))},[s("canvas",tt,null,512),s("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}Z.render=ot;Z.__file="src/color/Alpha.vue";var Q=b({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,t=this.width,o=this.height,n=this.alphaSize,a=Y(n),i=e.getContext("2d");e.width=t,e.height=o,i.fillStyle=i.createPattern(a,"repeat"),i.fillRect(0,0,t,o),i.fillStyle=this.color,i.fillRect(0,0,t,o)}}});function nt(e,t,o,n,a,i){return h(),p("canvas")}Q.render=nt;Q.__file="src/color/Preview.vue";var ee=b({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:o}=e,{top:n,left:a,width:i,height:r}=this.suckerCanvas.getBoundingClientRect(),c=t-a,d=o-n,m=this.suckerCanvas.getContext("2d").getImageData(Math.min(c,i-1),Math.min(d,r-1),1,1);let[y,g,$,C]=m.data;C=parseFloat((C/255).toFixed(2));const S=this.suckerPreview.style;Object.assign(S,{position:"absolute",left:t+20+"px",top:o-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${y}, ${g}, ${$}, ${C})`,zIndex:95}),this.suckerArea.length&&t>=this.suckerArea[0]&&o>=this.suckerArea[1]&&t<=this.suckerArea[2]&&o<=this.suckerArea[3]?S.display="":S.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:o,clientY:n}=t,{top:a,left:i,width:r,height:c}=e.getBoundingClientRect(),d=o-i,_=n-a,y=e.getContext("2d").getImageData(Math.min(d,r-1),Math.min(_,c-1),1,1);let[g,$,C,S]=y.data;S=parseFloat((S/255).toFixed(2)),this.$emit("selectSucker",{r:g,g:$,b:C,a:S})}))}}});const st=s("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),at={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},it=s("g",{fill:"none","fill-rule":"evenodd"},[s("g",{transform:"translate(1 1)","stroke-width":"4"},[s("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),s("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function rt(e,t,o,n,a,i){return h(),p("div",null,[e.isSucking?T("v-if",!0):(h(),p("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:t[1]||(t[1]=(...r)=>e.openSucker&&e.openSucker(...r))},[st],2)),e.isSucking?(h(),p("svg",at,[it])):T("v-if",!0)])}ee.render=rt;ee.__file="src/color/Sucker.vue";var te=b({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor"],setup(e,{emit:t}){return{modelColor:ce({get(){return e.color||""},set(n){t("inputColor",n)}})}}});const lt={class:"color-type"},ct={class:"name"};function ut(e,t,o,n,a,i){return h(),p("div",lt,[s("span",ct,H(e.name),1),He(s("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>e.modelColor=r),class:"value"},null,512),[[Be,e.modelColor]])])}te.render=ut;te.__file="src/color/Box.vue";var oe=b({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:t}){const o=M(),n=M([]),a=M();e.colorsHistoryKey&&localStorage&&(n.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),a.value=Y(4).toDataURL(),le(()=>{i(o.value)});function i(c){if(!c)return;const d=n.value||[],_=d.indexOf(c);_>=0&&d.splice(_,1),d.length>=8&&(d.length=7),d.unshift(c),n.value=d||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(d))}function r(c){t("selectColor",c)}return{setColorsHistory:i,colorsHistory:n,color:o,imgAlphaBase64:a,selectColor:r}}});const dt={class:"colors"},ht={key:0,class:"colors history"};function pt(e,t,o,n,a,i){return h(),p("div",null,[s("ul",dt,[(h(!0),p(A,null,F(e.colorsDefault,r=>(h(),p("li",{key:r,class:"item",onClick:c=>e.selectColor(r)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:r},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(h(),p("ul",ht,[(h(!0),p(A,null,F(e.colorsHistory,r=>(h(),p("li",{key:r,class:"item",onClick:c=>e.selectColor(r)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:r},class:"color"},null,4)],8,["onClick"]))),128))])):T("v-if",!0)])}oe.render=pt;oe.__file="src/color/Colors.vue";var D=b({components:{Saturation:q,Hue:J,Alpha:Z,Preview:Q,Sucker:ee,Box:te,Colors:oe},emits:["changeColor","openSucker"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return Xe(this.rgba,!0)}},created(){Object.assign(this,E(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:t,g:o,b:n,h:a,s:i,v:r}=E(e);Object.assign(this,{r:t,g:o,b:n,h:a,s:i,v:r}),this.setText()},selectHue(e){const{r:t,g:o,b:n,h:a,s:i,v:r}=E(e);Object.assign(this,{r:t,g:o,b:n,h:a,s:i,v:r}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:t,g:o,b:n,a,h:i,s:r,v:c}=E(e);Object.assign(this,{r:t,g:o,b:n,a,h:i,s:r,v:c}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:t,g:o,b:n,a,h:i,s:r,v:c}=E(e);Object.assign(this,{r:t,g:o,b:n,a,h:i,s:r,v:c}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:t,g:o,b:n,a,h:i,s:r,v:c}=E(e);Object.assign(this,{r:t,g:o,b:n,a,h:i,s:r,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:t,g:o,b:n,a,h:i,s:r,v:c}=E(e);Object.assign(this,{r:t,g:o,b:n,a,h:i,s:r,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const mt={class:"color-set"};function ft(e,t,o,n,a,i){const r=u("Saturation"),c=u("Hue"),d=u("Alpha"),_=u("Preview"),m=u("Sucker"),y=u("Box"),g=u("Colors");return h(),p("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[s("div",mt,[s(r,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),s(c,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),s(d,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),s("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[s(_,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?T("v-if",!0):(h(),p(m,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),s(y,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),s(y,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),s(g,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),T(" custom options "),ze(e.$slots,"default")],6)}D.render=ft;D.__file="src/color/ColorPicker.vue";D.install=e=>{e.component(D.name,D)};const L=e=>(ue("data-v-d0edb1c8"),e=e(),de(),e),_t=x("\u9879\u76EE\u914D\u7F6E"),vt=L(()=>k("span",{class:"title"},"\u7CFB\u7EDF\u4E3B\u9898",-1)),gt=L(()=>k("span",{class:"title"},"\u754C\u9762\u663E\u793A",-1)),bt=L(()=>k("span",{class:"label"},"\u9875\u7B7E\u663E\u793A",-1)),yt=L(()=>k("span",{class:"label"},"\u9875\u7B7E\u98CE\u683C",-1)),kt=L(()=>k("span",{class:"label"},"\u52A8\u753B\u663E\u793A",-1)),St=L(()=>k("span",{class:"label"},"\u52A8\u753B\u5207\u6362\u7C7B\u578B",-1)),Ct=b({__name:"SettingDrawer",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,n=X(),a=["#1890ff","#409EFF","#2d8cf0","#007AFF","#5ac8fa","#5856D6","#536dfe","#9c27b0","#AF52DE","#0096c7","#00C1D4","#34C759","#43a047","#7cb342","#c0ca33","#78DEC7","#e53935","#d81b60","#f4511e","#fb8c00","#ffb300","#fdd835","#6d4c41","#546e7a"],i=ce({get:()=>o.modelValue,set:c=>{t("update:modelValue",c)}});n.themeColor&&n.changeThemeColor(n.themeColor);const r=c=>{!/^#[0-9A-Za-z]{6}/.test(c.hex)||(console.log(c),n.setThemeColor(c.hex),n.changeThemeColor(n.themeColor))};return(c,d)=>{const _=u("a-divider"),m=u("a-row"),y=u("a-switch"),g=u("a-option"),$=u("a-select"),C=u("a-space"),S=u("a-drawer");return h(),p(S,{visible:f(i),"onUpdate:visible":d[2]||(d[2]=v=>De(i)?i.value=v:null),width:"300px","unmount-on-close":"",footer:!1},{title:l(()=>[_t]),default:l(()=>[s(C,{size:15,direction:"vertical",fill:""},{default:l(()=>[s(_,{orientation:"center"},{default:l(()=>[vt]),_:1}),s(m,{justify:"center"},{default:l(()=>[s(f(D),{theme:"dark",color:f(n).themeColor,"sucker-hide":!0,"colors-default":a,onChangeColor:r},null,8,["color"])]),_:1}),s(_,{orientation:"center"},{default:l(()=>[gt]),_:1}),s(m,{justify:"space-between",align:"middle"},{default:l(()=>[bt,s(y,{size:"medium","model-value":f(n).tab.visible,onChange:d[0]||(d[0]=v=>f(n).setTabVisible(v))},null,8,["model-value"])]),_:1}),s(m,{justify:"space-between",align:"middle"},{default:l(()=>[yt,s($,{placeholder:"\u8BF7\u9009\u62E9","model-value":f(n).tab.mode,disabled:!f(n).tab.visible,style:{width:"120px"},"trigger-props":{autoFitPopupMinWidth:!0}},{default:l(()=>[(h(!0),w(A,null,F(f(n).tab.modeList,v=>(h(),p(g,{key:v.value,value:v.value,onClick:I=>f(n).setTabMode(v.value)},{default:l(()=>[x(H(v.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1}),s(m,{justify:"space-between",align:"middle"},{default:l(()=>[kt,s(y,{size:"medium","model-value":f(n).animate.visible,onChange:d[1]||(d[1]=v=>f(n).setAnimateVisible(v))},null,8,["model-value"])]),_:1}),s(m,{justify:"space-between",align:"middle"},{default:l(()=>[St,s($,{placeholder:"\u8BF7\u9009\u62E9","model-value":f(n).animate.mode,disabled:!f(n).animate.visible,style:{width:"120px"}},{default:l(()=>[(h(!0),w(A,null,F(f(n).animate.modeList,v=>(h(),p(g,{key:v.value,value:v.value,onClick:I=>f(n).setAnimateMode(v.value)},{default:l(()=>[x(H(v.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});var xt=B(Ct,[["__scopeId","data-v-d0edb1c8"]]);const $t={class:"message"},wt=x("\u901A\u77E5(1)"),Ft=x("\u5173\u6CE8(1)"),At=x("\u5F85\u529E(2)"),Et=["src"],Ht=b({name:"Message"}),Bt=b(V(P({},Ht),{setup(e){const t=[{name:"Socrates",datetime:"1\u5C0F\u65F6\u4E4B\u524D",content:"Comment body content.",avatar:"https://lolicode.gitee.io/scui-doc/demo/img/avatar2.gif"},{name:"\u6728\u6728\u7CD6\u9187",datetime:"2\u5C0F\u65F6\u4E4B\u524D",content:"\u5173\u6CE8\u4E86\u4F60",avatar:"https://s1.ax1x.com/2022/06/14/XhteeO.jpg"},{name:"\u5F90\u6B23",datetime:"2\u4E2A\u534A\u5C0F\u65F6\u4E4B\u524D",content:"\u6536\u85CF\u4E86\u4F60\u7684\u6587\u7AE0",avatar:"https://s1.ax1x.com/2022/06/14/XhtSwF.jpg"}];return(o,n)=>{const a=u("a-tab-pane"),i=u("a-tabs"),r=u("a-avatar"),c=u("a-comment");return h(),w("div",$t,[s(i,{"default-active-key":"1"},{default:l(()=>[s(a,{key:"1"},{title:l(()=>[wt]),_:1}),s(a,{key:"2"},{title:l(()=>[Ft]),_:1}),s(a,{key:"3"},{title:l(()=>[At]),_:1})]),_:1}),k("section",null,[(h(),w(A,null,F(t,(d,_)=>s(c,{key:_,author:d.name,content:d.content,datetime:d.datetime},{actions:l(()=>[]),avatar:l(()=>[s(r,null,{default:l(()=>[k("img",{src:d.avatar},null,8,Et)]),_:2},1024)]),_:2},1032,["author","content","datetime"])),64))])])}}}));var zt=B(Bt,[["__scopeId","data-v-540b1f3c"]]);const pe=e=>(ue("data-v-f596fd08"),e=e(),de(),e),Dt=pe(()=>k("img",{src:Oe},null,-1)),Tt={class:"gi_hover system-name"},Lt=pe(()=>k("img",{src:Pe},null,-1)),It={class:"doption-icon",style:{background:"rgba(var(--primary-6))"}},Mt=x("\u4E2A\u4EBA\u4E2D\u5FC3"),Nt={class:"doption-icon",style:{background:"rgba(var(--success-6))"}},Rt=x("\u9879\u76EE\u5730\u5740"),jt={class:"doption-icon",style:{background:"rgba(var(--warning-6))"}},Ot=x("\u9000\u51FA\u767B\u5F55"),Pt=b({__name:"Header",setup(e){const t=K(),o=W(),n=Te(),{isFullScreen:a,onToggleFullScreen:i}=Ve(),r=M(!1),c=()=>{t.push("/")},d=()=>{t.push("/system-manage/user-center")},_=()=>{Le.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{t.replace("/login")}})},m=()=>{window.open("https://gitee.com/lin0716/gi-demo")};return(y,g)=>{const $=u("icon-settings"),C=u("a-button"),S=u("a-tooltip"),v=u("icon-notification"),I=u("a-badge"),R=u("a-popover"),j=u("icon-fullscreen"),z=u("icon-fullscreen-exit"),me=u("GiThemeBtn"),fe=u("a-avatar"),_e=u("icon-down"),ve=u("icon-user"),O=u("a-doption"),ge=u("icon-github"),be=u("a-divider"),ye=u("icon-export"),ke=u("a-dropdown"),Se=u("a-space"),Ce=u("a-layout-header");return h(),p(Ce,null,{default:l(()=>[k("section",{class:"system-logo",onClick:c},[Dt,k("span",Tt,H(f(o).systemName),1)]),s(Se,{class:"system-head",size:"medium"},{default:l(()=>[s(S,{content:"\u9879\u76EE\u914D\u7F6E",position:"bl"},{default:l(()=>[s(C,{size:"mini",class:"gi_hover_btn",onClick:g[0]||(g[0]=ne=>r.value=!r.value)},{icon:l(()=>[s($,{size:18})]),_:1})]),_:1}),s(R,{position:"br",trigger:"click"},{content:l(()=>[s(zt)]),default:l(()=>[s(I,{count:9,dot:""},{default:l(()=>[s(C,{size:"mini",class:"gi_hover_btn"},{icon:l(()=>[s(v,{size:18})]),_:1})]),_:1})]),_:1}),s(S,{content:"\u5168\u5C4F\u5207\u6362",position:"bottom"},{default:l(()=>[s(C,{size:"mini",class:"gi_hover_btn",onClick:f(i)},{icon:l(()=>[f(a)?(h(),p(z,{key:1,size:18})):(h(),p(j,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),s(S,{content:"\u4E3B\u9898\u5207\u6362",position:"bottom"},{default:l(()=>[s(me)]),_:1}),s(fe,{size:32},{default:l(()=>[Lt]),_:1}),s(ke,{trigger:"hover"},{content:l(()=>[s(O,{onClick:d},{icon:l(()=>[k("span",It,[s(ve)])]),default:l(()=>[Mt]),_:1}),s(O,{onClick:m},{icon:l(()=>[k("span",Nt,[s(ge)])]),default:l(()=>[Rt]),_:1}),s(be,{style:{margin:"0"}}),s(O,{onClick:_},{icon:l(()=>[k("span",jt,[s(ye)])]),default:l(()=>[Ot]),_:1})]),default:l(()=>[s(C,{type:"text",size:"medium",class:"username"},{default:l(()=>[k("span",null,H(f(n).userName),1),s(_e)]),_:1})]),_:1})]),_:1}),s(xt,{modelValue:r.value,"onUpdate:modelValue":g[1]||(g[1]=ne=>r.value=ne)},null,8,["modelValue"])]),_:1})}}});var Vt=B(Pt,[["__scopeId","data-v-f596fd08"]]);const Gt=b({__name:"Main",setup(e){const t=he(),o=X();return(n,a)=>{const i=u("router-view"),r=u("a-layout");return h(),p(r,{class:"main"},{default:l(()=>[s(i,null,{default:l(({Component:c,route:d})=>[s(Ie,{name:f(o).transitionName,mode:"out-in",appear:""},{default:l(()=>[(h(),p(Me,{include:f(t).cacheList},[(h(),p(Ne(c),{key:d.path}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})]),_:1})}}});var Kt=B(Gt,[["__scopeId","data-v-1e675132"]]);const Wt={key:0,class:"nav-tab"},Ut=x("\u5173\u95ED\u5F53\u524D\u9875\u7B7E"),Xt=x("\u5173\u95ED\u6240\u6709\u9875\u7B7E"),Yt=b({__name:"NavTab",setup(e){const t=Re(),o=K(),n=W(),a=he(),i=X();re(()=>{r()}),je(()=>t.path,()=>{r()});const r=()=>{a.addTabItem({name:t.meta.title||"\u672A\u547D\u540D",path:t.path,componentName:t.name}),t.meta.keepAlive&&a.addCacheItem(t.name)},c=m=>{console.log("\u70B9\u51FB\u524D",a.cacheList,m),o.push({path:m}),n.setActivePath(m)},d=m=>{const y=a.tabList.find(g=>g.path===m);a.removeTabItem(m),a.removeCacheItem(y.componentName)},_=()=>{a.clearTabList()};return(m,y)=>{const g=u("a-tab-pane"),$=u("icon-settings"),C=u("a-button"),S=u("icon-minus-circle-fill"),v=u("a-doption"),I=u("icon-close-circle-fill"),R=u("a-dropdown"),j=u("a-tabs");return f(i).tab.visible?(h(),w("div",Wt,[s(j,{editable:"","hide-content":"",size:"medium",type:f(i).tab.mode,"active-key":f(t).path,onTabClick:c,onDelete:d},{extra:l(()=>[s(R,{trigger:"hover"},{content:l(()=>[s(v,{onClick:y[0]||(y[0]=z=>d(f(t).path))},{icon:l(()=>[s(S,{size:20,style:{color:"#ff7d00"}})]),default:l(()=>[Ut]),_:1}),s(v,{onClick:_},{icon:l(()=>[s(I,{size:20,style:{color:"#f53f3f"}})]),default:l(()=>[Xt]),_:1})]),default:l(()=>[s(C,{type:"primary",class:"extra-btn"},{icon:l(()=>[s($,{size:18})]),_:1})]),_:1})]),default:l(()=>[(h(!0),w(A,null,F(f(a).tabList,z=>(h(),p(g,{key:z.path,title:z.name,closable:z.path!=="/home"},null,8,["title","closable"]))),128))]),_:1},8,["type","active-key"])])):T("",!0)}}});var qt=B(Yt,[["__scopeId","data-v-927f6eea"]]);const Jt=b({__name:"index",setup(e){return(t,o)=>{const n=u("a-layout");return h(),p(n,{class:"layout"},{default:l(()=>[s(Ue),s(n,null,{default:l(()=>[s(Vt),s(qt),s(Kt)]),_:1})]),_:1})}}});var oo=B(Jt,[["__scopeId","data-v-2d039723"]]);export{oo as default};