import{d as p,c as u,e as c,o as i,f as _,g as o,w as n,h as l,i as t,m as f}from"./index-0f83177b.js";import{s as x}from"./sourceCodeView-3a98e334.js";const v=`
<script lang="ts" setup>
  const onSuccess = (data: any) => {
      console.log(data)
  }
<\/script>
<template>
  <em-upload-excel :onSuccess="onSuccess" />
</template>
  `,w={class:"container"},C=p({name:"uploadExcelEx",__name:"emUploadExcelEx",setup(E){const a=u({}),r=s=>{console.log(s),a.value=s};return(s,e)=>{const d=c("json-viewer"),m=c("el-card");return i(),_("div",w,[o(m,null,{header:n(()=>e[0]||(e[0]=[l("div",null,"excel上传",-1)])),footer:n(()=>[o(x,{code:t(v)},null,8,["code"])]),default:n(()=>[o(t(f),{onSuccess:r}),e[1]||(e[1]=l("div",{class:"json-title"},"解析数据:",-1)),o(d,{value:t(a),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{C as default};
