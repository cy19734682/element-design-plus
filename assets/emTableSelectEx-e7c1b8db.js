import{d as u,u as i,e as l,o as f,g as b,q as c,h,i as e,s as x,Z as y,p as g,n as S,_ as k}from"./index-0b6b4772.js";const v=a=>(g("data-v-85f4d1ee"),a=a(),S(),a),I={class:"container"},E=v(()=>c("h2",null,"表格选择器",-1)),T={class:"form-box"},V=u({name:"emTableSelectEx",__name:"emTableSelectEx",setup(a){const r=i();let o=l([82]);const d=l([{type:"input",key:"name",label:"商品名称"}]),_=l([{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"}]);l({key:"id",label:"name"});const m=s=>{console.log(s)},p=s=>{console.log(s)};return(s,t)=>(f(),b("div",I,[E,c("div",T,[h(e(y),{ref:"tableSelectRef",modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=n=>x(o)?o.value=n:o=n),searchForm:e(d),columns:e(_),multiple:"",url:e(r).serverUrl+"/bt-table-page",onOnDataChange:m,onChangeRow:p},null,8,["modelValue","searchForm","columns","url"])])]))}});const R=k(V,[["__scopeId","data-v-85f4d1ee"]]);export{R as default};
