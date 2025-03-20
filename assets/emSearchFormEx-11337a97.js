import{d as k,c as n,e as l,o as b,f as v,g as t,w as a,h as c,i as o,v as g,l as m}from"./index-0f83177b.js";import{s as _}from"./sourceCodeView-3a98e334.js";const T=`
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
`,P={class:"container"},F=k({name:"EmSearchFormEx",__name:"emSearchFormEx",setup(D){let y=n([{type:"input",key:"name",placeholder:"名称"},{type:"inputNumber",placeholder:"金额",key:"price"},{type:"select",placeholder:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}]},{type:"date",placeholder:"日期",key:"date"},{type:"time",placeholder:"时间",key:"time"},{type:"date",dateType:"datetime",placeholder:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",placeholder:"日期区间",key:"startDate",key2:"endDate"},{type:"time",isRange:!0,key:"startTime",key2:"endTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"},{type:"date",dateType:"monthrange",key:"startMonth",key2:"endMonth",startPlaceholder:"开始月份",endPlaceholder:"结束月份"},{type:"date",dateType:"datetimerange",key:"startDateTime",key2:"endDateTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"}]);const d=n({}),s=n(),i=r=>{d.value=r,console.log(r),setTimeout(()=>{s.value.changeLoading(!1)},500)};return(r,e)=>{const p=l("el-button"),h=l("el-divider"),u=l("json-viewer"),f=l("el-card");return b(),v("div",P,[t(f,null,{header:a(()=>e[0]||(e[0]=[c("div",null,"搜索表单",-1)])),footer:a(()=>[t(_,{code:o(T)},null,8,["code"])]),default:a(()=>[t(o(g),{ref_key:"searchFormRef",ref:s,"form-data":o(y),btnLoading:"",onOnSearch:i},{beginBtnGroup:a(()=>[t(p,{type:"primary"},{default:a(()=>e[1]||(e[1]=[m("添加")])),_:1}),t(p,{type:"danger"},{default:a(()=>e[2]||(e[2]=[m("删除")])),_:1})]),_:1},8,["form-data"]),t(h),e[3]||(e[3]=c("div",{class:"json-title"},"搜索数据:",-1)),t(u,{value:o(d),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{F as default};
