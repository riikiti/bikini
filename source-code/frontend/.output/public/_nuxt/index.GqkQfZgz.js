import{_ as L}from"./nuxt-link.fsmkxcI1.js";import{a8 as V,H as z,Z as A,r as N,_ as F,o as a,c as i,$ as u,R as t,F as k,U as g,w as s,b as l,a as o,t as n,a1 as C,d as c,a2 as S,S as $}from"./entry.NiESR0-2.js";import{c as b}from"./contestRepository.bLXFCkKL.js";import{N as j}from"./Skeleton.8hRWPWCL.js";import{N as d}from"./GradientText.66_FMuSR.js";import{N as O}from"./Alert.2yy_KdmC.js";import{N as U}from"./Result.64rOGAc2.js";import{N as _}from"./Space.m7UiVY4n.js";import"./use-houdini.Q4PNbGlT.js";import"./format-length.4l65r8M5.js";import"./get-slot.bpfTnPl7.js";const D=V("user",{state:()=>({user:null}),getters:{accountType:f=>{if(f.user)return f.user.role}},actions:{}}),G={class:"h-full relative"},H={class:"text-2xl sm:text-6xl"},M=["onClick"],P=["src"],Z={class:"mt-3 text-xl font-medium text-center"},q={class:"mt-6"},J={class:"text-xl sm:text-3xl text-center"},re=z({__name:"index",setup(f){D(),A();const m=N(!1),p=N(null),R=async()=>{m.value=!0;try{p.value=await b.winnerList()}catch(x){console.log(x)}m.value=!1};return F(()=>{R()}),(x,K)=>{const T=L;return a(),i("div",G,[m.value?(a(),u(t(j),{key:0,text:"",repeat:2,height:400})):(a(!0),i(k,{key:1},g(p.value,(r,B)=>(a(),u(t(_),{key:B,vertical:"",size:40},{default:s(()=>[l(t(C),null,{default:s(()=>[l(t(_),{vertical:"",align:"center",justify:"center"},{default:s(()=>{var h;return[l(t(d),{type:"success"},{default:s(()=>{var e;return[o("div",H,n((e=r==null?void 0:r.contest)==null?void 0:e.name),1)]}),_:2},1024),(h=r.winners)!=null&&h.length?(a(),u(t(_),{key:0,size:"large"},{default:s(()=>[(a(!0),i(k,null,g(p.value.winners,(e,E)=>(a(),u(t(C),{key:E},{default:s(()=>[l(t(_),{vertical:""},{default:s(()=>{var v;return[o("div",{class:"h-[250px] overflow-hidden rounded w-full max-h-full",onClick:Q=>{var y;return t(S).PROFILE+`${(y=e==null?void 0:e.user)==null?void 0:y.id}`}},[(v=e==null?void 0:e.user)!=null&&v.avatar?(a(),i("img",{key:0,src:e==null?void 0:e.user.avatar,height:"100%",width:"100%",class:"w-full h-full max-w-full max-h-full object-cover"},null,8,P)):(a(),u(t(O),{key:1,title:"Произошла ошибка",type:"error"},{default:s(()=>[c(" Попробуйте позже ")]),_:1}))],8,M),o("div",Z,[c(" Место: "),l(t(d),null,{default:s(()=>[c(n(e.place),1)]),_:2},1024)])]}),_:2},1024)]),_:2},1024))),128))]),_:2},1024)):(a(),u(t(U),{key:1,status:"warning",title:"Победителей пока нет",size:"medium",description:"На данный момент победителей у данного конкурса нет!"},{footer:s(()=>[l(T,{to:t(S).ACTIVE_CONTEST},{default:s(()=>[l(t($),null,{default:s(()=>[c("Посмотрите текущий контест")]),_:1})]),_:1},8,["to"])]),_:1})),o("div",q,[o("span",J,[c("c "),l(t(d),{type:"info"},{default:s(()=>{var e;return[o("div",null,n((e=r.contest)==null?void 0:e.start),1)]}),_:2},1024),c(" по "),l(t(d),{type:"error"},{default:s(()=>{var e;return[o("div",null,n((e=r.contest)==null?void 0:e.finish),1)]}),_:2},1024)])])]}),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])}}});export{re as default};