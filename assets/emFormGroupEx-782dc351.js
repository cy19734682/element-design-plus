import{d as w,u as E,c as n,e as b,o as J,f as P,g as e,w as o,h as r,i as t,x as m,_ as j}from"./index-0f83177b.js";import{s as p}from"./sourceCodeView-3a98e334.js";const q=`
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
    type: 'switch',
    label: '显示学历',
    key: 'open'
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
    ],
    show:{
      key:'open',
      val: [true]
    }
  },
  {
    type: 'radio',
    key: 'sex',
    label: '性别',
    options: [
      {
        label: '男',
        val: 1
      },
      {
        label: '女',
        val: 0
      }
    ]
  },
  {
    type: 'checkbox',
    label: '证书',
    key: 'credential',
    checkboxType: 'button',
    options: [
      {
        label: '英语四级',
        val: 'CET4'
      },
      {
        label: '英语六级',
        val: 'CET6',
        disabled: true
      },
      {
        label: 'C1驾照',
        val: 'C1',
        disabled: true
      }
    ]
  },
])

const formGroupRef1 = ref<any>()
const dataJson1 = ref<Record<string, any>>({})
const onSubmit1 = (data: any) => {
  console.log(data)
  dataJson1.value = data
  setTimeout(() => {
    formGroupRef1.value.changeLoading(false)
  }, 500)
}
<\/script>

<template>
  <em-form-group ref="formGroupRef1" :form-data="formData" btnLoading @on-submit="onSubmit1" />
</template>
`,F=`
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
    type: 'switch',
    label: '显示学历',
    key: 'open'
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
    ],
    show:{
      key:'open',
      val: [true]
    }
  },
  {
    type: 'radio',
    key: 'sex',
    label: '性别',
    options: [
      {
        label: '男',
        val: 1
      },
      {
        label: '女',
        val: 0
      }
    ]
  },
  {
    type: 'checkbox',
    label: '证书',
    key: 'credential',
    checkboxType: 'button',
    options: [
      {
        label: '英语四级',
        val: 'CET4'
      },
      {
        label: '英语六级',
        val: 'CET6',
        disabled: true
      },
      {
        label: 'C1驾照',
        val: 'C1',
        disabled: true
      }
    ]
  },
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
  },
  sex: {
    required: true
  },
  credential: {
    required: true
  }
})

const formGroupRef2 = ref<any>()
const dataJson2 = ref<Record<string, any>>({})
const onSubmit2 = (data: any) => {
  console.log(data)
  dataJson2.value = data
  setTimeout(() => {
    formGroupRef2.value.changeLoading(false)
  }, 500)
}
<\/script>

<template>
	<em-form-group ref="formGroupRef2" :form-data="formData" :form-rules="formRules" btnLoading @on-submit="onSubmit2" />
</template>
 `,I=`
<script lang="ts" setup>
  const dateFormData = [
    {
      type: 'date',
      label: '日期',
      key: 'date'
    },
    {
      type: 'time',
      label: '时间',
      key: 'time'
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
  ]
  
const formGroupRef3 = ref<any>()
const dataJson3 = ref<Record<string, any>>({})
const onSubmit3 = (data: any) => {
  console.log(data)
  dataJson3.value = data
  setTimeout(() => {
    formGroupRef3.value.changeLoading(false)
  }, 500)
}

<\/script>

<template>
	<em-form-group ref="formGroupRef3" labelWidth="100px" :form-data="formData" btnLoading @on-submit="onSubmit3" />
</template>
 `,N=`
<script lang="ts" setup>
  const fetchFormData = [
    {
      type: 'selectInput',
      label: '学校',
      key: 'school',
      url:  '/brand',
      optionVal: 'id',
      optionLabel: 'name',
    },
    {
      type: 'cascader',
      label: '部门',
      url:  '/dept',
      key: 'deptId',
      key2: 'deptName'
    },
    {
      type: 'select',
      label: '品牌',
      key: 'brandId',
      asyncOption: true,
      optionUrl:  '/brand',
      optionLabel: 'name',
      optionVal: 'id'
    },
    {
      type: 'tableSelect',
      label: '文档类型',
      key: 'mimeType',
      multiple: true,
      url:  '/bt-table-page',
      searchForm: [
        {
          type: 'input',
          key: 'name',
          label: '商品名称'
        }
      ],
      columns: [
        {
          key: 'id',
          label: 'ID'
        },
        {
          key: 'name',
          label: '名称'
        },
        {
          key: 'mimeType',
          label: '类型'
        },
        {
          key: 'extension',
          label: '后缀'
        }
      ]
    },
  ]
  
const formGroupRef4 = ref<any>()
const dataJson4 = ref<Record<string, any>>({})
const onSubmit4 = (data: any) => {
  console.log(data)
  dataJson4.value = data
  setTimeout(() => {
        formGroupRef4.value.changeLoading(false)
   }, 500)
  }
<\/script>

<template>
	<em-form-group ref="formGroupRef4" :form-data="formData" btnLoading @on-submit="onSubmit4" />
</template>
 `,V={class:"container"},O=w({name:"EmFormGroupEx",__name:"emFormGroupEx",setup(U){const d=E(),y=n([{type:"input",key:"name",label:"名称"},{type:"inputNumber",label:"金额",key:"price"},{type:"switch",label:"显示学历",key:"open"},{type:"select",label:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}],show:{key:"open",val:[!0]}},{type:"radio",key:"sex",label:"性别",options:[{label:"男",val:1},{label:"女",val:0}]},{type:"checkbox",label:"证书",key:"credential",checkboxType:"button",options:[{label:"英语四级",val:"CET4"},{label:"英语六级",val:"CET6",disabled:!0},{label:"C1驾照",val:"C1",disabled:!0}]}]);let x=n({name:{required:!0},price:{required:!0},education:{required:!0},sex:{required:!0},credential:{required:!0}});const _=[{type:"date",label:"日期",key:"date"},{type:"time",label:"时间",key:"time"},{type:"date",dateType:"datetime",label:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",label:"日期区间",key:"startDate",key2:"endDate"},{type:"time",isRange:!0,label:"时间区间",key:"startTime",key2:"endTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"},{type:"date",dateType:"monthrange",label:"月份区间",key:"startMonth",key2:"endMonth",startPlaceholder:"开始月份",endPlaceholder:"结束月份"},{type:"date",dateType:"datetimerange",label:"日期时间区间",key:"startDateTime",key2:"endDateTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"}],G=[{type:"selectInput",label:"学校",key:"school",url:d.serverUrl+"/brand",optionVal:"id",optionLabel:"name"},{type:"cascader",label:"部门",url:d.serverUrl+"/dept",key:"deptId",key2:"deptName"},{type:"select",label:"品牌",key:"brandId",asyncOption:!0,optionUrl:d.serverUrl+"/brand",optionLabel:"name",optionVal:"id"},{type:"tableSelect",label:"文档类型",key:"mimeType",multiple:!0,url:d.serverUrl+"/bt-table-page",searchForm:[{type:"input",key:"name",label:"商品名称"}],columns:[{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"}]}],c=n(),f=n({}),D=l=>{console.log(l),f.value=l,setTimeout(()=>{c.value.changeLoading(!1)},500)},v=n(),k=n({}),L=l=>{console.log(l),k.value=l,setTimeout(()=>{v.value.changeLoading(!1)},500)},g=n(),h=n({}),S=l=>{console.log(l),h.value=l,setTimeout(()=>{g.value.changeLoading(!1)},500)},T=n(),R=n({}),C=l=>{console.log(l),R.value=l,setTimeout(()=>{T.value.changeLoading(!1)},500)};return(l,a)=>{const s=b("el-divider"),i=b("json-viewer"),u=b("el-card");return J(),P("div",V,[e(u,null,{header:o(()=>a[0]||(a[0]=[r("div",null,"基础表单",-1)])),footer:o(()=>[e(p,{code:t(q)},null,8,["code"])]),default:o(()=>[e(t(m),{ref_key:"formGroupRef1",ref:c,"form-data":t(y),btnLoading:"",onOnSubmit:D},null,8,["form-data"]),e(s),a[1]||(a[1]=r("div",{class:"json-title"},"提交数据:",-1)),e(i,{value:t(f),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),e(s),e(u,null,{header:o(()=>a[2]||(a[2]=[r("div",null,"校验表单",-1)])),footer:o(()=>[e(p,{code:t(F)},null,8,["code"])]),default:o(()=>[e(t(m),{ref_key:"formGroupRef2",ref:v,"form-data":t(y),"form-rules":t(x),btnLoading:"",onOnSubmit:L},null,8,["form-data","form-rules"]),e(s),a[3]||(a[3]=r("div",{class:"json-title"},"提交数据:",-1)),e(i,{value:t(k),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),e(s),e(u,null,{header:o(()=>a[4]||(a[4]=[r("div",null,"日期表单",-1)])),footer:o(()=>[e(p,{code:t(I)},null,8,["code"])]),default:o(()=>[e(t(m),{ref_key:"formGroupRef3",ref:g,labelWidth:"100px","form-data":_,btnLoading:"",onOnSubmit:S},null,512),e(s),a[5]||(a[5]=r("div",{class:"json-title"},"提交数据:",-1)),e(i,{value:t(h),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),e(s),e(u,null,{header:o(()=>a[6]||(a[6]=[r("div",null,"远程数据表单",-1)])),footer:o(()=>[e(p,{code:t(N)},null,8,["code"])]),default:o(()=>[e(t(m),{ref_key:"formGroupRef4",ref:T,"form-data":G,btnLoading:"",onOnSubmit:C},null,512),e(s),a[7]||(a[7]=r("div",{class:"json-title"},"提交数据:",-1)),e(i,{value:t(R),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});const W=j(O,[["__scopeId","data-v-b2f1bc1f"]]);export{W as default};
