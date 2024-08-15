export const code1: string = `
<script lang="ts" setup>
let value1 = ref<any>(null)
let name1 = ref<any>({})
let data = ref<any[]>([
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
])
const onNameChange1 = (data: any) => {
  console.log(data)
  name1.value = {val: value1, name: data}
}
const onValChange = (data: any) => {
  console.log(data)
}
</script>

<template>
 <em-cascader v-model="value1" :data="data" @on-val-change="onValChange" @on-name-change="onNameChange1" />
</template>
`

export const code2: string = `
<script lang="ts" setup>
let value2 = ref<any>(null)
let name2 = ref<any>({})
const onNameChange2 = (data: any) => {
console.log(data)
    name2.value = {val: value2, name: data}
}

const onValChange = (data: any) => {
  console.log(data)
}
</script>

<template>
 <em-cascader v-model="value2" url="/dept" @on-val-change="onValChange" @on-name-change="onNameChange2" />
</template>
`
