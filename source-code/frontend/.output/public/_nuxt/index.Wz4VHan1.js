import{_ as g}from"./users-card.vue.jqqdAZ0s.js";import{u as x}from"./usersRepository.INb5p5UB.js";import{H as y,r as c,a8 as h,o as t,Z as p,w as k,R as d,c as a,a as f,F as r,S as u,b as v}from"./entry.UIkGX9-f.js";import{N}from"./Skeleton.vN5fNyRU.js";import{N as w}from"./Space.y52V3gph.js";import"./nuxt-link.Y22xdzxp.js";import"./user-default.8X489NRk.js";import"./Tag.FnstX0is.js";import"./mail.rKaQJUOi.js";import"./createLucideIcon.dL6m1YIl.js";import"./format-length.4l65r8M5.js";import"./heart.M1MSBycF.js";import"./use-message.E5GRLkZ6.js";import"./use-houdini.it-j1so_.js";import"./get-slot.bpfTnPl7.js";const B=f("div",{class:"text-2xl md:text-4xl font-bold mb-8"},"Все модели",-1),b={class:"grid min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4"},D=y({__name:"index",setup(L){const i=c([]),o=c(!1),n=async()=>{o.value=!0;try{const e=await x.models();console.log(e),i.value=e.data}catch(e){console.log(e)}o.value=!1};return h(async()=>{await n()}),(e,l)=>{const _=g;return o.value?(t(),p(d(w),{key:0},{default:k(()=>[(t(),a(r,null,u(9,(s,m)=>v(d(N),{key:m,width:400,sharp:!1,height:300,size:"medium"})),64))]),_:1})):(t(),a(r,{key:1},[B,f("div",b,[(t(!0),a(r,null,u(i.value,s=>(t(),p(_,{key:s.id,card:s,onUpdate:l[0]||(l[0]=m=>n())},null,8,["card"]))),128))])],64))}}});export{D as default};