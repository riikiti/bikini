import{H as he,aM as Tt,a6 as Ae,l as sn,k as dn,L as A,r as R,y as Ke,a$ as lt,O as d,aJ as un,ar as ht,aK as Ve,ay as at,b3 as cn,b4 as vt,j as Rt,aH as st,n as dt,b5 as fn,v as Ot,aY as Te,ae as hn,av as Mt,B,C as H,D as ie,E as de,G as it,b6 as zt,I as Oe,z as ut,K as kt,x as oe,h as Re,J as gt,M as ct,Q as pt,b7 as vn,b8 as gn,aW as pn,P as we,b0 as _e,q as Fe,f as bn,b9 as mn,F as wn,u as xn,ba as yn,at as Sn,au as Cn,bb as bt,aA as Fn,bc as Tn,A as se}from"./entry.pcvPK11Y.js";import{c as Pt,a as Ue,d as Rn,i as ft,e as On,p as Mn,N as zn,u as mt,b as kn,f as rt,V as Pn,g as In,h as $n}from"./Popover.McdYumyP.js";import{u as Bn}from"./use-locale.vL9W0swJ.js";import{c as _n}from"./FormItem.LAEPNh60.js";import{N as et}from"./Tag.heEdZvul.js";import{c as An,g as wt,a as En}from"./create.EiyHFTEr.js";import{e as Nn,N as Ln}from"./Empty.T2jWEJ1j.js";import{h as qe}from"./happens-in.HIJlj3JZ.js";import{c as It}from"./createLucideIcon.oWjO9ajp.js";function tt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(a=>{a&&a(o)})}}function xt(e){return e&-e}class Dn{constructor(n,o){this.l=n,this.min=o;const a=new Array(n+1);for(let l=0;l<n+1;++l)a[l]=0;this.ft=a}add(n,o){if(o===0)return;const{l:a,ft:l}=this;for(n+=1;n<=a;)l[n]+=o,n+=xt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:a,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=n*a;for(;n>0;)u+=o[n],n-=xt(n);return u}getBound(n){let o=0,a=this.l;for(;a>o;){const l=Math.floor((o+a)/2),u=this.sum(l);if(u>n){a=l;continue}else if(u<n){if(o===l)return this.sum(o+1)<=n?o+1:l;o=l}else return l}return o}}let je;function Hn(){return typeof document>"u"?!1:(je===void 0&&("matchMedia"in window?je=window.matchMedia("(pointer:coarse)").matches:je=!1),je)}let nt;function yt(){return typeof document>"u"?1:(nt===void 0&&(nt="chrome"in window?window.devicePixelRatio:1),nt)}const Wn=Ue(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ue("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ue("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Vn=he({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Tt();Wn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Pt,ssr:n}),Ae(()=>{const{defaultScrollIndex:v,defaultScrollKey:m}=e;v!=null?g({index:v}):m!=null&&g({key:m})});let o=!1,a=!1;sn(()=>{if(o=!1,!a){a=!0;return}g({top:_.value,left:b})}),dn(()=>{o=!0,a||(a=!0)});const l=A(()=>{const v=new Map,{keyField:m}=e;return e.items.forEach((x,N)=>{v.set(x[m],N)}),v}),u=R(null),f=R(void 0),r=new Map,y=A(()=>{const{items:v,itemSize:m,keyField:x}=e,N=new Dn(v.length,m);return v.forEach((W,V)=>{const j=W[x],K=r.get(j);K!==void 0&&N.add(V,K)}),N}),T=R(0);let b=0;const _=R(0),$=Ke(()=>Math.max(y.value.getBound(_.value-lt(e.paddingTop))-1,0)),O=A(()=>{const{value:v}=f;if(v===void 0)return[];const{items:m,itemSize:x}=e,N=$.value,W=Math.min(N+Math.ceil(v/x+1),m.length-1),V=[];for(let j=N;j<=W;++j)V.push(m[j]);return V}),g=(v,m)=>{if(typeof v=="number"){S(v,m,"auto");return}const{left:x,top:N,index:W,key:V,position:j,behavior:K,debounce:te=!0}=v;if(x!==void 0||N!==void 0)S(x,N,K);else if(W!==void 0)F(W,K,te);else if(V!==void 0){const Q=l.value.get(V);Q!==void 0&&F(Q,K,te)}else j==="bottom"?S(0,Number.MAX_SAFE_INTEGER,K):j==="top"&&S(0,0,K)};let w,E=null;function F(v,m,x){const{value:N}=y,W=N.sum(v)+lt(e.paddingTop);if(!x)u.value.scrollTo({left:0,top:W,behavior:m});else{w=v,E!==null&&window.clearTimeout(E),E=window.setTimeout(()=>{w=void 0,E=null},16);const{scrollTop:V,offsetHeight:j}=u.value;if(W>V){const K=N.get(v);W+K<=V+j||u.value.scrollTo({left:0,top:W+K-j,behavior:m})}else u.value.scrollTo({left:0,top:W,behavior:m})}}function S(v,m,x){u.value.scrollTo({left:v,top:m,behavior:x})}function M(v,m){var x,N,W;if(o||e.ignoreItemResize||ee(m.target))return;const{value:V}=y,j=l.value.get(v),K=V.get(j),te=(W=(N=(x=m.borderBoxSize)===null||x===void 0?void 0:x[0])===null||N===void 0?void 0:N.blockSize)!==null&&W!==void 0?W:m.contentRect.height;if(te===K)return;te-e.itemSize===0?r.delete(v):r.set(v,te-e.itemSize);const re=te-K;if(re===0)return;V.add(j,re);const i=u.value;if(i!=null){if(w===void 0){const h=V.sum(j);i.scrollTop>h&&i.scrollBy(0,re)}else if(j<w)i.scrollBy(0,re);else if(j===w){const h=V.sum(j);te+h>i.scrollTop+i.offsetHeight&&i.scrollBy(0,re)}Z()}T.value++}const U=!Hn();let q=!1;function D(v){var m;(m=e.onScroll)===null||m===void 0||m.call(e,v),(!U||!q)&&Z()}function L(v){var m;if((m=e.onWheel)===null||m===void 0||m.call(e,v),U){const x=u.value;if(x!=null){if(v.deltaX===0&&(x.scrollTop===0&&v.deltaY<=0||x.scrollTop+x.offsetHeight>=x.scrollHeight&&v.deltaY>=0))return;v.preventDefault(),x.scrollTop+=v.deltaY/yt(),x.scrollLeft+=v.deltaX/yt(),Z(),q=!0,Rn(()=>{q=!1})}}}function J(v){if(o||ee(v.target)||v.contentRect.height===f.value)return;f.value=v.contentRect.height;const{onResize:m}=e;m!==void 0&&m(v)}function Z(){const{value:v}=u;v!=null&&(_.value=v.scrollTop,b=v.scrollLeft)}function ee(v){let m=v;for(;m!==null;){if(m.style.display==="none")return!0;m=m.parentElement}return!1}return{listHeight:f,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:A(()=>{const{itemResizable:v}=e,m=Ve(y.value.sum());return T.value,[e.itemsStyle,{boxSizing:"content-box",height:v?"":m,minHeight:v?m:"",paddingTop:Ve(e.paddingTop),paddingBottom:Ve(e.paddingBottom)}]}),visibleItemsStyle:A(()=>(T.value,{transform:`translateY(${Ve(y.value.sum($.value))})`})),viewportItems:O,listElRef:u,itemsElRef:R(null),scrollTo:g,handleListResize:J,handleListScroll:D,handleListWheel:L,handleItemResize:M}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:a}=this;return d(ht,{onResize:this.handleListResize},{default:()=>{var l,u;return d("div",un(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(a,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(f=>{const r=f[n],y=o.get(r),T=this.$slots.default({item:f,index:y})[0];return e?d(ht,{key:r,onResize:b=>this.handleItemResize(r,b)},{default:()=>T}):(T.key=r,T)})})]):(u=(l=this.$slots).empty)===null||u===void 0?void 0:u.call(l)])}})}}),fe="v-hidden",jn=Ue("[v-hidden]",{display:"none!important"}),St=he({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=R(null),a=R(null);function l(f){const{value:r}=o,{getCounter:y,getTail:T}=e;let b;if(y!==void 0?b=y():b=a.value,!r||!b)return;b.hasAttribute(fe)&&b.removeAttribute(fe);const{children:_}=r;if(f.showAllItemsBeforeCalculate)for(const M of _)M.hasAttribute(fe)&&M.removeAttribute(fe);const $=r.offsetWidth,O=[],g=n.tail?T==null?void 0:T():null;let w=g?g.offsetWidth:0,E=!1;const F=r.children.length-(n.tail?1:0);for(let M=0;M<F-1;++M){if(M<0)continue;const U=_[M];if(E){U.hasAttribute(fe)||U.setAttribute(fe,"");continue}else U.hasAttribute(fe)&&U.removeAttribute(fe);const q=U.offsetWidth;if(w+=q,O[M]=q,w>$){const{updateCounter:D}=e;for(let L=M;L>=0;--L){const J=F-1-L;D!==void 0?D(J):b.textContent=`${J}`;const Z=b.offsetWidth;if(w-=O[L],w+Z<=$||L===0){E=!0,M=L-1,g&&(M===-1?(g.style.maxWidth=`${$-Z}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:ee}=e;ee&&ee(J);break}}}}const{onUpdateOverflow:S}=e;E?S!==void 0&&S(!0):(S!==void 0&&S(!1),b.setAttribute(fe,""))}const u=Tt();return jn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Pt,ssr:u}),Ae(()=>l({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:a,sync:l}},render(){const{$slots:e}=this;return at(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[cn(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function $t(e,n){n&&(Ae(()=>{const{value:o}=e;o&&vt.registerHandler(o,n)}),Rt(()=>{const{value:o}=e;o&&vt.unregisterHandler(o)}))}const Kn=he({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Un=he({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),qn={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Gn=e=>{const{borderRadius:n,popoverColor:o,textColor3:a,dividerColor:l,textColor2:u,primaryColorPressed:f,textColorDisabled:r,primaryColor:y,opacityDisabled:T,hoverColor:b,fontSizeSmall:_,fontSizeMedium:$,fontSizeLarge:O,fontSizeHuge:g,heightSmall:w,heightMedium:E,heightLarge:F,heightHuge:S}=e;return Object.assign(Object.assign({},qn),{optionFontSizeSmall:_,optionFontSizeMedium:$,optionFontSizeLarge:O,optionFontSizeHuge:g,optionHeightSmall:w,optionHeightMedium:E,optionHeightLarge:F,optionHeightHuge:S,borderRadius:n,color:o,groupHeaderTextColor:a,actionDividerColor:l,optionTextColor:u,optionTextColorPressed:f,optionTextColorDisabled:r,optionTextColorActive:y,optionOpacityDisabled:T,optionCheckColor:y,optionColorPending:b,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:b,actionTextColor:u,loadingColor:y})},Yn=st({name:"InternalSelectMenu",common:dt,peers:{Scrollbar:fn,Empty:Nn},self:Gn}),Bt=Yn;function Xn(e,n){return d(Mt,{name:"fade-in-scale-up-transition"},{default:()=>e?d(hn,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>d(Kn)}):null})}const Ct=he({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:a,valueSetRef:l,renderLabelRef:u,renderOptionRef:f,labelFieldRef:r,valueFieldRef:y,showCheckmarkRef:T,nodePropsRef:b,handleOptionClick:_,handleOptionMouseEnter:$}=Ot(ft),O=Ke(()=>{const{value:F}=o;return F?e.tmNode.key===F.key:!1});function g(F){const{tmNode:S}=e;S.disabled||_(F,S)}function w(F){const{tmNode:S}=e;S.disabled||$(F,S)}function E(F){const{tmNode:S}=e,{value:M}=O;S.disabled||M||$(F,S)}return{multiple:a,isGrouped:Ke(()=>{const{tmNode:F}=e,{parent:S}=F;return S&&S.rawNode.type==="group"}),showCheckmark:T,nodeProps:b,isPending:O,isSelected:Ke(()=>{const{value:F}=n,{value:S}=a;if(F===null)return!1;const M=e.tmNode.rawNode[y.value];if(S){const{value:U}=l;return U.has(M)}else return F===M}),labelField:r,renderLabel:u,renderOption:f,handleMouseMove:E,handleMouseEnter:w,handleClick:g}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:a,isGrouped:l,showCheckmark:u,nodeProps:f,renderOption:r,renderLabel:y,handleClick:T,handleMouseEnter:b,handleMouseMove:_}=this,$=Xn(o,e),O=y?[y(n,o),u&&$]:[Te(n[this.labelField],n,o),u&&$],g=f==null?void 0:f(n),w=d("div",Object.assign({},g,{class:[`${e}-base-select-option`,n.class,g==null?void 0:g.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:a,[`${e}-base-select-option--show-checkmark`]:u}],style:[(g==null?void 0:g.style)||"",n.style||""],onClick:tt([T,g==null?void 0:g.onClick]),onMouseenter:tt([b,g==null?void 0:g.onMouseenter]),onMousemove:tt([_,g==null?void 0:g.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},O));return n.render?n.render({node:w,option:n,selected:o}):r?r({node:w,option:n,selected:o}):w}}),Ft=he({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:a}=Ot(ft);return{labelField:o,nodeProps:a,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:a,tmNode:{rawNode:l}}=this,u=a==null?void 0:a(l),f=n?n(l,!1):Te(l[this.labelField],l,!1),r=d("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u==null?void 0:u.class]}),f);return l.render?l.render({node:r,option:l}):o?o({node:r,option:l,selected:!1}):r}}),Jn=B("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[B("scrollbar",`
 max-height: var(--n-height);
 `),B("virtual-list",`
 max-height: var(--n-height);
 `),B("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[H("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),B("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),B("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),H("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),H("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),H("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),H("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),B("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),B("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ie("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),de("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),de("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ie("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ie("pending",[de("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ie("selected",`
 color: var(--n-option-text-color-active);
 `,[de("&::before",`
 background-color: var(--n-option-color-active);
 `),ie("pending",[de("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ie("disabled",`
 cursor: not-allowed;
 `,[it("selected",`
 color: var(--n-option-text-color-disabled);
 `),ie("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),H("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[zt({enterScale:"0.5"})])])]),Qn=he({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=ut(e),a=kt("InternalSelectMenu",o,n),l=Oe("InternalSelectMenu","-internal-select-menu",Jn,Bt,e,oe(e,"clsPrefix")),u=R(null),f=R(null),r=R(null),y=A(()=>e.treeMate.getFlattenedNodes()),T=A(()=>An(y.value)),b=R(null);function _(){const{treeMate:i}=e;let h=null;const{value:G}=e;G===null?h=i.getFirstAvailableNode():(e.multiple?h=i.getNode((G||[])[(G||[]).length-1]):h=i.getNode(G),(!h||h.disabled)&&(h=i.getFirstAvailableNode())),N(h||null)}function $(){const{value:i}=b;i&&!e.treeMate.getNode(i.key)&&(b.value=null)}let O;Re(()=>e.show,i=>{i?O=Re(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?_():$(),at(W)):$()},{immediate:!0}):O==null||O()},{immediate:!0}),Rt(()=>{O==null||O()});const g=A(()=>lt(l.value.self[we("optionHeight",e.size)])),w=A(()=>_e(l.value.self[we("padding",e.size)])),E=A(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),F=A(()=>{const i=y.value;return i&&i.length===0});function S(i){const{onToggle:h}=e;h&&h(i)}function M(i){const{onScroll:h}=e;h&&h(i)}function U(i){var h;(h=r.value)===null||h===void 0||h.sync(),M(i)}function q(){var i;(i=r.value)===null||i===void 0||i.sync()}function D(){const{value:i}=b;return i||null}function L(i,h){h.disabled||N(h,!1)}function J(i,h){h.disabled||S(h)}function Z(i){var h;qe(i,"action")||(h=e.onKeyup)===null||h===void 0||h.call(e,i)}function ee(i){var h;qe(i,"action")||(h=e.onKeydown)===null||h===void 0||h.call(e,i)}function v(i){var h;(h=e.onMousedown)===null||h===void 0||h.call(e,i),!e.focusable&&i.preventDefault()}function m(){const{value:i}=b;i&&N(i.getNext({loop:!0}),!0)}function x(){const{value:i}=b;i&&N(i.getPrev({loop:!0}),!0)}function N(i,h=!1){b.value=i,h&&W()}function W(){var i,h;const G=b.value;if(!G)return;const ue=T.value(G.key);ue!==null&&(e.virtualScroll?(i=f.value)===null||i===void 0||i.scrollTo({index:ue}):(h=r.value)===null||h===void 0||h.scrollTo({index:ue,elSize:g.value}))}function V(i){var h,G;!((h=u.value)===null||h===void 0)&&h.contains(i.target)&&((G=e.onFocus)===null||G===void 0||G.call(e,i))}function j(i){var h,G;!((h=u.value)===null||h===void 0)&&h.contains(i.relatedTarget)||(G=e.onBlur)===null||G===void 0||G.call(e,i)}gt(ft,{handleOptionMouseEnter:L,handleOptionClick:J,valueSetRef:E,pendingTmNodeRef:b,nodePropsRef:oe(e,"nodeProps"),showCheckmarkRef:oe(e,"showCheckmark"),multipleRef:oe(e,"multiple"),valueRef:oe(e,"value"),renderLabelRef:oe(e,"renderLabel"),renderOptionRef:oe(e,"renderOption"),labelFieldRef:oe(e,"labelField"),valueFieldRef:oe(e,"valueField")}),gt(On,u),Ae(()=>{const{value:i}=r;i&&i.sync()});const K=A(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:h},self:{height:G,borderRadius:ue,color:xe,groupHeaderTextColor:ye,actionDividerColor:ce,optionTextColorPressed:le,optionTextColor:Se,optionTextColorDisabled:ve,optionTextColorActive:Me,optionOpacityDisabled:ze,optionCheckColor:ke,actionTextColor:Pe,optionColorPending:pe,optionColorActive:be,loadingColor:Ie,loadingSize:$e,optionColorActivePending:Be,[we("optionFontSize",i)]:Ce,[we("optionHeight",i)]:me,[we("optionPadding",i)]:ne}}=l.value;return{"--n-height":G,"--n-action-divider-color":ce,"--n-action-text-color":Pe,"--n-bezier":h,"--n-border-radius":ue,"--n-color":xe,"--n-option-font-size":Ce,"--n-group-header-text-color":ye,"--n-option-check-color":ke,"--n-option-color-pending":pe,"--n-option-color-active":be,"--n-option-color-active-pending":Be,"--n-option-height":me,"--n-option-opacity-disabled":ze,"--n-option-text-color":Se,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":ve,"--n-option-text-color-pressed":le,"--n-option-padding":ne,"--n-option-padding-left":_e(ne,"left"),"--n-option-padding-right":_e(ne,"right"),"--n-loading-color":Ie,"--n-loading-size":$e}}),{inlineThemeDisabled:te}=e,Q=te?ct("internal-select-menu",A(()=>e.size[0]),K,e):void 0,re={selfRef:u,next:m,prev:x,getPendingTmNode:D};return $t(u,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:n,rtlEnabled:a,virtualListRef:f,scrollbarRef:r,itemSize:g,padding:w,flattenedNodes:y,empty:F,virtualListContainer(){const{value:i}=f;return i==null?void 0:i.listElRef},virtualListContent(){const{value:i}=f;return i==null?void 0:i.itemsElRef},doScroll:M,handleFocusin:V,handleFocusout:j,handleKeyUp:Z,handleKeyDown:ee,handleMouseDown:v,handleVirtualListResize:q,handleVirtualListScroll:U,cssVars:te?void 0:K,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},re)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:a,themeClass:l,onRender:u}=this;return u==null||u(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,l,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},pt(e.header,f=>f&&d("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},f)),this.loading?d("div",{class:`${o}-base-select-menu__loading`},d(vn,{clsPrefix:o,strokeWidth:20})):this.empty?d("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},pn(e.empty,()=>[d(Ln,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty})])):d(gn,{ref:"scrollbarRef",theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?d(Vn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?d(Ft,{key:f.key,clsPrefix:o,tmNode:f}):f.ignored?null:d(Ct,{clsPrefix:o,key:f.key,tmNode:f})}):d("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?d(Ft,{key:f.key,clsPrefix:o,tmNode:f}):d(Ct,{clsPrefix:o,key:f.key,tmNode:f})))}),pt(e.action,f=>f&&[d("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},f),d(Un,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Zn={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},eo=e=>{const{borderRadius:n,textColor2:o,textColorDisabled:a,inputColor:l,inputColorDisabled:u,primaryColor:f,primaryColorHover:r,warningColor:y,warningColorHover:T,errorColor:b,errorColorHover:_,borderColor:$,iconColor:O,iconColorDisabled:g,clearColor:w,clearColorHover:E,clearColorPressed:F,placeholderColor:S,placeholderColorDisabled:M,fontSizeTiny:U,fontSizeSmall:q,fontSizeMedium:D,fontSizeLarge:L,heightTiny:J,heightSmall:Z,heightMedium:ee,heightLarge:v}=e;return Object.assign(Object.assign({},Zn),{fontSizeTiny:U,fontSizeSmall:q,fontSizeMedium:D,fontSizeLarge:L,heightTiny:J,heightSmall:Z,heightMedium:ee,heightLarge:v,borderRadius:n,textColor:o,textColorDisabled:a,placeholderColor:S,placeholderColorDisabled:M,color:l,colorDisabled:u,colorActive:l,border:`1px solid ${$}`,borderHover:`1px solid ${r}`,borderActive:`1px solid ${f}`,borderFocus:`1px solid ${r}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Fe(f,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Fe(f,{alpha:.2})}`,caretColor:f,arrowColor:O,arrowColorDisabled:g,loadingColor:f,borderWarning:`1px solid ${y}`,borderHoverWarning:`1px solid ${T}`,borderActiveWarning:`1px solid ${y}`,borderFocusWarning:`1px solid ${T}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Fe(y,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Fe(y,{alpha:.2})}`,colorActiveWarning:l,caretColorWarning:y,borderError:`1px solid ${b}`,borderHoverError:`1px solid ${_}`,borderActiveError:`1px solid ${b}`,borderFocusError:`1px solid ${_}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Fe(b,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Fe(b,{alpha:.2})}`,colorActiveError:l,caretColorError:b,clearColor:w,clearColorHover:E,clearColorPressed:F})},to=st({name:"InternalSelection",common:dt,peers:{Popover:Mn},self:eo}),_t=to,no=de([B("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[B("base-loading",`
 color: var(--n-loading-color);
 `),B("base-selection-tags","min-height: var(--n-height);"),H("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),H("state-border",`
 z-index: 1;
 border-color: #0000;
 `),B("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[H("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),B("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[H("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),B("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[H("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),B("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[B("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[H("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),H("render-label",`
 color: var(--n-text-color);
 `)]),it("disabled",[de("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ie("focus",[H("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ie("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),B("base-selection-label","background-color: var(--n-color-active);"),B("base-selection-tags","background-color: var(--n-color-active);")])]),ie("disabled","cursor: not-allowed;",[H("arrow",`
 color: var(--n-arrow-color-disabled);
 `),B("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[B("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),H("render-label",`
 color: var(--n-text-color-disabled);
 `)]),B("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),B("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),B("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[H("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),H("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ie(`${e}-status`,[H("state-border",`border: var(--n-border-${e});`),it("disabled",[de("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ie("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),B("base-selection-label",`background-color: var(--n-color-active-${e});`),B("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ie("focus",[H("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),B("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),B("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[de("&:last-child","padding-right: 0;"),B("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[H("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),oo=he({name:"InternalSelection",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=ut(e),a=kt("InternalSelection",o,n),l=R(null),u=R(null),f=R(null),r=R(null),y=R(null),T=R(null),b=R(null),_=R(null),$=R(null),O=R(null),g=R(!1),w=R(!1),E=R(!1),F=Oe("InternalSelection","-internal-selection",no,_t,e,oe(e,"clsPrefix")),S=A(()=>e.clearable&&!e.disabled&&(E.value||e.active)),M=A(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Te(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),U=A(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),q=A(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function D(){var s;const{value:p}=l;if(p){const{value:Y}=u;Y&&(Y.style.width=`${p.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=$.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!1})))}}function L(){const{value:s}=O;s&&(s.style.display="none")}function J(){const{value:s}=O;s&&(s.style.display="inline-block")}Re(oe(e,"active"),s=>{s||L()}),Re(oe(e,"pattern"),()=>{e.multiple&&at(D)});function Z(s){const{onFocus:p}=e;p&&p(s)}function ee(s){const{onBlur:p}=e;p&&p(s)}function v(s){const{onDeleteOption:p}=e;p&&p(s)}function m(s){const{onClear:p}=e;p&&p(s)}function x(s){const{onPatternInput:p}=e;p&&p(s)}function N(s){var p;(!s.relatedTarget||!(!((p=f.value)===null||p===void 0)&&p.contains(s.relatedTarget)))&&Z(s)}function W(s){var p;!((p=f.value)===null||p===void 0)&&p.contains(s.relatedTarget)||ee(s)}function V(s){m(s)}function j(){E.value=!0}function K(){E.value=!1}function te(s){!e.active||!e.filterable||s.target!==u.value&&s.preventDefault()}function Q(s){v(s)}function re(s){if(s.key==="Backspace"&&!i.value&&!e.pattern.length){const{selectedOptions:p}=e;p!=null&&p.length&&Q(p[p.length-1])}}const i=R(!1);let h=null;function G(s){const{value:p}=l;if(p){const Y=s.target.value;p.textContent=Y,D()}e.ignoreComposition&&i.value?h=s:x(s)}function ue(){i.value=!0}function xe(){i.value=!1,e.ignoreComposition&&x(h),h=null}function ye(s){var p;w.value=!0,(p=e.onPatternFocus)===null||p===void 0||p.call(e,s)}function ce(s){var p;w.value=!1,(p=e.onPatternBlur)===null||p===void 0||p.call(e,s)}function le(){var s,p;if(e.filterable)w.value=!1,(s=T.value)===null||s===void 0||s.blur(),(p=u.value)===null||p===void 0||p.blur();else if(e.multiple){const{value:Y}=r;Y==null||Y.blur()}else{const{value:Y}=y;Y==null||Y.blur()}}function Se(){var s,p,Y;e.filterable?(w.value=!1,(s=T.value)===null||s===void 0||s.focus()):e.multiple?(p=r.value)===null||p===void 0||p.focus():(Y=y.value)===null||Y===void 0||Y.focus()}function ve(){const{value:s}=u;s&&(J(),s.focus())}function Me(){const{value:s}=u;s&&s.blur()}function ze(s){const{value:p}=b;p&&p.setTextContent(`+${s}`)}function ke(){const{value:s}=_;return s}function Pe(){return u.value}let pe=null;function be(){pe!==null&&window.clearTimeout(pe)}function Ie(){e.active||(be(),pe=window.setTimeout(()=>{q.value&&(g.value=!0)},100))}function $e(){be()}function Be(s){s||(be(),g.value=!1)}Re(q,s=>{s||(g.value=!1)}),Ae(()=>{bn(()=>{const s=T.value;s&&(e.disabled?s.removeAttribute("tabindex"):s.tabIndex=w.value?-1:0)})}),$t(f,e.onResize);const{inlineThemeDisabled:Ce}=e,me=A(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:p},self:{borderRadius:Y,color:Ye,placeholderColor:Xe,textColor:Ee,paddingSingle:Ne,paddingMultiple:Le,caretColor:Je,colorDisabled:Qe,textColorDisabled:De,placeholderColorDisabled:ge,colorActive:t,boxShadowFocus:c,boxShadowActive:C,boxShadowHover:I,border:k,borderFocus:z,borderHover:P,borderActive:X,arrowColor:ae,arrowColorDisabled:Ze,loadingColor:Et,colorActiveWarning:Nt,boxShadowFocusWarning:Lt,boxShadowActiveWarning:Dt,boxShadowHoverWarning:Ht,borderWarning:Wt,borderFocusWarning:Vt,borderHoverWarning:jt,borderActiveWarning:Kt,colorActiveError:Ut,boxShadowFocusError:qt,boxShadowActiveError:Gt,boxShadowHoverError:Yt,borderError:Xt,borderFocusError:Jt,borderHoverError:Qt,borderActiveError:Zt,clearColor:en,clearColorHover:tn,clearColorPressed:nn,clearSize:on,arrowSize:ln,[we("height",s)]:rn,[we("fontSize",s)]:an}}=F.value,He=_e(Ne),We=_e(Le);return{"--n-bezier":p,"--n-border":k,"--n-border-active":X,"--n-border-focus":z,"--n-border-hover":P,"--n-border-radius":Y,"--n-box-shadow-active":C,"--n-box-shadow-focus":c,"--n-box-shadow-hover":I,"--n-caret-color":Je,"--n-color":Ye,"--n-color-active":t,"--n-color-disabled":Qe,"--n-font-size":an,"--n-height":rn,"--n-padding-single-top":He.top,"--n-padding-multiple-top":We.top,"--n-padding-single-right":He.right,"--n-padding-multiple-right":We.right,"--n-padding-single-left":He.left,"--n-padding-multiple-left":We.left,"--n-padding-single-bottom":He.bottom,"--n-padding-multiple-bottom":We.bottom,"--n-placeholder-color":Xe,"--n-placeholder-color-disabled":ge,"--n-text-color":Ee,"--n-text-color-disabled":De,"--n-arrow-color":ae,"--n-arrow-color-disabled":Ze,"--n-loading-color":Et,"--n-color-active-warning":Nt,"--n-box-shadow-focus-warning":Lt,"--n-box-shadow-active-warning":Dt,"--n-box-shadow-hover-warning":Ht,"--n-border-warning":Wt,"--n-border-focus-warning":Vt,"--n-border-hover-warning":jt,"--n-border-active-warning":Kt,"--n-color-active-error":Ut,"--n-box-shadow-focus-error":qt,"--n-box-shadow-active-error":Gt,"--n-box-shadow-hover-error":Yt,"--n-border-error":Xt,"--n-border-focus-error":Jt,"--n-border-hover-error":Qt,"--n-border-active-error":Zt,"--n-clear-size":on,"--n-clear-color":en,"--n-clear-color-hover":tn,"--n-clear-color-pressed":nn,"--n-arrow-size":ln}}),ne=Ce?ct("internal-selection",A(()=>e.size[0]),me,e):void 0;return{mergedTheme:F,mergedClearable:S,mergedClsPrefix:n,rtlEnabled:a,patternInputFocused:w,filterablePlaceholder:M,label:U,selected:q,showTagsPanel:g,isComposing:i,counterRef:b,counterWrapperRef:_,patternInputMirrorRef:l,patternInputRef:u,selfRef:f,multipleElRef:r,singleElRef:y,patternInputWrapperRef:T,overflowRef:$,inputTagElRef:O,handleMouseDown:te,handleFocusin:N,handleClear:V,handleMouseEnter:j,handleMouseLeave:K,handleDeleteOption:Q,handlePatternKeyDown:re,handlePatternInputInput:G,handlePatternInputBlur:ce,handlePatternInputFocus:ye,handleMouseEnterCounter:Ie,handleMouseLeaveCounter:$e,handleFocusout:W,handleCompositionEnd:xe,handleCompositionStart:ue,onPopoverUpdateShow:Be,focus:Se,focusInput:ve,blur:le,blurInput:Me,updateCounter:ze,getCounter:ke,getTail:Pe,renderLabel:e.renderLabel,cssVars:Ce?void 0:me,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender}},render(){const{status:e,multiple:n,size:o,disabled:a,filterable:l,maxTagCount:u,bordered:f,clsPrefix:r,ellipsisTagPopoverProps:y,onRender:T,renderTag:b,renderLabel:_}=this;T==null||T();const $=u==="responsive",O=typeof u=="number",g=$||O,w=d(mn,null,{default:()=>d(_n,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var F,S;return(S=(F=this.$slots).arrow)===null||S===void 0?void 0:S.call(F)}})});let E;if(n){const{labelField:F}=this,S=x=>d("div",{class:`${r}-base-selection-tag-wrapper`,key:x.value},b?b({option:x,handleClose:()=>{this.handleDeleteOption(x)}}):d(et,{size:o,closable:!x.disabled,disabled:a,onClose:()=>{this.handleDeleteOption(x)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>_?_(x,!0):Te(x[F],x,!0)})),M=()=>(O?this.selectedOptions.slice(0,u):this.selectedOptions).map(S),U=l?d("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:a,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,q=$?()=>d("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(et,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:a})):void 0;let D;if(O){const x=this.selectedOptions.length-u;x>0&&(D=d("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},d(et,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:a},{default:()=>`+${x}`})))}const L=$?l?d(St,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:q,tail:()=>U}):d(St,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:q}):O&&D?M().concat(D):M(),J=g?()=>d("div",{class:`${r}-base-selection-popover`},$?M():this.selectedOptions.map(S)):void 0,Z=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},y):null,v=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},d("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,m=l?d("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},L,$?null:U,w):d("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:a?void 0:0},L,w);E=d(wn,null,g?d(zn,Object.assign({},Z,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>m,default:J}):m,v)}else if(l){const F=this.pattern||this.isComposing,S=this.active?!F:!this.selected,M=this.active?!1:this.selected;E=d("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:wt(this.label)},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:a,disabled:a,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),M?d("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},d("div",{class:`${r}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):_?_(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):null,S?d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,w)}else E=d("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${r}-base-selection-input`,title:wt(this.label),key:"input"},d("div",{class:`${r}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):_?_(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),w);return d("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},E,f?d("div",{class:`${r}-base-selection__border`}):null,f?d("div",{class:`${r}-base-selection__state-border`}):null)}});function Ge(e){return e.type==="group"}function At(e){return e.type==="ignored"}function ot(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function lo(e,n){return{getIsGroup:Ge,getIgnored:At,getKey(a){return Ge(a)?a.name||a.key||"key-required":a[e]},getChildren(a){return a[n]}}}function io(e,n,o,a){if(!n)return e;function l(u){if(!Array.isArray(u))return[];const f=[];for(const r of u)if(Ge(r)){const y=l(r[a]);y.length&&f.push(Object.assign({},r,{[a]:y}))}else{if(At(r))continue;n(o,r)&&f.push(r)}return f}return l(e)}function ro(e,n,o){const a=new Map;return e.forEach(l=>{Ge(l)?l[o].forEach(u=>{a.set(u[n],u)}):a.set(l[n],l)}),a}function ao(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const so=st({name:"Select",common:dt,peers:{InternalSelection:_t,InternalSelectMenu:Bt},self:ao}),uo=so,co=de([B("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),B("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[zt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),fo=Object.assign(Object.assign({},Oe.props),{to:rt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),So=he({name:"Select",props:fo,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:a,inlineThemeDisabled:l}=ut(e),u=Oe("Select","-select",co,uo,e,n),f=R(e.defaultValue),r=oe(e,"value"),y=mt(r,f),T=R(!1),b=R(""),_=A(()=>{const{valueField:t,childrenField:c}=e,C=lo(t,c);return En(m.value,C)}),$=A(()=>ro(ee.value,e.valueField,e.childrenField)),O=R(!1),g=mt(oe(e,"show"),O),w=R(null),E=R(null),F=R(null),{localeRef:S}=Bn("Select"),M=A(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:S.value.placeholder}),U=kn(e,["items","options"]),q=[],D=R([]),L=R([]),J=R(new Map),Z=A(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:c,valueField:C}=e;return I=>({[c]:String(I),[C]:I})}return t===!1?!1:c=>Object.assign(t(c),{value:c})}),ee=A(()=>L.value.concat(D.value).concat(U.value)),v=A(()=>{const{filter:t}=e;if(t)return t;const{labelField:c,valueField:C}=e;return(I,k)=>{if(!k)return!1;const z=k[c];if(typeof z=="string")return ot(I,z);const P=k[C];return typeof P=="string"?ot(I,P):typeof P=="number"?ot(I,String(P)):!1}}),m=A(()=>{if(e.remote)return U.value;{const{value:t}=ee,{value:c}=b;return!c.length||!e.filterable?t:io(t,v.value,c,e.childrenField)}});function x(t){const c=e.remote,{value:C}=J,{value:I}=$,{value:k}=Z,z=[];return t.forEach(P=>{if(I.has(P))z.push(I.get(P));else if(c&&C.has(P))z.push(C.get(P));else if(k){const X=k(P);X&&z.push(X)}}),z}const N=A(()=>{if(e.multiple){const{value:t}=y;return Array.isArray(t)?x(t):[]}return null}),W=A(()=>{const{value:t}=y;return!e.multiple&&!Array.isArray(t)?t===null?null:x([t])[0]||null:null}),V=xn(e),{mergedSizeRef:j,mergedDisabledRef:K,mergedStatusRef:te}=V;function Q(t,c){const{onChange:C,"onUpdate:value":I,onUpdateValue:k}=e,{nTriggerFormChange:z,nTriggerFormInput:P}=V;C&&se(C,t,c),k&&se(k,t,c),I&&se(I,t,c),f.value=t,z(),P()}function re(t){const{onBlur:c}=e,{nTriggerFormBlur:C}=V;c&&se(c,t),C()}function i(){const{onClear:t}=e;t&&se(t)}function h(t){const{onFocus:c,showOnFocus:C}=e,{nTriggerFormFocus:I}=V;c&&se(c,t),I(),C&&ce()}function G(t){const{onSearch:c}=e;c&&se(c,t)}function ue(t){const{onScroll:c}=e;c&&se(c,t)}function xe(){var t;const{remote:c,multiple:C}=e;if(c){const{value:I}=J;if(C){const{valueField:k}=e;(t=N.value)===null||t===void 0||t.forEach(z=>{I.set(z[k],z)})}else{const k=W.value;k&&I.set(k[e.valueField],k)}}}function ye(t){const{onUpdateShow:c,"onUpdate:show":C}=e;c&&se(c,t),C&&se(C,t),O.value=t}function ce(){K.value||(ye(!0),O.value=!0,e.filterable&&Le())}function le(){ye(!1)}function Se(){b.value="",L.value=q}const ve=R(!1);function Me(){e.filterable&&(ve.value=!0)}function ze(){e.filterable&&(ve.value=!1,g.value||Se())}function ke(){K.value||(g.value?e.filterable?Le():le():ce())}function Pe(t){var c,C;!((C=(c=F.value)===null||c===void 0?void 0:c.selfRef)===null||C===void 0)&&C.contains(t.relatedTarget)||(T.value=!1,re(t),le())}function pe(t){h(t),T.value=!0}function be(t){T.value=!0}function Ie(t){var c;!((c=w.value)===null||c===void 0)&&c.$el.contains(t.relatedTarget)||(T.value=!1,re(t),le())}function $e(){var t;(t=w.value)===null||t===void 0||t.focus(),le()}function Be(t){var c;g.value&&(!((c=w.value)===null||c===void 0)&&c.$el.contains(Fn(t))||le())}function Ce(t){if(!Array.isArray(t))return[];if(Z.value)return Array.from(t);{const{remote:c}=e,{value:C}=$;if(c){const{value:I}=J;return t.filter(k=>C.has(k)||I.has(k))}else return t.filter(I=>C.has(I))}}function me(t){ne(t.rawNode)}function ne(t){if(K.value)return;const{tag:c,remote:C,clearFilterAfterSelect:I,valueField:k}=e;if(c&&!C){const{value:z}=L,P=z[0]||null;if(P){const X=D.value;X.length?X.push(P):D.value=[P],L.value=q}}if(C&&J.value.set(t[k],t),e.multiple){const z=Ce(y.value),P=z.findIndex(X=>X===t[k]);if(~P){if(z.splice(P,1),c&&!C){const X=s(t[k]);~X&&(D.value.splice(X,1),I&&(b.value=""))}}else z.push(t[k]),I&&(b.value="");Q(z,x(z))}else{if(c&&!C){const z=s(t[k]);~z?D.value=[D.value[z]]:D.value=q}Ne(),le(),Q(t[k],t)}}function s(t){return D.value.findIndex(C=>C[e.valueField]===t)}function p(t){g.value||ce();const{value:c}=t.target;b.value=c;const{tag:C,remote:I}=e;if(G(c),C&&!I){if(!c){L.value=q;return}const{onCreate:k}=e,z=k?k(c):{[e.labelField]:c,[e.valueField]:c},{valueField:P,labelField:X}=e;U.value.some(ae=>ae[P]===z[P]||ae[X]===z[X])||D.value.some(ae=>ae[P]===z[P]||ae[X]===z[X])?L.value=q:L.value=[z]}}function Y(t){t.stopPropagation();const{multiple:c}=e;!c&&e.filterable&&le(),i(),c?Q([],[]):Q(null,null)}function Ye(t){!qe(t,"action")&&!qe(t,"empty")&&t.preventDefault()}function Xe(t){ue(t)}function Ee(t){var c,C,I,k,z;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((c=w.value)===null||c===void 0)&&c.isComposing)){if(g.value){const P=(C=F.value)===null||C===void 0?void 0:C.getPendingTmNode();P?me(P):e.filterable||(le(),Ne())}else if(ce(),e.tag&&ve.value){const P=L.value[0];if(P){const X=P[e.valueField],{value:ae}=y;e.multiple&&Array.isArray(ae)&&ae.some(Ze=>Ze===X)||ne(P)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;g.value&&((I=F.value)===null||I===void 0||I.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;g.value?(k=F.value)===null||k===void 0||k.next():ce();break;case"Escape":g.value&&(Tn(t),le()),(z=w.value)===null||z===void 0||z.focus();break}}function Ne(){var t;(t=w.value)===null||t===void 0||t.focus()}function Le(){var t;(t=w.value)===null||t===void 0||t.focusInput()}function Je(){var t;g.value&&((t=E.value)===null||t===void 0||t.syncPosition())}xe(),Re(oe(e,"options"),xe);const Qe={focus:()=>{var t;(t=w.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=w.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=w.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=w.value)===null||t===void 0||t.blurInput()}},De=A(()=>{const{self:{menuBoxShadow:t}}=u.value;return{"--n-menu-box-shadow":t}}),ge=l?ct("select",void 0,De,e):void 0;return Object.assign(Object.assign({},Qe),{mergedStatus:te,mergedClsPrefix:n,mergedBordered:o,namespace:a,treeMate:_,isMounted:yn(),triggerRef:w,menuRef:F,pattern:b,uncontrolledShow:O,mergedShow:g,adjustedTo:rt(e),uncontrolledValue:f,mergedValue:y,followerRef:E,localizedPlaceholder:M,selectedOption:W,selectedOptions:N,mergedSize:j,mergedDisabled:K,focused:T,activeWithoutMenuOpen:ve,inlineThemeDisabled:l,onTriggerInputFocus:Me,onTriggerInputBlur:ze,handleTriggerOrMenuResize:Je,handleMenuFocus:be,handleMenuBlur:Ie,handleMenuTabOut:$e,handleTriggerClick:ke,handleToggle:me,handleDeleteOption:ne,handlePatternInput:p,handleClear:Y,handleTriggerBlur:Pe,handleTriggerFocus:pe,handleKeydown:Ee,handleMenuAfterLeave:Se,handleMenuClickOutside:Be,handleMenuScroll:Xe,handleMenuKeydown:Ee,handleMenuMousedown:Ye,mergedTheme:u,cssVars:l?void 0:De,themeClass:ge==null?void 0:ge.themeClass,onRender:ge==null?void 0:ge.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Pn,null,{default:()=>[d(In,null,{default:()=>d(oo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),d($n,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===rt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(Mt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Sn(d(Qn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var a,l;return[(l=(a=this.$slots).empty)===null||l===void 0?void 0:l.call(a)]},header:()=>{var a,l;return[(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)]},action:()=>{var a,l;return[(l=(a=this.$slots).action)===null||l===void 0?void 0:l.call(a)]}}),this.displayDirective==="show"?[[Cn,this.mergedShow],[bt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=It("LockKeyholeIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=It("UnlockKeyholeIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);function To(e){let n=new Date().getFullYear()-18,o=n-e,a=[];for(var l=n;l>=o;l--)a.push({label:`${l}`,value:`${l}`});return a}export{Co as L,So as N,Fo as U,To as u};
