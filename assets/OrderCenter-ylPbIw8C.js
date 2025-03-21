import{_ as m,f as u,p,h,c as l,a as t,j as c,F as i,k as v,s as g,o as r,t as o}from"./index-CpBY9jPP.js";const _="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='647.63626'%20height='632.17383'%20viewBox='0%200%20647.63626%20632.17383'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20role='img'%20artist='Katerina%20Limpitsouni'%20source='https://undraw.co/'%3e%3cpath%20d='M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%23f2f2f2'/%3e%3cpath%20d='M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%233f3d56'/%3e%3cpath%20d='M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%236c63ff'/%3e%3ccircle%20cx='190.15351'%20cy='24.95465'%20r='20'%20fill='%236c63ff'/%3e%3ccircle%20cx='190.15351'%20cy='24.95465'%20r='12.66462'%20fill='%23fff'/%3e%3cpath%20d='M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%23e6e6e6'/%3e%3cpath%20d='M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%233f3d56'/%3e%3cpath%20d='M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%236c63ff'/%3e%3ccircle%20cx='433.63626'%20cy='105.17383'%20r='20'%20fill='%236c63ff'/%3e%3ccircle%20cx='433.63626'%20cy='105.17383'%20r='12.18187'%20fill='%23fff'/%3e%3c/svg%3e",x={key:0,class:"empty-order"},w={key:1,class:"order-list"},k=["onClick"],y={__name:"OrderCenter",setup(O){const a=u(),f=g();p(()=>a.formattedOrderNumber());const d=n=>{console.log("toOrder:",n),f.push(`/order-detail/${n}`)};return h(()=>{a.loadFromLocalStorage()}),(n,s)=>(r(),l(i,null,[s[1]||(s[1]=t("h1",{id:"order-center"},"订单中心",-1)),c(a).getOrders().length===0?(r(),l("div",x,s[0]||(s[0]=[t("div",null,[t("img",{src:_,alt:"空订单"})],-1),t("p",null,"找不到相关订单信息",-1),t("button",null,"返回购物车",-1)]))):(r(),l("div",w,[(r(!0),l(i,null,v(c(a).getOrders(),e=>(r(),l("div",{key:e.id,class:"order-item",onClick:Z=>d(e.id)},[t("h2",null,"订单号: "+o(c(a).formattedOrderNumber(e.id)),1),t("p",null,"总价: "+o(e.total),1),t("p",null,"创建时间: "+o(new Date(e.createdAt).toLocaleString()),1),t("p",null,"状态: "+o(e.status||"未支付"),1)],8,k))),128))]))],64))}},M=m(y,[["__scopeId","data-v-f3f7e307"]]);export{M as default};
