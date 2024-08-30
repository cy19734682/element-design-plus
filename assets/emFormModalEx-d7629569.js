import{d as I,u as _,c as o,e as r,o as D,f as R,g as t,w as n,i as a,h as s,l as p,A as w,B as L}from"./index-97fae43d.js";import{s as M}from"./sourceCodeView-31339cdc.js";const V=`
<script lang="ts" setup>
const formData = ref<any[]>([
  {
    type: 'input',
    key: 'name',
    label: '名称'
  },
  {
    type: 'inputNumber',
    label: '金额',
    key: 'price'
  },
  {
    type: 'select',
    label: '学历',
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
    type: 'select',
    label: '品牌',
    key: 'brandId',
    asyncOption: true,
    optionUrl: '/brand',
    optionLabel: 'name',
    optionVal: 'id'
  },
  {
    type: 'select',
    label: '借用数据',
    key: 'wbId',
    borrowOption: 'education',
    optionLabel: 'name',
    optionVal: 'id',
  },
  {
    type: 'select',
    label: '远程数据',
    key: 'devId',
    asyncOption: true,
    optionUrl: '/bt-table',
    optionLabel: 'name',
    optionVal: 'id',
    collectLabel: {
      valKey: 'mimeType',
      key: 'mine'
    },
    changeOption: [
      {
        valKey: 'wbId',
        key: 'wbId'
      },
      {
        valKey: 'education',
        key: 'education',
        notRequired: true
      }
    ],
    localOption: [
      {
        id: 998,
        name: 'test1',
        mimeType: 't1'
      },
      {
        id: 999,
        name: 'test2',
        mimeType: 't2'
      }
    ]
  },
  {
    type: 'select',
    label: '图片Id',
    key: 'imgId',
    asyncOption: true,
    optionUrl: '/bt-table?imgId=1',
    optionLabel: 'name',
    optionVal: 'id',
    collectLabel: {
      valKey: 'mimeType',
      key: 'mineImg'
    }
  },
  {
    type: 'date',
    label: '日期',
    key: 'date',
    defaultVal: '2023-01-12'
  },
  {
    type: 'time',
    label: '时间',
    key: 'time',
    defaultVal: '12:12:12'
  },
  {
    type: 'date',
    dateType: 'datetime',
    label: '日期时间',
    key: 'datetime'
  },
  {
    type: 'date',
    dateType: 'daterange',
    label: '日期区间',
    key: 'startDate',
    key2: 'endDate'
  },
  {
    type: 'time',
    isRange: true,
    label: '时间区间',
    key: 'startTime',
    key2: 'endTime',
    startPlaceholder: '开始时间',
    endPlaceholder: '结束时间'
  },
  {
    type: 'date',
    dateType: 'monthrange',
    label: '月份区间',
    key: 'startMonth',
    key2: 'endMonth',
    startPlaceholder: '开始月份',
    endPlaceholder: '结束月份'
  },
  {
    type: 'date',
    dateType: 'datetimerange',
    label: '日期时间区间',
    key: 'startDateTime',
    key2: 'endDateTime',
    startPlaceholder: '开始时间',
    endPlaceholder: '结束时间'
  }
])
let formRules = ref<Record<string, any>>({
  name: {
    required: true
  },
  price: {
    required: true
  },
  education: {
    required: true
  }
})


const formModalRef = ref<any>()
const title = ref<string>('')
const newData = () => {
  title.value = '新增数据'
  formModalRef.value.open()
}
const editData = () => {
  title.value = '编辑数据'
  formModalRef.value.open()
  nextTick(() => {
    formModalRef.value.updateDataGroup({
      name: '小王',
      price: 2690,
      education: 3,
      wbId: 2,
      devId: 81,
      imgId: 80,
      brandId: 1,
      date: '2023-05-01',
      time: '14:29:10',
      datetime: '2023-01-05 11:12:52',
      startDate: '2012-01-12',
      endDate: '2015-01-12',
      startTime: '00:10:12',
      endTime: '15:12:31'
    })
  })
}
const dataJson = ref<Record<string, any>>({})
const onItemChange = (d: Record<string, any>) => {
  console.log(d)
}
const onSubmit = (data: Record<string, any>) => {
  dataJson.value = data
  console.log(data)
  formModalRef.value.close()
  setTimeout(() => {
    formModalRef.value.changeLoading(false)
  }, 500)
}
const onClose = () => {
  console.log('关闭')
  setTimeout(() => {
    formModalRef.value.resetForm()
  }, 200)
}
<\/script>

<template>
    <em-form-modal
      ref="formModalRef"
      :title="title"
      :form-data="formData"
      :form-rules="formRules"
      labelWidth="100px"
      btnLoading
      @on-item-change="onItemChange"
      @on-submit="onSubmit"
      @on-close="onClose"
    />
</template>
 `,O={class:"container"},C=s("div",null,"弹窗表单",-1),P=s("div",{class:"json-title"},"提交数据:",-1),N=I({name:"EmFormModalEx",__name:"emFormModalEx",setup(x){const d=_(),y=o([{type:"input",key:"name",label:"名称"},{type:"inputNumber",label:"金额",key:"price"},{type:"select",label:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}]},{type:"select",label:"品牌",key:"brandId",asyncOption:!0,optionUrl:d.serverUrl+"/brand",optionLabel:"name",optionVal:"id"},{type:"select",label:"借用数据",key:"wbId",borrowOption:"education",optionLabel:"name",optionVal:"id"},{type:"select",label:"远程数据",key:"devId",asyncOption:!0,optionUrl:d.serverUrl+"/bt-table",optionLabel:"name",optionVal:"id",collectLabel:{valKey:"mimeType",key:"mine"},changeOption:[{valKey:"wbId",key:"wbId"},{valKey:"education",key:"education",notRequired:!0}],localOption:[{id:998,name:"test1",mimeType:"t1"},{id:999,name:"test2",mimeType:"t2"}]},{type:"select",label:"图片Id",key:"imgId",asyncOption:!0,optionUrl:d.serverUrl+"/bt-table?imgId=1",optionLabel:"name",optionVal:"id",collectLabel:{valKey:"mimeType",key:"mineImg"}},{type:"date",label:"日期",key:"date",defaultVal:"2023-01-12"},{type:"time",label:"时间",key:"time",defaultVal:"12:12:12"},{type:"date",dateType:"datetime",label:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",label:"日期区间",key:"startDate",key2:"endDate"},{type:"time",isRange:!0,label:"时间区间",key:"startTime",key2:"endTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"},{type:"date",dateType:"monthrange",label:"月份区间",key:"startMonth",key2:"endMonth",startPlaceholder:"开始月份",endPlaceholder:"结束月份"},{type:"date",dateType:"datetimerange",label:"日期时间区间",key:"startDateTime",key2:"endDateTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"}]);let u=o({name:{required:!0},price:{required:!0},education:{required:!0}});const e=o(),i=o(""),b=()=>{i.value="新增数据",e.value.open()},f=()=>{i.value="编辑数据",e.value.open(),L(()=>{e.value.updateDataGroup({name:"小王",price:2690,education:3,wbId:2,devId:81,imgId:80,brandId:1,date:"2023-05-01",time:"14:29:10",datetime:"2023-01-05 11:12:52",startDate:"2012-01-12",endDate:"2015-01-12",startTime:"00:10:12",endTime:"15:12:31"})})},m=o({}),v=l=>{console.log(l)},k=l=>{m.value=l,console.log(l),e.value.close(),setTimeout(()=>{e.value.changeLoading(!1)},500)},g=()=>{console.log("关闭"),setTimeout(()=>{e.value.resetForm()},200)};return(l,U)=>{const c=r("el-button"),h=r("json-viewer"),T=r("el-card");return D(),R("div",O,[t(T,null,{header:n(()=>[C]),footer:n(()=>[t(M,{code:a(V)},null,8,["code"])]),default:n(()=>[s("div",null,[t(c,{type:"primary",onClick:b},{default:n(()=>[p("新增数据")]),_:1}),t(c,{type:"warning",onClick:f},{default:n(()=>[p("编辑编辑")]),_:1})]),P,t(h,{value:a(m),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),t(a(w),{ref_key:"formModalRef",ref:e,title:a(i),"form-data":a(y),"form-rules":a(u),labelWidth:"100px",btnLoading:"",onOnItemChange:v,onOnSubmit:k,onOnClose:g},null,8,["title","form-data","form-rules"])])}}});export{N as default};
