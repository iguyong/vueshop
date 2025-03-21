import{p as f}from"./product-placeholder-CDHWcwM5.js";import{_ as N,r as v,l as y,s as e,c as r,a as t,t as c,i as a,F,j as I,p as q,q as x,o as l,b as D}from"./index-D3VJuQVs.js";const B="/vueshop/assets/empty-cart-DIoAtBG5.svg";function d(i){const u=typeof i=="number"?i:Number(i)||0;return new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",minimumFractionDigits:2,maximumFractionDigits:2}).format(u).replace("CNY","¥")}const Q={class:"cart-container"},V={class:"cart-nav"},$={key:0,class:"empty-cart"},A={key:1},L={class:"cart-list"},w=["src","alt"],O={class:"item-info"},S={key:0,class:"sale-tag"},Y={class:"price-section"},j={class:"unit-price"},z={class:"total-price"},E={class:"item-controls"},G={class:"quantity-control"},P=["onClick","disabled"],R=["onClick"],T=["onClick"],H={class:"cart-summary"},J={class:"summary-details"},K={class:"total-amount"},M=["disabled"],U={__name:"Cart",setup(i){const u=x(),_=v(!1),g=v(null),b=y(()=>e.totalQuantity()),m=y(()=>e.totalAmount()),k=async()=>{try{_.value=!0;const n={items:e.cart,total:m.value},o=await e.createOrder(n);console.log("order created:",o),u.push(`/order-detail/${o.id}`)}catch(n){g.value="结算失败: "+n.message}finally{_.value=!1}},p=(n,o)=>{e.updateCartItemQuantity(n.id,o)},C=n=>{e.removeFromCart(n.id)};return(n,o)=>(l(),r("div",Q,[t("nav",V,[t("h2",null,"我的购物车 ("+c(a(e).cart.length)+")",1)]),a(e).cart.length===0?(l(),r("div",$,o[0]||(o[0]=[t("img",{src:B,alt:"空空如也的购物车插图"},null,-1),t("p",null,"您的购物车是空的",-1),t("button",null,"返回商城首页",-1)]))):(l(),r("div",A,[t("div",L,[(l(!0),r(F,null,I(a(e).cart,s=>(l(),r("div",{key:s.id,class:"cart-item"},[t("img",{src:s.image||a(f),alt:s.name,class:"product-image"},null,8,w),t("div",O,[t("h3",null,c(s.name),1),s.onSale?(l(),r("div",S,"特价中")):D("",!0),t("div",Y,[t("p",j,"单价：¥"+c(a(d)(s.price)),1),t("p",z,"小计：¥"+c(a(d)(s.price*s.quantity)),1)])]),t("div",E,[t("div",G,[t("button",{onClick:h=>p(s,-1),disabled:s.quantity<=1,"aria-label":"减少数量"},"-",8,P),t("span",null,c(s.quantity),1),t("button",{onClick:h=>p(s,1),"aria-label":"增加数量"},"+",8,R)]),t("button",{onClick:h=>C(s),class:"remove-btn"},"移除",8,T)])]))),128))]),t("div",H,[t("div",J,[t("p",null,"商品总数："+c(b.value)+"件",1),t("p",K,[o[1]||(o[1]=q("总金额：")),t("span",null,c(a(d)(m.value)),1)])]),t("button",{class:"checkout-btn",onClick:k,disabled:a(e).cart.length===0||a(e).state.checkoutLoading},c(a(e).state.checkoutLoading?"正在创建订单...":"去结算"),9,M)])]))]))}},Z=N(U,[["__scopeId","data-v-57d6ae10"]]);export{Z as default};
