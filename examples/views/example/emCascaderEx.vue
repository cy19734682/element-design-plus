<script lang="ts" setup>
	import { EmCascader } from '../../../src'

	defineOptions({
		name: 'EmCascaderEx'
	})
	let value = ref<any>(null)
	let name = ref<string>('')
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
		<h2>自定义级联选择</h2>
		<em-cascader v-model="value" :data="data" @on-val-change="onValChange" @on-name-change="onNameChange" />
		<div>{{ value }}</div>
		<div>{{ name }}</div>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
	}
</style>
