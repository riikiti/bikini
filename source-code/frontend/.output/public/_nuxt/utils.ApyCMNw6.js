import{H as U,aM as Qe,a6 as he,l as Ze,k as et,L as _,r as D,y as ee,a$ as ce,O as y,aJ as tt,ar as pe,aK as Q,bO as me,j as ze,aH as nt,n as it,bP as ot,v as Me,aY as Le,ad as rt,av as lt,B as j,C as q,D as W,E as X,G as st,b5 as at,I as be,z as dt,K as ut,x as $,h as ye,J as Se,M as ct,Q as xe,ba as ft,bc as ht,aW as gt,ay as vt,P as J,b0 as oe}from"./entry.3g9-3dMj.js";import{c as pt,a as re,i as mt,k as ge,l as bt}from"./Popover.q8R8IhVj.js";import{e as yt,N as St}from"./Empty.xwhoN6Y-.js";import{h as ke}from"./happens-in.HIJlj3JZ.js";function dn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function le(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(i=>{i&&i(n)})}}function we(e){return e&-e}class xt{constructor(t,n){this.l=t,this.min=n;const i=new Array(t+1);for(let o=0;o<t+1;++o)i[o]=0;this.ft=i}add(t,n){if(n===0)return;const{l:i,ft:o}=this;for(t+=1;t<=i;)o[t]+=n,t+=we(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:i,l:o}=this;if(t>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=t*i;for(;t>0;)l+=n[t],t-=we(t);return l}getBound(t){let n=0,i=this.l;for(;i>n;){const o=Math.floor((n+i)/2),l=this.sum(o);if(l>t){i=o;continue}else if(l<t){if(n===o)return this.sum(n+1)<=t?n+1:o;n=o}else return o}return n}}let Z;function kt(){return typeof document>"u"?!1:(Z===void 0&&("matchMedia"in window?Z=window.matchMedia("(pointer:coarse)").matches:Z=!1),Z)}let se;function Ce(){return typeof document>"u"?1:(se===void 0&&(se="chrome"in window?window.devicePixelRatio:1),se)}const wt=re(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[re("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[re("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Ct=U({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=Qe();wt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:pt,ssr:t}),he(()=>{const{defaultScrollIndex:u,defaultScrollKey:m}=e;u!=null?p({index:u}):m!=null&&p({key:m})});let n=!1,i=!1;Ze(()=>{if(n=!1,!i){i=!0;return}p({top:b.value,left:g})}),et(()=>{n=!0,i||(i=!0)});const o=_(()=>{const u=new Map,{keyField:m}=e;return e.items.forEach((k,C)=>{u.set(k[m],C)}),u}),l=D(null),r=D(void 0),a=new Map,c=_(()=>{const{items:u,itemSize:m,keyField:k}=e,C=new xt(u.length,m);return u.forEach((z,O)=>{const P=z[k],F=a.get(P);F!==void 0&&C.add(O,F)}),C}),h=D(0);let g=0;const b=D(0),w=ee(()=>Math.max(c.value.getBound(b.value-ce(e.paddingTop))-1,0)),T=_(()=>{const{value:u}=r;if(u===void 0)return[];const{items:m,itemSize:k}=e,C=w.value,z=Math.min(C+Math.ceil(u/k+1),m.length-1),O=[];for(let P=C;P<=z;++P)O.push(m[P]);return O}),p=(u,m)=>{if(typeof u=="number"){x(u,m,"auto");return}const{left:k,top:C,index:z,key:O,position:P,behavior:F,debounce:H=!0}=u;if(k!==void 0||C!==void 0)x(k,C,F);else if(z!==void 0)S(z,F,H);else if(O!==void 0){const G=o.value.get(O);G!==void 0&&S(G,F,H)}else P==="bottom"?x(0,Number.MAX_SAFE_INTEGER,F):P==="top"&&x(0,0,F)};let N,A=null;function S(u,m,k){const{value:C}=c,z=C.sum(u)+ce(e.paddingTop);if(!k)l.value.scrollTo({left:0,top:z,behavior:m});else{N=u,A!==null&&window.clearTimeout(A),A=window.setTimeout(()=>{N=void 0,A=null},16);const{scrollTop:O,offsetHeight:P}=l.value;if(z>O){const F=C.get(u);z+F<=O+P||l.value.scrollTo({left:0,top:z+F-P,behavior:m})}else l.value.scrollTo({left:0,top:z,behavior:m})}}function x(u,m,k){l.value.scrollTo({left:u,top:m,behavior:k})}function L(u,m){var k,C,z;if(n||e.ignoreItemResize||R(m.target))return;const{value:O}=c,P=o.value.get(u),F=O.get(P),H=(z=(C=(k=m.borderBoxSize)===null||k===void 0?void 0:k[0])===null||C===void 0?void 0:C.blockSize)!==null&&z!==void 0?z:m.contentRect.height;if(H===F)return;H-e.itemSize===0?a.delete(u):a.set(u,H-e.itemSize);const V=H-F;if(V===0)return;O.add(P,V);const s=l.value;if(s!=null){if(N===void 0){const d=O.sum(P);s.scrollTop>d&&s.scrollBy(0,V)}else if(P<N)s.scrollBy(0,V);else if(P===N){const d=O.sum(P);H+d>s.scrollTop+s.offsetHeight&&s.scrollBy(0,V)}I()}h.value++}const f=!kt();let v=!1;function M(u){var m;(m=e.onScroll)===null||m===void 0||m.call(e,u),(!f||!v)&&I()}function B(u){var m;if((m=e.onWheel)===null||m===void 0||m.call(e,u),f){const k=l.value;if(k!=null){if(u.deltaX===0&&(k.scrollTop===0&&u.deltaY<=0||k.scrollTop+k.offsetHeight>=k.scrollHeight&&u.deltaY>=0))return;u.preventDefault(),k.scrollTop+=u.deltaY/Ce(),k.scrollLeft+=u.deltaX/Ce(),I(),v=!0,mt(()=>{v=!1})}}}function K(u){if(n||R(u.target)||u.contentRect.height===r.value)return;r.value=u.contentRect.height;const{onResize:m}=e;m!==void 0&&m(u)}function I(){const{value:u}=l;u!=null&&(b.value=u.scrollTop,g=u.scrollLeft)}function R(u){let m=u;for(;m!==null;){if(m.style.display==="none")return!0;m=m.parentElement}return!1}return{listHeight:r,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:_(()=>{const{itemResizable:u}=e,m=Q(c.value.sum());return h.value,[e.itemsStyle,{boxSizing:"content-box",height:u?"":m,minHeight:u?m:"",paddingTop:Q(e.paddingTop),paddingBottom:Q(e.paddingBottom)}]}),visibleItemsStyle:_(()=>(h.value,{transform:`translateY(${Q(c.value.sum(w.value))})`})),viewportItems:T,listElRef:l,itemsElRef:D(null),scrollTo:p,handleListResize:K,handleListScroll:M,handleListWheel:B,handleItemResize:L}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:i}=this;return y(pe,{onResize:this.handleListResize},{default:()=>{var o,l;return y("div",tt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?y("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[y(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(r=>{const a=r[t],c=n.get(a),h=this.$slots.default({item:r,index:c})[0];return e?y(pe,{key:a,onResize:g=>this.handleItemResize(a,g)},{default:()=>h}):(h.key=a,h)})})]):(l=(o=this.$slots).empty)===null||l===void 0?void 0:l.call(o)])}})}});function Tt(e,t){t&&(he(()=>{const{value:n}=e;n&&me.registerHandler(n,t)}),ze(()=>{const{value:n}=e;n&&me.unregisterHandler(n)}))}const Nt=U({name:"Checkmark",render(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Rt=U({props:{onFocus:Function,onBlur:Function},setup(e){return()=>y("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Te(e){return Array.isArray(e)?e:[e]}const fe={STOP:"STOP"};function Oe(e,t){const n=t(e);e.children!==void 0&&n!==fe.STOP&&e.children.forEach(i=>Oe(i,t))}function Pt(e,t={}){const{preserveGroup:n=!1}=t,i=[],o=n?r=>{r.isLeaf||(i.push(r.key),l(r.children))}:r=>{r.isLeaf||(r.isGroup||i.push(r.key),l(r.children))};function l(r){r.forEach(o)}return l(e),i}function zt(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Mt(e){return e.children}function Lt(e){return e.key}function Ot(){return!1}function Ft(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Et(e){return e.disabled===!0}function It(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function ae(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function de(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function At(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)||n.add(i)}),Array.from(n)}function Kt(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)&&n.delete(i)}),Array.from(n)}function Bt(e){return(e==null?void 0:e.type)==="group"}function _t(e){const t=new Map;return e.forEach((n,i)=>{t.set(n.key,i)}),n=>{var i;return(i=t.get(n))!==null&&i!==void 0?i:null}}class Ht extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Gt(e,t,n,i){return te(t.concat(e),n,i,!1)}function $t(e,t){const n=new Set;return e.forEach(i=>{const o=t.treeNodeMap.get(i);if(o!==void 0){let l=o.parent;for(;l!==null&&!(l.disabled||n.has(l.key));)n.add(l.key),l=l.parent}}),n}function Dt(e,t,n,i){const o=te(t,n,i,!1),l=te(e,n,i,!0),r=$t(e,n),a=[];return o.forEach(c=>{(l.has(c)||r.has(c))&&a.push(c)}),a.forEach(c=>o.delete(c)),o}function ue(e,t){const{checkedKeys:n,keysToCheck:i,keysToUncheck:o,indeterminateKeys:l,cascade:r,leafOnly:a,checkStrategy:c,allowNotLoaded:h}=e;if(!r)return i!==void 0?{checkedKeys:At(n,i),indeterminateKeys:Array.from(l)}:o!==void 0?{checkedKeys:Kt(n,o),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:g}=t;let b;o!==void 0?b=Dt(o,n,t,h):i!==void 0?b=Gt(i,n,t,h):b=te(n,t,h,!1);const w=c==="parent",T=c==="child"||a,p=b,N=new Set,A=Math.max.apply(null,Array.from(g.keys()));for(let S=A;S>=0;S-=1){const x=S===0,L=g.get(S);for(const f of L){if(f.isLeaf)continue;const{key:v,shallowLoaded:M}=f;if(T&&M&&f.children.forEach(R=>{!R.disabled&&!R.isLeaf&&R.shallowLoaded&&p.has(R.key)&&p.delete(R.key)}),f.disabled||!M)continue;let B=!0,K=!1,I=!0;for(const R of f.children){const u=R.key;if(!R.disabled){if(I&&(I=!1),p.has(u))K=!0;else if(N.has(u)){K=!0,B=!1;break}else if(B=!1,K)break}}B&&!I?(w&&f.children.forEach(R=>{!R.disabled&&p.has(R.key)&&p.delete(R.key)}),p.add(v)):K&&N.add(v),x&&T&&p.has(v)&&p.delete(v)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(N)}}function te(e,t,n,i){const{treeNodeMap:o,getChildren:l}=t,r=new Set,a=new Set(e);return e.forEach(c=>{const h=o.get(c);h!==void 0&&Oe(h,g=>{if(g.disabled)return fe.STOP;const{key:b}=g;if(!r.has(b)&&(r.add(b),a.add(b),It(g.rawNode,l))){if(i)return fe.STOP;if(!n)throw new Ht}})}),a}function jt(e,{includeGroup:t=!1,includeSelf:n=!0},i){var o;const l=i.treeNodeMap;let r=e==null?null:(o=l.get(e))!==null&&o!==void 0?o:null;const a={keyPath:[],treeNodePath:[],treeNode:r};if(r!=null&&r.ignored)return a.treeNode=null,a;for(;r;)!r.ignored&&(t||!r.isGroup)&&a.treeNodePath.push(r),r=r.parent;return a.treeNodePath.reverse(),n||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(c=>c.key),a}function Vt(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Wt(e,t){const n=e.siblings,i=n.length,{index:o}=e;return t?n[(o+1)%i]:o===n.length-1?null:n[o+1]}function Ne(e,t,{loop:n=!1,includeDisabled:i=!1}={}){const o=t==="prev"?qt:Wt,l={reverse:t==="prev"};let r=!1,a=null;function c(h){if(h!==null){if(h===e){if(!r)r=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!h.disabled||i)&&!h.ignored&&!h.isGroup){a=h;return}if(h.isGroup){const g=ve(h,l);g!==null?a=g:c(o(h,n))}else{const g=o(h,!1);if(g!==null)c(g);else{const b=Ut(h);b!=null&&b.isGroup?c(o(b,n)):n&&c(o(h,!0))}}}}return c(e),a}function qt(e,t){const n=e.siblings,i=n.length,{index:o}=e;return t?n[(o-1+i)%i]:o===0?null:n[o-1]}function Ut(e){return e.parent}function ve(e,t={}){const{reverse:n=!1}=t,{children:i}=e;if(i){const{length:o}=i,l=n?o-1:0,r=n?-1:o,a=n?-1:1;for(let c=l;c!==r;c+=a){const h=i[c];if(!h.disabled&&!h.ignored)if(h.isGroup){const g=ve(h,t);if(g!==null)return g}else return h}}return null}const Yt={getChild(){return this.ignored?null:ve(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Ne(this,"next",e)},getPrev(e={}){return Ne(this,"prev",e)}};function Xt(e,t){const n=t?new Set(t):void 0,i=[];function o(l){l.forEach(r=>{i.push(r),!(r.isLeaf||!r.children||r.ignored)&&(r.isGroup||n===void 0||n.has(r.key))&&o(r.children)})}return o(e),i}function Jt(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Fe(e,t,n,i,o,l=null,r=0){const a=[];return e.forEach((c,h)=>{var g;const b=Object.create(i);if(b.rawNode=c,b.siblings=a,b.level=r,b.index=h,b.isFirstChild=h===0,b.isLastChild=h+1===e.length,b.parent=l,!b.ignored){const w=o(c);Array.isArray(w)&&(b.children=Fe(w,t,n,i,o,b,r+1))}a.push(b),t.set(b.key,b),n.has(r)||n.set(r,[]),(g=n.get(r))===null||g===void 0||g.push(b)}),a}function un(e,t={}){var n;const i=new Map,o=new Map,{getDisabled:l=Et,getIgnored:r=Ot,getIsGroup:a=Bt,getKey:c=Lt}=t,h=(n=t.getChildren)!==null&&n!==void 0?n:Mt,g=t.ignoreEmptyChildren?f=>{const v=h(f);return Array.isArray(v)?v.length?v:null:v}:h,b=Object.assign({get key(){return c(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return zt(this.rawNode,g)},get shallowLoaded(){return Ft(this.rawNode,g)},get ignored(){return r(this.rawNode)},contains(f){return Jt(this,f)}},Yt),w=Fe(e,i,o,b,g);function T(f){if(f==null)return null;const v=i.get(f);return v&&!v.isGroup&&!v.ignored?v:null}function p(f){if(f==null)return null;const v=i.get(f);return v&&!v.ignored?v:null}function N(f,v){const M=p(f);return M?M.getPrev(v):null}function A(f,v){const M=p(f);return M?M.getNext(v):null}function S(f){const v=p(f);return v?v.getParent():null}function x(f){const v=p(f);return v?v.getChild():null}const L={treeNodes:w,treeNodeMap:i,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:g,getFlattenedNodes(f){return Xt(w,f)},getNode:T,getPrev:N,getNext:A,getParent:S,getChild:x,getFirstAvailableNode(){return Vt(w)},getPath(f,v={}){return jt(f,v,L)},getCheckedKeys(f,v={}){const{cascade:M=!0,leafOnly:B=!1,checkStrategy:K="all",allowNotLoaded:I=!1}=v;return ue({checkedKeys:ae(f),indeterminateKeys:de(f),cascade:M,leafOnly:B,checkStrategy:K,allowNotLoaded:I},L)},check(f,v,M={}){const{cascade:B=!0,leafOnly:K=!1,checkStrategy:I="all",allowNotLoaded:R=!1}=M;return ue({checkedKeys:ae(v),indeterminateKeys:de(v),keysToCheck:f==null?[]:Te(f),cascade:B,leafOnly:K,checkStrategy:I,allowNotLoaded:R},L)},uncheck(f,v,M={}){const{cascade:B=!0,leafOnly:K=!1,checkStrategy:I="all",allowNotLoaded:R=!1}=M;return ue({checkedKeys:ae(v),indeterminateKeys:de(v),keysToUncheck:f==null?[]:Te(f),cascade:B,leafOnly:K,checkStrategy:I,allowNotLoaded:R},L)},getNonLeafKeys(f={}){return Pt(w,f)}};return L}const Qt={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Zt=e=>{const{borderRadius:t,popoverColor:n,textColor3:i,dividerColor:o,textColor2:l,primaryColorPressed:r,textColorDisabled:a,primaryColor:c,opacityDisabled:h,hoverColor:g,fontSizeSmall:b,fontSizeMedium:w,fontSizeLarge:T,fontSizeHuge:p,heightSmall:N,heightMedium:A,heightLarge:S,heightHuge:x}=e;return Object.assign(Object.assign({},Qt),{optionFontSizeSmall:b,optionFontSizeMedium:w,optionFontSizeLarge:T,optionFontSizeHuge:p,optionHeightSmall:N,optionHeightMedium:A,optionHeightLarge:S,optionHeightHuge:x,borderRadius:t,color:n,groupHeaderTextColor:i,actionDividerColor:o,optionTextColor:l,optionTextColorPressed:r,optionTextColorDisabled:a,optionTextColorActive:c,optionOpacityDisabled:h,optionCheckColor:c,optionColorPending:g,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:g,actionTextColor:l,loadingColor:c})},en=nt({name:"InternalSelectMenu",common:it,peers:{Scrollbar:ot,Empty:yt},self:Zt}),tn=en;function nn(e,t){return y(lt,{name:"fade-in-scale-up-transition"},{default:()=>e?y(rt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>y(Nt)}):null})}const Re=U({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:i,valueSetRef:o,renderLabelRef:l,renderOptionRef:r,labelFieldRef:a,valueFieldRef:c,showCheckmarkRef:h,nodePropsRef:g,handleOptionClick:b,handleOptionMouseEnter:w}=Me(ge),T=ee(()=>{const{value:S}=n;return S?e.tmNode.key===S.key:!1});function p(S){const{tmNode:x}=e;x.disabled||b(S,x)}function N(S){const{tmNode:x}=e;x.disabled||w(S,x)}function A(S){const{tmNode:x}=e,{value:L}=T;x.disabled||L||w(S,x)}return{multiple:i,isGrouped:ee(()=>{const{tmNode:S}=e,{parent:x}=S;return x&&x.rawNode.type==="group"}),showCheckmark:h,nodeProps:g,isPending:T,isSelected:ee(()=>{const{value:S}=t,{value:x}=i;if(S===null)return!1;const L=e.tmNode.rawNode[c.value];if(x){const{value:f}=o;return f.has(L)}else return S===L}),labelField:a,renderLabel:l,renderOption:r,handleMouseMove:A,handleMouseEnter:N,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:i,isGrouped:o,showCheckmark:l,nodeProps:r,renderOption:a,renderLabel:c,handleClick:h,handleMouseEnter:g,handleMouseMove:b}=this,w=nn(n,e),T=c?[c(t,n),l&&w]:[Le(t[this.labelField],t,n),l&&w],p=r==null?void 0:r(t),N=y("div",Object.assign({},p,{class:[`${e}-base-select-option`,t.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:o,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:l}],style:[(p==null?void 0:p.style)||"",t.style||""],onClick:le([h,p==null?void 0:p.onClick]),onMouseenter:le([g,p==null?void 0:p.onMouseenter]),onMousemove:le([b,p==null?void 0:p.onMousemove])}),y("div",{class:`${e}-base-select-option__content`},T));return t.render?t.render({node:N,option:t,selected:n}):a?a({node:N,option:t,selected:n}):N}}),Pe=U({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:i}=Me(ge);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:i,tmNode:{rawNode:o}}=this,l=i==null?void 0:i(o),r=t?t(o,!1):Le(o[this.labelField],o,!1),a=y("div",Object.assign({},l,{class:[`${e}-base-select-group-header`,l==null?void 0:l.class]}),r);return o.render?o.render({node:a,option:o}):n?n({node:a,option:o,selected:!1}):a}}),on=j("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[j("scrollbar",`
 max-height: var(--n-height);
 `),j("virtual-list",`
 max-height: var(--n-height);
 `),j("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[q("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),j("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),j("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),q("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),q("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),q("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),q("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),j("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),j("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[W("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),X("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),X("&:active",`
 color: var(--n-option-text-color-pressed);
 `),W("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),W("pending",[X("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),W("selected",`
 color: var(--n-option-text-color-active);
 `,[X("&::before",`
 background-color: var(--n-option-color-active);
 `),W("pending",[X("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),W("disabled",`
 cursor: not-allowed;
 `,[st("selected",`
 color: var(--n-option-text-color-disabled);
 `),W("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),q("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[at({enterScale:"0.5"})])])]),cn=U({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=dt(e),i=ut("InternalSelectMenu",n,t),o=be("InternalSelectMenu","-internal-select-menu",on,tn,e,$(e,"clsPrefix")),l=D(null),r=D(null),a=D(null),c=_(()=>e.treeMate.getFlattenedNodes()),h=_(()=>_t(c.value)),g=D(null);function b(){const{treeMate:s}=e;let d=null;const{value:E}=e;E===null?d=s.getFirstAvailableNode():(e.multiple?d=s.getNode((E||[])[(E||[]).length-1]):d=s.getNode(E),(!d||d.disabled)&&(d=s.getFirstAvailableNode())),C(d||null)}function w(){const{value:s}=g;s&&!e.treeMate.getNode(s.key)&&(g.value=null)}let T;ye(()=>e.show,s=>{s?T=ye(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?b():w(),vt(z)):w()},{immediate:!0}):T==null||T()},{immediate:!0}),ze(()=>{T==null||T()});const p=_(()=>ce(o.value.self[J("optionHeight",e.size)])),N=_(()=>oe(o.value.self[J("padding",e.size)])),A=_(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),S=_(()=>{const s=c.value;return s&&s.length===0});function x(s){const{onToggle:d}=e;d&&d(s)}function L(s){const{onScroll:d}=e;d&&d(s)}function f(s){var d;(d=a.value)===null||d===void 0||d.sync(),L(s)}function v(){var s;(s=a.value)===null||s===void 0||s.sync()}function M(){const{value:s}=g;return s||null}function B(s,d){d.disabled||C(d,!1)}function K(s,d){d.disabled||x(d)}function I(s){var d;ke(s,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,s)}function R(s){var d;ke(s,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,s)}function u(s){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,s),!e.focusable&&s.preventDefault()}function m(){const{value:s}=g;s&&C(s.getNext({loop:!0}),!0)}function k(){const{value:s}=g;s&&C(s.getPrev({loop:!0}),!0)}function C(s,d=!1){g.value=s,d&&z()}function z(){var s,d;const E=g.value;if(!E)return;const Y=h.value(E.key);Y!==null&&(e.virtualScroll?(s=r.value)===null||s===void 0||s.scrollTo({index:Y}):(d=a.value)===null||d===void 0||d.scrollTo({index:Y,elSize:p.value}))}function O(s){var d,E;!((d=l.value)===null||d===void 0)&&d.contains(s.target)&&((E=e.onFocus)===null||E===void 0||E.call(e,s))}function P(s){var d,E;!((d=l.value)===null||d===void 0)&&d.contains(s.relatedTarget)||(E=e.onBlur)===null||E===void 0||E.call(e,s)}Se(ge,{handleOptionMouseEnter:B,handleOptionClick:K,valueSetRef:A,pendingTmNodeRef:g,nodePropsRef:$(e,"nodeProps"),showCheckmarkRef:$(e,"showCheckmark"),multipleRef:$(e,"multiple"),valueRef:$(e,"value"),renderLabelRef:$(e,"renderLabel"),renderOptionRef:$(e,"renderOption"),labelFieldRef:$(e,"labelField"),valueFieldRef:$(e,"valueField")}),Se(bt,l),he(()=>{const{value:s}=a;s&&s.sync()});const F=_(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:d},self:{height:E,borderRadius:Y,color:Ie,groupHeaderTextColor:Ae,actionDividerColor:Ke,optionTextColorPressed:Be,optionTextColor:_e,optionTextColorDisabled:He,optionTextColorActive:Ge,optionOpacityDisabled:$e,optionCheckColor:De,actionTextColor:je,optionColorPending:Ve,optionColorActive:We,loadingColor:qe,loadingSize:Ue,optionColorActivePending:Ye,[J("optionFontSize",s)]:Xe,[J("optionHeight",s)]:Je,[J("optionPadding",s)]:ie}}=o.value;return{"--n-height":E,"--n-action-divider-color":Ke,"--n-action-text-color":je,"--n-bezier":d,"--n-border-radius":Y,"--n-color":Ie,"--n-option-font-size":Xe,"--n-group-header-text-color":Ae,"--n-option-check-color":De,"--n-option-color-pending":Ve,"--n-option-color-active":We,"--n-option-color-active-pending":Ye,"--n-option-height":Je,"--n-option-opacity-disabled":$e,"--n-option-text-color":_e,"--n-option-text-color-active":Ge,"--n-option-text-color-disabled":He,"--n-option-text-color-pressed":Be,"--n-option-padding":ie,"--n-option-padding-left":oe(ie,"left"),"--n-option-padding-right":oe(ie,"right"),"--n-loading-color":qe,"--n-loading-size":Ue}}),{inlineThemeDisabled:H}=e,G=H?ct("internal-select-menu",_(()=>e.size[0]),F,e):void 0,V={selfRef:l,next:m,prev:k,getPendingTmNode:M};return Tt(l,e.onResize),Object.assign({mergedTheme:o,mergedClsPrefix:t,rtlEnabled:i,virtualListRef:r,scrollbarRef:a,itemSize:p,padding:N,flattenedNodes:c,empty:S,virtualListContainer(){const{value:s}=r;return s==null?void 0:s.listElRef},virtualListContent(){const{value:s}=r;return s==null?void 0:s.itemsElRef},doScroll:L,handleFocusin:O,handleFocusout:P,handleKeyUp:I,handleKeyDown:R,handleMouseDown:u,handleVirtualListResize:v,handleVirtualListScroll:f,cssVars:H?void 0:F,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender},V)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:i,themeClass:o,onRender:l}=this;return l==null||l(),y("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,o,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},xe(e.header,r=>r&&y("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},r)),this.loading?y("div",{class:`${n}-base-select-menu__loading`},y(ft,{clsPrefix:n,strokeWidth:20})):this.empty?y("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},gt(e.empty,()=>[y(St,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):y(ht,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?y(Ct,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:r})=>r.isGroup?y(Pe,{key:r.key,clsPrefix:n,tmNode:r}):r.ignored?null:y(Re,{clsPrefix:n,key:r.key,tmNode:r})}):y("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(r=>r.isGroup?y(Pe,{key:r.key,clsPrefix:n,tmNode:r}):y(Re,{clsPrefix:n,key:r.key,tmNode:r})))}),xe(e.action,r=>r&&[y("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},r),y(Rt,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function ne(e){return e.type==="group"}function Ee(e){return e.type==="ignored"}function fn(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function hn(e,t){return{getIsGroup:ne,getIgnored:Ee,getKey(i){return ne(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[t]}}}function gn(e,t,n,i){if(!t)return e;function o(l){if(!Array.isArray(l))return[];const r=[];for(const a of l)if(ne(a)){const c=o(a[i]);c.length&&r.push(Object.assign({},a,{[i]:c}))}else{if(Ee(a))continue;t(n,a)&&r.push(a)}return r}return o(e)}function vn(e,t,n){const i=new Map;return e.forEach(o=>{ne(o)?o[n].forEach(l=>{i.set(l[t],l)}):i.set(o[t],o)}),i}export{cn as N,vn as a,hn as b,un as c,gn as f,dn as g,tn as i,le as m,fn as p,Tt as u};
