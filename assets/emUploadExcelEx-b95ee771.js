import{d as _,c as m,e as t,o as p,f as u,g as e,w as s,i as c,m as i,h as a}from"./index-df5299c9.js";import{s as f}from"./sourceCodeView-84d5d6fc.js";const x=`
<script lang="ts" setup>
  const onSuccess = (data: any) => {
      console.log(data)
  }
<\/script>
<template>
  <em-upload-excel :onSuccess="onSuccess" />
</template>
  `,h={class:"container"},v=a("div",null,"excel上传",-1),w=a("div",{class:"json-title"},"解析数据:",-1),S=_({name:"uploadExcelEx",__name:"emUploadExcelEx",setup(E){const n=m({}),l=o=>{console.log(o),n.value=o};return(o,g)=>{const d=t("json-viewer"),r=t("el-card");return p(),u("div",h,[e(r,null,{header:s(()=>[v]),footer:s(()=>[e(f,{code:c(x)},null,8,["code"])]),default:s(()=>[e(c(i),{onSuccess:l}),w,e(d,{value:c(n),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{S as default};
