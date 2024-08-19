import{d as E,u as I,e as o,f as b,o as J,g as P,h as e,w as l,i as a,y as p,z as j,A as q,n,_ as F}from"./index-a3559510.js";import{s as m}from"./sourceCodeView-f6a010a7.js";const N=`
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
`,V=`
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
 `,O=`
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
 `,U=`
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
 `,r=d=>(j("data-v-b2f1bc1f"),d=d(),q(),d),M={class:"container"},B=r(()=>n("div",null,"基础表单",-1)),W=r(()=>n("div",{class:"json-title"},"提交数据:",-1)),z=r(()=>n("div",null,"校验表单",-1)),A=r(()=>n("div",{class:"json-title"},"提交数据:",-1)),$=r(()=>n("div",null,"日期表单",-1)),H=r(()=>n("div",{class:"json-title"},"提交数据:",-1)),K=r(()=>n("div",null,"远程数据表单",-1)),Q=r(()=>n("div",{class:"json-title"},"提交数据:",-1)),X=E({name:"EmFormGroupEx",__name:"emFormGroupEx",setup(d){const i=I(),y=o([{type:"input",key:"name",label:"名称"},{type:"inputNumber",label:"金额",key:"price"},{type:"switch",label:"显示学历",key:"open"},{type:"select",label:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}],show:{key:"open",val:[!0]}},{type:"radio",key:"sex",label:"性别",options:[{label:"男",val:1},{label:"女",val:0}]},{type:"checkbox",label:"证书",key:"credential",checkboxType:"button",options:[{label:"英语四级",val:"CET4"},{label:"英语六级",val:"CET6",disabled:!0},{label:"C1驾照",val:"C1",disabled:!0}]}]);let x=o({name:{required:!0},price:{required:!0},education:{required:!0},sex:{required:!0},credential:{required:!0}});const G=[{type:"date",label:"日期",key:"date"},{type:"time",label:"时间",key:"time"},{type:"date",dateType:"datetime",label:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",label:"日期区间",key:"startDate",key2:"endDate"},{type:"time",isRange:!0,label:"时间区间",key:"startTime",key2:"endTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"},{type:"date",dateType:"monthrange",label:"月份区间",key:"startMonth",key2:"endMonth",startPlaceholder:"开始月份",endPlaceholder:"结束月份"},{type:"date",dateType:"datetimerange",label:"日期时间区间",key:"startDateTime",key2:"endDateTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间"}],S=[{type:"selectInput",label:"学校",key:"school",url:i.serverUrl+"/brand",optionVal:"id",optionLabel:"name"},{type:"cascader",label:"部门",url:i.serverUrl+"/dept",key:"deptId",key2:"deptName"},{type:"select",label:"品牌",key:"brandId",asyncOption:!0,optionUrl:i.serverUrl+"/brand",optionLabel:"name",optionVal:"id"},{type:"tableSelect",label:"文档类型",key:"mimeType",multiple:!0,url:i.serverUrl+"/bt-table-page",searchForm:[{type:"input",key:"name",label:"商品名称"}],columns:[{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"}]}],f=o(),v=o({}),D=t=>{console.log(t),v.value=t,setTimeout(()=>{f.value.changeLoading(!1)},500)},k=o(),h=o({}),L=t=>{console.log(t),h.value=t,setTimeout(()=>{k.value.changeLoading(!1)},500)},_=o(),g=o({}),w=t=>{console.log(t),g.value=t,setTimeout(()=>{_.value.changeLoading(!1)},500)},T=o(),R=o({}),C=t=>{console.log(t),R.value=t,setTimeout(()=>{T.value.changeLoading(!1)},500)};return(t,Y)=>{const s=b("el-divider"),u=b("json-viewer"),c=b("el-card");return J(),P("div",M,[e(c,null,{header:l(()=>[B]),footer:l(()=>[e(m,{code:a(N)},null,8,["code"])]),default:l(()=>[e(a(p),{ref_key:"formGroupRef1",ref:f,"form-data":a(y),btnLoading:"",onOnSubmit:D},null,8,["form-data"]),e(s),W,e(u,{value:a(v),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),e(s),e(c,null,{header:l(()=>[z]),footer:l(()=>[e(m,{code:a(V)},null,8,["code"])]),default:l(()=>[e(a(p),{ref_key:"formGroupRef2",ref:k,"form-data":a(y),"form-rules":a(x),btnLoading:"",onOnSubmit:L},null,8,["form-data","form-rules"]),e(s),A,e(u,{value:a(h),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),e(s),e(c,null,{header:l(()=>[$]),footer:l(()=>[e(m,{code:a(O)},null,8,["code"])]),default:l(()=>[e(a(p),{ref_key:"formGroupRef3",ref:_,labelWidth:"100px","form-data":G,btnLoading:"",onOnSubmit:w},null,512),e(s),H,e(u,{value:a(g),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1}),e(s),e(c,null,{header:l(()=>[K]),footer:l(()=>[e(m,{code:a(U)},null,8,["code"])]),default:l(()=>[e(a(p),{ref_key:"formGroupRef4",ref:T,"form-data":S,btnLoading:"",onOnSubmit:C},null,512),e(s),Q,e(u,{value:a(R),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});const ae=F(X,[["__scopeId","data-v-b2f1bc1f"]]);export{ae as default};
