import{_ as g}from"./users-card.vue.Q1YLRdtX.js";import{u as x}from"./usersRepository.49PFsJxJ.js";import{H as y,r as c,a6 as h,o as t,a1 as p,w as k,U as d,c as a,a as f,F as r,V as u,b as v}from"./entry.v4OMADFI.js";import{N}from"./Skeleton.wd94zqKY.js";import{N as w}from"./Space.RdFBwIDv.js";import"./nuxt-link.yRSe0wqM.js";import"./user-default.8tUbeWE8.js";import"./Tag.V7P0fDfw.js";import"./mail.mNypSx5r.js";import"./createLucideIcon.gN6IWlrv.js";import"./format-length.4l65r8M5.js";import"./heart.5MDNZgtu.js";import"./use-message.Glf0RmBt.js";import"./use-houdini.aBuW05Ae.js";import"./get-slot.bpfTnPl7.js";const B=f("div",{class:"text-2xl md:text-4xl font-bold mb-8"},"Все модели",-1),b={class:"grid min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4"},G=y({__name:"index",setup(L){const i=c([]),o=c(!1),n=async()=>{o.value=!0;try{const e=await x.models();console.log(e),i.value=e.data}catch(e){console.log(e)}o.value=!1};return h(async()=>{await n()}),(e,l)=>{const _=g;return o.value?(t(),p(d(w),{key:0},{default:k(()=>[(t(),a(r,null,u(9,(s,m)=>v(d(N),{key:m,width:400,sharp:!1,height:300,size:"medium"})),64))]),_:1})):(t(),a(r,{key:1},[B,f("div",b,[(t(!0),a(r,null,u(i.value,s=>(t(),p(_,{key:s.id,card:s,onUpdate:l[0]||(l[0]=m=>n())},null,8,["card"]))),128))])],64))}}});export{G as default};