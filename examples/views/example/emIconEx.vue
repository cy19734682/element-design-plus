<script lang="ts" setup>
	import { EmIcons } from '../../../src'
	import { code1 } from '@/codeJson/emIconEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'

	defineOptions({
		name: 'EmIconEx'
	})
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>自定义图标</div>
			</template>
			<el-space>
				<em-icons icon-class="edit" />
				<em-icons icon-class="excel" />
				<em-icons icon-class="international" />
				<em-icons icon-class="download" />
			</el-space>
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
	</div>
</template>
