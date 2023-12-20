<script lang="ts" setup>
	import * as echarts from 'echarts'
  import {debounce} from 'lodash-es'

  defineOptions({
    name: 'EmCharts'
  })

	const props = withDefaults(
		defineProps<{
			id?: string //元素id
			className?: string //元素class
			width?: string //宽度
			height?: string //高度
			config?: Record<string, any> //配置项
		}>(),
		{
			id: 'chart',
			className: 'chart',
			width: '200px',
			height: '200px',
			config: () => ({})
		}
	)

	let chartInstance: any

	watch(
		() => props.config,
		(after: any) => {
			if (after) {
				initChart()
			}
		},
		{
			deep: true
		}
	)

	const initChart = () => {
		chartInstance = echarts.init(document.getElementById(props.id) as HTMLElement)
		let option = {}
		if (props.config) {
			option = props.config
		}
		chartInstance.setOption(option)
	}

  let $_sidebarElm: Element
  const $_resizeHandler = debounce(() => {
    chartInstance?.resize()
  }, 100)

  const $_sidebarResizeHandler = (e:any) => {
    if (e.propertyName === 'width') {
      $_resizeHandler()
    }
  }

  const initListener = () => {
    window.addEventListener('resize', $_resizeHandler)
    $_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    $_sidebarElm && $_sidebarElm.addEventListener('transitionend', $_sidebarResizeHandler)
  }

  const destroyListener = () => {
    window.removeEventListener('resize', $_resizeHandler)
    $_sidebarElm && $_sidebarElm.removeEventListener('transitionend', $_sidebarResizeHandler)
  }

  onMounted(() => {
    initListener()
  })

	onUnmounted(() => {
		if (!chartInstance) {
			return
		}
		chartInstance.dispose()
		chartInstance = null
    destroyListener()
	})
</script>
<template>
	<div :id="id" ref="chartRef" :class="className" :style="{ height: height, width: width }" />
</template>
