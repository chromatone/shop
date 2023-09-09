import{c as r,a as h}from"./cart.a98806f1.js";import{g as b,o as d,c as l,a as i,t as g,u as p,_ as f,i as y,j as n,f as k,k as m,b as v,p as x,l as S}from"./framework.46d917ad.js";const w={class:"-top-1 right-0 text-xs absolute dark-bg-light-900 bg-opacity-90 text-center rounded-full dark-text-black w-5 h-5 bg-dark-300 text-white dark-bg-opacity-60 backdrop-blur-md"},$={class:"p-0"},I={__name:"ShopCartIcon",props:{id:{type:String,default:null}},setup(t){const o=t,c=b(()=>{var a,s;let e=0;if(o.id)e=(s=(a=r.value)==null?void 0:a[o.id])==null?void 0:s.quantity;else for(let _ in r.value)e+=r.value[_].quantity;return e});return(e,a)=>(d(),l("div",w,[i("div",$,g(p(c)||"+"),1)]))}};const u=t=>(x("data-v-06e0793a"),t=t(),S(),t),q={key:0,class:"shop-action text-xl relative",style:{"font-weight":"normal"}},B={class:"price p-2 text-2xl bg-light-200 bg-opacity-70 rounded-md dark-bg-dark-400 dark-bg-opacity-70 backdrop-blur-lg font-bold"},C={key:0,class:"price p-2 text-2xl bg-light-200 bg-opacity-70 rounded-md dark-bg-dark-400 dark-bg-opacity-70 backdrop-blur-lg font-bold",title:"This is a digital good. You will receive a link to download the file and will be able to print it by yourself."},N=u(()=>i("div",{class:"i-la-file-download"},null,-1)),V=[N],P=u(()=>i("div",{class:"flex-auto"},null,-1)),T=u(()=>i("div",{class:"cart-text"},"Add to cart",-1)),j={__name:"ShopPrice",props:{title:{type:String,default:""},price:{type:Number,default:0},digital:{type:Boolean,default:!1},stripe_id:{type:String,default:""}},setup(t){const o=t,c=y();return(e,a)=>{const s=I;return t.title?(d(),l("div",q,[i("div",B,"$"+g(t.price),1),t.digital?(d(),l("div",C,V)):n("",!0),P,k(e.$slots,"default",{},void 0,!0),t.stripe_id?(d(),l("div",{key:1,class:"shop-button flex items-center",style:{flex:"0 0 140px"},onClick:a[0]||(a[0]=m(_=>p(h)(t.title,{...o,id:o.stripe_id,path:p(c).path}),["prevent","stop"]))},[v(s,{class:"scale-120",id:t.stripe_id},null,8,["id"]),T])):n("",!0)])):n("",!0)}}},E=f(j,[["__scopeId","data-v-06e0793a"]]);export{E as _};