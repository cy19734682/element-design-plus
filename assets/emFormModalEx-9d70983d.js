import{d as D,u as R,c as n,e as s,o as w,f as _,g as a,w as d,h as m,i as l,l as c,y as L,z as M}from"./index-0f83177b.js";import{s as V}from"./sourceCodeView-3a98e334.js";const O=`
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
 `,C={class:"container"},q=D({name:"EmFormModalEx",__name:"emFormModalEx",setup(P){const i=R(),u=n([{type:"input",key:"name",label:"名称"},{type:"inputNumber",label:"金额",key:"price"},{type:"select",label:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}]},{type:"select",label:"品牌",key:"brandId",asyncOption:!0,optionUrl:i.serverUrl+"/brand",optionLabel:"name",optionVal:"id"},{type:"select",label:"借用数据",key:"wbId",borrowOption:"education",optionLabel:"name",optionVal:"id"},{type:"select",label:"远程数据",key:"devId",asyncOption:!0,optionUrl:i.serverUrl+"/bt-table",optionLabel:"name",optionVal:"id",collectLabel:{valKey:"mimeType",key:"mine"},changeOption:[{valKey:"wbId",key:"wbId"},{valKey:"education",key:"education",notRequired:!0}],localOption:[{id:998,name:"test1",mimeType:"t1"},{id:999,name:"test2",mimeType:"t2"}]},{type:"select",label:"图片Id",key:"imgId",asyncOption:!0,optionUrl:i.serverUrl+"/bt-table?imgId=1",optionLabel:"name",optionVal:"id",collectLabel:{valKey:"mimeType",key:"mineImg"}},{type:"date",label:"日期",key:"date",defaultVal:"2023-01-12"},{type:"time",label:"时间",key:"time",defaultVal:"12:12:12"},{type:"date",dateType:"datetime",label:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",label:"日期区间",key:"startDate",key2:"endDate"},{type:"time",isRange:!0,label:"时间区间",key:"startTime",key2:"endTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"},{type:"date",dateType:"monthrange",label:"月份区间",key:"startMonth",key2:"endMonth",startPlaceholder:"开始月份",endPlaceholder:"结束月份"},{type:"date",dateType:"datetimerange",label:"日期时间区间",key:"startDateTime",key2:"endDateTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"}]);let b=n({name:{required:!0},price:{required:!0},education:{required:!0}});const t=n(),r=n(""),f=()=>{r.value="新增数据",t.value.open()},v=()=>{r.value="编辑数据",t.value.open(),M(()=>{t.value.updateDataGroup({name:"小王",price:2690,education:3,wbId:2,devId:81,imgId:80,brandId:1,date:"2023-05-01",time:"14:29:10",datetime:"2023-01-05 11:12:52",startDate:"2012-01-12",endDate:"2015-01-12",startTime:"00:10:12",endTime:"15:12:31"})})},p=n({}),k=o=>{console.log(o)},g=o=>{p.value=o,console.log(o),t.value.close(),setTimeout(()=>{t.value.changeLoading(!1)},500)},T=()=>{console.log("关闭"),setTimeout(()=>{t.value.resetForm()},200)};return(o,e)=>{const y=s("el-button"),I=s("json-viewer"),h=s("el-card");return w(),_("div",C,[a(h,null,{header:d(()=>e[0]||(e[0]=[m("div",null,"弹窗表单",-1)])),footer:d(()=>[a(V,{code:l(O)},null,8,["code"])]),default:d(()=>[m("div",null,[a(y,{type:"primary",onClick:f},{default:d(()=>e[1]||(e[1]=[c("新增数据")])),_:1}),a(y,{type:"warning",onClick:v},{default:d(()=>e[2]||(e[2]=[c("编辑编辑")])),_:1})]),e[3]||(e[3]=m("div",{class:"json-title"},"提交数据:",-1)),a(I,{value:l(p),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),a(l(L),{ref_key:"formModalRef",ref:t,title:l(r),"form-data":l(u),"form-rules":l(b),labelWidth:"100px",btnLoading:"",onOnItemChange:k,onOnSubmit:g,onOnClose:T},null,8,["title","form-data","form-rules"])])}}});export{q as default};
