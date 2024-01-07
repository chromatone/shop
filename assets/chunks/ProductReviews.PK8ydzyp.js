import{q as V,r as k,D as F,c as N,b as J,o as d,e as c,f as o,g as v,s as W,h as w,m as S,G as j,T,v as q,x as b,H as D,d as p,F as C,p as O,I as $,J as P,n as U,z as E,A as L}from"./framework.CyD6RqvT.js";var I={fetch:globalThis.fetch,WebSocket:globalThis.WebSocket,URL:globalThis.URL},M=(t,e={})=>{let s=e.globals?{...I,...e.globals}:I;return{globals:s,url:new s.URL(t),with(a){return{...this,...a(this)}}}};function z(t){return typeof t!="object"||!t?!1:"headers"in t&&"ok"in t&&"json"in t&&typeof t.json=="function"&&"text"in t&&typeof t.json=="function"}async function G(t){var e;if(!(typeof t!="object"||!t)){if(z(t)){let s=(e=t.headers.get("Content-Type"))==null?void 0:e.toLowerCase();if(s!=null&&s.startsWith("application/json")||s!=null&&s.startsWith("application/health+json")){let a=await t.json();if(!t.ok)throw a;return"data"in a?a.data:a}if(s!=null&&s.startsWith("text/html")||s!=null&&s.startsWith("text/plain")){let a=await t.text();if(!t.ok)throw a;return a}return t}return"data"in t?t.data:t}}var Y=async(t,e,s=globalThis.fetch)=>{e.headers=typeof e.headers=="object"&&!Array.isArray(e.headers)?e.headers:{};let a=await s(t,e);return G(a).catch(l=>{throw{errors:typeof l=="object"&&"errors"in l?l.errors:l,response:a}})},H=(t,e)=>()=>({path:"/files",method:"POST",body:t,params:e??{},headers:{"Content-Type":"multipart/form-data"}}),K=(t,e,s)=>()=>{let a=String(t);if(a.startsWith("directus_"))throw new Error("Cannot use createItem for core collections");return{path:`/items/${a}`,params:s??{},body:JSON.stringify(e),method:"POST"}},Q=t=>{let e={};if(Array.isArray(t.fields)&&t.fields.length>0){let s=(a,l=[])=>{if(typeof a=="object"){let f=[];for(let r in a){let u=a[r]??[];if(Array.isArray(u))for(let n of u)f.push(s(n,[...l,r]));else if(typeof u=="object")for(let n of Object.keys(u)){let A=u[n];for(let m of A)f.push(s(m,[...l,`${r}:${n}`]))}}return f.flatMap(r=>r)}return[...l,String(a)].join(".")};e.fields=t.fields.flatMap(a=>s(a)).join(",")}t.filter&&Object.keys(t.filter).length>0&&(e.filter=JSON.stringify(t.filter)),t.search&&(e.search=t.search),"sort"in t&&t.sort&&(e.sort=typeof t.sort=="string"?t.sort:t.sort.join(",")),typeof t.limit=="number"&&t.limit>=-1&&(e.limit=String(t.limit)),typeof t.offset=="number"&&t.offset>=0&&(e.offset=String(t.offset)),typeof t.page=="number"&&t.page>=1&&(e.page=String(t.page)),t.deep&&Object.keys(t.deep).length>0&&(e.deep=JSON.stringify(t.deep)),t.alias&&Object.keys(t.alias).length>0&&(e.alias=JSON.stringify(t.alias)),t.aggregate&&Object.keys(t.aggregate).length>0&&(e.aggregate=JSON.stringify(t.aggregate)),t.groupBy&&t.groupBy.length>0&&(e.groupBy=t.groupBy.join(","));for(let[s,a]of Object.entries(t))s in e||(typeof a=="string"||typeof a=="number"||typeof a=="boolean"?e[s]=String(a):e[s]=JSON.stringify(a));return e},B=(t,e)=>{if(t.length===0)throw new Error(e)},X=(t,e)=>{if(String(t).startsWith("directus_"))throw new Error(e)},Z=(t,e,s)=>()=>(B(String(t),"Collection cannot be empty"),X(t,"Cannot use readItem for core collections"),B(String(e),"Key cannot be empty"),{path:`/items/${t}/${e}`,params:s??{},method:"GET"}),tt={},et=(t={})=>e=>{let s={...tt,...t};return{async request(a){let l=a();if(l.headers||(l.headers={}),"Content-Type"in l.headers?l.headers["Content-Type"]==="multipart/form-data"&&delete l.headers["Content-Type"]:l.headers["Content-Type"]="application/json","getToken"in this){let n=await this.getToken();n&&(l.headers||(l.headers={}),l.headers.Authorization=`Bearer ${n}`)}let f=at(e.url,l.path,l.params),r={method:l.method??"GET",headers:l.headers??{}};"credentials"in s&&(r.credentials=s.credentials),l.body&&(r.body=l.body),l.onRequest&&(r=await l.onRequest(r)),s.onRequest&&(r=await s.onRequest(r));let u=await Y(f.toString(),r,e.globals.fetch);return"onResponse"in l&&(u=await l.onResponse(u,r)),"onResponse"in t&&(u=await t.onResponse(u,r)),u}}},R="/",st=(t,e)=>(t.endsWith(R)&&(t=t.slice(0,-1)),e.startsWith(R)||(e=R+e),t+e),at=(t,e,s)=>{let a=t.pathname===R?e:st(t.pathname,e),l=new globalThis.URL(a,t);if(s)for(let[f,r]of Object.entries(Q(s)))if(r&&typeof r=="object"&&!Array.isArray(r))for(let[u,n]of Object.entries(r))l.searchParams.set(`${f}[${u}]`,String(n));else l.searchParams.set(f,r);return l};const g=t=>(E("data-v-6bb35e56"),t=t(),L(),t),ot={class:"my-8"},lt={class:"flex gap-2 max-w-140 mb-4 text-xl"},rt={class:"p-0"},it=g(()=>o("div",{class:"flex-auto"},null,-1)),nt={key:0,class:"p-0 flex items-center gap-2"},dt=g(()=>o("div",{class:"i-la-star-solid text-yellow-500 text-lg"},null,-1)),ct={key:0,class:"i-la-angle-down"},ut={key:1,class:"i-la-angle-up"},ht={key:0,class:"p-4 bg-light-900 dark-bg-dark-200 max-w-140"},ft={class:"text-lg flex items-center gap-0",for:"rating"},pt=g(()=>o("div",{class:"flex-1"},null,-1)),gt={class:"px-2"},_t={class:"opacity-70 hover-opacity-100 gap-1 flex"},yt=["onClick"],vt={key:0,class:"i-la-star-solid"},mt={key:1,class:"i-la-star"},bt={class:"flex flex-wrap gap-2"},xt={class:"flex flex-col gap-2 flex-1"},kt=g(()=>o("label",{class:"text-lg",for:"author"},"Author *",-1)),wt={class:"flex flex-col gap-2 flex-1"},St=g(()=>o("label",{class:"text-lg",for:"author_link"},"Profile link",-1)),jt={class:"flex flex-col gap-2"},Tt=g(()=>o("label",{class:"text-lg",for:"form-content"},"Content *",-1)),Ct=g(()=>o("div",{class:"flex flex-col gap-2"},[o("label",{class:"text-lg",for:"files"},"Files"),o("input",{id:"files",type:"file",name:"file",accept:"image/*",placeholder:"Describe your experience with the product"})],-1)),Ot=g(()=>o("div",{class:"opacity-40"},"All reviews are manually moderated before being published.",-1)),Rt=["disabled"],At={key:0,class:"text-red-500"},$t={key:1,class:"p-0"},Nt={class:"flex flex-wrap gap-4"},Wt={class:"flex flex-col gap-4",style:{flex:"1 1 200px"}},qt={class:"p-4 flex-1 relative"},Dt={class:"flex text-yellow-500 mb-2"},It={class:"text-lg mb-4 flex items-center gap-2"},Bt={class:"p-0"},Vt=["href"],Ft=g(()=>o("div",{class:"flex-1"},null,-1)),Jt={class:"p-0 text-xs"},Pt={class:"text-md"},Ut={key:0,class:"mt-2"},Et=["src"],Lt={__name:"ProductReviews",props:{product:{type:String,default:""}},setup(t){const e=t,s=M("https://db.chromatone.center/").with(et()),a=k([]);F(async()=>{let y=await s.request(Z("products",e.product,{fields:[{reviews:["*"]}]}));a.value=y.reviews.sort((h,_)=>h.date<_.date?1:-1)});const l=N(()=>a.value.reduce((y,h)=>y+=h.rating,0)/a.value.length),f=k(!1),r=k(!1),u=k(!1),n=J({status:"draft",date:new Date().toISOString().split("T")[0],content:"",rating:5,author:"",author_link:"",product:e.product});async function A(y){const h=new FormData(y.target);let _=await s.request(H(h));n.cover=_==null?void 0:_.id;let i=await s.request(K("reviews",n));console.log(i),u.value=!0}const m=N(()=>n.author&&n.content);return(y,h)=>{var _;return d(),c("div",ot,[o("div",lt,[o("div",{class:"rounded p-4 flex gap-4 cursor-pointer bg-light-900 dark-bg-dark-200 flex-auto",onClick:h[0]||(h[0]=i=>f.value=!f.value)},[o("div",rt,"Reviews ("+v(a.value.length)+")",1),it,((_=a.value)==null?void 0:_.length)>0?(d(),c("div",nt,[W(v(l.value.toFixed(1)),1),dt])):w("",!0),S(T,{name:"fade",mode:"out-in"},{default:j(()=>[f.value?(d(),c("div",ut)):(d(),c("div",ct))]),_:1})]),o("button",{class:"p-4 bg-light-900 dark-bg-dark-200 rounded",onClick:h[1]||(h[1]=i=>r.value=!r.value),title:"Add a review","aria-label":"Add a review"},[o("div",{class:q(["i-la-plus",{"-rotate-45":r.value}])},null,2)])]),S(T,{name:"fade"},{default:j(()=>[u.value?(d(),c("div",ht,"Thank you! Your review has been submitted. It will be published after moderation.")):w("",!0)]),_:1}),S(T,{name:"fade"},{default:j(()=>[b(o("form",{class:"flex flex-col p-4 bg-light-900 dark-bg-dark-200 max-w-140 gap-4",onSubmit:P(A,["prevent","stop"])},[o("div",ft,[W("Rating "),pt,o("div",gt,v(p(n).rating),1),o("div",_t,[(d(),c(C,null,O(5,i=>o("div",{class:"p-0 text-yellow-500 cursor-pointer",key:i,onClick:x=>p(n).rating=i},[i<=p(n).rating?(d(),c("div",vt)):(d(),c("div",mt))],8,yt)),64))])]),o("div",bt,[o("div",xt,[kt,b(o("input",{id:"author","onUpdate:modelValue":h[2]||(h[2]=i=>p(n).author=i),placeholder:"Your name"},null,512),[[$,p(n).author]])]),o("div",wt,[St,b(o("input",{id:"author_link","onUpdate:modelValue":h[3]||(h[3]=i=>p(n).author_link=i),placeholder:"A link to your social profile"},null,512),[[$,p(n).author_link]])])]),o("div",jt,[Tt,b(o("textarea",{id:"form-content","onUpdate:modelValue":h[4]||(h[4]=i=>p(n).content=i),rows:"3",placeholder:"Describe your experience with the product"},null,512),[[$,p(n).content]])]),Ct,Ot,o("button",{class:q(["p-4 bg-light-500 shadow rounded dark-bg-dark-800",{"opacity-50":!m.value}]),type:"submit",disabled:!m.value},[m.value?(d(),c("div",$t,"Submit")):(d(),c("div",At,"Please fill in your name and add review content"))],10,Rt)],544),[[D,r.value&&!u.value]])]),_:1}),S(T,{name:"fade"},{default:j(()=>[b(o("div",Nt,[(d(!0),c(C,null,O(a.value,i=>(d(),c("div",{class:"shadow flex flex-wrap bg-light-400 dark-bg-dark-400 max-w-140",style:U({flex:`${i.cover?1e3:1} 1 280px`}),key:i},[o("div",Wt,[o("div",qt,[o("div",Dt,[(d(!0),c(C,null,O(i.rating,x=>(d(),c("div",{class:"i-la-star-solid",key:x}))),128)),(d(!0),c(C,null,O(5-i.rating,x=>(d(),c("div",{class:"i-la-star",key:x}))),128))]),o("div",It,[o("div",Bt,v(i.author),1),i.author_link?(d(),c("a",{key:0,class:"i-la-link",target:"_blank",href:i.author_link},null,8,Vt)):w("",!0),Ft,o("div",Jt,v(i.date),1)]),o("div",Pt,v(i.content),1),i.cover?(d(),c("div",Ut,[o("img",{class:"w-full max-w-50",src:`https://db.chromatone.center/assets/${i.cover}&w=10`},null,8,Et)])):w("",!0)])])],4))),128))],512),[[D,f.value]])]),_:1})])}}},zt=V(Lt,[["__scopeId","data-v-6bb35e56"]]);export{zt as _};
