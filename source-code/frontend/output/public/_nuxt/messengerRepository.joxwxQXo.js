import{ac as t}from"./entry.CG_TRq2h.js";const o={allChats:async()=>{const{$http:s}=t(),e=await s.get("/api/auth/messenger/messages");return console.log("resp app: ",e.data),e.data},getMessagesById:async s=>{const{$http:e}=t(),a=await e.get(`/api/auth/messenger/messages/${s}`);return console.log("resp app: ",a.data.data),a.data.data},sendMessageById:async s=>{const{$http:e}=t(),a=await e.post(`/api/auth/messenger/messages/${s.receiver_id}`,{content:s.content});return console.log("resp app: ",a.data),a.data.data}};export{o as m};
