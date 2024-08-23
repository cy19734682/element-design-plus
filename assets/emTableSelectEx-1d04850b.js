import{d as b,u as f,c as n,e as r,o as g,f as k,g as l,w as t,i as e,Y as v,p as w,I as C,h as m}from"./index-df5299c9.js";import{s as x}from"./sourceCodeView-84d5d6fc.js";const R=`
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
`,D={class:"container"},F=m("div",null,"表格选择器",-1),I=m("div",{class:"json-title"},"绑定数据:",-1),T=b({name:"emTableSelectEx",__name:"emTableSelectEx",setup(V){const d=f();let o=n([82]);const p=n([{type:"input",key:"name",label:"商品名称"}]),u=n([{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"}]),i=a=>{console.log(a)},h=a=>{console.log(a)};return(a,s)=>{const y=r("json-viewer"),_=r("el-card");return g(),k("div",D,[l(_,null,{header:t(()=>[F]),footer:t(()=>[l(x,{code:e(R)},null,8,["code"])]),default:t(()=>[l(e(v),{ref:"tableSelectRef",modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=c=>w(o)?o.value=c:o=c),searchForm:e(p),columns:e(u),multiple:"",url:e(d).serverUrl+"/bt-table-page?size=-1",onOnDataChange:i,onChangeRow:h},null,8,["modelValue","searchForm","columns","url"]),I,l(y,{value:e(C)(e(o)),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{T as default};
