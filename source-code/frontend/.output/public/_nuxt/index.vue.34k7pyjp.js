import{_ as ro}from"./nuxt-link.Uw6Sf_Ya.js";import{r as P,h as ae,b2 as io,bu as ao,bv as so,j as Ae,ax as ue,bw as lo,aB as ce,H as A,L as b,ay as ze,x as D,O as l,E as N,bh as uo,B as $,bx as co,D as T,C as V,S as fo,aE as po,b1 as ho,n as _e,bm as ye,s as me,aR as mo,aS as vo,z as Ne,v as J,I as se,M as Re,a6 as Fe,f as bo,aW as Le,Q as go,P as Z,by as Me,ar as yo,b6 as we,K as xo,av as Ke,bz as wo,bA as So,aH as ko,q as _o,bB as He,J as re,y as fe,aJ as je,aY as pe,bj as No,F as Pe,bC as Ro,bD as Po,bE as Co,G as Oe,A as xe,aw as Io,o as M,c as U,b as B,w as K,U as v,a as W,t as le,a2 as ie,b3 as $o,Y as he,$ as zo,bF as ve,Z as De,a9 as Ce,a4 as L,aa as Ie,V as We,d as Oo,ab as Bo,a1 as Se,bG as To,_ as Eo}from"./entry.pcvPK11Y.js";import{u as Ve}from"./index.05O-rZRu.js";import{N as Ue}from"./Space.e7V8N4OT.js";import{o as Ao,i as Fo}from"./utils.8QySKw4r.js";import{t as Lo}from"./Tag.heEdZvul.js";import{E as Mo}from"./EUserAccoutType.8nCACn_d.js";import{p as Ko,V as Ho,g as jo,h as Do,r as Wo,u as Vo,N as Uo,k as qe}from"./Popover.McdYumyP.js";import{N as Ge,c as de}from"./createLucideIcon.oWjO9ajp.js";import{C as qo}from"./ChevronRight.DqRqfyzG.js";import{h as Be}from"./happens-in.HIJlj3JZ.js";import{g as Go,a as Yo}from"./create.EiyHFTEr.js";import{U as Xo}from"./user.rXbtjdkK.js";import{H as Zo}from"./heart.HIZKiE6W.js";import{M as Jo}from"./mail.46jdw1hO.js";function Qo(e){return n=>{n?e.value=n.$el:e.value=null}}function en(e,n,t){if(!n)return e;const i=P(e.value);let r=null;return ae(e,o=>{r!==null&&window.clearTimeout(r),o===!0?t&&!t.value?i.value=!0:r=window.setTimeout(()=>{i.value=!0},n):i.value=!1}),i}function on(e={},n){const t=io({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:r}=e,o=s=>{switch(s.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}i!==void 0&&Object.keys(i).forEach(p=>{if(p!==s.key)return;const a=i[p];if(typeof a=="function")a(s);else{const{stop:f=!1,prevent:g=!1}=a;f&&s.stopPropagation(),g&&s.preventDefault(),a.handler(s)}})},d=s=>{switch(s.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(p=>{if(p!==s.key)return;const a=r[p];if(typeof a=="function")a(s);else{const{stop:f=!1,prevent:g=!1}=a;f&&s.stopPropagation(),g&&s.preventDefault(),a.handler(s)}})},c=()=>{(n===void 0||n.value)&&(ce("keydown",document,o),ce("keyup",document,d)),n!==void 0&&ae(n,s=>{s?(ce("keydown",document,o),ce("keyup",document,d)):(ue("keydown",document,o),ue("keyup",document,d))})};return ao()?(so(c),Ae(()=>{(n===void 0||n.value)&&(ue("keydown",document,o),ue("keyup",document,d))})):c(),lo(t)}const Te=A({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const n=P(null),t=P(e.value),i=P(e.value),r=P("up"),o=P(!1),d=b(()=>o.value?`${e.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null),c=b(()=>o.value?`${e.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null);ae(D(e,"value"),(a,f)=>{t.value=f,i.value=a,ze(s)});function s(){const a=e.newOriginalNumber,f=e.oldOriginalNumber;f===void 0||a===void 0||(a>f?p("up"):f>a&&p("down"))}function p(a){r.value=a,o.value=!1,ze(()=>{var f;(f=n.value)===null||f===void 0||f.offsetWidth,o.value=!0})}return()=>{const{clsPrefix:a}=e;return l("span",{ref:n,class:`${a}-base-slot-machine-number`},t.value!==null?l("span",{class:[`${a}-base-slot-machine-old-number ${a}-base-slot-machine-old-number--top`,c.value]},t.value):null,l("span",{class:[`${a}-base-slot-machine-current-number`,d.value]},l("span",{ref:"numberWrapper",class:[`${a}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${a}-base-slot-machine-current-number__inner--not-number`]},i.value)),t.value!==null?l("span",{class:[`${a}-base-slot-machine-old-number ${a}-base-slot-machine-old-number--bottom`,c.value]},t.value):null)}}}),{cubicBezierEaseOut:te}=uo;function nn({duration:e=".2s"}={}){return[N("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${te},
 max-width ${e} ${te},
 transform ${e} ${te}
 `}),N("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${te},
 max-width ${e} ${te},
 transform ${e} ${te}
 `}),N("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),N("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),N("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),N("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const tn=N([N("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),N("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),N("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),N("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),$("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[$("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[nn({duration:".2s"}),co({duration:".2s",delay:"0s"}),$("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[T("top",{transform:"translateY(-100%)"}),T("bottom",{transform:"translateY(100%)"}),T("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),T("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),$("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[T("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),T("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),V("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[T("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),rn=A({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){fo("-base-slot-machine",tn,D(e,"clsPrefix"));const n=P(),t=P(),i=b(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const r=[];let o=e.value;for(e.max!==void 0&&(o=Math.min(e.max,o));o>=1;)r.push(o%10),o/=10,o=Math.floor(o);return r.reverse(),r});return ae(D(e,"value"),(r,o)=>{typeof r=="string"?(t.value=void 0,n.value=void 0):typeof o=="string"?(t.value=r,n.value=void 0):(t.value=r,n.value=o)}),()=>{const{value:r,clsPrefix:o}=e;return typeof r=="number"?l("span",{class:`${o}-base-slot-machine`},l(ho,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>i.value.map((d,c)=>l(Te,{clsPrefix:o,key:i.value.length-c-1,oldOriginalNumber:n.value,newOriginalNumber:t.value,value:d}))}),l(po,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<r?l(Te,{clsPrefix:o,value:"+"}):null})):l("span",{class:`${o}-base-slot-machine`},r)}}}),an=e=>{const{borderRadius:n,avatarColor:t,cardColor:i,fontSize:r,heightTiny:o,heightSmall:d,heightMedium:c,heightLarge:s,heightHuge:p,modalColor:a,popoverColor:f}=e;return{borderRadius:n,fontSize:r,border:`2px solid ${i}`,heightTiny:o,heightSmall:d,heightMedium:c,heightLarge:s,heightHuge:p,color:ye(i,t),colorModal:ye(a,t),colorPopover:ye(f,t)}},sn={name:"Avatar",common:_e,self:an},ln=sn,dn=me("n-avatar-group"),un=$("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[mo(N("&","--n-merged-color: var(--n-color-modal);")),vo(N("&","--n-merged-color: var(--n-color-popover);")),N("img",`
 width: 100%;
 height: 100%;
 `),V("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),$("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),V("text","line-height: 1.25")]),cn=Object.assign(Object.assign({},se.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),fn=A({name:"Avatar",props:cn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Ne(e),i=P(!1);let r=null;const o=P(null),d=P(null),c=()=>{const{value:u}=o;if(u&&(r===null||r!==u.innerHTML)){r=u.innerHTML;const{value:x}=d;if(x){const{offsetWidth:C,offsetHeight:H}=x,{offsetWidth:F,offsetHeight:ee}=u,Y=.9,q=Math.min(C/F*Y,H/ee*Y,1);u.style.transform=`translateX(-50%) translateY(-50%) scale(${q})`}}},s=J(dn,null),p=b(()=>{const{size:u}=e;if(u)return u;const{size:x}=s||{};return x||"medium"}),a=se("Avatar","-avatar",un,ln,e,n),f=J(Lo,null),g=b(()=>{if(s)return!0;const{round:u,circle:x}=e;return u!==void 0||x!==void 0?u||x:f?f.roundRef.value:!1}),z=b(()=>s?!0:e.bordered||!1),R=b(()=>{const u=p.value,x=g.value,C=z.value,{color:H}=e,{self:{borderRadius:F,fontSize:ee,color:Y,border:q,colorModal:Q,colorPopover:G},common:{cubicBezierEaseInOut:h}}=a.value;let _;return typeof u=="number"?_=`${u}px`:_=a.value.self[Z("height",u)],{"--n-font-size":ee,"--n-border":C?q:"none","--n-border-radius":x?"50%":F,"--n-color":H||Y,"--n-color-modal":H||Q,"--n-color-popover":H||G,"--n-bezier":h,"--n-merged-size":`var(--n-avatar-size-override, ${_})`}}),k=t?Re("avatar",b(()=>{const u=p.value,x=g.value,C=z.value,{color:H}=e;let F="";return u&&(typeof u=="number"?F+=`a${u}`:F+=u[0]),x&&(F+="b"),C&&(F+="c"),H&&(F+=Me(H)),F}),R,e):void 0,y=P(!e.lazy);Fe(()=>{if(e.lazy&&e.intersectionObserverOptions){let u;const x=bo(()=>{u==null||u(),u=void 0,e.lazy&&(u=Ao(d.value,e.intersectionObserverOptions,y))});Ae(()=>{x(),u==null||u()})}}),ae(()=>{var u;return e.src||((u=e.imgProps)===null||u===void 0?void 0:u.src)},()=>{i.value=!1});const E=P(!e.lazy);return{textRef:o,selfRef:d,mergedRoundRef:g,mergedClsPrefix:n,fitTextTransform:c,cssVars:t?void 0:R,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender,hasLoadError:i,shouldStartLoading:y,loaded:E,mergedOnError:u=>{if(!y.value)return;i.value=!0;const{onError:x,imgProps:{onError:C}={}}=e;x==null||x(u),C==null||C(u)},mergedOnLoad:u=>{const{onLoad:x,imgProps:{onLoad:C}={}}=e;x==null||x(u),C==null||C(u),E.value=!0}}},render(){var e,n;const{$slots:t,src:i,mergedClsPrefix:r,lazy:o,onRender:d,loaded:c,hasLoadError:s,imgProps:p={}}=this;d==null||d();let a;const f=!c&&!s&&(this.renderPlaceholder?this.renderPlaceholder():(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e));return this.hasLoadError?a=this.renderFallback?this.renderFallback():Le(t.fallback,()=>[l("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):a=go(t.default,g=>{if(g)return l(yo,{onResize:this.fitTextTransform},{default:()=>l("span",{ref:"textRef",class:`${r}-avatar__text`},g)});if(i||p.src){const z=this.src||p.src;return l("img",Object.assign(Object.assign({},p),{loading:Fo&&!this.intersectionObserverOptions&&o?"lazy":"eager",src:o&&this.intersectionObserverOptions?this.shouldStartLoading?z:void 0:z,"data-image-src":z,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[p.style||"",{objectFit:this.objectFit},f?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),l("span",{ref:"selfRef",class:[`${r}-avatar`,this.themeClass],style:this.cssVars},a,o&&f)}}),pn=e=>{const{errorColor:n,infoColor:t,successColor:i,warningColor:r,fontFamily:o}=e;return{color:n,colorInfo:t,colorSuccess:i,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:o}},hn={name:"Badge",common:_e,self:pn},mn=hn,vn=N([N("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),$("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[T("as-is",[$("badge-sup",{position:"static",transform:"translateX(0)"},[we({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),T("dot",[$("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[N("::before","border-radius: 4px;")])]),$("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[we({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),$("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),N("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),bn=Object.assign(Object.assign({},se.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),gn=A({name:"Badge",props:bn,setup(e,{slots:n}){const{mergedClsPrefixRef:t,inlineThemeDisabled:i,mergedRtlRef:r}=Ne(e),o=se("Badge","-badge",vn,mn,e,t),d=P(!1),c=()=>{d.value=!0},s=()=>{d.value=!1},p=b(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!So(n.value)));Fe(()=>{p.value&&(d.value=!0)});const a=xo("Badge",r,t),f=b(()=>{const{type:R,color:k}=e,{common:{cubicBezierEaseInOut:y,cubicBezierEaseOut:E},self:{[Z("color",R)]:u,fontFamily:x,fontSize:C}}=o.value;return{"--n-font-size":C,"--n-font-family":x,"--n-color":k||u,"--n-ripple-color":k||u,"--n-bezier":y,"--n-ripple-bezier":E}}),g=i?Re("badge",b(()=>{let R="";const{type:k,color:y}=e;return k&&(R+=k[0]),y&&(R+=Me(y)),R}),f,e):void 0,z=b(()=>{const{offset:R}=e;if(!R)return;const[k,y]=R,E=typeof k=="number"?`${k}px`:k,u=typeof y=="number"?`${y}px`:y;return{transform:`translate(calc(${a!=null&&a.value?"50%":"-50%"} + ${E}), ${u})`}});return{rtlEnabled:a,mergedClsPrefix:t,appeared:d,showBadge:p,handleAfterEnter:c,handleAfterLeave:s,cssVars:i?void 0:f,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,offsetStyle:z}},render(){var e;const{mergedClsPrefix:n,onRender:t,themeClass:i,$slots:r}=this;t==null||t();const o=(e=r.default)===null||e===void 0?void 0:e.call(r);return l("div",{class:[`${n}-badge`,this.rtlEnabled&&`${n}-badge--rtl`,i,{[`${n}-badge--dot`]:this.dot,[`${n}-badge--as-is`]:!o}],style:this.cssVars},o,l(Ke,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?l("sup",{class:`${n}-badge-sup`,title:Go(this.value),style:this.offsetStyle},Le(r.value,()=>[this.dot?null:l(rn,{clsPrefix:n,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?l(wo,{clsPrefix:n}):null):null}))}}),yn={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},xn=e=>{const{primaryColor:n,textColor2:t,dividerColor:i,hoverColor:r,popoverColor:o,invertedColor:d,borderRadius:c,fontSizeSmall:s,fontSizeMedium:p,fontSizeLarge:a,fontSizeHuge:f,heightSmall:g,heightMedium:z,heightLarge:R,heightHuge:k,textColor3:y,opacityDisabled:E}=e;return Object.assign(Object.assign({},yn),{optionHeightSmall:g,optionHeightMedium:z,optionHeightLarge:R,optionHeightHuge:k,borderRadius:c,fontSizeSmall:s,fontSizeMedium:p,fontSizeLarge:a,fontSizeHuge:f,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:o,dividerColor:i,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:_o(n,{alpha:.1}),groupHeaderTextColor:y,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:d,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:E})},wn=ko({name:"Dropdown",common:_e,peers:{Popover:Ko},self:xn}),Sn=wn,Ye=A({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),$e=me("n-dropdown-menu"),be=me("n-dropdown"),Ee=me("n-dropdown-option");function ke(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function kn(e){return e.type==="group"}function Xe(e){return e.type==="divider"}function _n(e){return e.type==="render"}const Ze=A({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=J(be),{hoverKeyRef:t,keyboardKeyRef:i,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:o,activeKeyPathRef:d,animatedRef:c,mergedShowRef:s,renderLabelRef:p,renderIconRef:a,labelFieldRef:f,childrenFieldRef:g,renderOptionRef:z,nodePropsRef:R,menuPropsRef:k}=n,y=J(Ee,null),E=J($e),u=J(He),x=b(()=>e.tmNode.rawNode),C=b(()=>{const{value:m}=g;return ke(e.tmNode.rawNode,m)}),H=b(()=>{const{disabled:m}=e.tmNode;return m}),F=b(()=>{if(!C.value)return!1;const{key:m,disabled:O}=e.tmNode;if(O)return!1;const{value:X}=t,{value:oe}=i,{value:ge}=r,{value:ne}=o;return X!==null?ne.includes(m):oe!==null?ne.includes(m)&&ne[ne.length-1]!==m:ge!==null?ne.includes(m):!1}),ee=b(()=>i.value===null&&!c.value),Y=en(F,300,ee),q=b(()=>!!(y!=null&&y.enteringSubmenuRef.value)),Q=P(!1);re(Ee,{enteringSubmenuRef:Q});function G(){Q.value=!0}function h(){Q.value=!1}function _(){const{parentKey:m,tmNode:O}=e;O.disabled||s.value&&(r.value=m,i.value=null,t.value=O.key)}function S(){const{tmNode:m}=e;m.disabled||s.value&&t.value!==m.key&&_()}function w(m){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:O}=m;O&&!Be({target:O},"dropdownOption")&&!Be({target:O},"scrollbarRail")&&(t.value=null)}function j(){const{value:m}=C,{tmNode:O}=e;s.value&&!m&&!O.disabled&&(n.doSelect(O.key,O.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:p,renderIcon:a,siblingHasIcon:E.showIconRef,siblingHasSubmenu:E.hasSubmenuRef,menuProps:k,popoverBody:u,animated:c,mergedShowSubmenu:b(()=>Y.value&&!q.value),rawNode:x,hasSubmenu:C,pending:fe(()=>{const{value:m}=o,{key:O}=e.tmNode;return m.includes(O)}),childActive:fe(()=>{const{value:m}=d,{key:O}=e.tmNode,X=m.findIndex(oe=>O===oe);return X===-1?!1:X<m.length-1}),active:fe(()=>{const{value:m}=d,{key:O}=e.tmNode,X=m.findIndex(oe=>O===oe);return X===-1?!1:X===m.length-1}),mergedDisabled:H,renderOption:z,nodeProps:R,handleClick:j,handleMouseMove:S,handleMouseEnter:_,handleMouseLeave:w,handleSubmenuBeforeEnter:G,handleSubmenuAfterEnter:h}},render(){var e,n;const{animated:t,rawNode:i,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:d,siblingHasSubmenu:c,renderLabel:s,renderIcon:p,renderOption:a,nodeProps:f,props:g,scrollable:z}=this;let R=null;if(r){const u=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,i,i.children);R=l(Je,Object.assign({},u,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const k={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=f==null?void 0:f(i),E=l("div",Object.assign({class:[`${o}-dropdown-option`,y==null?void 0:y.class],"data-dropdown-option":!0},y),l("div",je(k,g),[l("div",{class:[`${o}-dropdown-option-body__prefix`,d&&`${o}-dropdown-option-body__prefix--show-icon`]},[p?p(i):pe(i.icon)]),l("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},s?s(i):pe((n=i[this.labelField])!==null&&n!==void 0?n:i.title)),l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,c&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(Ge,null,{default:()=>l(qo,null)}):null)]),this.hasSubmenu?l(Ho,null,{default:()=>[l(jo,null,{default:()=>l("div",{class:`${o}-dropdown-offset-container`},l(Do,{show:this.mergedShowSubmenu,placement:this.placement,to:z&&this.popoverBody||void 0,teleportDisabled:!z},{default:()=>l("div",{class:`${o}-dropdown-menu-wrapper`},t?l(Ke,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>R}):R)}))})]}):null);return a?a({node:E,option:i}):E}}),Nn=A({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=J($e),{renderLabelRef:t,labelFieldRef:i,nodePropsRef:r,renderOptionRef:o}=J(be);return{labelField:i,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:i,nodeProps:r,renderLabel:o,renderOption:d}=this,{rawNode:c}=this.tmNode,s=l("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(c)),l("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,i&&`${n}-dropdown-option-body__prefix--show-icon`]},pe(c.icon)),l("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(c):pe((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),l("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:s,option:c}):s}}),Rn=A({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:i}=e;return l(Pe,null,l(Nn,{clsPrefix:t,tmNode:e,key:e.key}),i==null?void 0:i.map(r=>{const{rawNode:o}=r;return o.show===!1?null:Xe(o)?l(Ye,{clsPrefix:t,key:r.key}):r.isGroup?(No("dropdown","`group` node is not allowed to be put in `group` node."),null):l(Ze,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),Pn=A({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return l("div",n,[e==null?void 0:e()])}}),Je=A({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=J(be);re($e,{showIconRef:b(()=>{const r=n.value;return e.tmNodes.some(o=>{var d;if(o.isGroup)return(d=o.children)===null||d===void 0?void 0:d.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:c}=o;return r?r(c):c.icon})}),hasSubmenuRef:b(()=>{const{value:r}=t;return e.tmNodes.some(o=>{var d;if(o.isGroup)return(d=o.children)===null||d===void 0?void 0:d.some(({rawNode:s})=>ke(s,r));const{rawNode:c}=o;return ke(c,r)})})});const i=P(null);return re(Ro,null),re(Po,null),re(He,i),{bodyRef:i}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,i=this.tmNodes.map(r=>{const{rawNode:o}=r;return o.show===!1?null:_n(o)?l(Pn,{tmNode:r,key:r.key}):Xe(o)?l(Ye,{clsPrefix:n,key:r.key}):kn(o)?l(Rn,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):l(Ze,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:o.props,scrollable:t})});return l("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?l(Co,{contentClass:`${n}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?Wo({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Cn=$("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[we(),$("dropdown-option",`
 position: relative;
 `,[N("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[N("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),$("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[N("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),Oe("disabled",[T("pending",`
 color: var(--n-option-text-color-hover);
 `,[V("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),N("&::before","background-color: var(--n-option-color-hover);")]),T("active",`
 color: var(--n-option-text-color-active);
 `,[V("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),N("&::before","background-color: var(--n-option-color-active);")]),T("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[V("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),T("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),T("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[V("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[T("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),V("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[T("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),$("icon",`
 font-size: var(--n-option-icon-size);
 `)]),V("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),V("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[T("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),$("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("dropdown-menu","pointer-events: all;")]),$("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),$("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),$("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),N(">",[$("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Oe("scrollable",`
 padding: var(--n-padding);
 `),T("scrollable",[V("content",`
 padding: var(--n-padding);
 `)])]),In={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$n=Object.keys(qe),zn=Object.assign(Object.assign(Object.assign({},qe),In),se.props),On=A({name:"Dropdown",inheritAttrs:!1,props:zn,setup(e){const n=P(!1),t=Vo(D(e,"show"),n),i=b(()=>{const{keyField:h,childrenField:_}=e;return Yo(e.options,{getKey(S){return S[h]},getDisabled(S){return S.disabled===!0},getIgnored(S){return S.type==="divider"||S.type==="render"},getChildren(S){return S[_]}})}),r=b(()=>i.value.treeNodes),o=P(null),d=P(null),c=P(null),s=b(()=>{var h,_,S;return(S=(_=(h=o.value)!==null&&h!==void 0?h:d.value)!==null&&_!==void 0?_:c.value)!==null&&S!==void 0?S:null}),p=b(()=>i.value.getPath(s.value).keyPath),a=b(()=>i.value.getPath(e.value).keyPath),f=fe(()=>e.keyboard&&t.value);on({keydown:{ArrowUp:{prevent:!0,handler:H},ArrowRight:{prevent:!0,handler:C},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:x},Enter:{prevent:!0,handler:ee},Escape:u}},f);const{mergedClsPrefixRef:g,inlineThemeDisabled:z}=Ne(e),R=se("Dropdown","-dropdown",Cn,Sn,e,g);re(be,{labelFieldRef:D(e,"labelField"),childrenFieldRef:D(e,"childrenField"),renderLabelRef:D(e,"renderLabel"),renderIconRef:D(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:d,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:p,activeKeyPathRef:a,animatedRef:D(e,"animated"),mergedShowRef:t,nodePropsRef:D(e,"nodeProps"),renderOptionRef:D(e,"renderOption"),menuPropsRef:D(e,"menuProps"),doSelect:k,doUpdateShow:y}),ae(t,h=>{!e.animated&&!h&&E()});function k(h,_){const{onSelect:S}=e;S&&xe(S,h,_)}function y(h){const{"onUpdate:show":_,onUpdateShow:S}=e;_&&xe(_,h),S&&xe(S,h),n.value=h}function E(){o.value=null,d.value=null,c.value=null}function u(){y(!1)}function x(){q("left")}function C(){q("right")}function H(){q("up")}function F(){q("down")}function ee(){const h=Y();h!=null&&h.isLeaf&&t.value&&(k(h.key,h.rawNode),y(!1))}function Y(){var h;const{value:_}=i,{value:S}=s;return!_||S===null?null:(h=_.getNode(S))!==null&&h!==void 0?h:null}function q(h){const{value:_}=s,{value:{getFirstAvailableNode:S}}=i;let w=null;if(_===null){const j=S();j!==null&&(w=j.key)}else{const j=Y();if(j){let m;switch(h){case"down":m=j.getNext();break;case"up":m=j.getPrev();break;case"right":m=j.getChild();break;case"left":m=j.getParent();break}m&&(w=m.key)}}w!==null&&(o.value=null,d.value=w)}const Q=b(()=>{const{size:h,inverted:_}=e,{common:{cubicBezierEaseInOut:S},self:w}=R.value,{padding:j,dividerColor:m,borderRadius:O,optionOpacityDisabled:X,[Z("optionIconSuffixWidth",h)]:oe,[Z("optionSuffixWidth",h)]:ge,[Z("optionIconPrefixWidth",h)]:ne,[Z("optionPrefixWidth",h)]:eo,[Z("fontSize",h)]:oo,[Z("optionHeight",h)]:no,[Z("optionIconSize",h)]:to}=w,I={"--n-bezier":S,"--n-font-size":oo,"--n-padding":j,"--n-border-radius":O,"--n-option-height":no,"--n-option-prefix-width":eo,"--n-option-icon-prefix-width":ne,"--n-option-suffix-width":ge,"--n-option-icon-suffix-width":oe,"--n-option-icon-size":to,"--n-divider-color":m,"--n-option-opacity-disabled":X};return _?(I["--n-color"]=w.colorInverted,I["--n-option-color-hover"]=w.optionColorHoverInverted,I["--n-option-color-active"]=w.optionColorActiveInverted,I["--n-option-text-color"]=w.optionTextColorInverted,I["--n-option-text-color-hover"]=w.optionTextColorHoverInverted,I["--n-option-text-color-active"]=w.optionTextColorActiveInverted,I["--n-option-text-color-child-active"]=w.optionTextColorChildActiveInverted,I["--n-prefix-color"]=w.prefixColorInverted,I["--n-suffix-color"]=w.suffixColorInverted,I["--n-group-header-text-color"]=w.groupHeaderTextColorInverted):(I["--n-color"]=w.color,I["--n-option-color-hover"]=w.optionColorHover,I["--n-option-color-active"]=w.optionColorActive,I["--n-option-text-color"]=w.optionTextColor,I["--n-option-text-color-hover"]=w.optionTextColorHover,I["--n-option-text-color-active"]=w.optionTextColorActive,I["--n-option-text-color-child-active"]=w.optionTextColorChildActive,I["--n-prefix-color"]=w.prefixColor,I["--n-suffix-color"]=w.suffixColor,I["--n-group-header-text-color"]=w.groupHeaderTextColor),I}),G=z?Re("dropdown",b(()=>`${e.size[0]}${e.inverted?"i":""}`),Q,e):void 0;return{mergedClsPrefix:g,mergedTheme:R,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&E()},doUpdateShow:y,cssVars:z?void 0:Q,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){const e=(i,r,o,d,c)=>{var s;const{mergedClsPrefix:p,menuProps:a}=this;(s=this.onRender)===null||s===void 0||s.call(this);const f=(a==null?void 0:a(void 0,this.tmNodes.map(z=>z.rawNode)))||{},g={ref:Qo(r),class:[i,`${p}-dropdown`,this.themeClass],clsPrefix:p,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:c};return l(Je,je(this.$attrs,g,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Uo,Object.assign({},Io(this.$props,$n),t),{trigger:()=>{var i,r;return(r=(i=this.$slots).default)===null||r===void 0?void 0:r.call(i)}})}});/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=de("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=de("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=de("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=de("WalletIcon",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=de("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ln={class:"max-w-[200px]"},Mn={class:"flex flex-col gap-0.5"},Kn={class:"truncate max-w-[100px]"},Hn={key:0,class:"font-light italic"},jn="https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png",Qe=A({__name:"UserAvatar",props:{img:{},name:{},email:{default:""},fallbackName:{default:"SC"}},setup(e){return console.log(e.img),(t,i)=>(M(),U("div",Ln,[B(v(he),{quaternary:"",size:"medium"},{default:K(()=>[B(v(Ue),{align:"center",wrap:!1},{default:K(()=>[B(v(fn),{src:t.img,"fallback-src":jn,size:"medium",round:""},null,8,["src"]),W("div",Mn,[W("div",Kn,le(t.name),1),t.email?(M(),U("div",Hn,le(t.email),1)):ie("",!0),$o(t.$slots,"additional")])]),_:3})]),_:3})]))}}),Dn={key:0},Wn=A({__name:"UserNav",setup(e){const n=zo(),{t}=ve(),i=De(),{user:r}=Ce(i),o=a=>()=>l(Ge,null,{default:()=>l(a)}),d=()=>{i.logout(),n.push(L.MAIN)},c=P([{label:()=>t("header.profile"),key:1,icon:o(Xo)},{label:()=>t("header.finance"),key:2,icon:o(An)},{label:()=>t("header.settings"),key:0,icon:o(En)},{label:()=>t("header.logout"),key:3,icon:o(Bn)}]),s=b(()=>c.value.reduce((a,f)=>(r.value.role!==Mo.MODEL_ACCOUNT?f.key!==1&&f.key!==2&&a.push(f):a.push(f),a),[])),p=a=>{switch(a){case 0:n.push(L.SETTINGS);break;case 2:n.push(L.FINANCE);break;case 1:n.push(L.PROFILE+`${r.value.id}`);break;case 3:d();break}};return(a,f)=>v(r)?(M(),U("div",Dn,[B(v(On),{trigger:"click",options:v(s),onSelect:p},{default:K(()=>[B(Qe,{img:v(r).avatar,name:v(r).name},null,8,["img","name"])]),_:1},8,["options"])])):ie("",!0)}}),Vn=A({__name:"UserMenu",setup(e){const{t:n}=ve(),t=Ve(),i=[{href:t(L.WINNER_PAGE),name:n("header.winner")},{href:t(L.USERS),name:n("header.users")}];return(r,o)=>{const d=Ie("router-link");return M(),U("nav",null,[B(v(Ue),{size:0},{default:K(()=>[(M(),U(Pe,null,We(i,(c,s)=>B(d,{key:s,to:c.href},{default:K(()=>[B(v(he),{size:"small",quaternary:""},{default:K(()=>[Oo(le(c.name),1)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})])}}}),Un={class:"flex justify-center items-center z-10"},qn={key:0,class:"fixed right-0 bottom-0 left-0 top-11 bg-white dark:bg-background z-50"},Gn={class:"flex flex-col px-4 py-2 border-b"},Yn={class:"mt-2"},Xn=["href"],Zn={class:"px-4 py-2 border-b"},Jn=A({__name:"BurgerMenu",props:{userMenu:{}},setup(e){const n=e;ve();const t=De(),{user:i}=Ce(t),{userMenu:r}=Bo(n),o=P(!1),d=()=>{o.value=!o.value};return(c,s)=>{const p=Ie("n-button");return M(),U("div",Un,[B(p,{class:"transition-all flex items-center justify-center",onClick:s[0]||(s[0]=a=>d())},{default:K(()=>[(M(),Se(To(o.value?v(Fn):v(Tn))))]),_:1}),o.value?(M(),U("div",qn,[W("div",Gn,[B(Qe,{img:v(i).avatar,name:v(i).name,email:v(i).email},null,8,["img","name","email"])]),W("div",Yn,[(M(!0),U(Pe,null,We(v(r),(a,f)=>(M(),U("div",{key:f,class:"px-4 py-2 border-b text-black"},[W("a",{href:a.href,class:"text-black"},le(a.name),9,Xn)]))),128)),W("div",Zn,le(c.$t("header.logout")),1)])])):ie("",!0)])}}}),Qn={class:"sticky top-0 z-30 shadow-lg bg-white"},et={class:"max-w-[1368px] mx-auto px-2 sm:px-4"},ot={class:"flex justify-between h-10 py-4 sm:h-16 sm:py-0"},nt={class:"flex gap-2"},tt={class:"shrink-0 flex items-center"},rt=W("div",{class:"font-extrabold text-slate-600 text-lg md:text-2xl dark:text-white"}," ★ Bikini Star ",-1),it={key:0,class:"ml-3 flex items-center gap-3"},at={class:"flex items-center gap-2"},St=A({__name:"index",setup(e){const{t:n}=ve(),t=Ve(),i=[{href:t(L.BLOG),name:n("header.blog")},{href:t(L.BOX),name:n("header.box")},{href:t(L.SETTINGS),name:n("header.settings")},{href:t(L.FINANCE),name:n("header.finance")},{href:t(L.PORTFOLIO),name:n("header.portfolio")}],r=Eo(),{isMobile:o,isBeta:d}=Ce(r);return(c,s)=>{const p=ro,a=Ie("router-link");return M(),U("div",Qn,[W("div",et,[W("div",ot,[W("div",nt,[W("div",tt,[B(p,{to:v(t)(v(L).ACTIVE_CONTEST),class:"no-underline cursor-pointer"},{default:K(()=>[rt]),_:1},8,["to"])]),v(o)?ie("",!0):(M(),U("div",it,[B(Vn)]))]),W("div",at,[B(a,{to:v(t)(v(L).FAVORITES)},{default:K(()=>[B(v(he),{quaternary:"",size:"medium"},{default:K(()=>[B(v(gn),{value:v(r).favouritesCount},{default:K(()=>[B(v(Zo))]),_:1},8,["value"])]),_:1})]),_:1},8,["to"]),B(a,{to:v(t)(v(L).MESSENGER)},{default:K(()=>[B(v(he),{quaternary:"",size:"medium"},{default:K(()=>[B(v(Jo))]),_:1})]),_:1},8,["to"]),v(o)?ie("",!0):(M(),Se(Wn,{key:0,"user-menu":i})),v(o)?(M(),Se(Jn,{key:1,"user-menu":i})):ie("",!0)])])])])}}});export{St as _};
