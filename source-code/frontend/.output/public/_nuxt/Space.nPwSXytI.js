import{bh as G,H as R,z as j,I as C,K as E,L,N as I,O as S,cb as M,P,cc as N,b0 as w}from"./entry.ydcKSOmp.js";import{g as O}from"./get-slot.bpfTnPl7.js";const T={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},A=()=>T,H={name:"Space",self:A},W=H;let h;const D=()=>{if(!G)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},F=Object.assign(Object.assign({},C.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),V=R({name:"Space",props:F,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:u}=j(e),d=C("Space","-space",void 0,W,e,a),t=E("Space",u,a);return{useGap:D(),rtlEnabled:t,mergedClsPrefix:a,margin:L(()=>{const{size:n}=e;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if(typeof n=="number")return{horizontal:n,vertical:n};const{self:{[P("gap",n)]:g}}=d.value,{row:r,col:f}=N(g);return{horizontal:w(f),vertical:w(r)}})}},render(){const{vertical:e,reverse:a,align:u,inline:d,justify:t,itemClass:n,itemStyle:g,margin:r,wrap:f,mergedClsPrefix:x,rtlEnabled:v,useGap:o,wrapItem:z,internalUseGap:B}=this,p=I(O(this),!1);if(!p.length)return null;const b=`${r.horizontal}px`,c=`${r.horizontal/2}px`,$=`${r.vertical}px`,i=`${r.vertical/2}px`,l=p.length-1,m=t.startsWith("space-");return S("div",{role:"none",class:[`${x}-space`,v&&`${x}-space--rtl`],style:{display:d?"inline-flex":"flex",flexDirection:e&&!a?"column":e&&a?"column-reverse":!e&&a?"row-reverse":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!f||e?"nowrap":"wrap",marginTop:o||e?"":`-${i}`,marginBottom:o||e?"":`-${i}`,alignItems:u,gap:o?`${r.vertical}px ${r.horizontal}px`:""}},!z&&(o||B)?p:p.map((y,s)=>y.type===M?y:S("div",{role:"none",class:n,style:[g,{maxWidth:"100%"},o?"":e?{marginBottom:s!==l?$:""}:v?{marginLeft:m?t==="space-between"&&s===l?"":c:s!==l?b:"",marginRight:m?t==="space-between"&&s===0?"":c:"",paddingTop:i,paddingBottom:i}:{marginRight:m?t==="space-between"&&s===l?"":c:s!==l?b:"",marginLeft:m?t==="space-between"&&s===0?"":c:"",paddingTop:i,paddingBottom:i}]},y)))}});export{V as N};