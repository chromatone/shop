import{_ as m}from"./ShopPrice.1953dd39.js";import{d as x}from"./shop.data.5414bd8f.js";import{_ as y,o,c as n,a as s,t as i,h as _,m as f,u as g,l as h,F as v,r as $,q as w,d as S,k as b}from"./framework.40aa810a.js";const k=["href"],P=["href"],B={class:"p-0 min-w-50 relative",style:{flex:"0 0"}},C=["src"],N={class:"flex flex-col p-4 gap-2",style:{flex:"1 1 100px"}},L={class:"text-2xl font-bold items-center gap-2"},D={class:"text-md leading-normal"},F={__name:"ProductCard",props:{title:{type:String,default:""},description:{type:String,default:""},url:{type:String,default:""},cover:{type:String,default:""},slug:{type:String,default:""},price:{type:Number,default:""},stripe_id:{type:String,default:""},category:{type:Object,default:()=>({})},digital:{type:Boolean,default:!1},sort:{type:Number,default:""}},setup(e){const a=e;return(u,r)=>{var d,c;const l=m;return o(),n("div",{class:"overflow-hidden flex flex-col shadow-lg hover-shadow-xl transition flex-1 dark-bg-dark-300 bg-light-400 rounded",href:`/${(d=e.category)==null?void 0:d.slug}/${e.slug}/`,style:{flex:"1 1 auto"}},[s("a",{href:`/${(c=e.category)==null?void 0:c.slug}/${e.slug}/`},[s("div",B,[s("img",{style:{margin:"0"},src:`/products/${e.slug}.webp`},null,8,C)]),s("div",N,[s("div",L,i(e.title)+" "+i(e.category.products.findIndex(t=>t.slug==e.slug)),1),s("div",D,i(e.description),1)])],8,P),_(l,f({class:"w-full"},a),null,16)],8,k)}}},I=y(F,[["__scopeId","data-v-1433a414"]]),V={class:"flex flex-wrap gap-16"},j={__name:"ProductList",setup(e){const{params:a,frontmatter:u}=g(),r=h(()=>x.categories.find(l=>l.slug==a.value.slug));return(l,d)=>{const c=I;return o(),n("div",V,[(o(!0),n(v,null,$([...S(r).products].sort((t,p)=>t.sort>p.sort?1:-1),t=>(o(),w(c,f({key:t},t),null,16))),128))])}}},q={class:"flex flex-col items-center max-w-130 gap-8"},A={__name:"CategoryPage",setup(e){return g(),(a,u)=>{const r=j;return o(),n("div",q,[b(a.$slots,"default"),_(r)])}}};export{A as _};