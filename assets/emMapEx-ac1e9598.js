import{d as p,c as i,e as d,o as f,f as _,g as o,w as n,h as r,i as l,P as v,p as g}from"./index-0f83177b.js";import{s as V}from"./sourceCodeView-3a98e334.js";const C=`
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
`,w={class:"container"},y=p({name:"EmMapEx",__name:"emMapEx",setup(x){let a=i({lng:102.554865,lat:26.567981});const m=t=>{console.log(t)};return(t,e)=>{const u=d("json-viewer"),c=d("el-card");return f(),_("div",w,[o(c,null,{header:n(()=>e[1]||(e[1]=[r("div",null,"百度地图",-1)])),footer:n(()=>[o(V,{code:l(C)},null,8,["code"])]),default:n(()=>[o(l(v),{modelValue:l(a),"onUpdate:modelValue":[e[0]||(e[0]=s=>g(a)?a.value=s:a=s),m]},null,8,["modelValue"]),e[2]||(e[2]=r("div",{class:"json-title"},"绑定数据:",-1)),o(u,{value:l(a),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{y as default};
