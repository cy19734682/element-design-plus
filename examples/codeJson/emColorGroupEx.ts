export const code1: string = `
<script lang="ts" setup>
 const colorsVal = ref<string[]>(['#ccc', '#ccc'])
</script>

<template>
 <em-color-group v-model="colorsVal" is-add-del />
</template>
`