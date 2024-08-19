import{d as f,u as y,e as r,f as u,o as w,g as x,h as l,w as a,i as e,a0 as g,q as h,n as d}from"./index-a3559510.js";import{s as _}from"./sourceCodeView-f6a010a7.js";const j=`
<script lang="ts" setup>
let value1 = ref<Record<string, any>>({})
const onValChange = (val: any) => {
  console.log(val)
}
const onChange = (val: any) => {
  console.log(val)
}
<\/script>

<template>
  <em-select-input
    v-model="value1"
    url="/brand"
    optionVal="label"
    optionLabel="name"
    @on-val-change="onValChange"
    @on-change="onChange"
  />
</template>
`,L=`
<script lang="ts" setup>
let value2 = ref<Record<string, any>>({})
let data = ref<any[]>([
  {
    val: '1',
    label: '小学'
  },
  {
    val: '2',
    label: '初中'
  },
  {
    val: '3',
    label: '高中'
  },
  {
    val: '4',
    label: '大学'
  }
])

const onValChange = (val: any) => {
  console.log(val)
}
const onChange = (val: any) => {
  console.log(val)
}
<\/script>
<template>
  <em-select-input
    v-model="value2"
    :data="data"
    optionVal="label"
    optionLabel="name"
    @on-val-change="onValChange"
    @on-change="onChange"
  />
</template>
`,O={class:"container"},B=d("div",null,"下拉选择输入(远程数据)",-1),E=d("div",{class:"json-title"},"绑定数据:",-1),R=d("div",null,"下拉选择输入（静态数据）",-1),S=d("div",{class:"json-title"},"绑定数据:",-1),N=f({name:"emSelectInputEx",__name:"emSelectInputEx",setup(U){const b=y();let o=r({}),n=r({}),V=r([{val:"1",label:"小学"},{val:"2",label:"初中"},{val:"3",label:"高中"},{val:"4",label:"大学"}]);const i=s=>{console.log(s)},m=s=>{console.log(s)};return(s,c)=>{const v=u("json-viewer"),p=u("el-card"),C=u("el-divider");return w(),x("div",O,[l(p,null,{header:a(()=>[B]),footer:a(()=>[l(_,{code:e(j)},null,8,["code"])]),default:a(()=>[l(e(g),{modelValue:e(o),"onUpdate:modelValue":c[0]||(c[0]=t=>h(o)?o.value=t:o=t),url:e(b).serverUrl+"/brand",optionVal:"label",optionLabel:"name",onOnValChange:i,onOnChange:m},null,8,["modelValue","url"]),E,l(v,{value:e(o),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),l(C),l(p,null,{header:a(()=>[R]),footer:a(()=>[l(_,{code:e(L)},null,8,["code"])]),default:a(()=>[l(e(g),{modelValue:e(n),"onUpdate:modelValue":c[1]||(c[1]=t=>h(n)?n.value=t:n=t),data:e(V),optionVal:"label",optionLabel:"name",onOnValChange:i,onOnChange:m},null,8,["modelValue","data"]),S,l(v,{value:e(n),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{N as default};
