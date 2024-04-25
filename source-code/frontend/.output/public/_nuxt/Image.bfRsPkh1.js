import{i as Xe,o as Fe}from"./utils.lhWoHf5m.js";import{am as de,aF as D,O as i,H as _,I as fe,s as he,aC as Ge,n as Je,E as U,B as M,aG as te,aH as Ke,G as qe,x as ve,r as O,h as Qe,j as ge,ax as E,v as we,L as eo,z as me,M as oo,aI as to,aJ as io,at as ie,aK as no,av as V,F as ne,ad as L,au as ro,aB as W,az as ao,$ as re,f as ae,J as lo}from"./entry.ydcKSOmp.js";import{t as so,N as uo}from"./Tooltip.oP0Hs3S7.js";import{u as co}from"./use-locale.B4WoGKG3.js";import{b as fo}from"./Popover.2SHOBVdi.js";const ho=(e,l)=>{if(!e)return;const r=document.createElement("a");r.href=e,l!==void 0&&(r.download=l),document.body.appendChild(r),r.click(),document.body.removeChild(r)};function vo(e,l,r,f){var a=-1,p=e==null?0:e.length;for(f&&p&&(r=e[++a]);++a<p;)r=l(r,e[a],a,e);return r}function go(e){return function(l){return e==null?void 0:e[l]}}var wo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},mo=go(wo);const po=mo;var xo=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Co="\\u0300-\\u036f",bo="\\ufe20-\\ufe2f",So="\\u20d0-\\u20ff",Oo=Co+bo+So,Lo="["+Oo+"]",Ro=RegExp(Lo,"g");function Mo(e){return e=de(e),e&&e.replace(xo,po).replace(Ro,"")}var Io=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Po(e){return e.match(Io)||[]}var ko=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function zo(e){return ko.test(e)}var pe="\\ud800-\\udfff",yo="\\u0300-\\u036f",To="\\ufe20-\\ufe2f",Ao="\\u20d0-\\u20ff",Eo=yo+To+Ao,xe="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Ho="\\xac\\xb1\\xd7\\xf7",Do="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bo="\\u2000-\\u206f",Zo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",$o="\\ufe0e\\ufe0f",Se=Ho+Do+Bo+Zo,Oe="['’]",le="["+Se+"]",No="["+Eo+"]",Le="\\d+",jo="["+xe+"]",Re="["+Ce+"]",Me="[^"+pe+Se+Le+xe+Ce+be+"]",Uo="\\ud83c[\\udffb-\\udfff]",Vo="(?:"+No+"|"+Uo+")",Wo="[^"+pe+"]",Ie="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",A="["+be+"]",_o="\\u200d",se="(?:"+Re+"|"+Me+")",Yo="(?:"+A+"|"+Me+")",ue="(?:"+Oe+"(?:d|ll|m|re|s|t|ve))?",ce="(?:"+Oe+"(?:D|LL|M|RE|S|T|VE))?",ke=Vo+"?",ze="["+$o+"]?",Xo="(?:"+_o+"(?:"+[Wo,Ie,Pe].join("|")+")"+ze+ke+")*",Fo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Go="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Jo=ze+ke+Xo,Ko="(?:"+[jo,Ie,Pe].join("|")+")"+Jo,qo=RegExp([A+"?"+Re+"+"+ue+"(?="+[le,A,"$"].join("|")+")",Yo+"+"+ce+"(?="+[le,A+se,"$"].join("|")+")",A+"?"+se+"+"+ue,A+"+"+ce,Go,Fo,Le,Ko].join("|"),"g");function Qo(e){return e.match(qo)||[]}function et(e,l,r){return e=de(e),l=r?void 0:l,l===void 0?zo(e)?Qo(e):Po(e):e.match(l)||[]}var ot="['’]",tt=RegExp(ot,"g");function it(e){return function(l){return vo(et(Mo(l).replace(tt,"")),e,"")}}var nt=it(function(e,l,r){return e+(r?"-":"")+l.toLowerCase()});const rt=D("rotateClockwise",i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),i("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),at=D("rotateClockwise",i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),i("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),lt=D("zoomIn",i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),i("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),st=D("zoomOut",i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),i("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),ut=_({name:"ResizeSmall",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},i("g",{fill:"none"},i("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),ye=Object.assign(Object.assign({},fe.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),Te=he("n-image");function ct(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const dt=Ge({name:"Image",common:Je,peers:{Tooltip:so},self:ct}),ft=i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),ht=i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),vt=i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),gt=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024"},i("path",{fill:"currentColor",d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"})),wt=U([U("body >",[M("image-container","position: fixed;")]),M("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),M("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[te()]),M("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[M("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),te()]),M("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[Ke()]),M("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),M("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[qe("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]),H=32,mt=_({name:"ImagePreview",props:Object.assign(Object.assign({},ye),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const l=fe("Image","-image",wt,dt,e,ve(e,"clsPrefix"));let r=null;const f=O(null),a=O(null),p=O(void 0),b=O(!1),S=O(!1),{localeRef:I}=co("Image");function s(){const{value:o}=a;if(!r||!o)return;const{style:n}=o,t=r.getBoundingClientRect(),c=t.left+t.width/2,d=t.top+t.height/2;n.transformOrigin=`${c}px ${d}px`}function u(o){var n,t;switch(o.key){case" ":o.preventDefault();break;case"ArrowLeft":(n=e.onPrev)===null||n===void 0||n.call(e);break;case"ArrowRight":(t=e.onNext)===null||t===void 0||t.call(e);break;case"Escape":Q();break}}Qe(b,o=>{o?W("keydown",document,u):E("keydown",document,u)}),ge(()=>{E("keydown",document,u)});let v=0,Y=0,P=0,k=0,B=0,Z=0,X=0,F=0,$=!1;function G(o){const{clientX:n,clientY:t}=o;P=n-v,k=t-Y,fo(x)}function Ae(o){const{mouseUpClientX:n,mouseUpClientY:t,mouseDownClientX:c,mouseDownClientY:d}=o,w=c-n,m=d-t,C=`vertical${m>0?"Top":"Bottom"}`,R=`horizontal${w>0?"Left":"Right"}`;return{moveVerticalDirection:C,moveHorizontalDirection:R,deltaHorizontal:w,deltaVertical:m}}function J(o){const{value:n}=f;if(!n)return{offsetX:0,offsetY:0};const t=n.getBoundingClientRect(),{moveVerticalDirection:c,moveHorizontalDirection:d,deltaHorizontal:w,deltaVertical:m}=o||{};let C=0,R=0;return t.width<=window.innerWidth?C=0:t.left>0?C=(t.width-window.innerWidth)/2:t.right<window.innerWidth?C=-(t.width-window.innerWidth)/2:d==="horizontalRight"?C=Math.min((t.width-window.innerWidth)/2,B-(w??0)):C=Math.max(-((t.width-window.innerWidth)/2),B-(w??0)),t.height<=window.innerHeight?R=0:t.top>0?R=(t.height-window.innerHeight)/2:t.bottom<window.innerHeight?R=-(t.height-window.innerHeight)/2:c==="verticalBottom"?R=Math.min((t.height-window.innerHeight)/2,Z-(m??0)):R=Math.max(-((t.height-window.innerHeight)/2),Z-(m??0)),{offsetX:C,offsetY:R}}function K(o){E("mousemove",document,G),E("mouseup",document,K);const{clientX:n,clientY:t}=o;$=!1;const c=Ae({mouseUpClientX:n,mouseUpClientY:t,mouseDownClientX:X,mouseDownClientY:F}),d=J(c);P=d.offsetX,k=d.offsetY,x()}const h=we(Te,null);function Ee(o){var n,t;if((t=(n=h==null?void 0:h.previewedImgPropsRef.value)===null||n===void 0?void 0:n.onMousedown)===null||t===void 0||t.call(n,o),o.button!==0)return;const{clientX:c,clientY:d}=o;$=!0,v=c-P,Y=d-k,B=P,Z=k,X=c,F=d,x(),W("mousemove",document,G),W("mouseup",document,K)}function He(o){var n,t;(t=(n=h==null?void 0:h.previewedImgPropsRef.value)===null||n===void 0?void 0:n.onDblclick)===null||t===void 0||t.call(n,o);const c=q();g=g===c?1:c,x()}const N=1.5;let z=0,g=1,y=0;function j(){g=1,z=0}function De(){var o;j(),y=0,(o=e.onPrev)===null||o===void 0||o.call(e)}function Be(){var o;j(),y=0,(o=e.onNext)===null||o===void 0||o.call(e)}function Ze(){y-=90,x()}function $e(){y+=90,x()}function Ne(){const{value:o}=f;if(!o)return 1;const{innerWidth:n,innerHeight:t}=window,c=Math.max(1,o.naturalHeight/(t-H)),d=Math.max(1,o.naturalWidth/(n-H));return Math.max(3,c*2,d*2)}function q(){const{value:o}=f;if(!o)return 1;const{innerWidth:n,innerHeight:t}=window,c=o.naturalHeight/(t-H),d=o.naturalWidth/(n-H);return c<1&&d<1?1:Math.max(c,d)}function je(){const o=Ne();g<o&&(z+=1,g=Math.min(o,Math.pow(N,z)),x())}function Ue(){if(g>.5){const o=g;z-=1,g=Math.max(.5,Math.pow(N,z));const n=o-g;x(!1);const t=J();g+=n,x(!1),g-=n,P=t.offsetX,k=t.offsetY,x()}}function Ve(){const o=p.value;o&&ho(o,void 0)}function x(o=!0){var n;const{value:t}=f;if(!t)return;const{style:c}=t,d=ao((n=h==null?void 0:h.previewedImgPropsRef.value)===null||n===void 0?void 0:n.style);let w="";if(typeof d=="string")w=d+";";else for(const C in d)w+=`${nt(C)}: ${d[C]};`;const m=`transform-origin: center; transform: translateX(${P}px) translateY(${k}px) rotate(${y}deg) scale(${g});`;$?c.cssText=w+"cursor: grabbing; transition: none;"+m:c.cssText=w+"cursor: grab;"+m+(o?"":"transition: none;"),o||t.offsetHeight}function Q(){b.value=!b.value,S.value=!0}function We(){g=q(),z=Math.ceil(Math.log(g)/Math.log(N)),P=0,k=0,x()}const _e={setPreviewSrc:o=>{p.value=o},setThumbnailEl:o=>{r=o},toggleShow:Q};function Ye(o,n){if(e.showToolbarTooltip){const{value:t}=l;return i(uo,{to:!1,theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>I.value[n],trigger:()=>o})}else return o}const ee=eo(()=>{const{common:{cubicBezierEaseInOut:o},self:{toolbarIconColor:n,toolbarBorderRadius:t,toolbarBoxShadow:c,toolbarColor:d}}=l.value;return{"--n-bezier":o,"--n-toolbar-icon-color":n,"--n-toolbar-color":d,"--n-toolbar-border-radius":t,"--n-toolbar-box-shadow":c}}),{inlineThemeDisabled:oe}=me(),T=oe?oo("image-preview",void 0,ee,e):void 0;return Object.assign({previewRef:f,previewWrapperRef:a,previewSrc:p,show:b,appear:to(),displayed:S,previewedImgProps:h==null?void 0:h.previewedImgPropsRef,handleWheel(o){o.preventDefault()},handlePreviewMousedown:Ee,handlePreviewDblclick:He,syncTransformOrigin:s,handleAfterLeave:()=>{j(),y=0,S.value=!1},handleDragStart:o=>{var n,t;(t=(n=h==null?void 0:h.previewedImgPropsRef.value)===null||n===void 0?void 0:n.onDragstart)===null||t===void 0||t.call(n,o),o.preventDefault()},zoomIn:je,zoomOut:Ue,handleDownloadClick:Ve,rotateCounterclockwise:Ze,rotateClockwise:$e,handleSwitchPrev:De,handleSwitchNext:Be,withTooltip:Ye,resizeToOrignalImageSize:We,cssVars:oe?void 0:ee,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},_e)},render(){var e,l;const{clsPrefix:r}=this;return i(ne,null,(l=(e=this.$slots).default)===null||l===void 0?void 0:l.call(e),i(io,{show:this.show},{default:()=>{var f;return this.show||this.displayed?((f=this.onRender)===null||f===void 0||f.call(this),ie(i("div",{class:[`${r}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},i(V,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?i("div",{class:`${r}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?i(V,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:a}=this;return i("div",{class:`${r}-image-preview-toolbar`},this.onPrev?i(ne,null,a(i(L,{clsPrefix:r,onClick:this.handleSwitchPrev},{default:()=>ft}),"tipPrevious"),a(i(L,{clsPrefix:r,onClick:this.handleSwitchNext},{default:()=>ht}),"tipNext")):null,a(i(L,{clsPrefix:r,onClick:this.rotateCounterclockwise},{default:()=>i(at,null)}),"tipCounterclockwise"),a(i(L,{clsPrefix:r,onClick:this.rotateClockwise},{default:()=>i(rt,null)}),"tipClockwise"),a(i(L,{clsPrefix:r,onClick:this.resizeToOrignalImageSize},{default:()=>i(ut,null)}),"tipOriginalSize"),a(i(L,{clsPrefix:r,onClick:this.zoomOut},{default:()=>i(st,null)}),"tipZoomOut"),a(i(L,{clsPrefix:r,onClick:this.zoomIn},{default:()=>i(lt,null)}),"tipZoomIn"),a(i(L,{clsPrefix:r,onClick:this.handleDownloadClick},{default:()=>gt}),"tipDownload"),a(i(L,{clsPrefix:r,onClick:this.toggleShow},{default:()=>vt}),"tipClose"))}}):null,i(V,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:a={}}=this;return ie(i("div",{class:`${r}-image-preview-wrapper`,ref:"previewWrapperRef"},i("img",Object.assign({},a,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${r}-image-preview`,a.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[ro,this.show]])}})),[[no,{enabled:this.show}]])):null}}))}}),pt=he("n-image-group"),xt=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},ye),Rt=_({name:"Image",props:xt,inheritAttrs:!1,setup(e){const l=O(null),r=O(!1),f=O(null),a=we(pt,null),{mergedClsPrefixRef:p}=a||me(e),b={click:()=>{if(e.previewDisabled||r.value)return;const s=e.previewSrc||e.src;if(a){a.setPreviewSrc(s),a.setThumbnailEl(l.value),a.toggleShow();return}const{value:u}=f;u&&(u.setPreviewSrc(s),u.setThumbnailEl(l.value),u.toggleShow())}},S=O(!e.lazy);re(()=>{var s;(s=l.value)===null||s===void 0||s.setAttribute("data-group-id",(a==null?void 0:a.groupId)||"")}),re(()=>{if(e.lazy&&e.intersectionObserverOptions){let s;const u=ae(()=>{s==null||s(),s=void 0,s=Fe(l.value,e.intersectionObserverOptions,S)});ge(()=>{u(),s==null||s()})}}),ae(()=>{var s;e.src||((s=e.imgProps)===null||s===void 0||s.src),r.value=!1});const I=O(!1);return lo(Te,{previewedImgPropsRef:ve(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:p,groupId:a==null?void 0:a.groupId,previewInstRef:f,imageRef:l,showError:r,shouldStartLoading:S,loaded:I,mergedOnClick:s=>{var u,v;b.click(),(v=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||v===void 0||v.call(u,s)},mergedOnError:s=>{if(!S.value)return;r.value=!0;const{onError:u,imgProps:{onError:v}={}}=e;u==null||u(s),v==null||v(s)},mergedOnLoad:s=>{const{onLoad:u,imgProps:{onLoad:v}={}}=e;u==null||u(s),v==null||v(s),I.value=!0}},b)},render(){var e,l;const{mergedClsPrefix:r,imgProps:f={},loaded:a,$attrs:p,lazy:b}=this,S=(l=(e=this.$slots).placeholder)===null||l===void 0?void 0:l.call(e),I=this.src||f.src,s=i("img",Object.assign(Object.assign({},f),{ref:"imageRef",width:this.width||f.width,height:this.height||f.height,src:this.showError?this.fallbackSrc:b&&this.intersectionObserverOptions?this.shouldStartLoading?I:void 0:I,alt:this.alt||f.alt,"aria-label":this.alt||f.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:Xe&&b&&!this.intersectionObserverOptions?"lazy":"eager",style:[f.style||"",S&&!a?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return i("div",Object.assign({},p,{role:"none",class:[p.class,`${r}-image`,(this.previewDisabled||this.showError)&&`${r}-image--preview-disabled`]}),this.groupId?s:i(mt,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:r,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>s}),!a&&S)}});export{Rt as N,it as c};
