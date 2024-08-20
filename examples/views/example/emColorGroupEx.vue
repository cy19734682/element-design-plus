<script lang="ts" setup>
	import { EmColorGroup } from '../../../src'
	import { code1 } from '@/codeJson/emColorGroupEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'
	import { cloneDeep } from 'lodash-es'

	defineOptions({
		name: 'EmColorGroupEx'
	})

	const colorsVal = ref<string[]>(['#ccc', '#ccc'])
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>颜色组</div>
			</template>
			<em-color-group v-model="colorsVal" is-add-del />
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="cloneDeep(colorsVal)" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
	</div>
</template>
