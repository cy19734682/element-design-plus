<script setup lang="ts">
	import { ArrowRight, ArrowLeft } from '@element-plus/icons-vue'
	import mds_c from '../../src/components/md'
	import MarkdownIt from 'markdown-it'
	import MarkdownItAnchor from 'markdown-it-anchor'

	const md = new MarkdownIt().use(MarkdownItAnchor)

	// 是否显示文档说明
	const showRightBar = ref(true)
	const props = withDefaults(defineProps<{ routeNow?: string; color?: string }>(), {
		color: '#2d8cf0',
		routeNow: ''
	})
	const route = useRoute()
	const routeName = computed(() => {
		return String(route?.meta?.mdName)
	})
	const mdContent = computed(() => (props.routeNow && mds_c[props.routeNow]) || mds_c[routeName.value])
</script>
<template>
	<div class="app-markdown">
		<div class="markdown-body" v-show="showRightBar">
			<div class="md-content" v-html="md.render(mdContent || '')"></div>
		</div>
		<div class="markdown-btn" :class="{ none: !showRightBar }" @click="showRightBar = !showRightBar">
			<el-icon size="24" color="#fff" v-if="showRightBar"><ArrowRight /></el-icon>
			<el-icon size="24" color="#fff" v-else><ArrowLeft /></el-icon>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.app-markdown {
    height: 100%;
		position: relative;
		.markdown-body {
      width: 600px;
      padding: 10px;
      height: 100%;
      position: relative;
			border-left: 1px solid #dcdfe6;
      overflow-y: auto;
      font-size: 14px;
		}
		.markdown-btn {
			position: absolute;
			z-index: 1000;
			top: 50%;
			opacity: 0.8;
			cursor: pointer;
			background: #2c3e50;
      border-radius: 0 10px 10px 0;
			&.none {
				left: -24px;
        border-radius: 10px 0 0 10px;
			}
		}
	}
</style>
