import{d as u,e as s,f as o,o as k,g as v,h as e,w as n,i as l,v as _,q as f,n as d}from"./index-a3559510.js";import{s as h}from"./sourceCodeView-f6a010a7.js";const g=`
<script lang="ts" setup>
  let value = ref<Record<string, any>>({
    name: '张三',
    price: 23,
    education: 1,
    sex: 1,
    color: '#333333',
    remark: '211111',
    datetime: '2012-01-02',
    startDate: ['2012-01-02', '2012-01-03'],
    sgInput: '212123'
  })
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
            val: 'CET6'
          },
          {
            label: 'C1驾照',
            val: 'C1',
            disabled: true
          }
        ]
      },
      {
        type: 'switch',
        label: '开关',
        key: 'open'
      },
      {
        type: 'slider',
        label: '开关',
        key: 'step'
      },
      {
        type: 'rate',
        label: '分数',
        key: 'fs'
      },
      {
        type: 'cascader',
        label: '部门',
        key: 'deptId',
        data: [
          {
            id: 1,
            name: '爷爷',
            children: [
              {
                id: 2,
                name: '父亲'
              },
              {
                id: 3,
                name: '叔叔'
              }
            ]
          }
        ]
      },
      {
        type: 'colorPicker',
        label: '颜色',
        key: 'color',
        showAlpha: true
      },
      {
        type: 'textarea',
        label: '备注',
        key: 'remark'
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
        key: 'startDate'
      },
      {
        type: 'date',
        dateType: 'monthrange',
        label: '月份区间',
        key: 'startMonth'
      },
      {
        type: 'custom',
        label: '自定义',
        key: 'sgInput',
        slotName: 'sgInput'
      }
    ])
<\/script>

<template>
    <em-static-form :form-data="formData" v-model="value">
        <template #sgInput="{ dataGroup }">
          <el-input v-model="dataGroup.sgInput" />
        </template>
      </em-static-form>
</template>
 `,x={class:"container"},I=d("div",null,"静态表单",-1),C=d("div",{class:"json-title"},"表单数据:",-1),E=u({name:"emStaticFormEx",__name:"emStaticFormEx",setup(T){let a=s({name:"张三",price:23,education:1,sex:1,color:"#333333",remark:"211111",datetime:"2012-01-02",startDate:["2012-01-02","2012-01-03"],sgInput:"212123"});const r=s([{type:"txt",label:"信息",val:"这是一条占位信息"},{type:"input",label:"名称",key:"name",defaultVal:"121"},{type:"inputNumber",label:"金额",key:"price"},{type:"select",label:"学历",key:"education",options:[{label:"高中",val:1},{label:"专科",val:2},{label:"本科",val:3},{label:"研究生",val:4},{label:"博士",val:5,disabled:!0}]},{type:"radio",key:"sex",label:"性别",options:[{label:"男",val:1},{label:"女",val:0}]},{type:"checkbox",label:"证书",key:"credential",checkboxType:"button",options:[{label:"英语四级",val:"CET4"},{label:"英语六级",val:"CET6"},{label:"C1驾照",val:"C1",disabled:!0}]},{type:"switch",label:"开关",key:"open"},{type:"slider",label:"开关",key:"step"},{type:"rate",label:"分数",key:"fs"},{type:"cascader",label:"部门",key:"deptId",data:[{id:1,name:"爷爷",children:[{id:2,name:"父亲"},{id:3,name:"叔叔"}]}]},{type:"colorPicker",label:"颜色",key:"color",showAlpha:!0},{type:"textarea",label:"备注",key:"remark"},{type:"date",dateType:"datetime",label:"日期时间",key:"datetime"},{type:"date",dateType:"daterange",label:"日期区间",key:"startDate"},{type:"date",dateType:"monthrange",label:"月份区间",key:"startMonth"},{type:"custom",label:"自定义",key:"sgInput",slotName:"sgInput"}]);return(V,p)=>{const i=o("el-input"),c=o("el-divider"),m=o("json-viewer"),y=o("el-card");return k(),v("div",x,[e(y,null,{header:n(()=>[I]),footer:n(()=>[e(h,{code:l(g)},null,8,["code"])]),default:n(()=>[e(l(_),{"form-data":l(r),modelValue:l(a),"onUpdate:modelValue":p[0]||(p[0]=t=>f(a)?a.value=t:a=t)},{sgInput:n(({dataGroup:t})=>[e(i,{modelValue:t.sgInput,"onUpdate:modelValue":b=>t.sgInput=b},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["form-data","modelValue"]),e(c),C,e(m,{value:l(a),theme:"my-awesome-json-theme",expanded:"",copyable:""},null,8,["value"])]),_:1})])}}});export{E as default};
