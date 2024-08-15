export const code1: string = `
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
</script>

<template>
  <em-form-group ref="formGroupRef1" :form-data="formData" btnLoading @on-submit="onSubmit1" />
</template>
`

export const code2: string = `
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
</script>

<template>
	<em-form-group ref="formGroupRef2" :form-data="formData" :form-rules="formRules" btnLoading @on-submit="onSubmit2" />
</template>
 `

export const code3: string = `
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

</script>

<template>
	<em-form-group ref="formGroupRef3" labelWidth="100px" :form-data="formData" btnLoading @on-submit="onSubmit3" />
</template>
 `

export const code4: string = `
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
</script>

<template>
	<em-form-group ref="formGroupRef4" :form-data="formData" btnLoading @on-submit="onSubmit4" />
</template>
 `
