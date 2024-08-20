export const code1: string = `
<script lang="ts" setup>
let deptId = ref<any[]>([82])
const searchForm = ref<any[]>([
  {
    type: 'input',
    key: 'name',
    label: '商品名称'
  }
])
const columns = ref<any[]>([
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
])

const onDataChange = (d: any) => {
  console.log(d)
}
const changeRow = (d: any) => {
  console.log(d)
}
</script>

<template>
  <em-table-select
    ref="tableSelectRef"
    v-model="deptId"
    :searchForm="searchForm"
    :columns="columns"
    multiple
    :url="store.serverUrl + '/bt-table-page'"
    @on-data-change="onDataChange"
    @changeRow="changeRow"
  />
</template>
`
