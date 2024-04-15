var A=Object.defineProperty;var z=(l,e,s)=>e in l?A(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s;var w=(l,e,s)=>(z(l,typeof e!="symbol"?e+"":e,s),s),D=(l,e,s)=>{if(!e.has(l))throw TypeError("Cannot "+s)};var U=(l,e,s)=>{if(e.has(l))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(l):e.set(l,s)};var k=(l,e,s)=>(D(l,e,"access private method"),s);import{H as R,o,a1 as h,w as a,a as v,U as t,c as d,t as y,r as I,ah as H,b as c,Y as L,d as $,ai as S,$ as q,a6 as E,V as P,F as b,a2 as N}from"./entry.zKFpH4uL.js";import{_ as B}from"./user-default.OPSOmCz7.js";import{m as C}from"./messengerRepository.7v3BvVUZ.js";import{N as M}from"./Image.Q1XrGRN8.js";import{N as p}from"./Space.0hBaRy0y.js";import{a as T,N as Y,b as G}from"./FormItem.5MZRPTwm.js";import{u as J}from"./use-message.ll5pOFYi.js";import"./utils.JiHi1Bb5.js";import"./Popover.4aNICVEU.js";import"./format-length.4l65r8M5.js";import"./use-merged-state.btoWkBhu.js";import"./get-slot.bpfTnPl7.js";var x,j,g,F;class K{constructor(e){U(this,x);U(this,g);w(this,"receiverUser",null);w(this,"senderUser",null);w(this,"messages",[]);console.log(e),this.receiverUser=k(this,x,j).call(this,e==null?void 0:e.receiver_user)??null,this.senderUser=k(this,x,j).call(this,e==null?void 0:e.sender_user)??null,this.messages=k(this,g,F).call(this,e==null?void 0:e.messages)??[]}}x=new WeakSet,j=function(e){return{id:(e==null?void 0:e.id)??null,name:(e==null?void 0:e.name)??"",avatar:(e==null?void 0:e.avatar)??null}},g=new WeakSet,F=function(e){return e.map(s=>({id:s.id,senderId:(s==null?void 0:s.sender_id)??null,receiverId:(s==null?void 0:s.receiver_id)??null,content:(s==null?void 0:s.content)??null,createdAt:(s==null?void 0:s.created_at)??null,updatedAt:(s==null?void 0:s.updated_at)??null}))};const O={class:"h-[250px] w-[250px] relative overflow-hidden rounded-md"},Q={key:1,src:B,class:"w-full h-full object-cover"},W={class:"space-y-1"},X={class:"text-xl md:text-3xl font-medium leading-none"},Z=R({__name:"MessengerHeader",props:{user:{}},setup(l){return(e,s)=>(o(),h(t(p),{size:"large"},{default:a(()=>{var r,_,m;return[v("div",O,[(r=e.user)!=null&&r.avatar?(o(),h(t(M),{key:0,src:(_=e.user)==null?void 0:_.avatar,"fallback-src":"~/assets/images/profile/user-default.png",width:"100%",height:"100%","object-fit":"cover",class:"w-full h-full"},null,8,["src"])):(o(),d("img",Q))]),v("div",W,[v("h3",X,y((m=e.user)==null?void 0:m.name),1)])]}),_:1}))}}),ee=R({__name:"MessngerForm",emits:["validated","rejected"],setup(l,{emit:e}){const s={textarea:{required:!0,trigger:["blur","input"],message:"Please input textareaValue"}},r=I({textarea:""}),_=I(null),m=e,i=u=>{var f;u.preventDefault(),(f=_.value)==null||f.validate(n=>{n?m("rejected"):m("validated",r.value.textarea)})};return(u,f)=>{const n=H("n-space");return o(),h(t(G),{ref_key:"formRef",ref:_,model:t(r),rules:s},{default:a(()=>[c(t(Y),{span:12,path:"textarea"},{default:a(()=>[c(t(T),{value:t(r).textarea,"onUpdate:value":f[0]||(f[0]=V=>t(r).textarea=V),type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"Введите ваше сообщение",round:"",clearable:""},null,8,["value"])]),_:1}),c(n,null,{default:a(()=>[c(t(L),{round:"",type:"primary",onClick:i},{default:a(()=>[$(" Отправить ")]),_:1})]),_:1})]),_:1},8,["model"])}}}),se={class:"mt-4"},re=v("div",{class:"text-xl mb-3"},"Сообщение",-1),te={class:"mt-6"},le=v("div",{class:"text-xl mb-3"},"Переписка",-1),oe={class:"chat"},ne={class:"h-[65px] relative overflow-hidden rounded-md"},ae={key:1,src:B,class:"w-full h-full object-cover"},ce={key:1,src:B,class:"w-full h-full object-cover"},ie={key:0},ue={key:1},be=R({__name:"[id]",setup(l){const e=S(),s=J();q();const r=I(null),_=async()=>{try{const i=await C.getMessagesById(e.params.id);console.log("Response messenger: ",i),r.value=new K(i.messenger)??null,console.log("mess: ",r.value)}catch(i){console.log(i)}},m=async i=>{try{console.log("data from form: ",i);const u=await C.sendMessageById({receiver_id:e.params.id,content:i??""});s.success(u),await _()}catch(u){console.log("error: to send message: ",u)}};return E(async()=>{await _()}),(i,u)=>(o(),h(t(p),{vertical:""},{default:a(()=>{var f;return[c(Z,{user:(f=r.value)==null?void 0:f.receiverUser},null,8,["user"]),v("div",se,[c(t(p),{vertical:""},{default:a(()=>[re,c(ee,{onValidated:u[0]||(u[0]=n=>m(n))})]),_:1})]),v("div",te,[le,r.value&&r.value.messages.length?(o(),h(t(p),{key:0,vertical:""},{default:a(()=>[(o(!0),d(b,null,P(r.value.messages,(n,V)=>(o(),d("div",oe,[c(t(p),null,{default:a(()=>[c(t(p),null,{default:a(()=>[v("div",ne,[n.senderId===r.value.senderUser.id?(o(),d(b,{key:0},[r.value.senderUser.avatar?(o(),h(t(M),{key:0,src:r.value.senderUser.avatar,"fallback-src":"~/assets/images/profile/user-default.png",width:"100%",height:"100%","object-fit":"cover",class:"w-full h-full"},null,8,["src"])):(o(),d("img",ae))],64)):n.senderId===r.value.receiverUser.id?(o(),d(b,{key:1},[r.value.receiverUser.avatar?(o(),h(t(M),{key:0,src:r.value.receiverUser.avatar,"fallback-src":"~/assets/images/profile/user-default.png",width:"100%",height:"100%","object-fit":"cover",class:"w-full h-full"},null,8,["src"])):(o(),d("img",ce))],64)):N("",!0)])]),_:2},1024),c(t(p),{vertical:"",justify:"space-between"},{default:a(()=>[c(t(p),{class:"font-medium"},{default:a(()=>[n.senderId===r.value.senderUser.id?(o(),d("div",ie,y(r.value.senderUser.name),1)):n.senderId===r.value.receiverUser.id?(o(),d("div",ue,y(r.value.receiverUser.name),1)):N("",!0),v("div",null,y(n.createdAt),1)]),_:2},1024),$(" "+y(n.content),1)]),_:2},1024)]),_:2},1024)]))),256))]),_:1})):N("",!0)])]}),_:1}))}});export{be as default};
