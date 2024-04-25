import{n as b,q as i,B as x,H as C,z as v,L as s,I as p,M as z,O as T,P as h}from"./entry.NiESR0-2.js";import{u as E}from"./use-houdini.Q4PNbGlT.js";import{f as R}from"./format-length.4l65r8M5.js";const I=t=>{const{primaryColor:r,successColor:a,warningColor:n,errorColor:c,infoColor:l,fontWeightStrong:d}=t;return{fontWeight:d,rotate:"252deg",colorStartPrimary:i(r,{alpha:.6}),colorEndPrimary:r,colorStartInfo:i(l,{alpha:.6}),colorEndInfo:l,colorStartWarning:i(n,{alpha:.6}),colorEndWarning:n,colorStartError:i(c,{alpha:.6}),colorEndError:c,colorStartSuccess:i(a,{alpha:.6}),colorEndSuccess:a}},$={name:"GradientText",common:b,self:I},w=$,P=x("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),k=Object.assign(Object.assign({},p.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),W=C({name:"GradientText",props:k,setup(t){E();const{mergedClsPrefixRef:r,inlineThemeDisabled:a}=v(t),n=s(()=>{const{type:e}=t;return e==="danger"?"error":e}),c=s(()=>{let e=t.size||t.fontSize;return e&&(e=R(e)),e||void 0}),l=s(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const g=e.deg||0,m=e.from,f=e.to;return`linear-gradient(${g}deg, ${m} 0%, ${f} 100%)`}}),d=p("GradientText","-gradient-text",P,w,t,r),u=s(()=>{const{value:e}=n,{common:{cubicBezierEaseInOut:g},self:{rotate:m,[h("colorStart",e)]:f,[h("colorEnd",e)]:y,fontWeight:S}}=d.value;return{"--n-bezier":g,"--n-rotate":m,"--n-color-start":f,"--n-color-end":y,"--n-font-weight":S}}),o=a?z("gradient-text",s(()=>n.value[0]),u,t):void 0;return{mergedClsPrefix:r,compatibleType:n,styleFontSize:c,styleBgImage:l,cssVars:a?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:t,onRender:r}=this;return r==null||r(),T("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{W as N};
