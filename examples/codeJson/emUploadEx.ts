export const code1: string = `
<script lang="ts" setup>
let id1 = ref<string>('666963bb096132e67ebe120d.png')

 const onfileChange = (data: any) => {
  console.log(data)
 }
</script>

<template>
   <em-upload
    v-model="id1"
    fileName="files"
    listType="picture-card"
    :length="2"
    @update:modelValue="onfileChange"
  />
</template>
  `

export const code2: string = `
<script lang="ts" setup>
  let id2 = ref<any>(null)
  
   const onfileChange = (data: any) => {
    console.log(data)
   }
</script>

<template>
  <em-upload
    v-model="id2"
    :autoUpload="false"
    fileName="files"
    listType="picture-card"
    @update:modelValue="onfileChange"
  />
</template>
  `

export const code3: string = `
<script lang="ts" setup>
let id3 = ref<string>('http://cdn.cy1973.cn/screen-designer/images/material/2024-06/666963bb096132e67ebe120d.png')

 const onfileChange = (data: any) => {
  console.log(data)
 }
</script>

<template>
  <em-upload
    v-model="id3"
    fileName="files"
    listType="picture-card"
    upload-fetch
    @update:modelValue="onfileChange"
  />
</template>
  `
