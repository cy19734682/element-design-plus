import{d as m,c as p,e as t,o as u,f as i,g as l,w as a,h as n,i as o,Y as f,p as _,G as v}from"./index-0f83177b.js";import{s as V}from"./sourceCodeView-3a98e334.js";const w=`
<script lang="ts" setup>
 const colorsVal = ref<string[]>(['#ccc', '#ccc'])
<\/script>

<template>
 <em-color-group v-model="colorsVal" is-add-del />
</template>
`,x={class:"container"},B=m({name:"EmColorGroupEx",__name:"emColorGroupEx",setup(C){const s=p(["#ccc","#ccc"]);return(g,e)=>{const c=t("json-viewer"),r=t("el-card");return u(),i("div",x,[l(r,null,{header:a(()=>e[1]||(e[1]=[n("div",null,"颜色组",-1)])),footer:a(()=>[l(V,{code:o(w)},null,8,["code"])]),default:a(()=>[l(o(f),{modelValue:o(s),"onUpdate:modelValue":e[0]||(e[0]=d=>_(s)?s.value=d:null),"is-add-del":""},null,8,["modelValue"]),e[2]||(e[2]=n("div",{class:"json-title"},"绑定数据:",-1)),l(c,{value:o(v)(o(s)),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{B as default};
