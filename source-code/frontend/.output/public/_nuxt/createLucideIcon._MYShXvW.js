import{n as v,B as y,D as u,E as g,I as f,H as b,z as w,L as p,M as C,be as $,O as d,aE as _}from"./entry.BxACjir3.js";import{f as x}from"./format-length.4l65r8M5.js";const z=e=>{const{textColorBase:n,opacity1:o,opacity2:i,opacity3:s,opacity4:t,opacity5:r}=e;return{color:n,opacity1Depth:o,opacity2Depth:i,opacity3Depth:s,opacity4Depth:t,opacity5Depth:r}},D={name:"Icon",common:v,self:z},k=D,I=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[u("color-transition",{transition:"color .3s var(--n-bezier)"}),u("depth",{color:"var(--n-color)"},[g("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),g("svg",{height:"1em",width:"1em"})]),L=Object.assign(Object.assign({},f.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),B=b({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:L,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=w(e),i=f("Icon","-icon",I,k,e,n),s=p(()=>{const{depth:r}=e,{common:{cubicBezierEaseInOut:c},self:h}=i.value;if(r!==void 0){const{color:a,[`opacity${r}Depth`]:m}=h;return{"--n-bezier":c,"--n-color":a,"--n-opacity":m}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),t=o?C("icon",p(()=>`${e.depth||"d"}`),s,e):void 0;return{mergedClsPrefix:n,mergedStyle:p(()=>{const{size:r,color:c}=e;return{fontSize:x(r),color:c}}),cssVars:o?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$parent:n,depth:o,mergedClsPrefix:i,component:s,onRender:t,themeClass:r}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),t==null||t(),d("i",_(this.$attrs,{role:"img",class:[`${i}-icon`,r,{[`${i}-icon--depth`]:o,[`${i}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),s?d(s):this.$slots)}});/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O=(e,n)=>({size:o,strokeWidth:i=2,absoluteStrokeWidth:s,color:t,class:r,...c},{attrs:h,slots:a})=>d("svg",{...l,width:o||l.width,height:o||l.height,stroke:t||l.stroke,"stroke-width":s?Number(i)*24/Number(o):i,...h,class:["lucide",`lucide-${N(e)}`],...c},[...n.map(m=>d(...m)),...a.default?[a.default()]:[]]);export{B as N,O as c};
