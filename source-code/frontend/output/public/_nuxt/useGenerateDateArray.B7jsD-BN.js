import{H as qe,r as p,aM as _t,a6 as nt,ay as ot,O as i,b3 as zt,aH as lt,n as rt,q as le,E as ce,B as x,C as A,G as Ye,D as re,I as Me,z as it,K as kt,x as ie,L as V,h as Te,f as Et,M as at,b4 as Dt,F as Wt,aY as Oe,P as Ge,b0 as Je,b5 as Vt,u as Lt,b6 as jt,av as Ut,at as Nt,au as Ht,b7 as Qe,aA as Kt,b8 as qt,A as q}from"./entry.CG_TRq2h.js";import{u as Yt,g as Xe,i as Gt,N as Jt,c as Qt,a as Xt,p as Ne,f as Zt,b as en}from"./utils.GNf0CpVE.js";import{c as tn,a as nn,p as on,N as ln,u as Ze,b as rn,d as an,e as Ke,V as sn,f as dn,g as un}from"./Popover.kNcz0EWB.js";import{c as cn}from"./FormItem.fVJn9FXN.js";import{N as He}from"./Tag.ZofvLqMF.js";import{h as et}from"./happens-in.HIJlj3JZ.js";import{c as st}from"./createLucideIcon.tvnkQhua.js";const Y="v-hidden",hn=nn("[v-hidden]",{display:"none!important"}),tt=qe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:m}){const B=p(null),b=p(null);function s(R){const{value:r}=B,{getCounter:S,getTail:y}=e;let f;if(S!==void 0?f=S():f=b.value,!r||!f)return;f.hasAttribute(Y)&&f.removeAttribute(Y);const{children:z}=r;if(R.showAllItemsBeforeCalculate)for(const w of z)w.hasAttribute(Y)&&w.removeAttribute(Y);const k=r.offsetWidth,_=[],g=m.tail?y==null?void 0:y():null;let v=g?g.offsetWidth:0,E=!1;const O=r.children.length-(m.tail?1:0);for(let w=0;w<O-1;++w){if(w<0)continue;const W=z[w];if(E){W.hasAttribute(Y)||W.setAttribute(Y,"");continue}else W.hasAttribute(Y)&&W.removeAttribute(Y);const D=W.offsetWidth;if(v+=D,_[w]=D,v>k){const{updateCounter:F}=e;for(let C=w;C>=0;--C){const L=O-1-C;F!==void 0?F(L):f.textContent=`${L}`;const j=f.offsetWidth;if(v-=_[C],v+j<=k||C===0){E=!0,w=C-1,g&&(w===-1?(g.style.maxWidth=`${k-j}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:H}=e;H&&H(L);break}}}}const{onUpdateOverflow:P}=e;E?P!==void 0&&P(!0):(P!==void 0&&P(!1),f.setAttribute(Y,""))}const M=_t();return hn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:tn,ssr:M}),nt(()=>s({showAllItemsBeforeCalculate:!1})),{selfRef:B,counterRef:b,sync:s}},render(){const{$slots:e}=this;return ot(()=>this.sync({showAllItemsBeforeCalculate:!1})),i("div",{class:"v-overflow",ref:"selfRef"},[zt(e,"default"),e.counter?e.counter():i("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),fn={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},vn=e=>{const{borderRadius:m,textColor2:B,textColorDisabled:b,inputColor:s,inputColorDisabled:M,primaryColor:R,primaryColorHover:r,warningColor:S,warningColorHover:y,errorColor:f,errorColorHover:z,borderColor:k,iconColor:_,iconColorDisabled:g,clearColor:v,clearColorHover:E,clearColorPressed:O,placeholderColor:P,placeholderColorDisabled:w,fontSizeTiny:W,fontSizeSmall:D,fontSizeMedium:F,fontSizeLarge:C,heightTiny:L,heightSmall:j,heightMedium:H,heightLarge:J}=e;return Object.assign(Object.assign({},fn),{fontSizeTiny:W,fontSizeSmall:D,fontSizeMedium:F,fontSizeLarge:C,heightTiny:L,heightSmall:j,heightMedium:H,heightLarge:J,borderRadius:m,textColor:B,textColorDisabled:b,placeholderColor:P,placeholderColorDisabled:w,color:s,colorDisabled:M,colorActive:s,border:`1px solid ${k}`,borderHover:`1px solid ${r}`,borderActive:`1px solid ${R}`,borderFocus:`1px solid ${r}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${le(R,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${le(R,{alpha:.2})}`,caretColor:R,arrowColor:_,arrowColorDisabled:g,loadingColor:R,borderWarning:`1px solid ${S}`,borderHoverWarning:`1px solid ${y}`,borderActiveWarning:`1px solid ${S}`,borderFocusWarning:`1px solid ${y}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${le(S,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${le(S,{alpha:.2})}`,colorActiveWarning:s,caretColorWarning:S,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${z}`,borderActiveError:`1px solid ${f}`,borderFocusError:`1px solid ${z}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${le(f,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${le(f,{alpha:.2})}`,colorActiveError:s,caretColorError:f,clearColor:v,clearColorHover:E,clearColorPressed:O})},bn=lt({name:"InternalSelection",common:rt,peers:{Popover:on},self:vn}),dt=bn,gn=ce([x("base-selection",`
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
 `)]),Ye("disabled",[ce("&:hover",[A("state-border",`
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
 `)]),["warning","error"].map(e=>re(`${e}-status`,[A("state-border",`border: var(--n-border-${e});`),Ye("disabled",[ce("&:hover",[A("state-border",`
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
 `)])])]),pn=qe({name:"InternalSelection",props:Object.assign(Object.assign({},Me.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:m,mergedRtlRef:B}=it(e),b=kt("InternalSelection",B,m),s=p(null),M=p(null),R=p(null),r=p(null),S=p(null),y=p(null),f=p(null),z=p(null),k=p(null),_=p(null),g=p(!1),v=p(!1),E=p(!1),O=Me("InternalSelection","-internal-selection",gn,dt,e,ie(e,"clsPrefix")),P=V(()=>e.clearable&&!e.disabled&&(E.value||e.active)),w=V(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),W=V(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),D=V(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function F(){var n;const{value:l}=s;if(l){const{value:T}=M;T&&(T.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=k.value)===null||n===void 0||n.sync({showAllItemsBeforeCalculate:!1})))}}function C(){const{value:n}=_;n&&(n.style.display="none")}function L(){const{value:n}=_;n&&(n.style.display="inline-block")}Te(ie(e,"active"),n=>{n||C()}),Te(ie(e,"pattern"),()=>{e.multiple&&ot(F)});function j(n){const{onFocus:l}=e;l&&l(n)}function H(n){const{onBlur:l}=e;l&&l(n)}function J(n){const{onDeleteOption:l}=e;l&&l(n)}function ee(n){const{onClear:l}=e;l&&l(n)}function $(n){const{onPatternInput:l}=e;l&&l(n)}function he(n){var l;(!n.relatedTarget||!(!((l=R.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&j(n)}function fe(n){var l;!((l=R.value)===null||l===void 0)&&l.contains(n.relatedTarget)||H(n)}function te(n){ee(n)}function Re(){E.value=!0}function ne(){E.value=!1}function Pe(n){!e.active||!e.filterable||n.target!==M.value&&n.preventDefault()}function Q(n){J(n)}function ve(n){if(n.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&Q(l[l.length-1])}}const X=p(!1);let ae=null;function $e(n){const{value:l}=s;if(l){const T=n.target.value;l.textContent=T,F()}e.ignoreComposition&&X.value?ae=n:$(n)}function Ie(){X.value=!0}function be(){X.value=!1,e.ignoreComposition&&$(ae),ae=null}function ge(n){var l;v.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function Z(n){var l;v.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function U(){var n,l;if(e.filterable)v.value=!1,(n=y.value)===null||n===void 0||n.blur(),(l=M.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:T}=r;T==null||T.blur()}else{const{value:T}=S;T==null||T.blur()}}function pe(){var n,l,T;e.filterable?(v.value=!1,(n=y.value)===null||n===void 0||n.focus()):e.multiple?(l=r.value)===null||l===void 0||l.focus():(T=S.value)===null||T===void 0||T.focus()}function oe(){const{value:n}=M;n&&(L(),n.focus())}function Ae(){const{value:n}=M;n&&n.blur()}function Be(n){const{value:l}=f;l&&l.setTextContent(`+${n}`)}function _e(){const{value:n}=z;return n}function ze(){return M.value}let se=null;function de(){se!==null&&window.clearTimeout(se)}function ke(){e.active||(de(),se=window.setTimeout(()=>{D.value&&(g.value=!0)},100))}function Ee(){de()}function De(n){n||(de(),g.value=!1)}Te(D,n=>{n||(g.value=!1)}),nt(()=>{Et(()=>{const n=y.value;n&&(e.disabled?n.removeAttribute("tabindex"):n.tabIndex=v.value?-1:0)})}),Yt(R,e.onResize);const{inlineThemeDisabled:me}=e,ue=V(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:T,color:We,placeholderColor:Ve,textColor:we,paddingSingle:xe,paddingMultiple:Ce,caretColor:Le,colorDisabled:je,textColorDisabled:ye,placeholderColorDisabled:G,colorActive:t,boxShadowFocus:o,boxShadowActive:a,boxShadowHover:h,border:u,borderFocus:d,borderHover:c,borderActive:I,arrowColor:K,arrowColorDisabled:Ue,loadingColor:ut,colorActiveWarning:ct,boxShadowFocusWarning:ht,boxShadowActiveWarning:ft,boxShadowHoverWarning:vt,borderWarning:bt,borderFocusWarning:gt,borderHoverWarning:pt,borderActiveWarning:mt,colorActiveError:wt,boxShadowFocusError:xt,boxShadowActiveError:Ct,boxShadowHoverError:yt,borderError:Ft,borderFocusError:St,borderHoverError:Ot,borderActiveError:Tt,clearColor:Mt,clearColorHover:Rt,clearColorPressed:Pt,clearSize:$t,arrowSize:It,[Ge("height",n)]:At,[Ge("fontSize",n)]:Bt}}=O.value,Fe=Je(xe),Se=Je(Ce);return{"--n-bezier":l,"--n-border":u,"--n-border-active":I,"--n-border-focus":d,"--n-border-hover":c,"--n-border-radius":T,"--n-box-shadow-active":a,"--n-box-shadow-focus":o,"--n-box-shadow-hover":h,"--n-caret-color":Le,"--n-color":We,"--n-color-active":t,"--n-color-disabled":je,"--n-font-size":Bt,"--n-height":At,"--n-padding-single-top":Fe.top,"--n-padding-multiple-top":Se.top,"--n-padding-single-right":Fe.right,"--n-padding-multiple-right":Se.right,"--n-padding-single-left":Fe.left,"--n-padding-multiple-left":Se.left,"--n-padding-single-bottom":Fe.bottom,"--n-padding-multiple-bottom":Se.bottom,"--n-placeholder-color":Ve,"--n-placeholder-color-disabled":G,"--n-text-color":we,"--n-text-color-disabled":ye,"--n-arrow-color":K,"--n-arrow-color-disabled":Ue,"--n-loading-color":ut,"--n-color-active-warning":ct,"--n-box-shadow-focus-warning":ht,"--n-box-shadow-active-warning":ft,"--n-box-shadow-hover-warning":vt,"--n-border-warning":bt,"--n-border-focus-warning":gt,"--n-border-hover-warning":pt,"--n-border-active-warning":mt,"--n-color-active-error":wt,"--n-box-shadow-focus-error":xt,"--n-box-shadow-active-error":Ct,"--n-box-shadow-hover-error":yt,"--n-border-error":Ft,"--n-border-focus-error":St,"--n-border-hover-error":Ot,"--n-border-active-error":Tt,"--n-clear-size":$t,"--n-clear-color":Mt,"--n-clear-color-hover":Rt,"--n-clear-color-pressed":Pt,"--n-arrow-size":It}}),N=me?at("internal-selection",V(()=>e.size[0]),ue,e):void 0;return{mergedTheme:O,mergedClearable:P,mergedClsPrefix:m,rtlEnabled:b,patternInputFocused:v,filterablePlaceholder:w,label:W,selected:D,showTagsPanel:g,isComposing:X,counterRef:f,counterWrapperRef:z,patternInputMirrorRef:s,patternInputRef:M,selfRef:R,multipleElRef:r,singleElRef:S,patternInputWrapperRef:y,overflowRef:k,inputTagElRef:_,handleMouseDown:Pe,handleFocusin:he,handleClear:te,handleMouseEnter:Re,handleMouseLeave:ne,handleDeleteOption:Q,handlePatternKeyDown:ve,handlePatternInputInput:$e,handlePatternInputBlur:Z,handlePatternInputFocus:ge,handleMouseEnterCounter:ke,handleMouseLeaveCounter:Ee,handleFocusout:fe,handleCompositionEnd:be,handleCompositionStart:Ie,onPopoverUpdateShow:De,focus:pe,focusInput:oe,blur:U,blurInput:Ae,updateCounter:Be,getCounter:_e,getTail:ze,renderLabel:e.renderLabel,cssVars:me?void 0:ue,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{status:e,multiple:m,size:B,disabled:b,filterable:s,maxTagCount:M,bordered:R,clsPrefix:r,ellipsisTagPopoverProps:S,onRender:y,renderTag:f,renderLabel:z}=this;y==null||y();const k=M==="responsive",_=typeof M=="number",g=k||_,v=i(Dt,null,{default:()=>i(cn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var O,P;return(P=(O=this.$slots).arrow)===null||P===void 0?void 0:P.call(O)}})});let E;if(m){const{labelField:O}=this,P=$=>i("div",{class:`${r}-base-selection-tag-wrapper`,key:$.value},f?f({option:$,handleClose:()=>{this.handleDeleteOption($)}}):i(He,{size:B,closable:!$.disabled,disabled:b,onClose:()=>{this.handleDeleteOption($)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>z?z($,!0):Oe($[O],$,!0)})),w=()=>(_?this.selectedOptions.slice(0,M):this.selectedOptions).map(P),W=s?i("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:b,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,D=k?()=>i("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(He,{size:B,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:b})):void 0;let F;if(_){const $=this.selectedOptions.length-M;$>0&&(F=i("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},i(He,{size:B,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:b},{default:()=>`+${$}`})))}const C=k?s?i(tt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:D,tail:()=>W}):i(tt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:D}):_&&F?w().concat(F):w(),L=g?()=>i("div",{class:`${r}-base-selection-popover`},k?w():this.selectedOptions.map(P)):void 0,j=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},S):null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,ee=s?i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},C,k?null:W,v):i("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:b?void 0:0},C,v);E=i(Wt,null,g?i(ln,Object.assign({},j,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ee,default:L}):ee,J)}else if(s){const O=this.pattern||this.isComposing,P=this.active?!O:!this.selected,w=this.active?!1:this.selected;E=i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:Xe(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:b,disabled:b,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),w?i("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},i("div",{class:`${r}-base-selection-overlay__wrapper`},f?f({option:this.selectedOption,handleClose:()=>{}}):z?z(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,P?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else E=i("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${r}-base-selection-input`,title:Xe(this.label),key:"input"},i("div",{class:`${r}-base-selection-input__content`},f?f({option:this.selectedOption,handleClose:()=>{}}):z?z(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),v);return i("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},E,R?i("div",{class:`${r}-base-selection__border`}):null,R?i("div",{class:`${r}-base-selection__state-border`}):null)}});function mn(e){const{boxShadow2:m}=e;return{menuBoxShadow:m}}const wn=lt({name:"Select",common:rt,peers:{InternalSelection:dt,InternalSelectMenu:Gt},self:mn}),xn=wn,Cn=ce([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Vt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),yn=Object.assign(Object.assign({},Me.props),{to:Ke.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),$n=qe({name:"Select",props:yn,setup(e){const{mergedClsPrefixRef:m,mergedBorderedRef:B,namespaceRef:b,inlineThemeDisabled:s}=it(e),M=Me("Select","-select",Cn,xn,e,m),R=p(e.defaultValue),r=ie(e,"value"),S=Ze(r,R),y=p(!1),f=p(""),z=V(()=>{const{valueField:t,childrenField:o}=e,a=en(t,o);return Qt(ee.value,a)}),k=V(()=>Xt(H.value,e.valueField,e.childrenField)),_=p(!1),g=Ze(ie(e,"show"),_),v=p(null),E=p(null),O=p(null),{localeRef:P}=rn("Select"),w=V(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:P.value.placeholder}),W=an(e,["items","options"]),D=[],F=p([]),C=p([]),L=p(new Map),j=V(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:o,valueField:a}=e;return h=>({[o]:String(h),[a]:h})}return t===!1?!1:o=>Object.assign(t(o),{value:o})}),H=V(()=>C.value.concat(F.value).concat(W.value)),J=V(()=>{const{filter:t}=e;if(t)return t;const{labelField:o,valueField:a}=e;return(h,u)=>{if(!u)return!1;const d=u[o];if(typeof d=="string")return Ne(h,d);const c=u[a];return typeof c=="string"?Ne(h,c):typeof c=="number"?Ne(h,String(c)):!1}}),ee=V(()=>{if(e.remote)return W.value;{const{value:t}=H,{value:o}=f;return!o.length||!e.filterable?t:Zt(t,J.value,o,e.childrenField)}});function $(t){const o=e.remote,{value:a}=L,{value:h}=k,{value:u}=j,d=[];return t.forEach(c=>{if(h.has(c))d.push(h.get(c));else if(o&&a.has(c))d.push(a.get(c));else if(u){const I=u(c);I&&d.push(I)}}),d}const he=V(()=>{if(e.multiple){const{value:t}=S;return Array.isArray(t)?$(t):[]}return null}),fe=V(()=>{const{value:t}=S;return!e.multiple&&!Array.isArray(t)?t===null?null:$([t])[0]||null:null}),te=Lt(e),{mergedSizeRef:Re,mergedDisabledRef:ne,mergedStatusRef:Pe}=te;function Q(t,o){const{onChange:a,"onUpdate:value":h,onUpdateValue:u}=e,{nTriggerFormChange:d,nTriggerFormInput:c}=te;a&&q(a,t,o),u&&q(u,t,o),h&&q(h,t,o),R.value=t,d(),c()}function ve(t){const{onBlur:o}=e,{nTriggerFormBlur:a}=te;o&&q(o,t),a()}function X(){const{onClear:t}=e;t&&q(t)}function ae(t){const{onFocus:o,showOnFocus:a}=e,{nTriggerFormFocus:h}=te;o&&q(o,t),h(),a&&Z()}function $e(t){const{onSearch:o}=e;o&&q(o,t)}function Ie(t){const{onScroll:o}=e;o&&q(o,t)}function be(){var t;const{remote:o,multiple:a}=e;if(o){const{value:h}=L;if(a){const{valueField:u}=e;(t=he.value)===null||t===void 0||t.forEach(d=>{h.set(d[u],d)})}else{const u=fe.value;u&&h.set(u[e.valueField],u)}}}function ge(t){const{onUpdateShow:o,"onUpdate:show":a}=e;o&&q(o,t),a&&q(a,t),_.value=t}function Z(){ne.value||(ge(!0),_.value=!0,e.filterable&&Ce())}function U(){ge(!1)}function pe(){f.value="",C.value=D}const oe=p(!1);function Ae(){e.filterable&&(oe.value=!0)}function Be(){e.filterable&&(oe.value=!1,g.value||pe())}function _e(){ne.value||(g.value?e.filterable?Ce():U():Z())}function ze(t){var o,a;!((a=(o=O.value)===null||o===void 0?void 0:o.selfRef)===null||a===void 0)&&a.contains(t.relatedTarget)||(y.value=!1,ve(t),U())}function se(t){ae(t),y.value=!0}function de(t){y.value=!0}function ke(t){var o;!((o=v.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(y.value=!1,ve(t),U())}function Ee(){var t;(t=v.value)===null||t===void 0||t.focus(),U()}function De(t){var o;g.value&&(!((o=v.value)===null||o===void 0)&&o.$el.contains(Kt(t))||U())}function me(t){if(!Array.isArray(t))return[];if(j.value)return Array.from(t);{const{remote:o}=e,{value:a}=k;if(o){const{value:h}=L;return t.filter(u=>a.has(u)||h.has(u))}else return t.filter(h=>a.has(h))}}function ue(t){N(t.rawNode)}function N(t){if(ne.value)return;const{tag:o,remote:a,clearFilterAfterSelect:h,valueField:u}=e;if(o&&!a){const{value:d}=C,c=d[0]||null;if(c){const I=F.value;I.length?I.push(c):F.value=[c],C.value=D}}if(a&&L.value.set(t[u],t),e.multiple){const d=me(S.value),c=d.findIndex(I=>I===t[u]);if(~c){if(d.splice(c,1),o&&!a){const I=n(t[u]);~I&&(F.value.splice(I,1),h&&(f.value=""))}}else d.push(t[u]),h&&(f.value="");Q(d,$(d))}else{if(o&&!a){const d=n(t[u]);~d?F.value=[F.value[d]]:F.value=D}xe(),U(),Q(t[u],t)}}function n(t){return F.value.findIndex(a=>a[e.valueField]===t)}function l(t){g.value||Z();const{value:o}=t.target;f.value=o;const{tag:a,remote:h}=e;if($e(o),a&&!h){if(!o){C.value=D;return}const{onCreate:u}=e,d=u?u(o):{[e.labelField]:o,[e.valueField]:o},{valueField:c,labelField:I}=e;W.value.some(K=>K[c]===d[c]||K[I]===d[I])||F.value.some(K=>K[c]===d[c]||K[I]===d[I])?C.value=D:C.value=[d]}}function T(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&U(),X(),o?Q([],[]):Q(null,null)}function We(t){!et(t,"action")&&!et(t,"empty")&&t.preventDefault()}function Ve(t){Ie(t)}function we(t){var o,a,h,u,d;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((o=v.value)===null||o===void 0)&&o.isComposing)){if(g.value){const c=(a=O.value)===null||a===void 0?void 0:a.getPendingTmNode();c?ue(c):e.filterable||(U(),xe())}else if(Z(),e.tag&&oe.value){const c=C.value[0];if(c){const I=c[e.valueField],{value:K}=S;e.multiple&&Array.isArray(K)&&K.some(Ue=>Ue===I)||N(c)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;g.value&&((h=O.value)===null||h===void 0||h.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;g.value?(u=O.value)===null||u===void 0||u.next():Z();break;case"Escape":g.value&&(qt(t),U()),(d=v.value)===null||d===void 0||d.focus();break}}function xe(){var t;(t=v.value)===null||t===void 0||t.focus()}function Ce(){var t;(t=v.value)===null||t===void 0||t.focusInput()}function Le(){var t;g.value&&((t=E.value)===null||t===void 0||t.syncPosition())}be(),Te(ie(e,"options"),be);const je={focus:()=>{var t;(t=v.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=v.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=v.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=v.value)===null||t===void 0||t.blurInput()}},ye=V(()=>{const{self:{menuBoxShadow:t}}=M.value;return{"--n-menu-box-shadow":t}}),G=s?at("select",void 0,ye,e):void 0;return Object.assign(Object.assign({},je),{mergedStatus:Pe,mergedClsPrefix:m,mergedBordered:B,namespace:b,treeMate:z,isMounted:jt(),triggerRef:v,menuRef:O,pattern:f,uncontrolledShow:_,mergedShow:g,adjustedTo:Ke(e),uncontrolledValue:R,mergedValue:S,followerRef:E,localizedPlaceholder:w,selectedOption:fe,selectedOptions:he,mergedSize:Re,mergedDisabled:ne,focused:y,activeWithoutMenuOpen:oe,inlineThemeDisabled:s,onTriggerInputFocus:Ae,onTriggerInputBlur:Be,handleTriggerOrMenuResize:Le,handleMenuFocus:de,handleMenuBlur:ke,handleMenuTabOut:Ee,handleTriggerClick:_e,handleToggle:ue,handleDeleteOption:N,handlePatternInput:l,handleClear:T,handleTriggerBlur:ze,handleTriggerFocus:se,handleKeydown:we,handleMenuAfterLeave:pe,handleMenuClickOutside:De,handleMenuScroll:Ve,handleMenuKeydown:we,handleMenuMousedown:We,mergedTheme:M,cssVars:s?void 0:ye,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(sn,null,{default:()=>[i(dn,null,{default:()=>i(pn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,m;return[(m=(e=this.$slots).arrow)===null||m===void 0?void 0:m.call(e)]}})}),i(un,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ke.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(Ut,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,m,B;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Nt(i(Jt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(m=this.menuProps)===null||m===void 0?void 0:m.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(B=this.menuProps)===null||B===void 0?void 0:B.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var b,s;return[(s=(b=this.$slots).empty)===null||s===void 0?void 0:s.call(b)]},header:()=>{var b,s;return[(s=(b=this.$slots).header)===null||s===void 0?void 0:s.call(b)]},action:()=>{var b,s;return[(s=(b=this.$slots).action)===null||s===void 0?void 0:s.call(b)]}}),this.displayDirective==="show"?[[Ht,this.mergedShow],[Qe,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Qe,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=st("LockKeyholeIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=st("UnlockKeyholeIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);function Bn(e){let m=new Date().getFullYear()-18,B=m-e,b=[];for(var s=m;s>=B;s--)b.push({label:`${s}`,value:`${s}`});return b}export{In as L,$n as N,An as U,Bn as u};
