import{u,d as l,f as e,h as s,F as n,m,H as p,p as f}from"./framework.Dj3vkOIF.js";import{e as _}from"./theme.CaQi55YX.js";import{P as d}from"./ProductCard.B0vQhoN3.js";const i={class:"flex flex-col gap-8 my-16"},y={__name:"ProductList",setup(g){const{params:a,frontmatter:k}=u(),o=l(()=>_.categories.find(t=>t.slug==a.value.slug));return(t,x)=>(e(),s("div",i,[(e(!0),s(n,null,m([...o.value.products].sort((r,c)=>r.sort>c.sort?1:-1),r=>(e(),p(d,f({key:r.slug,ref_for:!0},r),null,16))),128))]))}};export{y as _};
