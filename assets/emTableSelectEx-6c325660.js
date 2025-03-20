import{d as g,u as h,c as t,e as c,o as _,f as k,g as n,w as s,h as m,i as e,W as v,p as w,G as C}from"./index-0f83177b.js";import{s as x}from"./sourceCodeView-3a98e334.js";const R=`
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
`,D={class:"container"},S=g({name:"emTableSelectEx",__name:"emTableSelectEx",setup(F){const d=h();let a=t([82]);const p=t([{type:"input",key:"name",label:"商品名称"}]),u=t([{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"}]),i=l=>{console.log(l)},y=l=>{console.log(l)};return(l,o)=>{const b=c("json-viewer"),f=c("el-card");return _(),k("div",D,[n(f,null,{header:s(()=>o[1]||(o[1]=[m("div",null,"表格选择器",-1)])),footer:s(()=>[n(x,{code:e(R)},null,8,["code"])]),default:s(()=>[n(e(v),{ref:"tableSelectRef",modelValue:e(a),"onUpdate:modelValue":o[0]||(o[0]=r=>w(a)?a.value=r:a=r),searchForm:e(p),columns:e(u),multiple:"",url:e(d).serverUrl+"/bt-table-page?size=-1",onOnDataChange:i,onChangeRow:y},null,8,["modelValue","searchForm","columns","url"]),o[2]||(o[2]=m("div",{class:"json-title"},"绑定数据:",-1)),n(b,{value:e(C)(e(a)),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{S as default};
