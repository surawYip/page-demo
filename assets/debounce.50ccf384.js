import{_,d as u,aq as i,E as n,r as l,s as d,o as v,c as p,a as s,v as f,i as m,j as b,m as h}from"./index.d60121cb.js";const k={mounted(e,t){if(typeof t.value!="function"){console.error("callback must be a function");return}let o=null;e.__handleClick__=function(c){o&&clearInterval(o),o=setTimeout(()=>{t.value()},200)},e.addEventListener("click",e.__handleClick__)},beforeUnmount(e){e.removeEventListener("click",e.__handleClick__)}};const y=u({directives:{Debounce:k},setup(){const e=t=>function(){console.log(t),n({type:"success",message:"\u6B63\u5728\u62C9\u53D6\u6570\u636E"})};return i(()=>{n.closeAll()}),{getData:e}}}),x={class:"layout-container"},C={class:"layout-container-table"},E={class:"box"},D=h("\u9632\u6296\u6309\u94AE");function g(e,t,o,c,B,$){const a=l("el-button"),r=d("debounce");return v(),p("div",x,[s("div",C,[s("div",E,[f(m(a,{type:"primary"},{default:b(()=>[D]),_:1},512),[[r,e.getData(123)]])])])])}var V=_(y,[["render",g],["__scopeId","data-v-6d25bf24"]]);export{V as default};
