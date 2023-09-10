import{i as m,q as y,y as w,o,c as r,a as s,u as i,t as _,g as f,h as k,l as A,T as C,b,F as P,r as R,z as p,A as D,R as E,B as L,C as S,D as T,E as B,G as V,H as $,I as F,J as N,K as O,L as j,M as I,N as M,O as z,P as G,Q as H,S as q}from"./chunks/framework.9e994c67.js";import{_ as J}from"./chunks/ShopCartIcon.e057091a.js";import{_ as h}from"./chunks/logo.a60c622a.js";import{d as K}from"./chunks/shop.data.ab4a2a21.js";import"./chunks/cart.a4a9796f.js";const Q={class:"flex flex-col bg-light-500 dark-bg-dark-100 text-center dark-text-light-500 min-h-100dvh site items-center gap-8 px-4"},U={class:"fixed top-0 z-20 flex w-full"},W={key:0,class:"i-la-sun"},X={key:1,class:"i-carbon-moon"},Y=s("a",{class:"p-2 flex items-center gap-2",href:"https://chromatone.center",target:"_blank"},[s("div",{class:"i-la-arrow-left mt-1"}),s("div",{class:"p-0"},"chromatone.center")],-1),Z=s("a",{class:"flex flex-col gap-4 items-center mt-16",href:"/"},[s("img",{class:"w-30",src:h})],-1),ee={class:"flex flex-col markdown-body max-w-150"},te={class:"text-4xl mb-6"},ae={class:"flex flex-wrap gap-2"},se={key:0,class:"text-5xl relative",href:"/cart/"},ne=s("div",{class:"i-la-shopping-cart"},null,-1),oe=s("a",{class:"flex flex-col gap-4 items-center my-6",href:"/"},[s("img",{class:"w-10",src:h})],-1),re={class:"flex flex-wrap gap-2 max-w-150 text-sm justify-center p-4"},ie=["href"],ce={__name:"MainLayout",setup(e){const{docs:t}=K,{isDark:a,frontmatter:n}=m(),u=y();return(fe,d)=>{const g=w("content"),v=J;return o(),r("div",Q,[s("div",U,[s("div",{class:"p-2 absolute top-2 right-2 cursor-pointer",onClick:d[0]||(d[0]=l=>a.value=!i(a))},[i(a)?(o(),r("div",X)):(o(),r("div",W))]),Y]),Z,s("div",ee,[s("div",te,_(i(n).title),1),f(C,{name:"fade"},{default:k(()=>[(o(),A(g,{key:i(u).path}))]),_:1})]),s("div",ae,[i(u).path.includes("/cart/")?b("",!0):(o(),r("a",se,[ne,f(v)]))]),oe,s("div",re,[(o(!0),r(P,null,R(i(t),l=>(o(),r("a",{class:"p-1 opacity-40 hover-opacity-80 transition",key:l,href:`/docs/${l.slug}/`},_(l.title),9,ie))),128))])])}}},le={Layout:ce,enhanceApp({app:e}){}};function x(e){if(e.extends){const t=x(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const c=x(le),pe=j({name:"VitePressApp",setup(){const{site:e}=m();return I(()=>{M(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),z(),G(),H(),c.setup&&c.setup(),()=>q(c.Layout)}});async function ue(){const e=_e(),t=de();t.provide(E,e);const a=L(e.route);return t.provide(S,a),t.component("Content",T),t.component("ClientOnly",B),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),c.enhanceApp&&await c.enhanceApp({app:t,router:e,siteData:V}),{app:t,router:e,data:a}}function de(){return $(pe)}function _e(){let e=p,t;return F(a=>{let n=N(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),p&&(e=!1),O(()=>import(n),[])):null},c.NotFound)}p&&ue().then(({app:e,router:t,data:a})=>{t.go().then(()=>{D(t.route,a.site),e.mount("#app")})});export{ue as createApp};
