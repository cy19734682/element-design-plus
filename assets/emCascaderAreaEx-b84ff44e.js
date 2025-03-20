import{d as g,c,e as u,o as f,f as C,g as o,w as s,h as t,i as l,N as h,p as _}from"./index-0f83177b.js";import{s as V}from"./sourceCodeView-3a98e334.js";const w=`
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
`,x={class:"container"},B=g({name:"emCascaderAreaEx",__name:"emCascaderAreaEx",setup(N){let a=c(["15","1501","150104"]),m=c([]);const i=n=>{console.log(n)},p=n=>{console.log(n),m.value=n};return(n,e)=>{const r=u("json-viewer"),v=u("el-card");return f(),C("div",x,[o(v,null,{header:s(()=>e[1]||(e[1]=[t("div",null,"省市区选择",-1)])),footer:s(()=>[o(V,{code:l(w)},null,8,["code"])]),default:s(()=>[o(l(h),{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=d=>_(a)?a.value=d:a=d),level:2,onOnValChange:i,onOnNameChange:p},null,8,["modelValue"]),e[2]||(e[2]=t("div",{class:"json-title"},"绑定数据:",-1)),o(r,{value:l(a),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"]),e[3]||(e[3]=t("div",{class:"json-title"},"名称数据:",-1)),o(r,{value:l(m),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{B as default};
