<script setup lang="ts">
	import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'

	const props = withDefaults(
		defineProps<{
			code?: string
		}>(),
		{
			code: ''
		}
	)

	const show = ref<boolean>(false)
</script>
<template>
	<div class="source-container">
		<div v-show="show">
			<highlightjs language="javascript" :code="props.code"></highlightjs>
		</div>
		<div class="example-control">
			<span v-show="!show" @click="show = true"
				><el-icon><ArrowDown /></el-icon>查看源代码</span
			>
			<span v-show="show" @click="show = false"
				><el-icon><ArrowUp /></el-icon>隐藏源代码</span
			>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.example-control {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
    color: #909399;
		&:hover {
			color: #409eff;
		}
		span {
			font-size: 14px;
      i{
        margin-right: 10px;
      }
		}
	}
</style>
