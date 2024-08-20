import{s as p}from"./sourceCodeView-12fffd08.js";import{d as V,e as u,f as h,o as b,g as y,h as e,w as l,i as a,p as r,q as m,n as f}from"./index-0ff01b20.js";const C=`
<script lang="ts" setup>
let id1 = ref<string>('666963bb096132e67ebe120d.png')

 const onfileChange = (data: any) => {
  console.log(data)
 }
<\/script>

<template>
   <em-upload
    v-model="id1"
    fileName="files"
    listType="picture-card"
    :length="2"
    @update:modelValue="onfileChange"
  />
</template>
  `,v=`
<script lang="ts" setup>
  let id2 = ref<any>(null)
  
   const onfileChange = (data: any) => {
    console.log(data)
   }
<\/script>

<template>
  <em-upload
    v-model="id2"
    :autoUpload="false"
    fileName="files"
    listType="picture-card"
    @update:modelValue="onfileChange"
  />
</template>
  `,N=`
<script lang="ts" setup>
let id3 = ref<string>('http://cdn.cy1973.cn/screen-designer/images/material/2024-06/666963bb096132e67ebe120d.png')

 const onfileChange = (data: any) => {
  console.log(data)
 }
<\/script>

<template>
  <em-upload
    v-model="id3"
    fileName="files"
    listType="picture-card"
    upload-fetch
    @update:modelValue="onfileChange"
  />
</template>
  `,T={class:"container"},U=f("div",null,"自动上传",-1),x=f("div",null,"手动上传",-1),E=f("div",null,"网络地址上传",-1),q=V({name:"EmUploadEx",__name:"emUploadEx",setup(w){let d=u(["666963bb096132e67ebe120d.png"]),n=u(null),s=u("http://cdn.cy1973.cn/screen-designer/images/material/2024-06/666963bb096132e67ebe120d.png");const i=g=>{console.log(g)};return(g,o)=>{const c=h("el-card"),_=h("el-divider");return b(),y("div",T,[e(c,null,{header:l(()=>[U]),footer:l(()=>[e(p,{code:a(C)},null,8,["code"])]),default:l(()=>[e(a(r),{modelValue:a(d),"onUpdate:modelValue":[o[0]||(o[0]=t=>m(d)?d.value=t:d=t),i],fileName:"files",listType:"picture-card",length:2},null,8,["modelValue"])]),_:1}),e(_),e(c,null,{header:l(()=>[x]),footer:l(()=>[e(p,{code:a(v)},null,8,["code"])]),default:l(()=>[e(a(r),{modelValue:a(n),"onUpdate:modelValue":[o[1]||(o[1]=t=>m(n)?n.value=t:n=t),i],"auto-upload":!1,length:3,fileName:"files",listType:"picture-card"},null,8,["modelValue"])]),_:1}),e(_),e(c,null,{header:l(()=>[E]),footer:l(()=>[e(p,{code:a(N)},null,8,["code"])]),default:l(()=>[e(a(r),{modelValue:a(s),"onUpdate:modelValue":[o[2]||(o[2]=t=>m(s)?s.value=t:s=t),i],fileName:"files",listType:"picture-card","upload-fetch":""},null,8,["modelValue"])]),_:1})])}}});export{q as default};
