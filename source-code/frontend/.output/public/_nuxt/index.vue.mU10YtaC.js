import{_ as N}from"./nuxt-link.ntbOdRZ0.js";import{n as V,B as v,E as d,D as H,C as f,H as k,z as $,I as L,J as j,x as w,L as S,M,O as p,s as O,r as U,a6 as D,ca as F,bd as K,v as Y,aQ as G,bD as J,_ as Q,Z,a4 as h,o as _,c as R,b,w as u,U as c,F as q,V as X,d as B,t as W,a1 as ee,a2 as te,a as re}from"./entry.geNuUUER.js";import{u as oe}from"./index.PNMHNRSf.js";import{N as T}from"./Space.QzbqQW2E.js";const ae={fontWeightActive:"400"},ne=e=>{const{fontSize:r,textColor3:t,textColor2:a,borderRadius:s,buttonColor2Hover:o,buttonColor2Pressed:l}=e;return Object.assign(Object.assign({},ae),{fontSize:r,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:a,itemTextColorPressed:a,itemTextColorActive:a,itemBorderRadius:s,itemColorHover:o,itemColorPressed:l,separatorColor:t})},se={name:"Breadcrumb",common:V,self:ne},ie=se,ce=v("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[d("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),d("a",`
 color: inherit;
 text-decoration: inherit;
 `),v("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[v("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),d("&:not(:last-child)",[H("clickable",[f("link",`
 cursor: pointer;
 `,[d("&:hover",`
 background-color: var(--n-item-color-hover);
 `),d("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),f("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[d("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[v("icon",`
 color: var(--n-item-text-color-hover);
 `)]),d("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[v("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),f("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),d("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[v("icon",`
 color: var(--n-item-text-color-active);
 `)]),f("separator",`
 display: none;
 `)])])]),I=O("n-breadcrumb"),le=Object.assign(Object.assign({},L.props),{separator:{type:String,default:"/"}}),de=k({name:"Breadcrumb",props:le,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=$(e),a=L("Breadcrumb","-breadcrumb",ce,ie,e,r);j(I,{separatorRef:w(e,"separator"),mergedClsPrefixRef:r});const s=S(()=>{const{common:{cubicBezierEaseInOut:l},self:{separatorColor:i,itemTextColor:n,itemTextColorHover:m,itemTextColorPressed:g,itemTextColorActive:x,fontSize:C,fontWeightActive:P,itemBorderRadius:y,itemColorHover:z,itemColorPressed:E,itemLineHeight:A}}=a.value;return{"--n-font-size":C,"--n-bezier":l,"--n-item-text-color":n,"--n-item-text-color-hover":m,"--n-item-text-color-pressed":g,"--n-item-text-color-active":x,"--n-separator-color":i,"--n-item-color-hover":z,"--n-item-color-pressed":E,"--n-item-border-radius":y,"--n-font-weight-active":P,"--n-item-line-height":A}}),o=t?M("breadcrumb",void 0,s,e):void 0;return{mergedClsPrefix:r,cssVars:t?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},p("ul",null,this.$slots))}}),me=(e=K?window:null)=>{const r=()=>{const{hash:s,host:o,hostname:l,href:i,origin:n,pathname:m,port:g,protocol:x,search:C}=(e==null?void 0:e.location)||{};return{hash:s,host:o,hostname:l,href:i,origin:n,pathname:m,port:g,protocol:x,search:C}},t=()=>{a.value=r()},a=U(r());return D(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),F(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),a},ue={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ve=k({name:"BreadcrumbItem",props:ue,setup(e,{slots:r}){const t=Y(I,null);if(!t)return()=>null;const{separatorRef:a,mergedClsPrefixRef:s}=t,o=me(),l=S(()=>e.href?"a":"span"),i=S(()=>o.value.href===e.href?"location":null);return()=>{const{value:n}=s;return p("li",{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},p(l.value,{class:`${n}-breadcrumb-item__link`,"aria-current":i.value,href:e.href,onClick:e.onClick},r),p("span",{class:`${n}-breadcrumb-item__separator`,"aria-hidden":"true"},G(r.separator,()=>{var m;return[(m=e.separator)!==null&&m!==void 0?m:a.value]})))}}}),he={class:"py-8 px-8 bg-gray-300 rounded"},be=re("div",{class:"font-extrabold text-slate-600 text-lg md:text-2xl dark:text-white"}," ★ Bikini Star ",-1),Ce=k({__name:"index",setup(e){J();const r=oe(),t=Q(),a=Z(),s=[{route:h.STATIC_PRIVACY,name:"Политика конфиденциальности"},{route:h.STATIC_USER_PRIVACY,name:"Пользовательское соглашение"},{route:h.STATIC_TERMS,name:"Правила пользования сайтом"},{route:h.STATIC_RULES,name:"Правила Конкурса Bikini Star"}];return(o,l)=>{const i=N;return _(),R("div",he,[b(c(T),{vertical:""},{default:u(()=>[b(c(de),null,{default:u(()=>[(_(),R(q,null,X(s,n=>b(c(ve),null,{default:u(()=>[b(i,{to:n.route},{default:u(()=>[B(W(n.name),1)]),_:2},1032,["to"])]),_:2},1024)),64))]),_:1}),b(c(T),{align:"center"},{default:u(()=>[b(i,{to:c(r)(c(h).MAIN),class:"no-underline cursor-pointer"},{default:u(()=>[be]),_:1},8,["to"]),c(a).isAuth?(_(),ee(i,{key:0,class:"text-gray-800 underline-offset-2 text-lg font-medium",to:c(h).MESSENGER+`/${c(t).moderatorId}`},{default:u(()=>[B("Контакты")]),_:1},8,["to"])):te("",!0)]),_:1})]),_:1})])}}});export{Ce as _};
