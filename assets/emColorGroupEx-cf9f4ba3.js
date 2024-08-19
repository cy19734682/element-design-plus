import{d as m,e as i,f as t,o as p,g as u,h as s,w as l,i as e,a1 as _,q as f,K as v,n as c}from"./index-a3559510.js";import{s as V}from"./sourceCodeView-f6a010a7.js";const h=`
<script lang="ts" setup>
 const colorsVal = ref<string[]>(['#ccc', '#ccc'])
<\/script>

<template>
 <em-color-group v-model="colorsVal" is-add-del />
</template>
`,w={class:"container"},x=c("div",null,"颜色组",-1),C=c("div",{class:"json-title"},"绑定数据:",-1),k=m({name:"EmColorGroupEx",__name:"emColorGroupEx",setup(g){const o=i(["#ccc","#ccc"]);return(j,a)=>{const n=t("json-viewer"),r=t("el-card");return p(),u("div",w,[s(r,null,{header:l(()=>[x]),footer:l(()=>[s(V,{code:e(h)},null,8,["code"])]),default:l(()=>[s(e(_),{modelValue:e(o),"onUpdate:modelValue":a[0]||(a[0]=d=>f(o)?o.value=d:null),"is-add-del":""},null,8,["modelValue"]),C,s(n,{value:e(v)(e(o)),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{k as default};
