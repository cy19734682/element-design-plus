<script lang="ts" setup>
	import { EmIconSelect } from '../../../src'
	import sourceCodeView from '@/components/sourceCodeView.vue'
	import { code1 } from '@/codeJson/emIconSelectEx'

	defineOptions({
		name: 'EmIconSelectEx'
	})
	let icon = ref<string>('')
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>图标选择</div>
			</template>
			<em-icon-select v-model="icon" />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
	</div>
</template>
