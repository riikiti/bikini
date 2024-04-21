import{_ as T}from"./nuxt-link.yRSe0wqM.js";import{H as R,_ as F,$ as M,aa as $,L as f,a4 as d,o as i,c as n,a as c,U as e,a1 as I,w as a,b as s,O,d as V,t as v,a2 as _,a7 as B,ab as h}from"./entry.v4OMADFI.js";import{_ as L}from"./user-default.8tUbeWE8.js";import{T as g,S as H}from"./usersRepository.49PFsJxJ.js";import{N as P}from"./Tag.V7P0fDfw.js";import{M as j}from"./mail.mNypSx5r.js";import{H as A}from"./heart.5MDNZgtu.js";import{u as G}from"./use-message.Glf0RmBt.js";import{N as l}from"./createLucideIcon.gN6IWlrv.js";const W={class:"rounded overflow-hidden relative bg-white dark:bg-muted border shadow-accent"},D={class:"absolute top-2 left-2 z-20"},U=["src"],q={key:1,src:L,class:"w-full h-full object-cover"},J={class:"space-y-1 mt-3"},K={class:"text-xl font-medium leading-none"},Q={class:"grid grid-cols-5 mt-2 self-center pb-2 pt-2"},X={key:0,class:"text-gray-300 hover:text-red-600"},Y={key:1,class:"text-gray-300 hover:text-red-600"},Z={key:2,class:"text-gray-300 hover:text-red-600"},de=R({__name:"users-card",props:{card:{}},emits:["update"],setup(x,{emit:y}){const m=G(),k=F(),w=M(),N=y,b=x,{card:t}=$(b),E=f(()=>{const{info:{messages_status:o}}=t.value;if(o){for(const r in o)if(o[r]!==!1&&o[r]!==null)return!0}return!1}),S=async()=>{try{if(t.value.is_favorite){const o=await h.removeFromFavourite(t.value.id);m.warning(o)}else{const o=await h.addToFavourite(t.value.id);m.success(o)}await k.setSettings(),await N("update")}catch{m.error("Ooops!Что-то пошло не так!")}},z=f(()=>d.MESSENGER+`/${t.value.id}`);return(o,r)=>{var p;const u=T;return i(),n("div",W,[c("div",D,[(p=e(t))!=null&&p.rating?(i(),I(e(P),{key:0,round:"",strong:"",bordered:!1},{icon:a(()=>[s(e(l),{component:O(e(g))},null,8,["component"])]),default:a(()=>[V(" "+v(e(t).rating),1)]),_:1})):_("",!0)]),c("div",{class:"h-[250px] relative overflow-hidden rounded-md hover:cursor-pointer",onClick:r[0]||(r[0]=C=>e(w).push(e(d).PROFILE+`${e(t).id}`))},[e(t).avatar?(i(),n("img",{key:0,src:e(t).avatar,width:"100%",height:"100%",class:"w-full h-full object-cover"},null,8,U)):(i(),n("img",q))]),c("div",J,[s(u,{to:e(d).PROFILE+`${e(t).id}`,class:"text-black no-underline"},{default:a(()=>[c("h3",K,v(e(t).name),1)]),_:1},8,["to"])]),c("div",Q,[E.value?(i(),n("div",X,[s(u,{to:z.value,class:"text-gray-300 hover:text-red-600 cursor-pointer"},{default:a(()=>[s(e(l),{size:32},{default:a(()=>[s(e(j),{size:32})]),_:1})]),_:1},8,["to"])])):_("",!0),e(t).active_contest?(i(),n("div",Y,[s(u,{to:e(d).ACTIVE_CONTEST,class:"text-gray-300 hover:text-red-600 cursor-pointer"},{default:a(()=>[s(e(l),{size:32},{default:a(()=>[s(e(H),{fill:"currentColor"})]),_:1})]),_:1},8,["to"])])):_("",!0),c("div",{class:B(["text-gray-300 hover:text-red-600 cursor-pointer",{"text-red-600":e(t).is_favorite}]),onClick:r[1]||(r[1]=C=>S())},[s(e(l),{size:32},{default:a(()=>[s(e(A),{size:32})]),_:1})],2),e(t).is_winner?(i(),n("div",Z,[s(u,{to:e(d).WINNER_PAGE,class:"text-red-600 cursor-pointer"},{default:a(()=>[s(e(l),{size:32},{default:a(()=>[s(e(g),{size:32})]),_:1})]),_:1},8,["to"])])):_("",!0)])])}}});export{de as _};
