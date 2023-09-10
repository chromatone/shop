import{_}from"./ShopCartIcon.e057091a.js";import{_ as u,q as f,o,c as a,a as e,t as g,b as s,j as h,s as b,g as m,u as c,p as y,f as k}from"./framework.9e994c67.js";import{e as v}from"./cart.a4a9796f.js";const i=t=>(y("data-v-06e0793a"),t=t(),k(),t),x={key:0,class:"shop-action text-xl relative",style:{"font-weight":"normal"}},S={class:"price p-2 text-2xl bg-light-200 bg-opacity-70 rounded-md dark-bg-dark-400 dark-bg-opacity-70 backdrop-blur-lg font-bold"},w={key:0,class:"price p-2 text-2xl bg-light-200 bg-opacity-70 rounded-md dark-bg-dark-400 dark-bg-opacity-70 backdrop-blur-lg font-bold",title:"This is a digital good. You will receive a link to download the file and will be able to print it by yourself."},B=i(()=>e("div",{class:"i-la-file-download"},null,-1)),I=[B],N=i(()=>e("div",{class:"flex-auto"},null,-1)),$=i(()=>e("div",{class:"cart-text"},"Add to cart",-1)),C={__name:"ShopPrice",props:{title:{type:String,default:""},price:{type:Number,default:0},digital:{type:Boolean,default:!1},stripe_id:{type:String,default:""}},setup(t){const d=t,r=f();return(n,l)=>{const p=_;return t.title?(o(),a("div",x,[e("div",S,"$"+g(t.price),1),t.digital?(o(),a("div",w,I)):s("",!0),N,h(n.$slots,"default",{},void 0,!0),t.stripe_id?(o(),a("div",{key:1,class:"shop-button flex items-center",style:{flex:"0 0 140px"},onClick:l[0]||(l[0]=b(V=>c(v)(t.title,{...d,id:d.stripe_id,path:c(r).path}),["prevent","stop"]))},[m(p,{class:"scale-120",id:t.stripe_id},null,8,["id"]),$])):s("",!0)])):s("",!0)}}},q=u(C,[["__scopeId","data-v-06e0793a"]]);export{q as _};
