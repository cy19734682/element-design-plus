import{d as h,c as r,e as u,o as v,f as g,g as o,w as l,i as n,P as f,p as C,h as s}from"./index-df5299c9.js";import{s as V}from"./sourceCodeView-84d5d6fc.js";const w=`
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
`,x={class:"container"},j=s("div",null,"省市区选择",-1),y=s("div",{class:"json-title"},"绑定数据:",-1),N=s("div",{class:"json-title"},"名称数据:",-1),k=h({name:"emCascaderAreaEx",__name:"emCascaderAreaEx",setup(B){let e=r(["15","1501","150104"]),t=r([]);const i=a=>{console.log(a)},_=a=>{console.log(a),t.value=a};return(a,c)=>{const m=u("json-viewer"),p=u("el-card");return v(),g("div",x,[o(p,null,{header:l(()=>[j]),footer:l(()=>[o(V,{code:n(w)},null,8,["code"])]),default:l(()=>[o(n(f),{modelValue:n(e),"onUpdate:modelValue":c[0]||(c[0]=d=>C(e)?e.value=d:e=d),level:2,onOnValChange:i,onOnNameChange:_},null,8,["modelValue"]),y,o(m,{value:n(e),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"]),N,o(m,{value:n(t),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{k as default};
