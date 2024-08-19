import{d as i,e as p,f as c,o as _,g as f,h as a,w as n,i as o,T as v,q as g,n as d}from"./index-a3559510.js";import{s as h}from"./sourceCodeView-f6a010a7.js";const V=`
<script lang="ts" setup>
let value = ref<Record<string, any>>({
  lng: 102.554865,
  lat: 26.567981
})

const onValChange = (data: Record<string, any>) => {
  console.log(data)
}
<\/script>
<template>
<em-baidu-map v-model="value" @update:modelValue="onValChange" />
</template>
`,C={class:"container"},w=d("div",null,"百度地图",-1),x=d("div",{class:"json-title"},"绑定数据:",-1),B=i({name:"EmMapEx",__name:"emMapEx",setup(j){let e=p({lng:102.554865,lat:26.567981});const r=t=>{console.log(t)};return(t,l)=>{const m=c("json-viewer"),u=c("el-card");return _(),f("div",C,[a(u,null,{header:n(()=>[w]),footer:n(()=>[a(h,{code:o(V)},null,8,["code"])]),default:n(()=>[a(o(v),{modelValue:o(e),"onUpdate:modelValue":[l[0]||(l[0]=s=>g(e)?e.value=s:e=s),r]},null,8,["modelValue"]),x,a(m,{value:o(e),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{B as default};
