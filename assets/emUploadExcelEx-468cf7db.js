import{d as _,e as m,f as t,o as p,g as u,h as e,w as s,i as n,m as i,n as a}from"./index-aea6d2ed.js";import{s as f}from"./sourceCodeView-2a659e6d.js";const x=`
<script lang="ts" setup>
  const onSuccess = (data: any) => {
      console.log(data)
  }
<\/script>
<template>
  <em-upload-excel :onSuccess="onSuccess" />
</template>
  `,h={class:"container"},v=a("div",null,"excel上传",-1),w=a("div",{class:"json-title"},"解析数据:",-1),S=_({name:"uploadExcelEx",__name:"emUploadExcelEx",setup(E){const c=m({}),l=o=>{console.log(o),c.value=o};return(o,g)=>{const d=t("json-viewer"),r=t("el-card");return p(),u("div",h,[e(r,null,{header:s(()=>[v]),footer:s(()=>[e(f,{code:n(x)},null,8,["code"])]),default:s(()=>[e(n(i),{onSuccess:l}),w,e(d,{value:n(c),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{S as default};
