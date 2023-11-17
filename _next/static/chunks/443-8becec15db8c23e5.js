(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var i=[],s=!1,c=-1;function d(){s&&r&&(s=!1,r.length?i=r.concat(i):c=-1,i.length&&f())}function f(){if(!s){var e=u(d);s=!0;for(var t=i.length;t;){for(r=i,i=[];++c<t;)r&&r[c].run();c=-1,t=i.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.push(new p(e,t)),1!==i.length||s||u(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},l=!0;try{t[e](a,a.exports,r),l=!1}finally{l&&delete n[e]}return a.exports}r.ab="//";var o=r(229);e.exports=o}()},4607:function(e,t,n){"use strict";n.d(t,{O:function(){return ed}});var r,o,a,l,u,i,s,c,d,f,p,m,h,b=n(7294),v=n.t(b,2);function g(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function y(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,y),r}var x=((r=x||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),E=((o=E||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function w({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:l}){let u=P(t,e);if(a)return T(u,n,r,l);let i=null!=o?o:0;if(2&i){let{static:e=!1,...t}=u;if(e)return T(t,n,r,l)}if(1&i){let{unmount:e=!0,...t}=u;return y(e?0:1,{0:()=>null,1:()=>T({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return T(u,n,r,l)}function T(e,t={},n,r){let{as:o=n,children:a,refName:l="ref",...u}=N(e,["unmount","static"]),i=void 0!==e.ref?{[l]:e.ref}:{},s="function"==typeof a?a(t):a;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(o===b.Fragment&&Object.keys(I(u)).length>0){if(!(0,b.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=s.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>g(null==e?void 0:e.className(...t),u.className):g(null==e?void 0:e.className,u.className),n=t?{className:t}:{};return(0,b.cloneElement)(s,Object.assign({},P(s.props,I(N(u,["ref"]))),c,i,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,i.ref),n))}return(0,b.createElement)(o,Object.assign({},N(u,["ref"]),o!==b.Fragment&&i,o!==b.Fragment&&c),s)}function P(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function S(e){var t;return Object.assign((0,b.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function I(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function N(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var O=Object.defineProperty,A=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t,n)=>(A(e,"symbol"!=typeof t?t+"":t,n),n);let k=new class{constructor(){F(this,"current",this.detect()),F(this,"handoffState","pending"),F(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},L=(e,t)=>{k.isServer?(0,b.useEffect)(e,t):(0,b.useLayoutEffect)(e,t)},R=null!=(h=b.useId)?h:function(){let e=function(){let e;let t=(e="undefined"==typeof document,(0,v.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=b.useState(k.isHandoffComplete);return n&&!1===k.isHandoffComplete&&r(!1),b.useEffect(()=>{!0!==n&&r(!0)},[n]),b.useEffect(()=>k.handoff(),[]),!t&&n}(),[t,n]=b.useState(e?()=>k.nextId():null);return L(()=>{null===t&&n(k.nextId())},[t]),null!=t?""+t:void 0};var D=((a=D||{}).Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a);let M=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var j=((l=j||{})[l.First=1]="First",l[l.Previous=2]="Previous",l[l.Next=4]="Next",l[l.Last=8]="Last",l[l.WrapAround=16]="WrapAround",l[l.NoScroll=32]="NoScroll",l),C=((u=C||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),_=((i=_||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i),U=((s=U||{})[s.Strict=0]="Strict",s[s.Loose=1]="Loose",s),H=((c=H||{})[c.Keyboard=0]="Keyboard",c[c.Mouse=1]="Mouse",c);function $(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var a,l,u;let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?$(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(M)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:i.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,h;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(h=s[e])||h.focus(f),p+=c}while(h!==i.activeElement);return 6&t&&null!=(u=null==(l=null==(a=h)?void 0:a.matches)?void 0:l.call(a,"textarea,input"))&&u&&h.select(),2}function G(e){let t=(0,b.useRef)(e);return L(()=>{t.current=e},[e]),t}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let B=function(e){let t=G(e);return b.useCallback((...e)=>t.current(...e),[t])},q=Symbol();function K(...e){let t=(0,b.useRef)(e);(0,b.useEffect)(()=>{t.current=e},[e]);let n=B(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[q]))?void 0:n}function V(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var Y=((d=Y||{})[d.None=1]="None",d[d.Focusable=2]="Focusable",d[d.Hidden=4]="Hidden",d);let z=S(function(e,t){let{features:n=1,...r}=e;return w({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function X({onFocus:e}){let t;let[n,r]=(0,b.useState)(!0),o=(t=(0,b.useRef)(!1),L(()=>(t.current=!0,()=>{t.current=!1}),[]),t);return n?b.createElement(z,{as:"button",type:"button",features:Y.Focusable,onFocus:t=>{t.preventDefault();let n,a=50;n=requestAnimationFrame(function t(){if(a--<=0){n&&cancelAnimationFrame(n);return}if(e()){if(cancelAnimationFrame(n),!o.current)return;r(!1);return}n=requestAnimationFrame(t)})}}):null}let J=b.createContext(null);function Q({children:e}){let t=b.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let o=null!=(n=r.get(t))?n:0;return r.set(t,o+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return b.createElement(J.Provider,{value:t},e)}function Z(e){let t=b.useContext(J);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let o=[],a=r;for(;a;)o.push(a.index),a=a.return;return"$."+o.join(".")}(),[r,o]=t.current.get(e,n);return b.useEffect(()=>o,[]),r}var ee=((f=ee||{})[f.Forwards=0]="Forwards",f[f.Backwards=1]="Backwards",f),et=((p=et||{})[p.Less=-1]="Less",p[p.Equal=0]="Equal",p[p.Greater=1]="Greater",p),en=((m=en||{})[m.SetSelectedIndex=0]="SetSelectedIndex",m[m.RegisterTab=1]="RegisterTab",m[m.UnregisterTab=2]="UnregisterTab",m[m.RegisterPanel=3]="RegisterPanel",m[m.UnregisterPanel=4]="UnregisterPanel",m);let er={0(e,t){var n;let r=$(e.tabs,e=>e.current),o=$(e.panels,e=>e.current),a=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),l={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let n=y(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>y(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===a.length)return l;let o=y(n,{0:()=>r.indexOf(a[0]),1:()=>r.indexOf(a[a.length-1])});return{...l,selectedIndex:-1===o?e.selectedIndex:o}}let u=r.slice(0,t.index),i=[...r.slice(t.index),...u].find(e=>a.includes(e));if(!i)return l;let s=null!=(n=r.indexOf(i))?n:e.selectedIndex;return -1===s&&(s=e.selectedIndex),{...l,selectedIndex:s}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=$([...e.tabs,t.tab],e=>e.current),a=null!=(n=o.indexOf(r))?n:e.selectedIndex;return -1===a&&(a=e.selectedIndex),{...e,tabs:o,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:$([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},eo=(0,b.createContext)(null);function ea(e){let t=(0,b.useContext)(eo);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ea),t}return t}eo.displayName="TabsDataContext";let el=(0,b.createContext)(null);function eu(e){let t=(0,b.useContext)(el);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eu),t}return t}function ei(e,t){return y(t.type,er,e,t)}el.displayName="TabsActionsContext";let es=b.Fragment,ec=x.RenderStrategy|x.Static,ed=Object.assign(S(function(e,t){var n,r;let o=R(),{id:a=`headlessui-tabs-tab-${o}`,...l}=e,{orientation:u,activation:i,selectedIndex:s,tabs:c,panels:d}=ea("Tab"),f=eu("Tab"),p=ea("Tab"),m=(0,b.useRef)(null),h=K(m,t);L(()=>f.registerTab(m),[f,m]);let v=Z("tabs"),g=c.indexOf(m);-1===g&&(g=v);let x=g===s,E=B(e=>{var t;let n=e();if(n===C.Success&&"auto"===i){let e=null==(t=k.isServer?null:m instanceof Node?m.ownerDocument:null!=m&&m.hasOwnProperty("current")&&m.current instanceof Node?m.current.ownerDocument:document)?void 0:t.activeElement,n=p.tabs.findIndex(t=>t.current===e);-1!==n&&f.change(n)}return n}),T=B(e=>{let t=c.map(e=>e.current).filter(Boolean);if(e.key===D.Space||e.key===D.Enter){e.preventDefault(),e.stopPropagation(),f.change(g);return}switch(e.key){case D.Home:case D.PageUp:return e.preventDefault(),e.stopPropagation(),E(()=>W(t,j.First));case D.End:case D.PageDown:return e.preventDefault(),e.stopPropagation(),E(()=>W(t,j.Last))}if(E(()=>y(u,{vertical:()=>e.key===D.ArrowUp?W(t,j.Previous|j.WrapAround):e.key===D.ArrowDown?W(t,j.Next|j.WrapAround):C.Error,horizontal:()=>e.key===D.ArrowLeft?W(t,j.Previous|j.WrapAround):e.key===D.ArrowRight?W(t,j.Next|j.WrapAround):C.Error}))===C.Success)return e.preventDefault()}),P=(0,b.useRef)(!1),S=B(()=>{var e,t;P.current||(P.current=!0,null==(e=m.current)||e.focus({preventScroll:!0}),f.change(g),t=()=>{P.current=!1},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})))}),I=B(e=>{e.preventDefault()}),N=(0,b.useMemo)(()=>({selected:x}),[x]);return w({ourProps:{ref:h,onKeyDown:T,onMouseDown:I,onClick:S,id:a,role:"tab",type:function(e,t){let[n,r]=(0,b.useState)(()=>V(e));return L(()=>{r(V(e))},[e.type,e.as]),L(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,m),"aria-controls":null==(r=null==(n=d[g])?void 0:n.current)?void 0:r.id,"aria-selected":x,tabIndex:x?0:-1},theirProps:l,slot:N,defaultTag:"button",name:"Tabs.Tab"})}),{Group:S(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:a,selectedIndex:l=null,...u}=e,i=r?"vertical":"horizontal",s=o?"manual":"auto",c=null!==l,d=K(t),[f,p]=(0,b.useReducer)(ei,{selectedIndex:null!=l?l:n,tabs:[],panels:[]}),m=(0,b.useMemo)(()=>({selectedIndex:f.selectedIndex}),[f.selectedIndex]),h=G(a||(()=>{})),v=G(f.tabs),g=(0,b.useMemo)(()=>({orientation:i,activation:s,...f}),[i,s,f]),y=B(e=>(p({type:1,tab:e}),()=>p({type:2,tab:e}))),x=B(e=>(p({type:3,panel:e}),()=>p({type:4,panel:e}))),E=B(e=>{T.current!==e&&h.current(e),c||p({type:0,index:e})}),T=G(c?e.selectedIndex:f.selectedIndex),P=(0,b.useMemo)(()=>({registerTab:y,registerPanel:x,change:E}),[]);return L(()=>{p({type:0,index:null!=l?l:n})},[l]),L(()=>{if(void 0===T.current||f.tabs.length<=0)return;let e=$(f.tabs,e=>e.current);e.some((e,t)=>f.tabs[t]!==e)&&E(e.indexOf(f.tabs[T.current]))}),b.createElement(Q,null,b.createElement(el.Provider,{value:P},b.createElement(eo.Provider,{value:g},g.tabs.length<=0&&b.createElement(X,{onFocus:()=>{var e,t;for(let n of v.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),w({ourProps:{ref:d},theirProps:u,slot:m,defaultTag:es,name:"Tabs"}))))}),List:S(function(e,t){let{orientation:n,selectedIndex:r}=ea("Tab.List");return w({ourProps:{ref:K(t),role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:S(function(e,t){let{selectedIndex:n}=ea("Tab.Panels");return w({ourProps:{ref:K(t)},theirProps:e,slot:(0,b.useMemo)(()=>({selectedIndex:n}),[n]),defaultTag:"div",name:"Tabs.Panels"})}),Panel:S(function(e,t){var n,r,o,a;let l=R(),{id:u=`headlessui-tabs-panel-${l}`,tabIndex:i=0,...s}=e,{selectedIndex:c,tabs:d,panels:f}=ea("Tab.Panel"),p=eu("Tab.Panel"),m=(0,b.useRef)(null),h=K(m,t);L(()=>p.registerPanel(m),[p,m]);let v=Z("panels"),g=f.indexOf(m);-1===g&&(g=v);let y=g===c,x=(0,b.useMemo)(()=>({selected:y}),[y]),E={ref:h,id:u,role:"tabpanel","aria-labelledby":null==(r=null==(n=d[g])?void 0:n.current)?void 0:r.id,tabIndex:y?i:-1};return y||null!=(o=s.unmount)&&!o||null!=(a=s.static)&&a?w({ourProps:E,theirProps:s,slot:x,defaultTag:"div",features:ec,visible:y,name:"Tabs.Panel"}):b.createElement(z,{as:"span",...E})})})}}]);