import{s as u}from"./sourceCodeView-3a98e334.js";import{d as y,c as r,e as b,o as C,f as v,g as l,w as a,h as m,i as t,n as c,p as f}from"./index-0f83177b.js";const h=`
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
  `,_=`
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
  `,T={class:"container"},w=y({name:"EmUploadEx",__name:"emUploadEx",setup(U){let d=r(["666963bb096132e67ebe120d.png"]),n=r(null),s=r("http://cdn.cy1973.cn/screen-designer/images/material/2024-06/666963bb096132e67ebe120d.png");const i=g=>{console.log(g)};return(g,e)=>{const p=b("el-card"),V=b("el-divider");return C(),v("div",T,[l(p,null,{header:a(()=>e[3]||(e[3]=[m("div",null,"自动上传",-1)])),footer:a(()=>[l(u,{code:t(h)},null,8,["code"])]),default:a(()=>[l(t(c),{modelValue:t(d),"onUpdate:modelValue":[e[0]||(e[0]=o=>f(d)?d.value=o:d=o),i],fileName:"files",listType:"picture-card",length:2},null,8,["modelValue"])]),_:1}),l(V),l(p,null,{header:a(()=>e[4]||(e[4]=[m("div",null,"手动上传",-1)])),footer:a(()=>[l(u,{code:t(_)},null,8,["code"])]),default:a(()=>[l(t(c),{modelValue:t(n),"onUpdate:modelValue":[e[1]||(e[1]=o=>f(n)?n.value=o:n=o),i],"auto-upload":!1,length:3,fileName:"files",listType:"picture-card"},null,8,["modelValue"])]),_:1}),l(V),l(p,null,{header:a(()=>e[5]||(e[5]=[m("div",null,"网络地址上传",-1)])),footer:a(()=>[l(u,{code:t(N)},null,8,["code"])]),default:a(()=>[l(t(c),{modelValue:t(s),"onUpdate:modelValue":[e[2]||(e[2]=o=>f(s)?s.value=o:s=o),i],fileName:"files",listType:"picture-card","upload-fetch":""},null,8,["modelValue"])]),_:1})])}}});export{w as default};
