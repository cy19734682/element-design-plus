import{d as b,u as f,e as n,f as r,o as g,g as k,h as l,w as t,i as e,Z as v,q as w,K as C,n as m}from"./index-a3559510.js";import{s as x}from"./sourceCodeView-f6a010a7.js";const R=`
<script lang="ts" setup>
let deptId = ref<any[]>([82])
const searchForm = ref<any[]>([
  {
    type: 'input',
    key: 'name',
    label: '商品名称'
  }
])
const columns = ref<any[]>([
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'name',
    label: '名称'
  },
  {
    key: 'mimeType',
    label: '类型'
  },
  {
    key: 'extension',
    label: '后缀'
  }
])

const onDataChange = (d: any) => {
  console.log(d)
}
const changeRow = (d: any) => {
  console.log(d)
}
<\/script>

<template>
  <em-table-select
    ref="tableSelectRef"
    v-model="deptId"
    :searchForm="searchForm"
    :columns="columns"
    multiple
    :url="store.serverUrl + '/bt-table-page'"
    @on-data-change="onDataChange"
    @changeRow="changeRow"
  />
</template>
`,D={class:"container"},F=m("div",null,"表格选择器",-1),V=m("div",{class:"json-title"},"绑定数据:",-1),T=b({name:"emTableSelectEx",__name:"emTableSelectEx",setup(I){const d=f();let o=n([82]);const u=n([{type:"input",key:"name",label:"商品名称"}]),p=n([{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"}]),i=a=>{console.log(a)},h=a=>{console.log(a)};return(a,s)=>{const y=r("json-viewer"),_=r("el-card");return g(),k("div",D,[l(_,null,{header:t(()=>[F]),footer:t(()=>[l(x,{code:e(R)},null,8,["code"])]),default:t(()=>[l(e(v),{ref:"tableSelectRef",modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=c=>w(o)?o.value=c:o=c),searchForm:e(u),columns:e(p),multiple:"",url:e(d).serverUrl+"/bt-table-page?size=-1",onOnDataChange:i,onChangeRow:h},null,8,["modelValue","searchForm","columns","url"]),V,l(y,{value:e(C)(e(o)),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{T as default};
