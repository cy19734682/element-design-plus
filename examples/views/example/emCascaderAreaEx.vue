<script lang="ts" setup>
	import { EmCascaderArea } from '../../../src'

	defineOptions({
		name: 'emCascaderAreaEx'
	})
	let value = ref<string[]>(['15', '1501', '150104'])
	let name = ref<string>('')
	const onValChange = (data: any) => {
		console.log(data)
	}
	const onNameChange = (data: any) => {
		console.log(data)
		name.value = data
	}
</script>
<template>
	<div class="container">
		<h2>省市区选择</h2>
		<em-cascader-area v-model="value" :level="2" @on-val-change="onValChange" @on-name-change="onNameChange" />
		<div>{{ value }}</div>
		<div>{{ name }}</div>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
	}
</style>
