import{_ as q}from"./nuxt-link.IzQK7SDn.js";import{n as X,B as p,D as I,E as b,C as S,aJ as T,G as Z,H as $,z as W,K as tt,I as j,J as et,O as n,N as ot,s as it,v as st,T as rt,L as z,M as nt,Q as F,aQ as w,aN as at,P as f,A as P,ac as N,bk as lt,ah as ct,o as dt,a1 as pt,w as i,b as r,U as m,a as o,d as v,a4 as R,p as xt,e as ut}from"./entry.zKFpH4uL.js";import{g as ht}from"./get-slot.bpfTnPl7.js";import{F as ft}from"./Checkmark.whpd4JvG.js";import{N as mt,a as B}from"./CollapseItem.VTLkPnsu.js";import{_ as vt}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./use-merged-state.btoWkBhu.js";import"./happens-in.HIJlj3JZ.js";import"./ChevronRight.2wzkiNwB.js";const _t={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},gt=t=>{const{fontWeightStrong:a,baseColor:l,textColorDisabled:e,primaryColor:c,errorColor:u,textColor1:h,textColor2:_}=t;return Object.assign(Object.assign({},_t),{stepHeaderFontWeight:a,indicatorTextColorProcess:l,indicatorTextColorWait:e,indicatorTextColorFinish:c,indicatorTextColorError:u,indicatorBorderColorProcess:c,indicatorBorderColorWait:e,indicatorBorderColorFinish:c,indicatorBorderColorError:u,indicatorColorProcess:c,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:e,splitorColorWait:e,splitorColorFinish:c,splitorColorError:e,headerTextColorProcess:h,headerTextColorWait:e,headerTextColorFinish:e,headerTextColorError:u,descriptionTextColorProcess:_,descriptionTextColorWait:e,descriptionTextColorFinish:e,descriptionTextColorError:u})},Ct={name:"Steps",common:X,self:gt},bt=Ct,zt=p("steps",`
 width: 100%;
 display: flex;
