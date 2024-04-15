import{n as R,E as b,B as C,H as E,z as N,I as k,L as w,O as f,aE as H,R as L,F as O,P as _,bc as p}from"./entry.nQeR1Cny.js";import{u as j}from"./use-houdini.28ZYiW8j.js";const A=e=>{const{heightSmall:r,heightMedium:s,heightLarge:n,borderRadius:t}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:t,heightSmall:r,heightMedium:s,heightLarge:n}},F={name:"Skeleton",common:R,self:A},I=b([C("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),b("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),T=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),M=E({name:"Skeleton",inheritAttrs:!1,props:T,setup(e){j();const{mergedClsPrefixRef:r}=N(e),s=k("Skeleton","-skeleton",I,F,e,r);return{mergedClsPrefix:r,style:w(()=>{var n,t;const a=s.value,{common:{cubicBezierEaseInOut:v}}=a,m=a.self,{color:y,colorEnd:z,borderRadius:x}=m;let i;const{circle:l,sharp:B,round:S,width:o,height:c,size:g,text:h,animated:P}=e;g!==void 0&&(i=m[_("height",g)]);const d=l?(n=o??c)!==null&&n!==void 0?n:i:o,u=(t=l?o??c:c)!==null&&t!==void 0?t:i;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":S?"4096px":B?"":x,width:typeof d=="number"?p(d):d,height:typeof u=="number"?p(u):u,animation:P?"":"none","--n-bezier":v,"--n-color-start":y,"--n-color-end":z}})}},render(){const{repeat:e,style:r,mergedClsPrefix:s,$attrs:n}=this,t=f("div",H({class:`${s}-skeleton`,style:r},n));return e>1?f(O,null,L(e,null).map(a=>[t,`
`])):t}});export{M as N};
