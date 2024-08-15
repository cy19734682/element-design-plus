export const code1: string = `
<script lang="ts" setup>
let value = ref<Record<string, any>>({
  lng: 102.554865,
  lat: 26.567981
})

const onValChange = (data: Record<string, any>) => {
  console.log(data)
}
</script>
<template>
<em-baidu-map v-model="value" @update:modelValue="onValChange" />
</template>
`
