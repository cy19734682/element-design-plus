import{d as h,u as q,c as d,e as r,o as x,f as I,g as e,w as o,h as p,i as t,q as C}from"./index-0f83177b.js";import{s as _}from"./sourceCodeView-3a98e334.js";const w=`
<script lang="ts" setup>
  const formData = ref<any[]>([
    {
      type: 'txt',
      label: '信息',
      val: '这是一条占位信息'
    },
    {
      type: 'input',
      label: '名称',
      key: 'name',
      defaultVal: '121'
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
      ],
      show: {
        key: 'education',
        val: [3, 4, 5]
      }
    },
    {
      type: 'selectInput',
      label: '学校',
      key: 'school',
      defaultKey: 'gz',
      defaultVal: '52',
      data: [
        {
          val: 'xx',
          label: '小学'
        },
        {
          val: 'cz',
          label: '初中'
        },
        {
          val: 'gz',
          label: '高中'
        },
        {
          val: 'dx',
          label: '大学'
        }
      ]
    },
    {
      type: 'upload',
      label: '文件上传',
      key: 'imgUrl',
      autoUpload: false
    },
    {
      type: 'colorPicker',
      label: '颜色',
      key: 'color',
      showAlpha: true
    },
    {
      type: 'selectIcon',
      label: '图标',
      key: 'icon',
      defaultVal: 'lock',
      info: '选择图标选标选择图标选择图标选择图标选择图标',
      infoColor: '#333'
    },
    {
      type: 'switch',
      label: '开关',
      key: 'open'
    },
    {
      type: 'slider',
      label: '滑动',
      key: 'step'
    },
    {
      type: 'rate',
      label: '分数',
      key: 'fs'
    },
    {
      type: 'area',
      label: '行政区域',
      key: 'areaCode',
      key2: 'areaName'
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
    {
      type: 'bdMap',
      label: '位置',
      key: 'lng',
      key2: 'lat',
      key3: 'address'
    },
    {
      type: 'textarea',
      label: '备注',
      key: 'remark'
    },
    {
      type: 'editor',
      label: '内容',
      key: 'content'
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
      type: 'date',
      dateType: 'monthrange',
      label: '月份区间',
      key: 'startMonth',
      key2: 'endMonth'
    },
    {
      type: 'custom',
      label: '自定义',
      key: 'sgInput',
      slotName: 'sgInput',
      class: 'wd100'
    }
  ])
  
  const formRules = ref<Record<string, any>>({
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
    color: {
      required: true
    },
    step: {
      required: true
    },
    open: {
      required: true
    },
    fs: {
      required: true
    },
    credential: {
      required: true
    },
    imgUrl: {
      required: true
    },
    areaCode: {
      required: true
    },
    deptId: {
      required: true
    },
    lng: {
      required: true
    },
    content: {
      required: true
    },
    icon: {
      required: true
    },
    mimeType: {
      required: true,
      trigger: 'blur'
    },
    school: {
      required: true
    }
  })
  
  const onItemChange = (data: any) => {
    console.log(data)
  }
  const onSubmit = (data: any) => {
    console.log(data)
  }
<\/script>

<template>
    <em-form
      :form-data="formData"
      :formRules="formRules"
      labelWidth="100px"
      show-inline-ok-bt
      show-inline-clear-bt
      @on-submit="onSubmit"
      @on-item-change="onItemChange"
      >
      <template #sgInput="{ dataGroup }">
        <el-input v-model="dataGroup.sgInput" />
      </template>
  </em-form>
</template>
 `,T={class:"container"},D=h({name:"EmFormEx",__name:"emFormEx",setup(V){const n=q(),s=d([{type:"txt",label:"信息",val:"这是一条占位信息"},{type:"input",label:"名称",key:"name",defaultVal:"121"},{type:"inputNumber",label:"金额",key:"price"},{type:"select",label:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}]},{type:"radio",key:"sex",label:"性别",options:[{label:"男",val:1},{label:"女",val:0}]},{type:"checkbox",label:"证书",key:"credential",checkboxType:"button",options:[{label:"英语四级",val:"CET4"},{label:"英语六级",val:"CET6",disabled:!0},{label:"C1驾照",val:"C1",disabled:!0}],show:{key:"education",val:[3,4,5]}},{type:"selectInput",label:"学校",key:"school",defaultKey:"gz",defaultVal:"52",data:[{val:"xx",label:"小学"},{val:"cz",label:"初中"},{val:"gz",label:"高中"},{val:"dx",label:"大学"}]},{type:"upload",label:"文件上传",key:"imgUrl",autoUpload:!1},{type:"colorPicker",label:"颜色",key:"color",showAlpha:!0},{type:"selectIcon",label:"图标",key:"icon",defaultVal:"lock",info:"选择图标选标选择图标选择图标选择图标选择图标",infoColor:"#333"},{type:"switch",label:"开关",key:"open"},{type:"slider",label:"滑动",key:"step"},{type:"rate",label:"分数",key:"fs"},{type:"area",label:"行政区域",key:"areaCode",key2:"areaName"},{type:"cascader",label:"部门",url:n.serverUrl+"/dept",key:"deptId",key2:"deptName"},{type:"select",label:"品牌",key:"brandId",asyncOption:!0,optionUrl:n.serverUrl+"/brand",optionLabel:"name",optionVal:"id"},{type:"tableSelect",label:"文档类型",key:"mimeType",multiple:!0,url:n.serverUrl+"/bt-table-page",searchForm:[{type:"input",key:"name",label:"商品名称"}],columns:[{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"}]},{type:"bdMap",label:"位置",key:"lng",key2:"lat",key3:"address"},{type:"textarea",label:"备注",key:"remark"},{type:"editor",label:"内容",key:"content"},{type:"date",dateType:"datetime",label:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",label:"日期区间",key:"startDate",key2:"endDate"},{type:"date",dateType:"monthrange",label:"月份区间",key:"startMonth",key2:"endMonth"},{type:"custom",label:"自定义",key:"sgInput",slotName:"sgInput",class:"wd100"}]),y=d({name:{required:!0},price:{required:!0},education:{required:!0},sex:{required:!0},color:{required:!0},step:{required:!0},open:{required:!0},fs:{required:!0},credential:{required:!0},imgUrl:{required:!0},areaCode:{required:!0},deptId:{required:!0},lng:{required:!0},content:{required:!0},icon:{required:!0},mimeType:{required:!0,trigger:"blur"},school:{required:!0}}),u=d({}),b=l=>{console.log(l)},c=l=>{u.value=l,console.log(l)};return(l,a)=>{const m=r("el-input"),k=r("el-divider"),v=r("json-viewer"),f=r("el-card");return x(),I("div",T,[e(f,null,{header:o(()=>a[0]||(a[0]=[p("div",null,"综合表单",-1)])),footer:o(()=>[e(_,{code:t(w)},null,8,["code"])]),default:o(()=>[e(t(C),{"form-data":t(s),formRules:t(y),labelWidth:"100px","show-inline-ok-bt":"","show-inline-clear-bt":"",onOnSubmit:c,onOnItemChange:b},{sgInput:o(({dataGroup:i})=>[e(m,{modelValue:i.sgInput,"onUpdate:modelValue":g=>i.sgInput=g},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["form-data","formRules"]),e(k),a[1]||(a[1]=p("div",{class:"json-title"},"提交数据:",-1)),e(v,{value:t(u),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{D as default};
