<script lang="ts" setup>
	import { EmIconSelect } from '../../../src'

	defineOptions({
		name: 'EmIconSelectEx'
	})
	let icon = ref<string>('')
</script>
<template>
	<div class="container">
		<h2>自定义图标</h2>
		<div class="form-box">
			<em-icon-select v-model="icon" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
		overflow-y: auto;
		height: 100%;
	}
</style>
