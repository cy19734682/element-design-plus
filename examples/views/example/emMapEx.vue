<script lang="ts" setup>
	import { EmBaiduMap } from '../../../src'
	import { code1 } from '@/codeJson/emMapEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'

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
		<el-card>
			<template #header>
				<div>百度地图</div>
			</template>
			<em-baidu-map v-model="value" @update:modelValue="onValChange" />
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="value" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
	</div>
</template>
