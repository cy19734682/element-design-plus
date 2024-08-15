export const code1: string = `
<script lang="ts" setup>
  const onSuccess = (data: any) => {
      console.log(data)
  }
</script>
<template>
  <em-upload-excel :onSuccess="onSuccess" />
</template>
  `
