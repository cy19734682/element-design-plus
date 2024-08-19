<script lang="ts" setup>
  import { ElInput } from 'element-plus'
  import { t } from '../../locale'
	import { cloneDeep, isEmpty } from 'lodash-es'
	import { BaiduMap, BmNavigation, BmGeolocation, BmLocalSearch } from 'vue-baidu-map-3x'

  defineOptions({
    name: 'EmBaiduMap'
  })

	const emit = defineEmits(['update:modelValue'])
	const props = withDefaults(
		defineProps<{
			modelValue?: Record<string, any> //绑定值
			width?: string //宽度
			height?: string //高度
			placeholder?: string //占位符
			disabled?: boolean //是否禁用
			ak?: string //百度地址key
		}>(),
		{
			modelValue: () => ({}),
			width: '100%',
			height: '300px',
			disabled: false,
			ak: () => window?._global?.bdAk || ('ak' + Math.floor(Math.random() * 1000000000))
		}
	)

  let Map: any //地图对象
  let keyword = ref<string>('') //搜索关键字
  let zoom = ref<number>(12) //缩放级别
  //默认中心点
  const defaultCenter: Record<string, any> = {
    lng: 106.554865,
    lat: 29.567981
  }

	const valueT = computed({
		get() {
			if (
				!isEmpty(props.modelValue) &&
				(props.modelValue.lng || props.modelValue.lng === 0) &&
				(props.modelValue.lat || props.modelValue.lat === 0)
			) {
				return cloneDeep(props.modelValue)
			}
			if (Map) {
				zoom.value = 12
				Map.clearOverlays() //清除标记点
			}
			return cloneDeep(defaultCenter)
		},
		set(val: any) {
			emit('update:modelValue', cloneDeep(val))
		}
	})

	watch(
		() => props.modelValue,
		(after: any) => {
			//更新地图mark
			if (Map && !isEmpty(after) && (after.lng || after.lng === 0) && (after.lat || after.lat === 0)) {
				Map.clearOverlays() //清除标记点
        const { BMap } = window
				const myMarker = new BMap.Marker(new BMap.Point(after.lng, after.lat))
				Map.addOverlay(myMarker) //添加标记点
				zoom.value = 15
			}
		}
	)

	/**
	 * 地图加载完成
	 * @param BMap
	 * @param map
	 */
	const readyHandler = ({ BMap, map }:any) => {
		if (
			!isEmpty(props.modelValue) &&
			(props.modelValue.lng || props.modelValue.lng === 0) &&
			(props.modelValue.lat || props.modelValue.lat === 0)
		) {
			//默认值不为空才定位
			const myMarker = new BMap.Marker(new BMap.Point(valueT.value.lng, valueT.value.lat))
			map.addOverlay(myMarker)
		}
		Map = map
	}

	/**
	 * 同步缩放比例
	 * @param e
	 */
	const syncCenterAndZoom = (e: any) => {
		zoom.value = e.target.getZoom()
	}

	/**
	 * 地图点击事件
	 * @param e
	 */
	const clickEvent = (e: any) => {
		if (props.disabled) {
			//如果禁用，则直接返回
			return
		}
    const { BMap } = window
		//用所定位的经纬度查找所在地省市街道等信息
		const point = new BMap.Point(e.point.lng, e.point.lat)
		const gc = new BMap.Geocoder()
		gc.getLocation(point, (rs: Record<any, string>) => {
			const locMap = {
				lng: e.point.lng,
				lat: e.point.lat,
				name: rs.address
			}
			zoom.value = 15
			emit('update:modelValue', locMap)
		})
	}

	/**
	 * 搜索值回调
	 * @param e
	 */
	const infohtmlset = (e: any) => {
		const locMap = {
			name: e.address,
			lng: e.point.lng,
			lat: e.point.lat
		}
		emit('update:modelValue', locMap)
		keyword.value = ''
	}

	onUnmounted(() => {
		if (!Map) {
			return
		}
		Map = null
	})
</script>
<template>
	<div class="em-map">
		<div class="searchInput">
			<el-input
				suffix-icon="el-icon-search"
				v-model="keyword"
				:placeholder="placeholder || t('em.button.search')"
				:disabled="disabled"
			/>
		</div>
		<baidu-map
			class="map"
			:center="valueT"
			:zoom="zoom"
			@ready="readyHandler"
			scroll-wheel-zoom
			@click="clickEvent"
			:ak="ak"
			@zoomend="syncCenterAndZoom"
			:style="{ width: width, height: height }"
		>
			<!-- 地图控件位置 -->
			<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" />
			<!-- 定位当前位置 -->
			<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" show-address-bar auto-location />
			<bm-local-search class="em-local-search" :keyword="keyword" auto-viewport @infohtmlset="infohtmlset" />
		</baidu-map>
	</div>
</template>
