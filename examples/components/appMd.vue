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
	<div class="app-markdown" :class="{ show: showRightBar }">
		<div class="markdown-body">
			<div class="md-content" v-html="md.render(mdContent || '')"></div>
		</div>
		<div class="markdown-btn" :class="{ none: !showRightBar }" @click="showRightBar = !showRightBar">
			<el-icon size="14" v-if="showRightBar"><ArrowRight /></el-icon>
			<el-icon size="14" v-else><ArrowLeft /></el-icon>
		</div>
	</div>
</template>

<style lang="scss">
  .app-markdown {
    .markdown-body {
      table {
        tr{
          background-color: var(--el-fill-color-blank);
          &:nth-child(2n){
            background: var(--el-fill-color-lighter);
          }
        }
      }
    }
  }
</style>
<style lang="scss" scoped>
	.app-markdown {
		width: 0;
		height: 100%;
		position: relative;
		transition: all 0.2s;

		&.show {
			width: 600px;
		}

		.markdown-body {
			padding: 10px;
			width: 600px;
			height: 100%;
			position: relative;
      background-color: var(--el-fill-color-blank);
			border-left: 1px solid var(--el-border-color-light);
      color: var(--el-text-color-primary);
			overflow-y: auto;
			font-size: 14px;
      table tr{
        background-color: var(--el-bg-color-overlay);
      }
		}
		.markdown-btn {
			position: absolute;
			z-index: 1000;
			top: 40%;
			left: -12px;
			cursor: pointer;
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
      background-color: var(--el-bg-color-overlay);
      border: 1px solid var(--el-border-color-light);
			box-shadow: 0 4px 10px #0000001a;
			transition: all 0.15s;
			border-radius: 50%;
			&:hover {
				transform: scale(1.1);
			}
			&.none {
				left: -24px;
			}
		}
	}
</style>
