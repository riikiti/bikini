import{c as s}from"./createLucideIcon.Dfqn9xq-.js";import{ak as o}from"./entry.nQeR1Cny.js";/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=s("StarIcon",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("TrophyIcon",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),h={models:async()=>{const{$http:a}=o(),t=await a.get("/api/auth/models");return console.log("respomse: ",t),t.data},favourites:async()=>{const{$http:a}=o(),t=await a.get("/api/auth/user-favorites");return console.log("respomse: ",t),t.data},profileById:async a=>{const{$http:t}=o();return(await t.get(`/api/auth/user/${a}`)).data.data},getGalleryPhotos:async a=>{const{$http:t}=o();return(await t.get(`/api/auth/model-photos/${a}`)).data.data},addGalleryPhoto:async()=>{const{$http:a}=o();return await a.post("/api/auth/gallery-photo")}};export{r as S,c as T,h as u};
