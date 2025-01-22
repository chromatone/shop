import{g as u,p as k,r as b,w as P,n as g,P as S,_ as A}from"./chunks/SaveButtons.D5aGJl4M.js";import{o as e,d as a,F as m,j as f,k as r,g as v,e as d,f as y,_ as C,b as N,s as T,q as x,V as $,P as V}from"./chunks/framework.CVursDuZ.js";const j=["x1","y1","stroke"],D=["transform"],B=["r","fill"],I={key:0,y:"0.3","font-size":"2px","font-weight":"bold",fill:"white"},M=["fill"],z={y:"0.3","font-size":"2","font-weight":"bold",fill:"white"},w={__name:"ChordCircle",props:{pitch:{type:Number,default:0},chroma:{type:String,default:"1001000100101"},type:{type:String,default:""},tonic:{type:Number,default:0}},setup(n){return(t,h)=>{var p;return e(),a("g",null,[(e(!0),a(m,null,f(r(b)(n.chroma.split(""),-n.tonic),(s,o)=>(e(),a("g",{key:s},[s=="1"?(e(),a("line",{key:0,x1:r(u)(o,12,6.5,0).x,y1:r(u)(o,12,6.5,0).y,x2:"0",y2:"0","stroke-linecap":"square","stroke-width":"3.92",stroke:s=="1"?r(k)(o):"none"},null,8,j)):v("",!0)]))),128)),(e(!0),a(m,null,f(r(b)(n.chroma.split(""),-n.tonic),(s,o)=>{var l,i;return e(),a("g",{key:s,transform:`translate(${r(u)(o,12,8,0).x}, ${r(u)(o,12,8,0).y})`},[d("circle",{x:"0",y:"0",r:s=="1"?2:1,fill:r(P)(s=="1"?r(k)(o):((l=r(g))==null?void 0:l[o].length)!=2?"hsl(0,0%,85%)":"hsl(0,0%,60%)").toHex()},null,8,B),s=="1"?(e(),a("text",I,y((i=r(g))==null?void 0:i[o]),1)):v("",!0)],8,D)}),128)),d("circle",{cx:"0",cy:"0",r:"3.5",fill:n.pitch===!1?"none":r(k)(n.pitch)},null,8,M),d("text",z,y(n.pitch===!1?"":typeof n.pitch=="string"?n.pitch:(p=r(g))==null?void 0:p[n.pitch%12])+y(n.type),1)])}}},L=["viewBox"],q=["y","width","height"],E={"font-size":"4"},F=["x"],O=["x"],W=["transform"],H=["y","width","fill"],J=["x1","x2","y2"],K={__name:"PrintScales",setup(n){const t=N({width:210,height:297,margin:6,head:10,padding:{x:4,y:4,left:24}}),h={scale:"101101011010",majors:[{pitch:3,chroma:"001100010010",type:"M7"},{pitch:8,chroma:"100100011000",type:"M7"},{pitch:10,chroma:"001001001010",type:"7"}],minors:[{pitch:0,chroma:"100100010010",type:"m7"},{pitch:5,chroma:"100101001000",type:"m7"},{pitch:7,chroma:"001001010010",type:"m7"},{pitch:2,chroma:"101001001000",type:"ø7"}]},p={major:["Ionian","Lydian","Myxolydian"],minor:["Aeolian","Dorian","Phrygian","Locrian"]};return(s,o)=>(e(),a("svg",{class:"m-8 select-none",id:"diatonic",version:"1.1",baseProfile:"full",viewBox:`-${t.margin} -${t.margin+t.head} ${t.width+2*t.margin} ${t.height+2*t.margin+t.head}`,xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner , sans-serif","text-anchor":"middle","dominant-baseline":"middle"},[d("rect",{x:"-2",y:-t.head,width:t.width+t.padding.x,height:t.height+t.head,stroke:"none","stroke-width":"0.2",rx:"2",fill:"white"},null,8,q),o[0]||(o[0]=T("",1)),d("g",E,[(e(!0),a(m,null,f(p.major,(l,i)=>(e(),a("text",{key:l,x:t.padding.left+12+22*i,y:"-2"},y(l),9,F))),128)),(e(!0),a(m,null,f(p.minor,(l,i)=>(e(),a("text",{key:l,x:t.padding.left+108+22*i,y:"-2"},y(l),9,O))),128))]),(e(!0),a(m,null,f(r(g),(l,i)=>(e(),a("g",{key:i,transform:`translate(0, ${i*(t.height-t.padding.y)/12})`},[d("rect",{x:0,y:t.padding.y-1,rx:"4",width:t.width,height:"22",opacity:"0.2",fill:i%2?"#333":"#eee"},null,8,H),x(w,{pitch:i+3,transform:"translate(12,14)",chroma:"101101011010",tonic:i},null,8,["pitch","tonic"]),(e(!0),a(m,null,f(h.majors,(c,_)=>(e(),$(w,{key:c,pitch:(c.pitch+i)%12,chroma:c.chroma,transform:`translate(${_*22+12+t.padding.left}, 14)`,type:c.type,tonic:i},null,8,["pitch","chroma","transform","type","tonic"]))),128)),(e(!0),a(m,null,f(h.minors,(c,_)=>(e(),$(w,{key:c,pitch:(c.pitch+i)%12,chroma:c.chroma,transform:`translate(${_*22+108+t.padding.left}, 14)`,type:c.type,tonic:i},null,8,["pitch","chroma","transform","type","tonic"]))),128)),x(S,{pitch:i,transform:`scale(0.12) translate(${750+t.padding.left},-45)`,chroma:h.scale},null,8,["pitch","transform","chroma"])],8,W))),128)),d("line",{x1:t.padding.left,x2:t.padding.left,y1:"5",y2:t.height-5,stroke:"#777","stroke-linecap":"round","stroke-width":"0.2"},null,8,J)],8,L))}},R=C(K,[["__scopeId","data-v-72b2d77f"]]),U=JSON.parse('{"title":"A4 cheat-sheet","description":"A comprehesive guide to colorful notes - WIP","frontmatter":{"title":"A4 cheat-sheet","description":"A comprehesive guide to colorful notes - WIP","cover":"cover.png","layout":"app","date":"2021-08-09T00:00:00.000Z","hidden":true,"product":{"price":10,"id":"print-circles-a4","digital":true}},"headers":[],"relativePath":"print/circles-a4/index.md","filePath":"print/circles-a4/index.md"}'),Z={name:"print/circles-a4/index.md"},X=Object.assign(Z,{setup(n){return(t,h)=>(e(),a("div",null,[h[0]||(h[0]=d("h2",{id:"diatonic-scales-and-modes",tabindex:"-1"},[V("Diatonic scales and modes "),d("a",{class:"header-anchor",href:"#diatonic-scales-and-modes","aria-label":'Permalink to "Diatonic scales and modes"'},"​")],-1)),x(R,{width:"100%",class:"max-w-55ch"}),x(A,{svg:"diatonic",password:"circle-a4-99tuD"})]))}});export{U as __pageData,X as default};