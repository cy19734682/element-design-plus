import{d as x,u as j,c as m,e as r,o as O,f as E,g as n,w as o,h as u,i as a,O as C,p as f}from"./index-0f83177b.js";import{s as h}from"./sourceCodeView-3a98e334.js";const B=`
<script lang="ts" setup>
let value1 = ref<any>(null)
let name1 = ref<any>({})
let data = ref<any[]>([
  {
    id: 1,
    name: '爷爷',
    children: [
      {
        id: 2,
        name: '父亲'
      },
      {
        id: 3,
        name: '叔叔'
      }
    ]
  }
])
const onNameChange1 = (data: any) => {
  console.log(data)
  name1.value = {val: value1, name: data}
}
const onValChange = (data: any) => {
  console.log(data)
}
<\/script>

<template>
 <em-cascader v-model="value1" :data="data" @on-val-change="onValChange" @on-name-change="onNameChange1" />
</template>
`,U=`
<script lang="ts" setup>
let value2 = ref<any>(null)
let name2 = ref<any>({})
const onNameChange2 = (data: any) => {
console.log(data)
    name2.value = {val: value2, name: data}
}

const onValChange = (data: any) => {
  console.log(data)
}
<\/script>

<template>
 <em-cascader v-model="value2" url="/dept" @on-val-change="onValChange" @on-name-change="onNameChange2" />
</template>
`,b={class:"container"},q=x({name:"EmCascaderEx",__name:"emCascaderEx",setup(k){const V=j();let t=m(null),c=m({}),y=m([{id:1,name:"爷爷",children:[{id:2,name:"父亲"},{id:3,name:"叔叔"}]}]);const _=l=>{console.log(l),c.value={val:t,name:l}};let s=m(null),i=m({});const N=l=>{console.log(l),i.value={val:s,name:l}},v=l=>{console.log(l)};return(l,e)=>{const p=r("json-viewer"),g=r("el-card"),w=r("el-divider");return O(),E("div",b,[n(g,null,{header:o(()=>e[2]||(e[2]=[u("div",null,"自定义级联选择",-1)])),footer:o(()=>[n(h,{code:a(B)},null,8,["code"])]),default:o(()=>[n(a(C),{modelValue:a(t),"onUpdate:modelValue":e[0]||(e[0]=d=>f(t)?t.value=d:t=d),data:a(y),onOnValChange:v,onOnNameChange:_},null,8,["modelValue","data"]),e[3]||(e[3]=u("div",{class:"json-title"},"绑定数据:",-1)),n(p,{value:a(c),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),n(w),n(g,null,{header:o(()=>e[4]||(e[4]=[u("div",null,"远程级联选择",-1)])),footer:o(()=>[n(h,{code:a(U)},null,8,["code"])]),default:o(()=>[n(a(C),{modelValue:a(s),"onUpdate:modelValue":e[1]||(e[1]=d=>f(s)?s.value=d:s=d),url:a(V).serverUrl+"/dept",onOnValChange:v,onOnNameChange:N},null,8,["modelValue","url"]),e[5]||(e[5]=u("div",{class:"json-title"},"绑定数据:",-1)),n(p,{value:a(i),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{q as default};
