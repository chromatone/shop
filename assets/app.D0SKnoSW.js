import{R as p}from"./chunks/theme.BWXUsWPZ.js";import{x as s,y as i,R as u,z as c,A as l,C as f,B as d,D as m,E as h,G as A,H as g,I as y,h as C,J as R,K as v,L as w,M as P,N as E,O as b}from"./chunks/framework.CVursDuZ.js";function r(e){if(e.extends){const t=r(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const n=r(p),S=y({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=C();return R(()=>{v(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&w(),P(),E(),n.setup&&n.setup(),()=>b(n.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=x(),t=D();t.provide(u,e);const a=c(e.route);return t.provide(l,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function D(){return h(S)}function x(){let e=s;return A(t=>{let a=g(t),o=null;return a&&(e&&(a=a.replace(/\.js$/,".lean.js")),o=import(a)),s&&(e=!1),o},n.NotFound)}s&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{i(t.route,a.site),e.mount("#app")})});export{T as createApp};