import{d as x,u as j,c as d,e as u,o as E,f as O,g as a,w as l,i as e,Q as g,p as _,h as c}from"./index-97fae43d.js";import{s as C}from"./sourceCodeView-31339cdc.js";const B=`
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
`,b={class:"container"},k=c("div",null,"自定义级联选择",-1),Q=c("div",{class:"json-title"},"绑定数据:",-1),R=c("div",null,"远程级联选择",-1),S=c("div",{class:"json-title"},"绑定数据:",-1),D=x({name:"EmCascaderEx",__name:"emCascaderEx",setup(q){const f=j();let o=d(null),r=d({}),V=d([{id:1,name:"爷爷",children:[{id:2,name:"父亲"},{id:3,name:"叔叔"}]}]);const y=n=>{console.log(n),r.value={val:o,name:n}};let t=d(null),i=d({});const N=n=>{console.log(n),i.value={val:t,name:n}},v=n=>{console.log(n)};return(n,m)=>{const h=u("json-viewer"),p=u("el-card"),w=u("el-divider");return E(),O("div",b,[a(p,null,{header:l(()=>[k]),footer:l(()=>[a(C,{code:e(B)},null,8,["code"])]),default:l(()=>[a(e(g),{modelValue:e(o),"onUpdate:modelValue":m[0]||(m[0]=s=>_(o)?o.value=s:o=s),data:e(V),onOnValChange:v,onOnNameChange:y},null,8,["modelValue","data"]),Q,a(h,{value:e(r),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),a(w),a(p,null,{header:l(()=>[R]),footer:l(()=>[a(C,{code:e(U)},null,8,["code"])]),default:l(()=>[a(e(g),{modelValue:e(t),"onUpdate:modelValue":m[1]||(m[1]=s=>_(t)?t.value=s:t=s),url:e(f).serverUrl+"/dept",onOnValChange:v,onOnNameChange:N},null,8,["modelValue","url"]),S,a(h,{value:e(i),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{D as default};
