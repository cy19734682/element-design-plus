export const code1: string = `
<script lang="ts" setup>
let value = ref<string[]>(['15', '1501', '150104'])
let name = ref<string[]>([])
const onValChange = (data: any) => {
  console.log(data)
}
const onNameChange = (data: any) => {
  console.log(data)
  name.value = data
}
</script>

<template>
  <em-cascader-area v-model="value" :level="2" @on-val-change="onValChange" @on-name-change="onNameChange" />
</template>
`
