import{d as c,c as r,e as d,o as m,f as i,g as t,w as s,h as p,i as n,V as u,p as f}from"./index-0f83177b.js";import{s as _}from"./sourceCodeView-3a98e334.js";const V=`
<script lang="ts" setup>
let icon = ref<string>('')
<\/script>

<template>
  <em-icon-select v-model="icon" />
</template>
`,x={class:"container"},w=c({name:"EmIconSelectEx",__name:"emIconSelectEx",setup(v){let e=r("");return(C,o)=>{const l=d("el-card");return m(),i("div",x,[t(l,null,{header:s(()=>o[1]||(o[1]=[p("div",null,"图标选择",-1)])),footer:s(()=>[t(_,{code:n(V)},null,8,["code"])]),default:s(()=>[t(n(u),{modelValue:n(e),"onUpdate:modelValue":o[0]||(o[0]=a=>f(e)?e.value=a:e=a)},null,8,["modelValue"])]),_:1})])}}});export{w as default};
