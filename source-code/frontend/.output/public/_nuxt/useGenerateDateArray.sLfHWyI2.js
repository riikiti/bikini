import{H as qe,r as p,aM as Bt,$ as nt,ay as ot,O as i,b4 as _t,aC as lt,n as rt,q as le,E as ce,B as x,C as A,G as Ge,D as re,I as Me,z as it,K as zt,x as ie,L as V,h as Te,f as kt,M as at,b5 as Et,F as Dt,aZ as Oe,P as Ye,b1 as Ze,aH as Wt,u as Vt,aI as Lt,av as jt,at as Nt,au as Ht,b6 as Je,aA as Ut,b7 as Kt,A as q}from"./entry.ydcKSOmp.js";import{u as qt,g as Qe,i as Gt,N as Yt,c as Zt,a as Jt,p as He,f as Qt,b as Xt}from"./utils._lHVxeKi.js";import{u as Xe}from"./use-merged-state._FoYgtTV.js";import{u as en}from"./use-locale.B4WoGKG3.js";import{c as tn,d as nn,p as on,N as ln,u as rn,e as Ke,V as an,f as sn,g as dn}from"./Popover.2SHOBVdi.js";import{c as un}from"./FormItem.YFry-03g.js";import{N as Ue}from"./Tag.LqWm2sEN.js";import{h as et}from"./happens-in.HIJlj3JZ.js";const G="v-hidden",cn=nn("[v-hidden]",{display:"none!important"}),tt=qe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:m}){const B=p(null),b=p(null);function s(R){const{value:r}=B,{getCounter:S,getTail:y}=e;let f;if(S!==void 0?f=S():f=b.value,!r||!f)return;f.hasAttribute(G)&&f.removeAttribute(G);const{children:z}=r;if(R.showAllItemsBeforeCalculate)for(const w of z)w.hasAttribute(G)&&w.removeAttribute(G);const k=r.offsetWidth,_=[],g=m.tail?y==null?void 0:y():null;let v=g?g.offsetWidth:0,E=!1;const O=r.children.length-(m.tail?1:0);for(let w=0;w<O-1;++w){if(w<0)continue;const W=z[w];if(E){W.hasAttribute(G)||W.setAttribute(G,"");continue}else W.hasAttribute(G)&&W.removeAttribute(G);const D=W.offsetWidth;if(v+=D,_[w]=D,v>k){const{updateCounter:F}=e;for(let C=w;C>=0;--C){const L=O-1-C;F!==void 0?F(L):f.textContent=`${L}`;const j=f.offsetWidth;if(v-=_[C],v+j<=k||C===0){E=!0,w=C-1,g&&(w===-1?(g.style.maxWidth=`${k-j}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:U}=e;U&&U(L);break}}}}const{onUpdateOverflow:P}=e;E?P!==void 0&&P(!0):(P!==void 0&&P(!1),f.setAttribute(G,""))}const M=Bt();return cn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:tn,ssr:M}),nt(()=>s({showAllItemsBeforeCalculate:!1})),{selfRef:B,counterRef:b,sync:s}},render(){const{$slots:e}=this;return ot(()=>this.sync({showAllItemsBeforeCalculate:!1})),i("div",{class:"v-overflow",ref:"selfRef"},[_t(e,"default"),e.counter?e.counter():i("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),hn={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},fn=e=>{const{borderRadius:m,textColor2:B,textColorDisabled:b,inputColor:s,inputColorDisabled:M,primaryColor:R,primaryColorHover:r,warningColor:S,warningColorHover:y,errorColor:f,errorColorHover:z,borderColor:k,iconColor:_,iconColorDisabled:g,clearColor:v,clearColorHover:E,clearColorPressed:O,placeholderColor:P,placeholderColorDisabled:w,fontSizeTiny:W,fontSizeSmall:D,fontSizeMedium:F,fontSizeLarge:C,heightTiny:L,heightSmall:j,heightMedium:U,heightLarge:Z}=e;return Object.assign(Object.assign({},hn),{fontSizeTiny:W,fontSizeSmall:D,fontSizeMedium:F,fontSizeLarge:C,heightTiny:L,heightSmall:j,heightMedium:U,heightLarge:Z,borderRadius:m,textColor:B,textColorDisabled:b,placeholderColor:P,placeholderColorDisabled:w,color:s,colorDisabled:M,colorActive:s,border:`1px solid ${k}`,borderHover:`1px solid ${r}`,borderActive:`1px solid ${R}`,borderFocus:`1px solid ${r}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${le(R,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${le(R,{alpha:.2})}`,caretColor:R,arrowColor:_,arrowColorDisabled:g,loadingColor:R,borderWarning:`1px solid ${S}`,borderHoverWarning:`1px solid ${y}`,borderActiveWarning:`1px solid ${S}`,borderFocusWarning:`1px solid ${y}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${le(S,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${le(S,{alpha:.2})}`,colorActiveWarning:s,caretColorWarning:S,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${z}`,borderActiveError:`1px solid ${f}`,borderFocusError:`1px solid ${z}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${le(f,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${le(f,{alpha:.2})}`,colorActiveError:s,caretColorError:f,clearColor:v,clearColorHover:E,clearColorPressed:O})},vn=lt({name:"InternalSelection",common:rt,peers:{Popover:on},self:fn}),st=vn,bn=ce([x("base-selection",`
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
 `,[x("base-loading",`
 color: var(--n-loading-color);
 `),x("base-selection-tags","min-height: var(--n-height);"),A("border, state-border",`
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
 `),A("state-border",`
 z-index: 1;
 border-color: #0000;
 `),x("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[A("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),x("base-selection-overlay",`
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
 `,[A("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),x("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[A("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),x("base-selection-tags",`
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
 `),x("base-selection-label",`
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
 `,[x("base-selection-input",`
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
 `,[A("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),A("render-label",`
 color: var(--n-text-color);
 `)]),Ge("disabled",[ce("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),re("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),re("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),x("base-selection-label","background-color: var(--n-color-active);"),x("base-selection-tags","background-color: var(--n-color-active);")])]),re("disabled","cursor: not-allowed;",[A("arrow",`
 color: var(--n-arrow-color-disabled);
 `),x("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),A("render-label",`
 color: var(--n-text-color-disabled);
 `)]),x("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),x("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),x("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[A("input",`
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
 `),A("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>re(`${e}-status`,[A("state-border",`border: var(--n-border-${e});`),Ge("disabled",[ce("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),re("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),x("base-selection-label",`background-color: var(--n-color-active-${e});`),x("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),re("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),x("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),x("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ce("&:last-child","padding-right: 0;"),x("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[A("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),gn=qe({name:"InternalSelection",props:Object.assign(Object.assign({},Me.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:m,mergedRtlRef:B}=it(e),b=zt("InternalSelection",B,m),s=p(null),M=p(null),R=p(null),r=p(null),S=p(null),y=p(null),f=p(null),z=p(null),k=p(null),_=p(null),g=p(!1),v=p(!1),E=p(!1),O=Me("InternalSelection","-internal-selection",bn,st,e,ie(e,"clsPrefix")),P=V(()=>e.clearable&&!e.disabled&&(E.value||e.active)),w=V(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),W=V(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),D=V(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function F(){var n;const{value:l}=s;if(l){const{value:T}=M;T&&(T.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=k.value)===null||n===void 0||n.sync({showAllItemsBeforeCalculate:!1})))}}function C(){const{value:n}=_;n&&(n.style.display="none")}function L(){const{value:n}=_;n&&(n.style.display="inline-block")}Te(ie(e,"active"),n=>{n||C()}),Te(ie(e,"pattern"),()=>{e.multiple&&ot(F)});function j(n){const{onFocus:l}=e;l&&l(n)}function U(n){const{onBlur:l}=e;l&&l(n)}function Z(n){const{onDeleteOption:l}=e;l&&l(n)}function ee(n){const{onClear:l}=e;l&&l(n)}function $(n){const{onPatternInput:l}=e;l&&l(n)}function he(n){var l;(!n.relatedTarget||!(!((l=R.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&j(n)}function fe(n){var l;!((l=R.value)===null||l===void 0)&&l.contains(n.relatedTarget)||U(n)}function te(n){ee(n)}function Re(){E.value=!0}function ne(){E.value=!1}function Pe(n){!e.active||!e.filterable||n.target!==M.value&&n.preventDefault()}function J(n){Z(n)}function ve(n){if(n.key==="Backspace"&&!Q.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&J(l[l.length-1])}}const Q=p(!1);let ae=null;function $e(n){const{value:l}=s;if(l){const T=n.target.value;l.textContent=T,F()}e.ignoreComposition&&Q.value?ae=n:$(n)}function Ie(){Q.value=!0}function be(){Q.value=!1,e.ignoreComposition&&$(ae),ae=null}function ge(n){var l;v.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function X(n){var l;v.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function N(){var n,l;if(e.filterable)v.value=!1,(n=y.value)===null||n===void 0||n.blur(),(l=M.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:T}=r;T==null||T.blur()}else{const{value:T}=S;T==null||T.blur()}}function pe(){var n,l,T;e.filterable?(v.value=!1,(n=y.value)===null||n===void 0||n.focus()):e.multiple?(l=r.value)===null||l===void 0||l.focus():(T=S.value)===null||T===void 0||T.focus()}function oe(){const{value:n}=M;n&&(L(),n.focus())}function Ae(){const{value:n}=M;n&&n.blur()}function Be(n){const{value:l}=f;l&&l.setTextContent(`+${n}`)}function _e(){const{value:n}=z;return n}function ze(){return M.value}let se=null;function de(){se!==null&&window.clearTimeout(se)}function ke(){e.active||(de(),se=window.setTimeout(()=>{D.value&&(g.value=!0)},100))}function Ee(){de()}function De(n){n||(de(),g.value=!1)}Te(D,n=>{n||(g.value=!1)}),nt(()=>{kt(()=>{const n=y.value;n&&(e.disabled?n.removeAttribute("tabindex"):n.tabIndex=v.value?-1:0)})}),qt(R,e.onResize);const{inlineThemeDisabled:me}=e,ue=V(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:T,color:We,placeholderColor:Ve,textColor:we,paddingSingle:xe,paddingMultiple:Ce,caretColor:Le,colorDisabled:je,textColorDisabled:ye,placeholderColorDisabled:Y,colorActive:t,boxShadowFocus:o,boxShadowActive:a,boxShadowHover:h,border:u,borderFocus:d,borderHover:c,borderActive:I,arrowColor:K,arrowColorDisabled:Ne,loadingColor:dt,colorActiveWarning:ut,boxShadowFocusWarning:ct,boxShadowActiveWarning:ht,boxShadowHoverWarning:ft,borderWarning:vt,borderFocusWarning:bt,borderHoverWarning:gt,borderActiveWarning:pt,colorActiveError:mt,boxShadowFocusError:wt,boxShadowActiveError:xt,boxShadowHoverError:Ct,borderError:yt,borderFocusError:Ft,borderHoverError:St,borderActiveError:Ot,clearColor:Tt,clearColorHover:Mt,clearColorPressed:Rt,clearSize:Pt,arrowSize:$t,[Ye("height",n)]:It,[Ye("fontSize",n)]:At}}=O.value,Fe=Ze(xe),Se=Ze(Ce);return{"--n-bezier":l,"--n-border":u,"--n-border-active":I,"--n-border-focus":d,"--n-border-hover":c,"--n-border-radius":T,"--n-box-shadow-active":a,"--n-box-shadow-focus":o,"--n-box-shadow-hover":h,"--n-caret-color":Le,"--n-color":We,"--n-color-active":t,"--n-color-disabled":je,"--n-font-size":At,"--n-height":It,"--n-padding-single-top":Fe.top,"--n-padding-multiple-top":Se.top,"--n-padding-single-right":Fe.right,"--n-padding-multiple-right":Se.right,"--n-padding-single-left":Fe.left,"--n-padding-multiple-left":Se.left,"--n-padding-single-bottom":Fe.bottom,"--n-padding-multiple-bottom":Se.bottom,"--n-placeholder-color":Ve,"--n-placeholder-color-disabled":Y,"--n-text-color":we,"--n-text-color-disabled":ye,"--n-arrow-color":K,"--n-arrow-color-disabled":Ne,"--n-loading-color":dt,"--n-color-active-warning":ut,"--n-box-shadow-focus-warning":ct,"--n-box-shadow-active-warning":ht,"--n-box-shadow-hover-warning":ft,"--n-border-warning":vt,"--n-border-focus-warning":bt,"--n-border-hover-warning":gt,"--n-border-active-warning":pt,"--n-color-active-error":mt,"--n-box-shadow-focus-error":wt,"--n-box-shadow-active-error":xt,"--n-box-shadow-hover-error":Ct,"--n-border-error":yt,"--n-border-focus-error":Ft,"--n-border-hover-error":St,"--n-border-active-error":Ot,"--n-clear-size":Pt,"--n-clear-color":Tt,"--n-clear-color-hover":Mt,"--n-clear-color-pressed":Rt,"--n-arrow-size":$t}}),H=me?at("internal-selection",V(()=>e.size[0]),ue,e):void 0;return{mergedTheme:O,mergedClearable:P,mergedClsPrefix:m,rtlEnabled:b,patternInputFocused:v,filterablePlaceholder:w,label:W,selected:D,showTagsPanel:g,isComposing:Q,counterRef:f,counterWrapperRef:z,patternInputMirrorRef:s,patternInputRef:M,selfRef:R,multipleElRef:r,singleElRef:S,patternInputWrapperRef:y,overflowRef:k,inputTagElRef:_,handleMouseDown:Pe,handleFocusin:he,handleClear:te,handleMouseEnter:Re,handleMouseLeave:ne,handleDeleteOption:J,handlePatternKeyDown:ve,handlePatternInputInput:$e,handlePatternInputBlur:X,handlePatternInputFocus:ge,handleMouseEnterCounter:ke,handleMouseLeaveCounter:Ee,handleFocusout:fe,handleCompositionEnd:be,handleCompositionStart:Ie,onPopoverUpdateShow:De,focus:pe,focusInput:oe,blur:N,blurInput:Ae,updateCounter:Be,getCounter:_e,getTail:ze,renderLabel:e.renderLabel,cssVars:me?void 0:ue,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{status:e,multiple:m,size:B,disabled:b,filterable:s,maxTagCount:M,bordered:R,clsPrefix:r,ellipsisTagPopoverProps:S,onRender:y,renderTag:f,renderLabel:z}=this;y==null||y();const k=M==="responsive",_=typeof M=="number",g=k||_,v=i(Et,null,{default:()=>i(un,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var O,P;return(P=(O=this.$slots).arrow)===null||P===void 0?void 0:P.call(O)}})});let E;if(m){const{labelField:O}=this,P=$=>i("div",{class:`${r}-base-selection-tag-wrapper`,key:$.value},f?f({option:$,handleClose:()=>{this.handleDeleteOption($)}}):i(Ue,{size:B,closable:!$.disabled,disabled:b,onClose:()=>{this.handleDeleteOption($)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>z?z($,!0):Oe($[O],$,!0)})),w=()=>(_?this.selectedOptions.slice(0,M):this.selectedOptions).map(P),W=s?i("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:b,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,D=k?()=>i("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(Ue,{size:B,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:b})):void 0;let F;if(_){const $=this.selectedOptions.length-M;$>0&&(F=i("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},i(Ue,{size:B,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:b},{default:()=>`+${$}`})))}const C=k?s?i(tt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:D,tail:()=>W}):i(tt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:D}):_&&F?w().concat(F):w(),L=g?()=>i("div",{class:`${r}-base-selection-popover`},k?w():this.selectedOptions.map(P)):void 0,j=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},S):null,Z=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,ee=s?i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},C,k?null:W,v):i("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:b?void 0:0},C,v);E=i(Dt,null,g?i(ln,Object.assign({},j,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ee,default:L}):ee,Z)}else if(s){const O=this.pattern||this.isComposing,P=this.active?!O:!this.selected,w=this.active?!1:this.selected;E=i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:Qe(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:b,disabled:b,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),w?i("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},i("div",{class:`${r}-base-selection-overlay__wrapper`},f?f({option:this.selectedOption,handleClose:()=>{}}):z?z(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,P?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else E=i("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${r}-base-selection-input`,title:Qe(this.label),key:"input"},i("div",{class:`${r}-base-selection-input__content`},f?f({option:this.selectedOption,handleClose:()=>{}}):z?z(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),v);return i("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},E,R?i("div",{class:`${r}-base-selection__border`}):null,R?i("div",{class:`${r}-base-selection__state-border`}):null)}});function pn(e){const{boxShadow2:m}=e;return{menuBoxShadow:m}}const mn=lt({name:"Select",common:rt,peers:{InternalSelection:st,InternalSelectMenu:Gt},self:pn}),wn=mn,xn=ce([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Wt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Cn=Object.assign(Object.assign({},Me.props),{to:Ke.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),$n=qe({name:"Select",props:Cn,setup(e){const{mergedClsPrefixRef:m,mergedBorderedRef:B,namespaceRef:b,inlineThemeDisabled:s}=it(e),M=Me("Select","-select",xn,wn,e,m),R=p(e.defaultValue),r=ie(e,"value"),S=Xe(r,R),y=p(!1),f=p(""),z=V(()=>{const{valueField:t,childrenField:o}=e,a=Xt(t,o);return Zt(ee.value,a)}),k=V(()=>Jt(U.value,e.valueField,e.childrenField)),_=p(!1),g=Xe(ie(e,"show"),_),v=p(null),E=p(null),O=p(null),{localeRef:P}=en("Select"),w=V(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:P.value.placeholder}),W=rn(e,["items","options"]),D=[],F=p([]),C=p([]),L=p(new Map),j=V(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:o,valueField:a}=e;return h=>({[o]:String(h),[a]:h})}return t===!1?!1:o=>Object.assign(t(o),{value:o})}),U=V(()=>C.value.concat(F.value).concat(W.value)),Z=V(()=>{const{filter:t}=e;if(t)return t;const{labelField:o,valueField:a}=e;return(h,u)=>{if(!u)return!1;const d=u[o];if(typeof d=="string")return He(h,d);const c=u[a];return typeof c=="string"?He(h,c):typeof c=="number"?He(h,String(c)):!1}}),ee=V(()=>{if(e.remote)return W.value;{const{value:t}=U,{value:o}=f;return!o.length||!e.filterable?t:Qt(t,Z.value,o,e.childrenField)}});function $(t){const o=e.remote,{value:a}=L,{value:h}=k,{value:u}=j,d=[];return t.forEach(c=>{if(h.has(c))d.push(h.get(c));else if(o&&a.has(c))d.push(a.get(c));else if(u){const I=u(c);I&&d.push(I)}}),d}const he=V(()=>{if(e.multiple){const{value:t}=S;return Array.isArray(t)?$(t):[]}return null}),fe=V(()=>{const{value:t}=S;return!e.multiple&&!Array.isArray(t)?t===null?null:$([t])[0]||null:null}),te=Vt(e),{mergedSizeRef:Re,mergedDisabledRef:ne,mergedStatusRef:Pe}=te;function J(t,o){const{onChange:a,"onUpdate:value":h,onUpdateValue:u}=e,{nTriggerFormChange:d,nTriggerFormInput:c}=te;a&&q(a,t,o),u&&q(u,t,o),h&&q(h,t,o),R.value=t,d(),c()}function ve(t){const{onBlur:o}=e,{nTriggerFormBlur:a}=te;o&&q(o,t),a()}function Q(){const{onClear:t}=e;t&&q(t)}function ae(t){const{onFocus:o,showOnFocus:a}=e,{nTriggerFormFocus:h}=te;o&&q(o,t),h(),a&&X()}function $e(t){const{onSearch:o}=e;o&&q(o,t)}function Ie(t){const{onScroll:o}=e;o&&q(o,t)}function be(){var t;const{remote:o,multiple:a}=e;if(o){const{value:h}=L;if(a){const{valueField:u}=e;(t=he.value)===null||t===void 0||t.forEach(d=>{h.set(d[u],d)})}else{const u=fe.value;u&&h.set(u[e.valueField],u)}}}function ge(t){const{onUpdateShow:o,"onUpdate:show":a}=e;o&&q(o,t),a&&q(a,t),_.value=t}function X(){ne.value||(ge(!0),_.value=!0,e.filterable&&Ce())}function N(){ge(!1)}function pe(){f.value="",C.value=D}const oe=p(!1);function Ae(){e.filterable&&(oe.value=!0)}function Be(){e.filterable&&(oe.value=!1,g.value||pe())}function _e(){ne.value||(g.value?e.filterable?Ce():N():X())}function ze(t){var o,a;!((a=(o=O.value)===null||o===void 0?void 0:o.selfRef)===null||a===void 0)&&a.contains(t.relatedTarget)||(y.value=!1,ve(t),N())}function se(t){ae(t),y.value=!0}function de(t){y.value=!0}function ke(t){var o;!((o=v.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(y.value=!1,ve(t),N())}function Ee(){var t;(t=v.value)===null||t===void 0||t.focus(),N()}function De(t){var o;g.value&&(!((o=v.value)===null||o===void 0)&&o.$el.contains(Ut(t))||N())}function me(t){if(!Array.isArray(t))return[];if(j.value)return Array.from(t);{const{remote:o}=e,{value:a}=k;if(o){const{value:h}=L;return t.filter(u=>a.has(u)||h.has(u))}else return t.filter(h=>a.has(h))}}function ue(t){H(t.rawNode)}function H(t){if(ne.value)return;const{tag:o,remote:a,clearFilterAfterSelect:h,valueField:u}=e;if(o&&!a){const{value:d}=C,c=d[0]||null;if(c){const I=F.value;I.length?I.push(c):F.value=[c],C.value=D}}if(a&&L.value.set(t[u],t),e.multiple){const d=me(S.value),c=d.findIndex(I=>I===t[u]);if(~c){if(d.splice(c,1),o&&!a){const I=n(t[u]);~I&&(F.value.splice(I,1),h&&(f.value=""))}}else d.push(t[u]),h&&(f.value="");J(d,$(d))}else{if(o&&!a){const d=n(t[u]);~d?F.value=[F.value[d]]:F.value=D}xe(),N(),J(t[u],t)}}function n(t){return F.value.findIndex(a=>a[e.valueField]===t)}function l(t){g.value||X();const{value:o}=t.target;f.value=o;const{tag:a,remote:h}=e;if($e(o),a&&!h){if(!o){C.value=D;return}const{onCreate:u}=e,d=u?u(o):{[e.labelField]:o,[e.valueField]:o},{valueField:c,labelField:I}=e;W.value.some(K=>K[c]===d[c]||K[I]===d[I])||F.value.some(K=>K[c]===d[c]||K[I]===d[I])?C.value=D:C.value=[d]}}function T(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&N(),Q(),o?J([],[]):J(null,null)}function We(t){!et(t,"action")&&!et(t,"empty")&&t.preventDefault()}function Ve(t){Ie(t)}function we(t){var o,a,h,u,d;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((o=v.value)===null||o===void 0)&&o.isComposing)){if(g.value){const c=(a=O.value)===null||a===void 0?void 0:a.getPendingTmNode();c?ue(c):e.filterable||(N(),xe())}else if(X(),e.tag&&oe.value){const c=C.value[0];if(c){const I=c[e.valueField],{value:K}=S;e.multiple&&Array.isArray(K)&&K.some(Ne=>Ne===I)||H(c)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;g.value&&((h=O.value)===null||h===void 0||h.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;g.value?(u=O.value)===null||u===void 0||u.next():X();break;case"Escape":g.value&&(Kt(t),N()),(d=v.value)===null||d===void 0||d.focus();break}}function xe(){var t;(t=v.value)===null||t===void 0||t.focus()}function Ce(){var t;(t=v.value)===null||t===void 0||t.focusInput()}function Le(){var t;g.value&&((t=E.value)===null||t===void 0||t.syncPosition())}be(),Te(ie(e,"options"),be);const je={focus:()=>{var t;(t=v.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=v.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=v.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=v.value)===null||t===void 0||t.blurInput()}},ye=V(()=>{const{self:{menuBoxShadow:t}}=M.value;return{"--n-menu-box-shadow":t}}),Y=s?at("select",void 0,ye,e):void 0;return Object.assign(Object.assign({},je),{mergedStatus:Pe,mergedClsPrefix:m,mergedBordered:B,namespace:b,treeMate:z,isMounted:Lt(),triggerRef:v,menuRef:O,pattern:f,uncontrolledShow:_,mergedShow:g,adjustedTo:Ke(e),uncontrolledValue:R,mergedValue:S,followerRef:E,localizedPlaceholder:w,selectedOption:fe,selectedOptions:he,mergedSize:Re,mergedDisabled:ne,focused:y,activeWithoutMenuOpen:oe,inlineThemeDisabled:s,onTriggerInputFocus:Ae,onTriggerInputBlur:Be,handleTriggerOrMenuResize:Le,handleMenuFocus:de,handleMenuBlur:ke,handleMenuTabOut:Ee,handleTriggerClick:_e,handleToggle:ue,handleDeleteOption:H,handlePatternInput:l,handleClear:T,handleTriggerBlur:ze,handleTriggerFocus:se,handleKeydown:we,handleMenuAfterLeave:pe,handleMenuClickOutside:De,handleMenuScroll:Ve,handleMenuKeydown:we,handleMenuMousedown:We,mergedTheme:M,cssVars:s?void 0:ye,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(an,null,{default:()=>[i(sn,null,{default:()=>i(gn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,m;return[(m=(e=this.$slots).arrow)===null||m===void 0?void 0:m.call(e)]}})}),i(dn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ke.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(jt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,m,B;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Nt(i(Yt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(m=this.menuProps)===null||m===void 0?void 0:m.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(B=this.menuProps)===null||B===void 0?void 0:B.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var b,s;return[(s=(b=this.$slots).empty)===null||s===void 0?void 0:s.call(b)]},header:()=>{var b,s;return[(s=(b=this.$slots).header)===null||s===void 0?void 0:s.call(b)]},action:()=>{var b,s;return[(s=(b=this.$slots).action)===null||s===void 0?void 0:s.call(b)]}}),this.displayDirective==="show"?[[Ht,this.mergedShow],[Je,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Je,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});function In(e){let m=new Date().getFullYear()-19,B=m-e,b=[];for(var s=m;s>=B;s--)b.push({label:`${s}`,value:`${s}`});return b}export{$n as N,In as u};
