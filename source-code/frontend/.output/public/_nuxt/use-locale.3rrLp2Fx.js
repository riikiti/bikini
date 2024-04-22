import{bQ as y,aN as g,bU as p,am as P,v as w,bH as M,L as v}from"./entry.ZI9g3MLf.js";var S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;function T(e,a){if(y(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||g(e)?!0:C.test(e)||!S.test(e)||a!=null&&e in Object(a)}var D="Expected a function";function f(e,a){if(typeof e!="function"||a!=null&&typeof a!="function")throw new TypeError(D);var t=function(){var n=arguments,i=a?a.apply(this,n):n[0],r=t.cache;if(r.has(i))return r.get(i);var o=e.apply(this,n);return t.cache=r.set(i,o)||r,o};return t.cache=new(f.Cache||p),t}f.Cache=p;var k=500;function W(e){var a=f(e,function(n){return t.size===k&&t.clear(),n}),t=a.cache;return a}var F=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,A=/\\(\\)?/g,x=W(function(e){var a=[];return e.charCodeAt(0)===46&&a.push(""),e.replace(F,function(t,n,i,r){a.push(i?r.replace(A,"$1"):n||t)}),a});function N(e,a){return y(e)?e:T(e,a)?[e]:x(P(e))}var E=1/0;function R(e){if(typeof e=="string"||g(e))return e;var a=e+"";return a=="0"&&1/e==-E?"-0":a}function L(e,a){a=N(a,e);for(var t=0,n=a.length;e!=null&&t<n;)e=e[R(a[t++])];return t&&t==n?e:void 0}function De(e,a,t){var n=e==null?void 0:L(e,a);return n===void 0?t:n}const I={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"yyyy-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},q=I;function h(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}function d(e){return function(a,t){var n=t!=null&&t.context?String(t.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):r;i=e.formattingValues[o]||e.formattingValues[r]}else{var l=e.defaultWidth,m=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[m]||e.values[l]}var u=e.argumentCallback?e.argumentCallback(a):a;return i[u]}}function s(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=a.match(i);if(!r)return null;var o=r[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(l)?V(l,function(c){return c.test(o)}):z(l,function(c){return c.test(o)}),u;u=e.valueCallback?e.valueCallback(m):m,u=t.valueCallback?t.valueCallback(u):u;var b=a.slice(o.length);return{value:u,rest:b}}}function z(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function V(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function O(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var i=n[0],r=a.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];o=t.valueCallback?t.valueCallback(o):o;var l=a.slice(i.length);return{value:o,rest:l}}}var U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$=function(a,t,n){var i,r=U[a];return typeof r=="string"?i=r:t===1?i=r.one:i=r.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};const _=$;var X={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},J={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},j={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Q={date:h({formats:X,defaultWidth:"full"}),time:h({formats:J,defaultWidth:"full"}),dateTime:h({formats:j,defaultWidth:"full"})};const H=Q;var Y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Z=function(a,t,n,i){return Y[a]};const K=Z;var B={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},G={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ee={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},te={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ae={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ne={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},re=function(a,t){var n=Number(a),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ie={ordinalNumber:re,era:d({values:B,defaultWidth:"wide"}),quarter:d({values:G,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:d({values:ee,defaultWidth:"wide"}),day:d({values:te,defaultWidth:"wide"}),dayPeriod:d({values:ae,defaultWidth:"wide",formattingValues:ne,defaultFormattingWidth:"wide"})};const oe=ie;var le=/^(\d+)(th|st|nd|rd)?/i,ue=/\d+/i,de={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},se={any:[/^b/i,/^(a|c)/i]},me={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ce={any:[/1/i,/2/i,/3/i,/4/i]},he={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},fe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ve={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ye={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ge={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},be={ordinalNumber:O({matchPattern:le,parsePattern:ue,valueCallback:function(a){return parseInt(a,10)}}),era:s({matchPatterns:de,defaultMatchWidth:"wide",parsePatterns:se,defaultParseWidth:"any"}),quarter:s({matchPatterns:me,defaultMatchWidth:"wide",parsePatterns:ce,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:s({matchPatterns:he,defaultMatchWidth:"wide",parsePatterns:fe,defaultParseWidth:"any"}),day:s({matchPatterns:ve,defaultMatchWidth:"wide",parsePatterns:ye,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:ge,defaultMatchWidth:"any",parsePatterns:pe,defaultParseWidth:"any"})};const Pe=be;var we={code:"en-US",formatDistance:_,formatLong:H,formatRelative:K,localize:oe,match:Pe,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Me=we,Se={name:"en-US",locale:Me},Ce=Se;function ke(e){const{mergedLocaleRef:a,mergedDateLocaleRef:t}=w(M,null)||{},n=v(()=>{var r,o;return(o=(r=a==null?void 0:a.value)===null||r===void 0?void 0:r[e])!==null&&o!==void 0?o:q[e]});return{dateLocaleRef:v(()=>{var r;return(r=t==null?void 0:t.value)!==null&&r!==void 0?r:Ce}),localeRef:n}}export{L as b,N as c,De as g,T as i,R as t,ke as u};
