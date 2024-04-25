var A=Object.defineProperty;var S=(l,e,r)=>e in l?A(l,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[e]=r;var w=(l,e,r)=>(S(l,typeof e!="symbol"?e+"":e,r),r),z=(l,e,r)=>{if(!e.has(l))throw TypeError("Cannot "+r)};var U=(l,e,r)=>{if(e.has(l))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(l):e.set(l,r)};var k=(l,e,r)=>(z(l,e,"access private method"),r);import{H as j,o,Z as h,w as a,a as _,R as t,c as d,t as y,r as I,ai as D,b as c,V as H,d as $,a2 as L,Y as q,a8 as E,S as P,F as b,_ as N}from"./entry.UIkGX9-f.js";import{_ as B}from"./user-default.8X489NRk.js";import{m as C}from"./messengerRepository.TBgI3Xi7.js";import{N as M}from"./Image.5SXQOkq4.js";import{N as p}from"./Space.y52V3gph.js";import{a as T,N as Y,b as Z}from"./FormItem.NFd-zDlh.js";import{u as G}from"./use-message.E5GRLkZ6.js";import"./utils.Wb9bZqhV.js";import"./Tooltip.F4eQ96wY.js";import"./Popover.T0ZXyHtn.js";import"./use-locale.0KET4-N2.js";import"./format-length.4l65r8M5.js";import"./use-merged-state.LW99PDP2.js";import"./get-slot.bpfTnPl7.js";var x,R,g,F;class J{constructor(e){U(this,x);U(this,g);w(this,"receiverUser",null);w(this,"senderUser",null);w(this,"messages",[]);console.log(e),this.receiverUser=k(this,x,R).call(this,e==null?void 0:e.receiver_user)??null,this.senderUser=k(this,x,R).call(this,e==null?void 0:e.sender_user)??null,this.messages=k(this,g,F).call(this,e==null?void 0:e.messages)??[]}}x=new WeakSet,R=function(e){return{id:(e==null?void 0:e.id)??null,name:(e==null?void 0:e.name)??"",avatar:(e==null?void 0:e.avatar)??null}},g=new WeakSet,F=function(e){return e.map(r=>({id:r.id,senderId:(r==null?void 0:r.sender_id)??null,receiverId:(r==null?void 0:r.receiver_id)??null,content:(r==null?void 0:r.content)??null,createdAt:(r==null?void 0:r.created_at)??null,updatedAt:(r==null?void 0:r.updated_at)??null}))};const K={class:"h-[250px] w-[250px] relative overflow-hidden rounded-md"},O={key:1,src:B,class:"w-full h-full object-cover"},Q={class:"space-y-1"},W={class:"text-xl md:text-3xl font-medium leading-none"},X=j({__name:"MessengerHeader",props:{user:{}},setup(l){return(e,r)=>(o(),h(t(p),{size:"large"},{default:a(()=>{var s,v,m;return[_("div",K,[(s=e.user)!=null&&s.avatar?(o(),h(t(M),{key:0,src:(v=e.user)==null?void 0:v.avatar,"fallback-src":"~/assets/images/profile/user-default.png",width:"100%",height:"100%","object-fit":"cover",class:"w-full h-full"},null,8,["src"])):(o(),d("img",O))]),_("div",Q,[_("h3",W,y((m=e.user)==null?void 0:m.name),1)])]}),_:1}))}}),ee=j({__name:"MessngerForm",emits:["validated","rejected"],setup(l,{emit:e}){const r={textarea:{required:!0,trigger:["blur","input"],message:"Please input textareaValue"}},s=I({textarea:""}),v=I(null),m=e,i=u=>{var f;u.preventDefault(),(f=v.value)==null||f.validate(n=>{n?m("rejected"):m("validated",s.value.textarea)})};return(u,f)=>{const n=D("n-space");return o(),h(t(Z),{ref_key:"formRef",ref:v,model:t(s),rules:r},{default:a(()=>[c(t(Y),{span:12,path:"textarea"},{default:a(()=>[c(t(T),{value:t(s).textarea,"onUpdate:value":f[0]||(f[0]=V=>t(s).textarea=V),type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"Введите ваше сообщение",round:"",clearable:""},null,8,["value"])]),_:1}),c(n,null,{default:a(()=>[c(t(H),{round:"",type:"primary",onClick:i},{default:a(()=>[$(" Отправить ")]),_:1})]),_:1})]),_:1},8,["model"])}}}),re={class:"mt-4"},se=_("div",{class:"text-xl mb-3"},"Сообщение",-1),te={class:"mt-6"},le=_("div",{class:"text-xl mb-3"},"Переписка",-1),oe={class:"chat"},ne={class:"h-[65px] relative overflow-hidden rounded-md"},ae={key:1,src:B,class:"w-full h-full object-cover"},ce={key:1,src:B,class:"w-full h-full object-cover"},ie={key:0},ue={key:1},Ie=j({__name:"[id]",setup(l){const e=L(),r=G();q();const s=I(null),v=async()=>{try{const i=await C.getMessagesById(e.params.id);console.log("Response messenger: ",i),s.value=new J(i.messenger)??null,console.log("mess: ",s.value)}catch(i){console.log(i)}},m=async i=>{try{console.log("data from form: ",i);const u=await C.sendMessageById({receiver_id:e.params.id,content:i??""});r.success(u),await v()}catch(u){console.log("error: to send message: ",u)}};return E(async()=>{await v()}),(i,u)=>(o(),h(t(p),{vertical:""},{default:a(()=>{var f;return[c(X,{user:(f=s.value)==null?void 0:f.receiverUser},null,8,["user"]),_("div",re,[c(t(p),{vertical:""},{default:a(()=>[se,c(ee,{onValidated:u[0]||(u[0]=n=>m(n))})]),_:1})]),_("div",te,[le,s.value&&s.value.messages.length?(o(),h(t(p),{key:0,vertical:""},{default:a(()=>[(o(!0),d(b,null,P(s.value.messages,(n,V)=>(o(),d("div",oe,[c(t(p),null,{default:a(()=>[c(t(p),null,{default:a(()=>[_("div",ne,[n.senderId===s.value.senderUser.id?(o(),d(b,{key:0},[s.value.senderUser.avatar?(o(),h(t(M),{key:0,src:s.value.senderUser.avatar,"fallback-src":"~/assets/images/profile/user-default.png",width:"100%",height:"100%","object-fit":"cover",class:"w-full h-full"},null,8,["src"])):(o(),d("img",ae))],64)):n.senderId===s.value.receiverUser.id?(o(),d(b,{key:1},[s.value.receiverUser.avatar?(o(),h(t(M),{key:0,src:s.value.receiverUser.avatar,"fallback-src":"~/assets/images/profile/user-default.png",width:"100%",height:"100%","object-fit":"cover",class:"w-full h-full"},null,8,["src"])):(o(),d("img",ce))],64)):N("",!0)])]),_:2},1024),c(t(p),{vertical:"",justify:"space-between"},{default:a(()=>[c(t(p),{class:"font-medium"},{default:a(()=>[n.senderId===s.value.senderUser.id?(o(),d("div",ie,y(s.value.senderUser.name),1)):n.senderId===s.value.receiverUser.id?(o(),d("div",ue,y(s.value.receiverUser.name),1)):N("",!0),_("div",null,y(n.createdAt),1)]),_:2},1024),$(" "+y(n.content),1)]),_:2},1024)]),_:2},1024)]))),256))]),_:1})):N("",!0)])]}),_:1}))}});export{Ie as default};