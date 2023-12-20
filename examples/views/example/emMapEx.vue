<script lang="ts" setup>
	import { EmBaiduMap } from '../../../src'

	defineOptions({
		name: 'EmMapEx'
	})
	let value = ref<Record<string, any>>({
		lng: 102.554865,
		lat: 26.567981
	})

	const onValChange = (data: Record<string, any>) => {
		console.log(data)
	}
</script>
<template>
	<div class="container">
		<h2>百度地图</h2>
		<em-baidu-map v-model="value" @update:modelValue="onValChange" />
		<div>{{ value }}</div>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
	}
</style>
