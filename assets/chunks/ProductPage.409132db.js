import{_ as c}from"./ShopPrice.afa99ed4.js";import{i as l,o as n,c as _,a as t,t as o,u as e,g as i,m as p,j as d}from"./framework.86163723.js";const m={class:"flex flex-col items-center max-w-150 gap-8"},u=["href"],f={class:"font-bold"},g=["src"],y={__name:"ProductPage",setup(h){const{params:x,frontmatter:s}=l();return(a,$)=>{const r=c;return n(),_("div",m,[t("a",{class:"text-2xl bg-light-900 dark-bg-dark-300 py-2 px-4 rounded",href:`/${e(s).category.slug}/`},o(e(s).category.title),9,u),t("p",null,o(e(s).description),1),t("div",f,"$"+o(e(s).price),1),i(r,p({class:"w-full"},e(s)),null,16),t("img",{src:`/products/${e(s).slug}.webp`},null,8,g),d(a.$slots,"default")])}}};export{y as _};
