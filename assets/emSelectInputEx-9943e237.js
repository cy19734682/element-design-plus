import{d as y,u as _,c as u,e as m,o as w,f as x,g as a,w as n,h as r,i as l,X as g,p as b}from"./index-0f83177b.js";import{s as V}from"./sourceCodeView-3a98e334.js";const j=`
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
`,O={class:"container"},S=y({name:"emSelectInputEx",__name:"emSelectInputEx",setup(B){const C=_();let o=u({}),t=u({}),f=u([{val:"1",label:"小学"},{val:"2",label:"初中"},{val:"3",label:"高中"},{val:"4",label:"大学"}]);const p=d=>{console.log(d)},v=d=>{console.log(d)};return(d,e)=>{const i=m("json-viewer"),c=m("el-card"),h=m("el-divider");return w(),x("div",O,[a(c,null,{header:n(()=>e[2]||(e[2]=[r("div",null,"下拉选择输入(远程数据)",-1)])),footer:n(()=>[a(V,{code:l(j)},null,8,["code"])]),default:n(()=>[a(l(g),{modelValue:l(o),"onUpdate:modelValue":e[0]||(e[0]=s=>b(o)?o.value=s:o=s),url:l(C).serverUrl+"/brand",optionVal:"label",optionLabel:"name",onOnValChange:p,onOnChange:v},null,8,["modelValue","url"]),e[3]||(e[3]=r("div",{class:"json-title"},"绑定数据:",-1)),a(i,{value:l(o),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),a(h),a(c,null,{header:n(()=>e[4]||(e[4]=[r("div",null,"下拉选择输入（静态数据）",-1)])),footer:n(()=>[a(V,{code:l(L)},null,8,["code"])]),default:n(()=>[a(l(g),{modelValue:l(t),"onUpdate:modelValue":e[1]||(e[1]=s=>b(t)?t.value=s:t=s),data:l(f),optionVal:"label",optionLabel:"name",onOnValChange:p,onOnChange:v},null,8,["modelValue","data"]),e[5]||(e[5]=r("div",{class:"json-title"},"绑定数据:",-1)),a(i,{value:l(t),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{S as default};
