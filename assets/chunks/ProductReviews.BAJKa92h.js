import{_ as V,r as b,o as W,d as B,e as E,f as d,h as c,j as a,t as m,B as I,k as w,y as S,I as j,T,A as q,D as x,J as D,u as g,F as C,m as O,K as N,L as F,x as M,G as z,H as G}from"./framework.DVuPXEC1.js";var R="/",K=(e,t)=>(e.endsWith(R)&&(e=e.slice(0,-1)),t.startsWith(R)||(t=R+t),e+t),Y=(e,t,s)=>{let o=e.pathname===R?t:K(e.pathname,t),r=new globalThis.URL(o,e);if(s)for(let[u,l]of Object.entries(ae(s)))if(l&&typeof l=="object"&&!Array.isArray(l))for(let[f,h]of Object.entries(l))r.searchParams.set(`${u}[${f}]`,String(h));else r.searchParams.set(u,l);return r};function H(e){return typeof e!="object"||!e?!1:"headers"in e&&"ok"in e&&"json"in e&&typeof e.json=="function"&&"text"in e&&typeof e.json=="function"}async function Q(e){var t;if(!(typeof e!="object"||!e)){if(H(e)){let s=(t=e.headers.get("Content-Type"))==null?void 0:t.toLowerCase();if(s!=null&&s.startsWith("application/json")||s!=null&&s.startsWith("application/health+json")){let o=await e.json();if(!e.ok)throw o;return"data"in o?o.data:o}if(s!=null&&s.startsWith("text/html")||s!=null&&s.startsWith("text/plain")){let o=await e.text();if(!e.ok)throw o;return o}return e}return"data"in e?e.data:e}}var X=async(e,t,s=globalThis.fetch)=>(t.headers=typeof t.headers=="object"&&!Array.isArray(t.headers)?t.headers:{},s(e,t).then(o=>Q(o).catch(r=>{let u=typeof r=="object"&&"errors"in r?r.errors:r;return Promise.reject({errors:u,response:o})}))),J={fetch:globalThis.fetch,WebSocket:globalThis.WebSocket,URL:globalThis.URL,logger:globalThis.console},Z=(e,t={})=>{let s=t.globals?{...J,...t.globals}:J;return{globals:s,url:new s.URL(e),with(o){return{...this,...o(this)}}}},ee=(e,t)=>()=>({path:"/files",method:"POST",body:e,params:t??{},headers:{"Content-Type":"multipart/form-data"}});function P(e){return["directus_access","directus_activity","directus_collections","directus_fields","directus_files","directus_folders","directus_migrations","directus_permissions","directus_policies","directus_presets","directus_relations","directus_revisions","directus_roles","directus_sessions","directus_settings","directus_users","directus_webhooks","directus_dashboards","directus_panels","directus_notifications","directus_shares","directus_flows","directus_operations","directus_translations","directus_versions","directus_extensions"].includes(e)}var te=(e,t,s)=>()=>{let o=String(e);if(P(o))throw new Error("Cannot use createItem for core collections");return{path:`/items/${o}`,params:s??{},body:JSON.stringify(t),method:"POST"}},se=e=>{let t=(s,o=[])=>{if(typeof s=="object"){let r=[];for(let u in s){let l=s[u]??[];if(Array.isArray(l))for(let f of l)r.push(t(f,[...o,u]));else if(typeof l=="object")for(let f of Object.keys(l)){let h=l[f];for(let A of h)r.push(t(A,[...o,`${u}:${f}`]))}}return r.flatMap(u=>u)}return[...o,String(s)].join(".")};return e.flatMap(s=>t(s))},ae=e=>{let t={};Array.isArray(e.fields)&&e.fields.length>0&&(t.fields=se(e.fields).join(",")),e.filter&&Object.keys(e.filter).length>0&&(t.filter=JSON.stringify(e.filter)),e.search&&(t.search=e.search),"sort"in e&&e.sort&&(t.sort=typeof e.sort=="string"?e.sort:e.sort.join(",")),typeof e.limit=="number"&&e.limit>=-1&&(t.limit=String(e.limit)),typeof e.offset=="number"&&e.offset>=0&&(t.offset=String(e.offset)),typeof e.page=="number"&&e.page>=1&&(t.page=String(e.page)),e.deep&&Object.keys(e.deep).length>0&&(t.deep=JSON.stringify(e.deep)),e.alias&&Object.keys(e.alias).length>0&&(t.alias=JSON.stringify(e.alias)),e.aggregate&&Object.keys(e.aggregate).length>0&&(t.aggregate=JSON.stringify(e.aggregate)),e.groupBy&&e.groupBy.length>0&&(t.groupBy=e.groupBy.join(","));for(let[s,o]of Object.entries(e))s in t||(typeof o=="string"||typeof o=="number"||typeof o=="boolean"?t[s]=String(o):t[s]=JSON.stringify(o));return t},L=(e,t)=>{if(e.length===0)throw new Error(t)},oe=(e,t)=>{if(P(String(e)))throw new Error(t)},re=(e,t,s)=>()=>(L(String(e),"Collection cannot be empty"),oe(e,"Cannot use readItem for core collections"),L(String(t),"Key cannot be empty"),{path:`/items/${e}/${t}`,params:s??{},method:"GET"}),ie={},le=(e={})=>t=>{let s={...ie,...e};return{async request(o){let r=o();if(r.headers||(r.headers={}),"Content-Type"in r.headers?r.headers["Content-Type"]==="multipart/form-data"&&delete r.headers["Content-Type"]:r.headers["Content-Type"]="application/json","getToken"in this){let h=await this.getToken();h&&(r.headers||(r.headers={}),r.headers.Authorization=`Bearer ${h}`)}let u=Y(t.url,r.path,r.params),l={method:r.method??"GET",headers:r.headers??{}};"credentials"in s&&(l.credentials=s.credentials),r.body&&(l.body=r.body),r.onRequest&&(l=await r.onRequest(l)),s.onRequest&&(l=await s.onRequest(l));let f=await X(u.toString(),l,t.globals.fetch);return"onResponse"in r&&(f=await r.onResponse(f,l)),"onResponse"in e&&(f=await e.onResponse(f,l)),f}}};const _=e=>(z("data-v-1f8ad0d2"),e=e(),G(),e),ne={class:"my-8"},de={class:"flex gap-2 max-w-140 mb-4 text-xl"},ce={class:"p-0"},ue=_(()=>a("div",{class:"flex-auto"},null,-1)),fe={key:0,class:"p-0 flex items-center gap-2"},pe=_(()=>a("div",{class:"i-la-star-solid text-yellow-500 text-lg"},null,-1)),he={key:0,class:"i-la-angle-down"},ge={key:1,class:"i-la-angle-up"},_e={key:0,class:"p-4 bg-light-900 dark-bg-dark-200 max-w-140"},ve={class:"text-lg flex items-center gap-0",for:"rating"},ye=_(()=>a("div",{class:"flex-1"},null,-1)),me={class:"px-2"},be={class:"opacity-70 hover-opacity-100 gap-1 flex"},xe=["onClick"],ke={key:0,class:"i-la-star-solid"},we={key:1,class:"i-la-star"},Se={class:"flex flex-wrap gap-2"},je={class:"flex flex-col gap-2 flex-1"},Te=_(()=>a("label",{class:"text-lg",for:"author"},"Author *",-1)),Ce={class:"flex flex-col gap-2 flex-1"},Oe=_(()=>a("label",{class:"text-lg",for:"author_link"},"Profile link",-1)),Re={class:"flex flex-col gap-2"},Ae=_(()=>a("label",{class:"text-lg",for:"form-content"},"Content *",-1)),$e={class:"flex flex-col gap-2"},Ne=_(()=>a("label",{class:"text-lg",for:"files"},"Files",-1)),Be=_(()=>a("div",{class:"opacity-40"},"All reviews are manually moderated before being published.",-1)),Ie=["disabled"],qe={key:0,class:"text-red-500"},De={key:1,class:"p-0"},Je={class:"flex flex-wrap gap-4"},Le={class:"flex flex-col gap-4",style:{flex:"1 1 200px"}},Pe={class:"p-4 flex-1 relative"},Ue={class:"flex text-yellow-500 mb-2"},Ve={class:"text-lg mb-4 flex items-center gap-2"},We={class:"p-0"},Ee=["href"],Fe=_(()=>a("div",{class:"flex-1"},null,-1)),Me={class:"p-0 text-xs"},ze={class:"text-md"},Ge={key:0,class:"mt-2"},Ke=["src"],Ye={__name:"ProductReviews",props:{product:{type:String,default:""}},setup(e){const t=e,s=Z("https://db.chromatone.center/").with(le()),o=b([]);W(async()=>{let v=await s.request(re("products",t.product,{fields:[{reviews:["*"]}]}));o.value=v.reviews.sort((n,y)=>n.date<y.date?1:-1)});const r=B(()=>o.value.reduce((v,n)=>v+=n.rating,0)/o.value.length),u=b(!1),l=b(!1),f=b(!1),h=b(null),A=v=>{h.value=v.target.files[0]},p=E({status:"draft",date:new Date().toISOString().split("T")[0],content:"",rating:5,author:"",author_link:"",product:t.product});async function U(v){const n=new FormData;if(h.value){n.append("folder","b84d5f23-aa89-498e-840d-9d34d79aa4fa"),n.append("file",h.value);let i=await s.request(ee(n));p.cover=i==null?void 0:i.id}let y=await s.request(te("reviews",p));console.log(y),f.value=!0}const $=B(()=>p.author&&p.content);return(v,n)=>{var y;return d(),c("div",ne,[a("div",de,[a("div",{class:"rounded p-4 flex gap-4 cursor-pointer bg-light-900 dark-bg-dark-200 flex-auto",onClick:n[0]||(n[0]=i=>u.value=!u.value)},[a("div",ce,"Reviews ("+m(o.value.length)+")",1),ue,((y=o.value)==null?void 0:y.length)>0?(d(),c("div",fe,[I(m(r.value.toFixed(1)),1),pe])):w("",!0),S(T,{name:"fade",mode:"out-in"},{default:j(()=>[u.value?(d(),c("div",ge)):(d(),c("div",he))]),_:1})]),a("button",{class:"p-4 bg-light-900 dark-bg-dark-200 rounded",onClick:n[1]||(n[1]=i=>l.value=!l.value),title:"Add a review","aria-label":"Add a review"},[a("div",{class:q(["i-la-plus",{"-rotate-45":l.value}])},null,2)])]),S(T,{name:"fade"},{default:j(()=>[f.value?(d(),c("div",_e,"Thank you! Your review has been submitted. It will be published after moderation.")):w("",!0)]),_:1}),S(T,{name:"fade"},{default:j(()=>[x(a("form",{class:"flex flex-col p-4 bg-light-900 dark-bg-dark-200 max-w-140 gap-4",onSubmit:F(U,["prevent","stop"])},[a("div",ve,[I("Rating "),ye,a("div",me,m(g(p).rating),1),a("div",be,[(d(),c(C,null,O(5,i=>a("div",{class:"p-0 text-yellow-500 cursor-pointer",key:i,onClick:k=>g(p).rating=i},[i<=g(p).rating?(d(),c("div",ke)):(d(),c("div",we))],8,xe)),64))])]),a("div",Se,[a("div",je,[Te,x(a("input",{id:"author","onUpdate:modelValue":n[2]||(n[2]=i=>g(p).author=i),placeholder:"Your name"},null,512),[[N,g(p).author]])]),a("div",Ce,[Oe,x(a("input",{id:"author_link","onUpdate:modelValue":n[3]||(n[3]=i=>g(p).author_link=i),placeholder:"A link to your social profile"},null,512),[[N,g(p).author_link]])])]),a("div",Re,[Ae,x(a("textarea",{id:"form-content","onUpdate:modelValue":n[4]||(n[4]=i=>g(p).content=i),rows:"3",placeholder:"Describe your experience with the product"},null,512),[[N,g(p).content]])]),a("div",$e,[Ne,a("input",{id:"files",type:"file",name:"file",accept:"image/*",onChange:A,placeholder:"Describe your experience with the product"},null,32)]),Be,a("button",{class:q(["p-4 bg-light-500 shadow rounded dark-bg-dark-800",{"opacity-50":!$.value}]),type:"submit",disabled:!$.value},[$.value?(d(),c("div",De,"Submit")):(d(),c("div",qe,"Please fill in your name and add review content"))],10,Ie)],544),[[D,l.value&&!f.value]])]),_:1}),S(T,{name:"fade"},{default:j(()=>[x(a("div",Je,[(d(!0),c(C,null,O(o.value,i=>(d(),c("div",{class:"shadow flex flex-wrap bg-light-400 dark-bg-dark-400 max-w-140",style:M({flex:`${i.cover?1e3:1} 1 280px`}),key:i},[a("div",Le,[a("div",Pe,[a("div",Ue,[(d(!0),c(C,null,O(i.rating,k=>(d(),c("div",{class:"i-la-star-solid",key:k}))),128)),(d(!0),c(C,null,O(5-i.rating,k=>(d(),c("div",{class:"i-la-star",key:k}))),128))]),a("div",Ve,[a("div",We,m(i.author),1),i.author_link?(d(),c("a",{key:0,class:"i-la-link",target:"_blank",href:i.author_link},null,8,Ee)):w("",!0),Fe,a("div",Me,m(i.date),1)]),a("div",ze,m(i.content),1),i.cover?(d(),c("div",Ge,[a("img",{class:"w-full max-w-50",src:`https://db.chromatone.center/assets/${i.cover}&w=10`},null,8,Ke)])):w("",!0)])])],4))),128))],512),[[D,u.value]])]),_:1})])}}},Qe=V(Ye,[["__scopeId","data-v-1f8ad0d2"]]);export{Qe as _};
