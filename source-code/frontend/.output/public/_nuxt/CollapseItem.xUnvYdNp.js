import{H as S,O as n,n as W,B as u,D as x,C as l,E as $,bl as j,G as O,z as T,r as V,L as N,I as _,J as K,K as F,M as q,s as G,A as P,bm as J,x as L,at as Z,bn as Q,au as X,aT as Y,y as ee,v as re,a7 as te,as as D,bo as ae,ad as oe}from"./entry.ydcKSOmp.js";import{u as le}from"./use-merged-state._FoYgtTV.js";import{h as A}from"./happens-in.HIJlj3JZ.js";import{C as se}from"./ChevronRight.LWNoaDjQ.js";const ne=S({name:"ChevronLeft",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),ie=e=>{const{fontWeight:i,textColor1:s,textColor2:a,textColorDisabled:d,dividerColor:t,fontSize:c}=e;return{titleFontSize:c,titleFontWeight:i,dividerColor:t,titleTextColor:s,titleTextColorDisabled:d,fontSize:c,textColor:a,arrowColor:a,arrowColorDisabled:d,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}},de={name:"Collapse",common:W,self:ie},ce=de,pe=u("collapse","width: 100%;",[u("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[x("disabled",[l("header","cursor: not-allowed;",[l("header-main",`
 color: var(--n-title-text-color-disabled);
 `),u("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),u("collapse-item","margin-left: 32px;"),$("&:first-child","margin-top: 0;"),$("&:first-child >",[l("header","padding-top: 0;")]),x("left-arrow-placement",[l("header",[u("collapse-item-arrow","margin-right: 4px;")])]),x("right-arrow-placement",[l("header",[u("collapse-item-arrow","margin-left: 4px;")])]),l("content-wrapper",[l("content-inner","padding-top: 16px;"),j({duration:"0.15s"})]),x("active",[l("header",[x("active",[u("collapse-item-arrow","transform: rotate(90deg);")])])]),$("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),O("disabled",[x("trigger-area-main",[l("header",[l("header-main","cursor: pointer;"),u("collapse-item-arrow","cursor: default;")])]),x("trigger-area-arrow",[l("header",[u("collapse-item-arrow","cursor: pointer;")])]),x("trigger-area-extra",[l("header",[l("header-extra","cursor: pointer;")])])]),l("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[l("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),l("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),u("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),me=Object.assign(Object.assign({},_.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),k=G("n-collapse"),Ce=S({name:"Collapse",props:me,setup(e,{slots:i}){const{mergedClsPrefixRef:s,inlineThemeDisabled:a,mergedRtlRef:d}=T(e),t=V(e.defaultExpandedNames),c=N(()=>e.expandedNames),v=le(c,t),C=_("Collapse","-collapse",pe,ce,e,s);function p(m){const{"onUpdate:expandedNames":o,onUpdateExpandedNames:f,onExpandedNamesChange:y}=e;f&&P(f,m),o&&P(o,m),y&&P(y,m),t.value=m}function g(m){const{onItemHeaderClick:o}=e;o&&P(o,m)}function r(m,o,f){const{accordion:y}=e,{value:R}=v;if(y)m?(p([o]),g({name:o,expanded:!0,event:f})):(p([]),g({name:o,expanded:!1,event:f}));else if(!Array.isArray(R))p([o]),g({name:o,expanded:!0,event:f});else{const w=R.slice(),I=w.findIndex(z=>o===z);~I?(w.splice(I,1),p(w),g({name:o,expanded:!1,event:f})):(w.push(o),p(w),g({name:o,expanded:!0,event:f}))}}K(k,{props:e,mergedClsPrefixRef:s,expandedNamesRef:v,slots:i,toggleItem:r});const h=F("Collapse",d,s),E=N(()=>{const{common:{cubicBezierEaseInOut:m},self:{titleFontWeight:o,dividerColor:f,titlePadding:y,titleTextColor:R,titleTextColorDisabled:w,textColor:I,arrowColor:z,fontSize:B,titleFontSize:M,arrowColorDisabled:U,itemMargin:H}}=C.value;return{"--n-font-size":B,"--n-bezier":m,"--n-text-color":I,"--n-divider-color":f,"--n-title-padding":y,"--n-title-font-size":M,"--n-title-text-color":R,"--n-title-text-color-disabled":w,"--n-title-font-weight":o,"--n-arrow-color":z,"--n-arrow-color-disabled":U,"--n-item-margin":H}}),b=a?q("collapse",void 0,E,e):void 0;return{rtlEnabled:h,mergedTheme:C,mergedClsPrefix:s,cssVars:a?void 0:E,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),n("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),fe=S({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:J(L(e,"show"))}},render(){return n(Q,null,{default:()=>{const{show:e,displayDirective:i,onceTrue:s,clsPrefix:a}=this,d=i==="show"&&s,t=n("div",{class:`${a}-collapse-item__content-wrapper`},n("div",{class:`${a}-collapse-item__content-inner`},this.$slots));return d?Z(t,[[X,e]]):e?t:null}})}}),ue={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},we=S({name:"CollapseItem",props:ue,setup(e){const{mergedRtlRef:i}=T(e),s=Y(),a=ee(()=>{var r;return(r=e.name)!==null&&r!==void 0?r:s}),d=re(k);d||te("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:t,props:c,mergedClsPrefixRef:v,slots:C}=d,p=N(()=>{const{value:r}=t;if(Array.isArray(r)){const{value:h}=a;return!~r.findIndex(E=>E===h)}else if(r){const{value:h}=a;return h!==r}return!0});return{rtlEnabled:F("Collapse",i,v),collapseSlots:C,randomName:s,mergedClsPrefix:v,collapsed:p,triggerAreas:L(c,"triggerAreas"),mergedDisplayDirective:N(()=>{const{displayDirective:r}=e;return r||c.displayDirective}),arrowPlacement:N(()=>c.arrowPlacement),handleClick(r){let h="main";A(r,"arrow")&&(h="arrow"),A(r,"extra")&&(h="extra"),c.triggerAreas.includes(h)&&d&&!e.disabled&&d.toggleItem(p.value,a.value,r)}}},render(){const{collapseSlots:e,$slots:i,arrowPlacement:s,collapsed:a,mergedDisplayDirective:d,mergedClsPrefix:t,disabled:c,triggerAreas:v}=this,C=D(i.header,{collapsed:a},()=>[this.title]),p=i["header-extra"]||e["header-extra"],g=i.arrow||e.arrow;return n("div",{class:[`${t}-collapse-item`,`${t}-collapse-item--${s}-arrow-placement`,c&&`${t}-collapse-item--disabled`,!a&&`${t}-collapse-item--active`,v.map(r=>`${t}-collapse-item--trigger-area-${r}`)]},n("div",{class:[`${t}-collapse-item__header`,!a&&`${t}-collapse-item__header--active`]},n("div",{class:`${t}-collapse-item__header-main`,onClick:this.handleClick},s==="right"&&C,n("div",{class:`${t}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},D(g,{collapsed:a},()=>{var r;return[n(oe,{clsPrefix:t},{default:(r=e.expandIcon)!==null&&r!==void 0?r:()=>this.rtlEnabled?n(ne,null):n(se,null)})]})),s==="left"&&C),ae(p,{collapsed:a},r=>n("div",{class:`${t}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},r))),n(fe,{clsPrefix:t,displayDirective:d,show:!a},i))}});export{Ce as N,we as a};
