import{_ as g}from"./users-card.vue.YFjFt9Pb.js";import{u as x}from"./usersRepository.TYNpAAdO.js";import{H as y,r as c,_ as h,o as t,$ as p,w as k,R as d,c as a,a as _,F as r,U as u,b as v}from"./entry.XcK5jdsb.js";import{N}from"./Skeleton.-eER2kok.js";import{N as w}from"./Space.7y_oYIhd.js";import"./nuxt-link.mntD7q2t.js";import"./user-default.NO_hQb4C.js";import"./Tag.-JZAZgc2.js";import"./mail.D_spuNuv.js";import"./createLucideIcon.EAyUrzOc.js";import"./format-length.4l65r8M5.js";import"./heart.1uu-WVaV.js";import"./use-message.oNIZTOxs.js";import"./use-houdini.6wzjH-MI.js";import"./get-slot.bpfTnPl7.js";const B=_("div",{class:"text-2xl md:text-4xl font-bold mb-8"},"Все модели",-1),b={class:"grid min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4"},G=y({__name:"index",setup(L){const i=c([]),o=c(!1),n=async()=>{o.value=!0;try{const e=await x.models();console.log(e),i.value=e.data}catch(e){console.log(e)}o.value=!1};return h(async()=>{await n()}),(e,l)=>{const f=g;return o.value?(t(),p(d(w),{key:0},{default:k(()=>[(t(),a(r,null,u(9,(s,m)=>v(d(N),{key:m,width:400,sharp:!1,height:300,size:"medium"})),64))]),_:1})):(t(),a(r,{key:1},[B,_("div",b,[(t(!0),a(r,null,u(i.value,s=>(t(),p(f,{key:s.id,card:s,onUpdate:l[0]||(l[0]=m=>n())},null,8,["card"]))),128))])],64))}}});export{G as default};