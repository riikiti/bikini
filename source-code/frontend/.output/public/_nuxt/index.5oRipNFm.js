import{_ as g}from"./users-card.vue.yZ6R952G.js";import{u as x}from"./usersRepository.6BeXz1sc.js";import{H as y,r as c,_ as h,o as t,$ as p,w as k,R as d,c as a,a as _,F as r,U as u,b as v}from"./entry.NiESR0-2.js";import{N}from"./Skeleton.8hRWPWCL.js";import{N as w}from"./Space.m7UiVY4n.js";import"./nuxt-link.fsmkxcI1.js";import"./user-default.hW1oF-10.js";import"./Tag.Zv0g0LBQ.js";import"./mail.ijKfoKRx.js";import"./createLucideIcon.kGbi_Q0V.js";import"./format-length.4l65r8M5.js";import"./heart.WsNbAllG.js";import"./use-message.2Wr3QayV.js";import"./use-houdini.Q4PNbGlT.js";import"./get-slot.bpfTnPl7.js";const B=_("div",{class:"text-2xl md:text-4xl font-bold mb-8"},"Все модели",-1),b={class:"grid min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4"},G=y({__name:"index",setup(L){const i=c([]),o=c(!1),n=async()=>{o.value=!0;try{const e=await x.models();console.log(e),i.value=e.data}catch(e){console.log(e)}o.value=!1};return h(async()=>{await n()}),(e,l)=>{const f=g;return o.value?(t(),p(d(w),{key:0},{default:k(()=>[(t(),a(r,null,u(9,(s,m)=>v(d(N),{key:m,width:400,sharp:!1,height:300,size:"medium"})),64))]),_:1})):(t(),a(r,{key:1},[B,_("div",b,[(t(!0),a(r,null,u(i.value,s=>(t(),p(f,{key:s.id,card:s,onUpdate:l[0]||(l[0]=m=>n())},null,8,["card"]))),128))])],64))}}});export{G as default};
