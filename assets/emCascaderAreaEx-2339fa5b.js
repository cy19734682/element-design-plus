import{d as h,e as r,f as u,o as v,g,h as n,w as l,i as o,Q as f,q as C,n as s}from"./index-0ff01b20.js";import{s as V}from"./sourceCodeView-12fffd08.js";const w=`
<script lang="ts" setup>
let value = ref<string[]>(['15', '1501', '150104'])
let name = ref<string[]>([])
const onValChange = (data: any) => {
  console.log(data)
}
const onNameChange = (data: any) => {
  console.log(data)
  name.value = data
}
<\/script>

<template>
  <em-cascader-area v-model="value" :level="2" @on-val-change="onValChange" @on-name-change="onNameChange" />
</template>
`,x={class:"container"},j=s("div",null,"省市区选择",-1),y=s("div",{class:"json-title"},"绑定数据:",-1),N=s("div",{class:"json-title"},"名称数据:",-1),k=h({name:"emCascaderAreaEx",__name:"emCascaderAreaEx",setup(B){let e=r(["15","1501","150104"]),t=r([]);const i=a=>{console.log(a)},_=a=>{console.log(a),t.value=a};return(a,c)=>{const m=u("json-viewer"),p=u("el-card");return v(),g("div",x,[n(p,null,{header:l(()=>[j]),footer:l(()=>[n(V,{code:o(w)},null,8,["code"])]),default:l(()=>[n(o(f),{modelValue:o(e),"onUpdate:modelValue":c[0]||(c[0]=d=>C(e)?e.value=d:e=d),level:2,onOnValChange:i,onOnNameChange:_},null,8,["modelValue"]),y,n(m,{value:o(e),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"]),N,n(m,{value:o(t),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{k as default};
