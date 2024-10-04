import{_ as D,r as _,o as E,d as N,e as F,f as d,h as c,j as o,t as m,B,k,y as w,G as j,T as S,A as q,C as b,H as J,u as g,F as T,m as C,I as $,J as L,x as I}from"./framework.QxClNLbo.js";var O="/",M=(e,t)=>(e.endsWith(O)&&(e=e.slice(0,-1)),t.startsWith(O)||(t=O+t),e+t),z=(e,t,s)=>{let r=e.pathname===O?t:M(e.pathname,t),i=new globalThis.URL(r,e);if(s)for(let[u,n]of Object.entries(ee(s)))if(n&&typeof n=="object"&&!Array.isArray(n))for(let[f,h]of Object.entries(n))i.searchParams.set(`${u}[${f}]`,String(h));else i.searchParams.set(u,n);return i};function G(e){return typeof e!="object"||!e?!1:"headers"in e&&"ok"in e&&"json"in e&&typeof e.json=="function"&&"text"in e&&typeof e.json=="function"}async function K(e){var t;if(!(typeof e!="object"||!e)){if(G(e)){let s=(t=e.headers.get("Content-Type"))==null?void 0:t.toLowerCase();if(s!=null&&s.startsWith("application/json")||s!=null&&s.startsWith("application/health+json")){let r=await e.json();if(!e.ok)throw r;return"data"in r?r.data:r}if(s!=null&&s.startsWith("text/html")||s!=null&&s.startsWith("text/plain")){let r=await e.text();if(!e.ok)throw r;return r}return e}return"data"in e?e.data:e}}var Y=async(e,t,s=globalThis.fetch)=>(t.headers=typeof t.headers=="object"&&!Array.isArray(t.headers)?t.headers:{},s(e,t).then(r=>K(r).catch(i=>{let u=typeof i=="object"&&"errors"in i?i.errors:i;return Promise.reject({errors:u,response:r})}))),P={fetch:globalThis.fetch,WebSocket:globalThis.WebSocket,URL:globalThis.URL,logger:globalThis.console},H=(e,t={})=>{let s=t.globals?{...P,...t.globals}:P;return{globals:s,url:new s.URL(e),with(r){return{...this,...r(this)}}}},Q=(e,t)=>()=>({path:"/files",method:"POST",body:e,params:t??{},headers:{"Content-Type":"multipart/form-data"}});function V(e){return["directus_access","directus_activity","directus_collections","directus_fields","directus_files","directus_folders","directus_migrations","directus_permissions","directus_policies","directus_presets","directus_relations","directus_revisions","directus_roles","directus_sessions","directus_settings","directus_users","directus_webhooks","directus_dashboards","directus_panels","directus_notifications","directus_shares","directus_flows","directus_operations","directus_translations","directus_versions","directus_extensions"].includes(e)}var X=(e,t,s)=>()=>{let r=String(e);if(V(r))throw new Error("Cannot use createItem for core collections");return{path:`/items/${r}`,params:s??{},body:JSON.stringify(t),method:"POST"}},Z=e=>{let t=(s,r=[])=>{if(typeof s=="object"){let i=[];for(let u in s){let n=s[u]??[];if(Array.isArray(n))for(let f of n)i.push(t(f,[...r,u]));else if(typeof n=="object")for(let f of Object.keys(n)){let h=n[f];for(let R of h)i.push(t(R,[...r,`${u}:${f}`]))}}return i.flatMap(u=>u)}return[...r,String(s)].join(".")};return e.flatMap(s=>t(s))},ee=e=>{let t={};Array.isArray(e.fields)&&e.fields.length>0&&(t.fields=Z(e.fields).join(",")),e.filter&&Object.keys(e.filter).length>0&&(t.filter=JSON.stringify(e.filter)),e.search&&(t.search=e.search),"sort"in e&&e.sort&&(t.sort=typeof e.sort=="string"?e.sort:e.sort.join(",")),typeof e.limit=="number"&&e.limit>=-1&&(t.limit=String(e.limit)),typeof e.offset=="number"&&e.offset>=0&&(t.offset=String(e.offset)),typeof e.page=="number"&&e.page>=1&&(t.page=String(e.page)),e.deep&&Object.keys(e.deep).length>0&&(t.deep=JSON.stringify(e.deep)),e.alias&&Object.keys(e.alias).length>0&&(t.alias=JSON.stringify(e.alias)),e.aggregate&&Object.keys(e.aggregate).length>0&&(t.aggregate=JSON.stringify(e.aggregate)),e.groupBy&&e.groupBy.length>0&&(t.groupBy=e.groupBy.join(","));for(let[s,r]of Object.entries(e))s in t||(typeof r=="string"||typeof r=="number"||typeof r=="boolean"?t[s]=String(r):t[s]=JSON.stringify(r));return t},U=(e,t)=>{if(e.length===0)throw new Error(t)},te=(e,t)=>{if(V(String(e)))throw new Error(t)},se=(e,t,s)=>()=>(U(String(e),"Collection cannot be empty"),te(e,"Cannot use readItem for core collections"),U(String(t),"Key cannot be empty"),{path:`/items/${e}/${t}`,params:s??{},method:"GET"}),ae={},oe=(e={})=>t=>{let s={...ae,...e};return{async request(r){let i=r();if(i.headers||(i.headers={}),"Content-Type"in i.headers?i.headers["Content-Type"]==="multipart/form-data"&&delete i.headers["Content-Type"]:i.headers["Content-Type"]="application/json","getToken"in this){let h=await this.getToken();h&&(i.headers||(i.headers={}),i.headers.Authorization=`Bearer ${h}`)}let u=z(t.url,i.path,i.params),n={method:i.method??"GET",headers:i.headers??{}};"credentials"in s&&(n.credentials=s.credentials),i.body&&(n.body=i.body),i.onRequest&&(n=await i.onRequest(n)),s.onRequest&&(n=await s.onRequest(n));let f=await Y(u.toString(),n,t.globals.fetch);return"onResponse"in i&&(f=await i.onResponse(f,n)),"onResponse"in e&&(f=await e.onResponse(f,n)),f}}};const re={class:"my-8"},ie={class:"flex gap-2 max-w-140 mb-4 text-xl"},le={class:"p-0"},ne={key:0,class:"p-0 flex items-center gap-2"},de={key:0,class:"i-la-angle-down"},ce={key:1,class:"i-la-angle-up"},ue={key:0,class:"p-4 bg-light-900 dark-bg-dark-200 max-w-140"},fe={class:"text-lg flex items-center gap-0",for:"rating"},pe={class:"px-2"},he={class:"opacity-70 hover-opacity-100 gap-1 flex"},ge=["onClick"],ve={key:0,class:"i-la-star-solid"},ye={key:1,class:"i-la-star"},me={class:"flex flex-wrap gap-2"},_e={class:"flex flex-col gap-2 flex-1"},be={class:"flex flex-col gap-2 flex-1"},xe={class:"flex flex-col gap-2"},ke={class:"flex flex-col gap-2"},we=["disabled"],je={key:0,class:"text-red-500"},Se={key:1,class:"p-0"},Te={class:"flex flex-wrap gap-4"},Ce={class:"flex flex-col gap-4",style:{flex:"1 1 200px"}},Oe={class:"p-4 flex-1 relative"},Re={class:"flex text-yellow-500 mb-2"},Ae={class:"text-lg mb-4 flex items-center gap-2"},$e={class:"p-0"},Ne=["href"],Be={class:"p-0 text-xs"},qe={class:"text-md"},Je={key:0,class:"mt-2"},Pe=["src"],Ue={__name:"ProductReviews",props:{product:{type:String,default:""}},setup(e){const t=e,s=H("https://db.chromatone.center/").with(oe()),r=_([]);E(async()=>{let v=await s.request(se("products",t.product,{fields:[{reviews:["*"]}]}));r.value=v.reviews.sort((a,y)=>a.date<y.date?1:-1)});const i=N(()=>r.value.reduce((v,a)=>v+=a.rating,0)/r.value.length),u=_(!1),n=_(!1),f=_(!1),h=_(null),R=v=>{h.value=v.target.files[0]},p=F({status:"draft",date:new Date().toISOString().split("T")[0],content:"",rating:5,author:"",author_link:"",product:t.product});async function W(v){const a=new FormData;if(h.value){a.append("folder","b84d5f23-aa89-498e-840d-9d34d79aa4fa"),a.append("file",h.value);let l=await s.request(Q(a));p.cover=l==null?void 0:l.id}let y=await s.request(X("reviews",p));console.log(y),f.value=!0}const A=N(()=>p.author&&p.content);return(v,a)=>{var y;return d(),c("div",re,[o("div",ie,[o("div",{class:"rounded p-4 flex gap-4 cursor-pointer bg-light-900 dark-bg-dark-200 flex-auto",onClick:a[0]||(a[0]=l=>u.value=!u.value)},[o("div",le,"Reviews ("+m(r.value.length)+")",1),a[6]||(a[6]=o("div",{class:"flex-auto"},null,-1)),((y=r.value)==null?void 0:y.length)>0?(d(),c("div",ne,[B(m(i.value.toFixed(1)),1),a[5]||(a[5]=o("div",{class:"i-la-star-solid text-yellow-500 text-lg"},null,-1))])):k("",!0),w(S,{name:"fade",mode:"out-in"},{default:j(()=>[u.value?(d(),c("div",ce)):(d(),c("div",de))]),_:1})]),o("button",{class:"p-4 bg-light-900 dark-bg-dark-200 rounded",onClick:a[1]||(a[1]=l=>n.value=!n.value),title:"Add a review","aria-label":"Add a review"},[o("div",{class:q(["i-la-plus",{"-rotate-45":n.value}])},null,2)])]),w(S,{name:"fade"},{default:j(()=>[f.value?(d(),c("div",ue,"Thank you! Your review has been submitted. It will be published after moderation.")):k("",!0)]),_:1}),w(S,{name:"fade"},{default:j(()=>[b(o("form",{class:"flex flex-col p-4 bg-light-900 dark-bg-dark-200 max-w-140 gap-4",onSubmit:L(W,["prevent","stop"])},[o("div",fe,[a[7]||(a[7]=B("Rating ")),a[8]||(a[8]=o("div",{class:"flex-1"},null,-1)),o("div",pe,m(g(p).rating),1),o("div",he,[(d(),c(T,null,C(5,l=>o("div",{class:"p-0 text-yellow-500 cursor-pointer",key:l,onClick:x=>g(p).rating=l},[l<=g(p).rating?(d(),c("div",ve)):(d(),c("div",ye))],8,ge)),64))])]),o("div",me,[o("div",_e,[a[9]||(a[9]=o("label",{class:"text-lg",for:"author"},"Author *",-1)),b(o("input",{id:"author","onUpdate:modelValue":a[2]||(a[2]=l=>g(p).author=l),placeholder:"Your name"},null,512),[[$,g(p).author]])]),o("div",be,[a[10]||(a[10]=o("label",{class:"text-lg",for:"author_link"},"Profile link",-1)),b(o("input",{id:"author_link","onUpdate:modelValue":a[3]||(a[3]=l=>g(p).author_link=l),placeholder:"A link to your social profile"},null,512),[[$,g(p).author_link]])])]),o("div",xe,[a[11]||(a[11]=o("label",{class:"text-lg",for:"form-content"},"Content *",-1)),b(o("textarea",{id:"form-content","onUpdate:modelValue":a[4]||(a[4]=l=>g(p).content=l),rows:"3",placeholder:"Describe your experience with the product"},null,512),[[$,g(p).content]])]),o("div",ke,[a[12]||(a[12]=o("label",{class:"text-lg",for:"files"},"Files",-1)),o("input",{id:"files",type:"file",name:"file",accept:"image/*",onChange:R,placeholder:"Describe your experience with the product"},null,32)]),a[13]||(a[13]=o("div",{class:"opacity-40"},"All reviews are manually moderated before being published.",-1)),o("button",{class:q(["p-4 bg-light-500 shadow rounded dark-bg-dark-800",{"opacity-50":!A.value}]),type:"submit",disabled:!A.value},[A.value?(d(),c("div",Se,"Submit")):(d(),c("div",je,"Please fill in your name and add review content"))],10,we)],544),[[J,n.value&&!f.value]])]),_:1}),w(S,{name:"fade"},{default:j(()=>[b(o("div",Te,[(d(!0),c(T,null,C(r.value,l=>(d(),c("div",{class:"shadow flex flex-wrap bg-light-400 dark-bg-dark-400 max-w-140",style:I({flex:`${l.cover?1e3:1} 1 280px`}),key:l},[o("div",Ce,[o("div",Oe,[o("div",Re,[(d(!0),c(T,null,C(l.rating,x=>(d(),c("div",{class:"i-la-star-solid",key:x}))),128)),(d(!0),c(T,null,C(5-l.rating,x=>(d(),c("div",{class:"i-la-star",key:x}))),128))]),o("div",Ae,[o("div",$e,m(l.author),1),l.author_link?(d(),c("a",{key:0,class:"i-la-link",target:"_blank",href:l.author_link},null,8,Ne)):k("",!0),a[14]||(a[14]=o("div",{class:"flex-1"},null,-1)),o("div",Be,m(l.date),1)]),o("div",qe,m(l.content),1),l.cover?(d(),c("div",Je,[o("img",{class:"w-full max-w-50",src:`https://db.chromatone.center/assets/${l.cover}&w=10`},null,8,Pe)])):k("",!0)])])],4))),128))],512),[[J,u.value]])]),_:1})])}}},We=D(Ue,[["__scopeId","data-v-1f8ad0d2"]]);export{We as _};
