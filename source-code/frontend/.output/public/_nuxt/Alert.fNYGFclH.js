import{n as O,aL as u,q as v,B as x,C as i,D as y,bl as F,E as N,H as V,z as D,I as $,K,L as E,M as q,r as Q,O as s,aE as X,a_ as G,aX as J,Q as U,bn as Y,b1 as Z,P as c,ac as oo,ag as eo,af as ro,ad as no,ae as lo}from"./entry.v4OMADFI.js";const so={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},to=r=>{const{lineHeight:o,borderRadius:d,fontWeightStrong:b,baseColor:t,dividerColor:C,actionColor:P,textColor1:g,textColor2:l,closeColorHover:h,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,infoColor:e,successColor:I,warningColor:z,errorColor:S,fontSize:T}=r;return Object.assign(Object.assign({},so),{fontSize:T,lineHeight:o,titleFontWeight:b,borderRadius:d,border:`1px solid ${C}`,color:P,titleTextColor:g,iconColor:l,contentTextColor:l,closeBorderRadius:d,closeColorHover:h,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,borderInfo:`1px solid ${u(t,v(e,{alpha:.25}))}`,colorInfo:u(t,v(e,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:e,contentTextColorInfo:l,closeColorHoverInfo:h,closeColorPressedInfo:f,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${u(t,v(I,{alpha:.25}))}`,colorSuccess:u(t,v(I,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:I,contentTextColorSuccess:l,closeColorHoverSuccess:h,closeColorPressedSuccess:f,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${u(t,v(z,{alpha:.33}))}`,colorWarning:u(t,v(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:l,closeColorHoverWarning:h,closeColorPressedWarning:f,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:n,borderError:`1px solid ${u(t,v(S,{alpha:.25}))}`,colorError:u(t,v(S,{alpha:.08})),titleTextColorError:g,iconColorError:S,contentTextColorError:l,closeColorHoverError:h,closeColorPressedError:f,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:n})},io={name:"Alert",common:O,self:to},ao=io,co=x("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),y("closable",[x("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),x("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),F({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),y("show-icon",[x("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("right-adjust",[x("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),x("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[N("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),go=Object.assign(Object.assign({},$.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),uo=V({name:"Alert",inheritAttrs:!1,props:go,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:d,inlineThemeDisabled:b,mergedRtlRef:t}=D(r),C=$("Alert","-alert",co,ao,r,o),P=K("Alert",t,o),g=E(()=>{const{common:{cubicBezierEaseInOut:n},self:e}=C.value,{fontSize:I,borderRadius:z,titleFontWeight:S,lineHeight:T,iconSize:H,iconMargin:R,iconMarginRtl:A,closeIconSize:W,closeBorderRadius:w,closeSize:B,closeMargin:L,closeMarginRtl:_,padding:M}=e,{type:a}=r,{left:k,right:j}=Z(R);return{"--n-bezier":n,"--n-color":e[c("color",a)],"--n-close-icon-size":W,"--n-close-border-radius":w,"--n-close-color-hover":e[c("closeColorHover",a)],"--n-close-color-pressed":e[c("closeColorPressed",a)],"--n-close-icon-color":e[c("closeIconColor",a)],"--n-close-icon-color-hover":e[c("closeIconColorHover",a)],"--n-close-icon-color-pressed":e[c("closeIconColorPressed",a)],"--n-icon-color":e[c("iconColor",a)],"--n-border":e[c("border",a)],"--n-title-text-color":e[c("titleTextColor",a)],"--n-content-text-color":e[c("contentTextColor",a)],"--n-line-height":T,"--n-border-radius":z,"--n-font-size":I,"--n-title-font-weight":S,"--n-icon-size":H,"--n-icon-margin":R,"--n-icon-margin-rtl":A,"--n-close-size":B,"--n-close-margin":L,"--n-close-margin-rtl":_,"--n-padding":M,"--n-icon-margin-left":k,"--n-icon-margin-right":j}}),l=b?q("alert",E(()=>r.type[0]),g,r):void 0,h=Q(!0),f=()=>{const{onAfterLeave:n,onAfterHide:e}=r;n&&n(),e&&e()};return{rtlEnabled:P,mergedClsPrefix:o,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{f()},mergedTheme:C,cssVars:b?void 0:g,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(Y,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:d}=this,b={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},X(this.$attrs,b)),this.closable&&s(G,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${o}-alert__border`}),this.showIcon&&s("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},J(d.icon,()=>[s(oo,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return s(lo,null);case"info":return s(no,null);case"warning":return s(ro,null);case"error":return s(eo,null);default:return null}}})])),s("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},U(d.header,t=>{const C=t||this.title;return C?s("div",{class:`${o}-alert-body__title`},C):null}),d.default&&s("div",{class:`${o}-alert-body__content`},d))):null}})}});export{uo as N};
