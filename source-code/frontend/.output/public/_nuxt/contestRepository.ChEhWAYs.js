import{ak as s}from"./entry.JSdb73Bp.js";const n={prizeList:()=>{const{$http:t}=s();return t.get("/api/auth/active-contest/prize-block")},currentUserList:()=>{const{$http:t}=s();return t.get("/api/auth/active-contest/model-block")},winnerList:async()=>{const{$http:t}=s(),e=await t.get("/api/auth/winners");return console.log("winners: ",e),e.data.data},statistics:async()=>{const{$http:t}=s();return(await t.get("/api/auth/statistic")).data.data},allModelList:()=>{const{$http:t}=s();return t.get("/api/auth/active-contest/all-publications-block")}};export{n as c};
