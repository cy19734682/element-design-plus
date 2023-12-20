<script lang="ts" setup>
	import { EmIcons } from '../../../src'

	defineOptions({
		name: 'EmIconEx'
	})
</script>
<template>
	<div class="container">
		<h2>自定义图标</h2>
		<div class="form-box">
			<em-icons icon-class="download" />
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
