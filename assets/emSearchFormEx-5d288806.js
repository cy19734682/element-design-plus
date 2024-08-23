import{d as f,c as r,e as a,o as _,f as k,g as e,w as t,i as l,v as b,l as s,h as p}from"./index-df5299c9.js";import{s as v}from"./sourceCodeView-84d5d6fc.js";const g=`
<script lang="ts" setup>
  let formData = ref<any[]>([
    {
      type: 'input',
      key: 'name',
      placeholder: '名称'
    },
    {
      type: 'inputNumber',
      placeholder: '金额',
      key: 'price'
    },
    {
      type: 'select',
      placeholder: '学历',
      key: 'education',
      options: [
        {
          label: '高中',
          val: 1
        },
        {
          label: '专科',
          val: 2
        },
        {
          label: '本科',
          val: 3
        },
        {
          label: '研究生',
          val: 4
        },
        {
          label: '博士',
          val: 5,
          disabled: true
        }
      ]
    },
    {
      type: 'date',
      placeholder: '日期',
      key: 'date'
    },
    {
      type: 'time',
      placeholder: '时间',
      key: 'time'
    },
    {
      type: 'date',
      dateType: 'datetime',
      placeholder: '日期时间',
      key: 'datetime'
    },
    {
      type: 'date',
      dateType: 'daterange',
      placeholder: '日期区间',
      key: 'startDate',
      key2: 'endDate'
    },
    {
      type: 'time',
      isRange: true,
      key: 'startTime',
      key2: 'endTime',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    },
    {
      type: 'date',
      dateType: 'monthrange',
      key: 'startMonth',
      key2: 'endMonth',
      startPlaceholder: '开始月份',
      endPlaceholder: '结束月份'
    },
    {
      type: 'date',
      dateType: 'datetimerange',
      key: 'startDateTime',
      key2: 'endDateTime',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    }
  ])
  
  const searchFormRef = ref<any>()
  const search = (data: Record<string, any>) => {
    console.log(data)
    setTimeout(() => {
      searchFormRef.value.changeLoading(false)
    }, 500)
  }
<\/script>

<template>
  <em-search-form ref="searchFormRef" :form-data="formData" btnLoading @on-search="search">
    <template #beginBtnGroup>
    <el-button type="primary">添加</el-button>
    <el-button type="danger">删除</el-button>
   </template>
  </em-search-form>
</template>
`,T={class:"container"},P=p("div",null,"搜索表单",-1),D=p("div",{class:"json-title"},"搜索数据:",-1),B=f({name:"EmSearchFormEx",__name:"emSearchFormEx",setup(R){let m=r([{type:"input",key:"name",placeholder:"名称"},{type:"inputNumber",placeholder:"金额",key:"price"},{type:"select",placeholder:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}]},{type:"date",placeholder:"日期",key:"date"},{type:"time",placeholder:"时间",key:"time"},{type:"date",dateType:"datetime",placeholder:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",placeholder:"日期区间",key:"startDate",key2:"endDate"},{type:"time",isRange:!0,key:"startTime",key2:"endTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"},{type:"date",dateType:"monthrange",key:"startMonth",key2:"endMonth",startPlaceholder:"开始月份",endPlaceholder:"结束月份"},{type:"date",dateType:"datetimerange",key:"startDateTime",key2:"endDateTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"}]);const n=r({}),d=r(),i=o=>{n.value=o,console.log(o),setTimeout(()=>{d.value.changeLoading(!1)},500)};return(o,x)=>{const c=a("el-button"),y=a("el-divider"),h=a("json-viewer"),u=a("el-card");return _(),k("div",T,[e(u,null,{header:t(()=>[P]),footer:t(()=>[e(v,{code:l(g)},null,8,["code"])]),default:t(()=>[e(l(b),{ref_key:"searchFormRef",ref:d,"form-data":l(m),btnLoading:"",onOnSearch:i},{beginBtnGroup:t(()=>[e(c,{type:"primary"},{default:t(()=>[s("添加")]),_:1}),e(c,{type:"danger"},{default:t(()=>[s("删除")]),_:1})]),_:1},8,["form-data"]),e(y),D,e(h,{value:l(n),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{B as default};
