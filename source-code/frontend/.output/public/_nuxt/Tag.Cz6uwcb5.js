import{n as ao,q as o,B as no,D as p,C as x,G as I,E as S,H as so,r as to,z as io,I as U,J as ho,x as go,K as bo,L,M as Co,Q as N,O as z,a_ as vo,s as uo,A as po,P as d,b1 as fo,bw as D}from"./entry.tlJlNgiD.js";const ko={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"},mo=c=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:f,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:k,borderColor:m,opacityDisabled:g,tagColor:v,closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,borderRadiusSmall:b,fontSizeMini:C,fontSizeTiny:P,fontSizeSmall:B,fontSizeMedium:$,heightMini:H,heightTiny:M,heightSmall:R,heightMedium:T,closeColorHover:E,closeColorPressed:_,buttonColor2Hover:w,buttonColor2Pressed:O,fontWeightStrong:W}=c;return Object.assign(Object.assign({},ko),{closeBorderRadius:b,heightTiny:H,heightSmall:M,heightMedium:R,heightLarge:T,borderRadius:b,opacityDisabled:g,fontSizeTiny:C,fontSizeSmall:P,fontSizeMedium:B,fontSizeLarge:$,fontWeightStrong:W,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:k,colorCheckable:"#0000",colorHoverCheckable:w,colorPressedCheckable:O,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:f,border:`1px solid ${m}`,textColor:h,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,closeColorHover:E,closeColorPressed:_,borderPrimary:`1px solid ${o(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:o(a,{alpha:.12}),colorBorderedPrimary:o(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:o(a,{alpha:.12}),closeColorPressedPrimary:o(a,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(n,{alpha:.35})}`,textColorWarning:n,colorWarning:o(n,{alpha:.15}),colorBorderedWarning:o(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:o(n,{alpha:.12}),closeColorPressedWarning:o(n,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},xo={name:"Tag",common:ao,self:mo},zo=xo,yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Io=no("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),p("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),p("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),p("icon, avatar",[p("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),p("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),p("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[I("disabled",[S("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),S("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),p("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[S("&:hover","background-color: var(--n-color-checked-hover);"),S("&:active","background-color: var(--n-color-checked-pressed);")])])])]),So=Object.assign(Object.assign(Object.assign({},U.props),yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Po=uo("n-tag"),$o=so({name:"Tag",props:So,setup(c){const h=to(null),{mergedBorderedRef:r,mergedClsPrefixRef:f,inlineThemeDisabled:a,mergedRtlRef:i}=io(c),s=U("Tag","-tag",Io,zo,c,f);ho(Po,{roundRef:go(c,"round")});function n(e){if(!c.disabled&&c.checkable){const{checked:l,onCheckedChange:u,onUpdateChecked:b,"onUpdate:checked":C}=c;b&&b(!l),C&&C(!l),u&&u(!l)}}function t(e){if(c.triggerClickOnClose||e.stopPropagation(),!c.disabled){const{onClose:l}=c;l&&po(l,e)}}const k={setTextContent(e){const{value:l}=h;l&&(l.textContent=e)}},m=bo("Tag",i,f),g=L(()=>{const{type:e,size:l,color:{color:u,textColor:b}={}}=c,{common:{cubicBezierEaseInOut:C},self:{padding:P,closeMargin:B,borderRadius:$,opacityDisabled:H,textColorCheckable:M,textColorHoverCheckable:R,textColorPressedCheckable:T,textColorChecked:E,colorCheckable:_,colorHoverCheckable:w,colorPressedCheckable:O,colorChecked:W,colorCheckedHover:K,colorCheckedPressed:V,closeBorderRadius:A,fontWeightStrong:q,[d("colorBordered",e)]:G,[d("closeSize",l)]:J,[d("closeIconSize",l)]:Q,[d("fontSize",l)]:X,[d("height",l)]:j,[d("color",e)]:Y,[d("textColor",e)]:Z,[d("border",e)]:oo,[d("closeIconColor",e)]:F,[d("closeIconColorHover",e)]:eo,[d("closeIconColorPressed",e)]:ro,[d("closeColorHover",e)]:lo,[d("closeColorPressed",e)]:co}}=s.value,y=fo(B);return{"--n-font-weight-strong":q,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":C,"--n-border-radius":$,"--n-border":oo,"--n-close-icon-size":Q,"--n-close-color-pressed":co,"--n-close-color-hover":lo,"--n-close-border-radius":A,"--n-close-icon-color":F,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":F,"--n-close-margin-top":y.top,"--n-close-margin-right":y.right,"--n-close-margin-bottom":y.bottom,"--n-close-margin-left":y.left,"--n-close-size":J,"--n-color":u||(r.value?G:Y),"--n-color-checkable":_,"--n-color-checked":W,"--n-color-checked-hover":K,"--n-color-checked-pressed":V,"--n-color-hover-checkable":w,"--n-color-pressed-checkable":O,"--n-font-size":X,"--n-height":j,"--n-opacity-disabled":H,"--n-padding":P,"--n-text-color":b||Z,"--n-text-color-checkable":M,"--n-text-color-checked":E,"--n-text-color-hover-checkable":R,"--n-text-color-pressed-checkable":T}}),v=a?Co("tag",L(()=>{let e="";const{type:l,size:u,color:{color:b,textColor:C}={}}=c;return e+=l[0],e+=u[0],b&&(e+=`a${D(b)}`),C&&(e+=`b${D(C)}`),r.value&&(e+="c"),e}),g,c):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:m,mergedClsPrefix:f,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var c,h;const{mergedClsPrefix:r,rtlEnabled:f,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n==null||n();const k=N(t.avatar,g=>g&&z("div",{class:`${r}-tag__avatar`},g)),m=N(t.icon,g=>g&&z("div",{class:`${r}-tag__icon`},g));return z("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:f,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:k,[`${r}-tag--icon`]:m,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||k,z("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(c=this.$slots).default)===null||h===void 0?void 0:h.call(c)),!this.checkable&&a?z(vo,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?z("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{$o as N,Po as t};
