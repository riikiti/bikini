import{_ as m}from"./users-card.vue.rOlzfZUH.js";import{u as p}from"./usersRepository.c3KZwxYW.js";import{H as d,r as _,a6 as u,o as t,c as n,a as l,F as i,V as f,a1 as g}from"./entry.cMATa27n.js";import"./user-default.oH86BXmQ.js";import"./Tag.8lhS77XS.js";import"./heart.U2O120Rt.js";import"./createLucideIcon.nQVJNAhK.js";import"./format-length.4l65r8M5.js";import"./mail.TEA120wY.js";import"./use-message.eLW_oUeE.js";import"./Image.ivPGRU7Z.js";import"./utils.2Q86K9hk.js";import"./Popover.H-M1ppny.js";const x=l("div",{class:"text-2xl md:text-4xl font-bold mb-8"},"Все модели",-1),y={class:"grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4"},R=d({__name:"index",setup(v){const e=_([]),s=async()=>{try{const o=await p.models();console.log(o),e.value=o.data}catch(o){console.log(o)}};return u(async()=>{await s()}),(o,r)=>{const c=m;return t(),n(i,null,[x,l("div",y,[(t(!0),n(i,null,f(e.value,a=>(t(),g(c,{key:a.id,card:a,onUpdate:r[0]||(r[0]=k=>s())},null,8,["card"]))),128))])],64)}}});export{R as default};
