import{_ as g}from"./user-default.5qadS4Gj.js";import{v,af as x,T as N,H as w,r as y,a6 as b,o as s,c as l,b as a,w as t,U as e,F as u,a as c,V as k,a1 as E,t as M,Y as f,a4 as m}from"./entry.1ZxYl7KD.js";import{m as B}from"./messengerRepository.6LEBABU9.js";import{M as R}from"./mail.LpMNCe8I.js";import{U as j}from"./user.hNto3Vkt.js";import{u as z}from"./use-message.S9nCrm0E.js";import{N as i}from"./Space.oLpKv7Xc.js";import{N as I}from"./Image.b2j99VNW.js";import{N as p}from"./createLucideIcon.6peY8C66.js";import"./get-slot.bpfTnPl7.js";import"./utils.GoHCELvT.js";import"./Popover.P0RjMtAw.js";import"./format-length.4l65r8M5.js";function S(){const n=v(x,null);return n===null&&N("use-dialog","No outer <n-dialog-provider /> founded."),n}const C=c("div",{class:"text-2xl font-bold sm:text-3xl mb-10"},"Переписки",-1),F={class:"w-[64px] h-[64px] overflow-hidden rounded-lg"},U={key:1,src:g,class:"w-full h-full object-cover"},V={class:"text-2xl font-bold"},W=w({__name:"index",setup(n){z(),S();const d=y(null),_=async()=>{try{const o=await B.allChats();console.log("Response messenger: ",o),d.value=o.user_chats}catch(o){console.log(o)}};return b(async()=>{await _()}),(o,D)=>(s(),l(u,null,[C,a(e(i),{vertical:"",size:"large"},{default:t(()=>[(s(!0),l(u,null,k(e(d),(r,h)=>(s(),l("div",{key:h,class:"p-4 border-solid border-gray-400 border rounded-md overflow-hidden relative"},[a(e(i),{size:"large",align:"center"},{default:t(()=>[c("div",F,[r.avatar?(s(),E(e(I),{key:0,src:r.avatar,width:"100%",height:"100%","object-fit":"cover"},null,8,["src"])):(s(),l("img",U))]),a(e(i),{vertical:""},{default:t(()=>[c("div",V,M(r.name),1),a(e(i),null,{default:t(()=>[a(e(f),{tag:"a",href:e(m).MESSENGER+`/${r.id}`},{default:t(()=>[a(e(p),{size:24},{default:t(()=>[a(e(R))]),_:1})]),_:2},1032,["href"]),a(e(f),{tag:"a",href:e(m).PROFILE+`${r.id}`},{default:t(()=>[a(e(p),{size:24},{default:t(()=>[a(e(j))]),_:1})]),_:2},1032,["href"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128))]),_:1})],64))}});export{W as default};