`,[p("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[I("disabled","cursor: not-allowed"),I("clickable",`
 cursor: pointer;
 `),b("&:last-child",[p("step-splitor","display: none;")])]),p("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),p("step-content","flex: 1;",[p("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S("title",`
 white-space: nowrap;
 flex: 0;
 `)]),S("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),p("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[p("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[S("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[T()]),p("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[T()]),p("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[T()])])]),I("vertical","flex-direction: column;",[Z("show-description",[b(">",[p("step","padding-bottom: 8px;")])]),b(">",[p("step","margin-bottom: 16px;",[b("&:last-child","margin-bottom: 0;"),b(">",[p("step-indicator",[b(">",[p("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),p("step-content",[S("description","margin-top: 8px;")])])])])])]);function St(t,a){return typeof t!="object"||t===null||Array.isArray(t)?null:(t.props||(t.props={}),t.props.internalIndex=a+1,t)}function yt(t){return t.map((a,l)=>St(a,l))}const It=Object.assign(Object.assign({},j.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),A=it("n-steps"),Tt=$({name:"Steps",props:It,setup(t,{slots:a}){const{mergedClsPrefixRef:l,mergedRtlRef:e}=W(t),c=tt("Steps",e,l),u=j("Steps","-steps",zt,bt,t,l);return et(A,{props:t,mergedThemeRef:u,mergedClsPrefixRef:l,stepsSlots:a}),{mergedClsPrefix:l,rtlEnabled:c}},render(){const{mergedClsPrefix:t}=this;return n("div",{class:[`${t}-steps`,this.rtlEnabled&&`${t}-steps--rtl`,this.vertical&&`${t}-steps--vertical`]},yt(ot(ht(this))))}}),wt={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},E=$({name:"Step",props:wt,setup(t){const a=st(A,null);a||rt("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:l}=W(),{props:e,mergedThemeRef:c,mergedClsPrefixRef:u,stepsSlots:h}=a,_=z(()=>e.vertical),y=z(()=>{const{status:d}=t;if(d)return d;{const{internalIndex:x}=t,{current:C}=e;if(C===void 0)return"process";if(x<C)return"finish";if(x===C)return e.status||"process";if(x>C)return"wait"}return"process"}),k=z(()=>{const{value:d}=y,{size:x}=e,{common:{cubicBezierEaseInOut:C},self:{stepHeaderFontWeight:M,[f("stepHeaderFontSize",x)]:V,[f("indicatorIndexFontSize",x)]:O,[f("indicatorSize",x)]:U,[f("indicatorIconSize",x)]:D,[f("indicatorTextColor",d)]:K,[f("indicatorBorderColor",d)]:L,[f("headerTextColor",d)]:J,[f("splitorColor",d)]:Q,[f("indicatorColor",d)]:G,[f("descriptionTextColor",d)]:Y}}=c.value;return{"--n-bezier":C,"--n-description-text-color":Y,"--n-header-text-color":J,"--n-indicator-border-color":L,"--n-indicator-color":G,"--n-indicator-icon-size":D,"--n-indicator-index-font-size":O,"--n-indicator-size":U,"--n-indicator-text-color":K,"--n-splitor-color":Q,"--n-step-header-font-size":V,"--n-step-header-font-weight":M}}),g=l?nt("step",z(()=>{const{value:d}=y,{size:x}=e;return`${d[0]}${x[0]}`}),k,e):void 0,H=z(()=>{if(t.disabled)return;const{onUpdateCurrent:d,"onUpdate:current":x}=e;return d||x?()=>{d&&P(d,t.internalIndex),x&&P(x,t.internalIndex)}:void 0});return{stepsSlots:h,mergedClsPrefix:u,vertical:_,mergedStatus:y,handleStepClick:H,cssVars:l?void 0:k,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){const{mergedClsPrefix:t,onRender:a,handleStepClick:l,disabled:e}=this,c=F(this.$slots.default,u=>{const h=u||this.description;return h?n("div",{class:`${t}-step-content__description`},h):null});return a==null||a(),n("div",{class:[`${t}-step`,e&&`${t}-step--disabled`,!e&&l&&`${t}-step--clickable`,this.themeClass,c&&`${t}-step--show-description`,`${t}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:l},n("div",{class:`${t}-step-indicator`},n("div",{class:`${t}-step-indicator-slot`},n(at,null,{default:()=>F(this.$slots.icon,u=>{const{mergedStatus:h,stepsSlots:_}=this;return h==="finish"||h==="error"?h==="finish"?n(N,{clsPrefix:t,key:"finish"},{default:()=>w(_["finish-icon"],()=>[n(ft,null)])}):h==="error"?n(N,{clsPrefix:t,key:"error"},{default:()=>w(_["error-icon"],()=>[n(lt,null)])}):null:u||n("div",{key:this.internalIndex,class:`${t}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?n("div",{class:`${t}-step-splitor`}):null),n("div",{class:`${t}-step-content`},n("div",{class:`${t}-step-content-header`},n("div",{class:`${t}-step-content-header__title`},w(this.$slots.title,()=>[this.title])),this.vertical?null:n("div",{class:`${t}-step-splitor`})),c))}}),s=t=>(xt("data-v-10566a5d"),t=t(),ut(),t),$t=s(()=>o("h1",{class:"text-center text-xl md:text-7xl my-8"},"Правила конкурса Bikini Star",-1)),kt=s(()=>o("h3",{class:"text-center text-xl md:text-4xl"},"ДОСТУПНО О ВАЖНОМ",-1)),Ft=s(()=>o("h2",{class:"text-center text-xl md:text-4xl my-12"},"Как стать участницей конкурса Bikini Star",-1)),Pt=s(()=>o("div",{class:"font-medium text-xl text-gray-800"}," Загрузить конкурсную фотографию ",-1)),Nt=s(()=>o("div",{class:"text-xl"},"+ дополнительно до 10 фото в бикини или купальнике - портфолио.",-1)),Rt=s(()=>o("div",{class:"font-medium text-xl text-gray-800"},"Модерация",-1)),Bt=s(()=>o("div",{class:"text-xl"},"После проверки модератором вы станете участницей конкурса.",-1)),Et=s(()=>o("div",{class:"text-2xl font-bold"},"ГОЛОСОВАНИЕ",-1)),Wt=s(()=>o("p",{class:"text-xl"}," Заканчивается в последний день месяца, в 22.00.00 Подсчет голосов (рейтинг) автоматически суммируются бесплатные голоса и дополнительные голоса от зарегистрированных пользователей. Если несколько работ, из числа призеров (первые три места), на момент фиксации результатов (22.00.00) набрало равное кол-во голосов, то объявляется дополнительное время и голосование проходит только по выбранным участницам. ",-1)),jt=s(()=>o("div",{class:"text-2xl font-bold"},"ЗАПРЕЩЕНО",-1)),At=s(()=>o("p",{class:"text-xl"}," Коллаж (монтаж), в том числе добавление, удаление, перемещение объектов, добавление дополнительных графических элементов, изменение фона средствами графических редакторов. Работы не должны иметь каких-либо авторских плашек, авторских знаков, добавленных рамок и т.д. ПОРНО и другое, нарушающее законодательство РФ. ",-1)),Ht=s(()=>o("div",{class:"text-2xl font-bold"},"РАЗРЕШЕНО",-1)),Mt=s(()=>o("p",{class:"text-xl"}," Техническая ретушь, включая изменение экспозиции, контраста, насыщенности, резкости, перевод изображения в черно-белое и баланса белого. А так же коррекцию снимка с целью удалить случайно попавшие в кадр предметы. Кадрирование/кроп (без увеличение размеров снимка). Сканирование изображение полученных классическим химическим способом. ",-1)),Vt=s(()=>o("div",{class:"text-2xl font-bold"},"Авторская и интеллектуальная собственность",-1)),Ot=s(()=>o("p",{class:"text-xl"}," Авторские права на представленную конкурсную работу должны полностью принадлежать участнице конкурса. Участвуя в конкурсе, участница даёт своё согласие организатору конкурса бесплатно использовать их для целей продвижения конкурса в различных СМИ, печати альбома, каталога с работами финалистов и лауреатов, а также на производство работ на выставку. Использовать работы финалистов в будущем для проведения специализированных мероприятий, посвященных популяризации конкурса с указаниям авторства работ. Загружая фотографию на Сайт, Участница автоматически подтверждает, что не нарушает авторских прав и иных интеллектуальных прав, и в полной мере несет за это ответственность. ",-1)),Ut=s(()=>o("div",{class:"text-2xl font-bold"}," Нарушение правил, пользовательского соглашения, правил сайта ",-1)),Dt=s(()=>o("p",{class:"text-xl"},' В случае нарушения правил конкурса или возникновения противоречий между Участницей и Организатором, или не согласием с текущими правилами и невозможностью найти решение, участие в конкурсе прекращается путем аннулирования участия и удалением всех фотографий с сайта. Аннулируется рейтинг. Обнуляется баланс "Дополнительный Голос" без бонусных выплат. ',-1)),Kt={class:"py-8 mt-8"},Lt=s(()=>o("div",null," любой авторизованный пользователь может дать бесплатно один голос одной участнице ",-1)),Jt=s(()=>o("div",null,[o("p",null," Любой авторизованный пользователь может поднять рейтинг конкурсной работы, оплатив дополнительные баллы: "),o("p",null,[v(" +5 баллов (100 руб) "),o("br"),v("+15 баллов (300 руб) "),o("br"),v("+25 баллов (500 руб) "),o("br"),v("+50 баллов (1000 руб) ")]),o("p",null," Выбрав желаемое кол-во баллов к рейтингу, оплатив, система моментально добавит баллы к рейтингу конкурсной работы. Участница может видеть в Личном кабинете (в разделе Статистика-Дополнительные баллы) кто и сколько добавил баллов. Отозвать дополнительные голоса не возможно. ")],-1)),Qt={class:"text-gray-800 font-bold text-xl md:text-3xl"},Gt=$({__name:"index",setup(t){return(a,l)=>{const e=ct("n-space"),c=q;return dt(),pt(e,{vertical:"",justify:"center",class:""},{default:i(()=>[$t,kt,Ft,r(e,{class:"mt-8"},{default:i(()=>[r(m(Tt),{vertical:"",current:2,status:"finish"},{default:i(()=>[r(m(E),null,{title:i(()=>[Pt]),default:i(()=>[Nt]),_:1}),r(m(E),{title:"Модерация",description:"После проверки модератором вы станете участницей конкурса."},{title:i(()=>[Rt]),default:i(()=>[Bt]),_:1})]),_:1})]),_:1}),r(e,{vertical:"",size:"large",class:"mt-6 md:my-12 pb-12"},{default:i(()=>[r(e,{vertical:"",size:"large"},{default:i(()=>[Et,Wt]),_:1}),r(e,{vertical:"",size:"large"},{default:i(()=>[jt,At]),_:1}),r(e,{vertical:"",size:"large"},{default:i(()=>[Ht,Mt]),_:1}),r(e,{vertical:"",size:"large"},{default:i(()=>[Vt,Ot]),_:1}),r(e,{vertical:"",size:"large"},{default:i(()=>[Ut,Dt]),_:1})]),_:1}),o("div",Kt,[r(e,{vertical:""},{default:i(()=>[r(m(mt),null,{default:i(()=>[r(m(B),{title:"+1 голос пользователя",name:"1"},{default:i(()=>[Lt]),_:1}),r(m(B),{title:"+ Дополнительный голос",name:"2"},{default:i(()=>[Jt]),_:1})]),_:1})]),_:1})]),o("div",null,[o("h2",Qt,[v(" более подробная информация: "),r(c,{class:"text-gray-800",to:m(R).STATIC_TERMS},{default:i(()=>[v("правила пользования")]),_:1},8,["to"]),v(" сайтом Бикини Стар пользовательское "),r(c,{class:"text-gray-800",to:m(R).STATIC_PRIVACY},{default:i(()=>[v("соглашение")]),_:1},8,["to"])])])]),_:1})}}}),re=vt(Gt,[["__scopeId","data-v-10566a5d"]]);export{re as default};
