<script lang="ts" setup>
	import { ElPopover, ElInput, ElIcon } from 'element-plus'
	import { Search } from '@element-plus/icons-vue'
	import { t } from '../../locale'
	import icons from '../../style/iconfont/iconfont.json'
	import EmIcons from '../EmIcons/index.vue'

	defineOptions({
		name: 'EmIconSelect'
	})

	let localIconList: any[] = []
	if (icons && icons.glyphs) {
		localIconList = icons.glyphs.map((e) => e.font_class)
	}

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string
			data?: any[]
			width?: number
			trigger?: 'contextmenu' | 'focus' | 'click' | 'hover'
			placeholder?: string
			background?: string
			color?: string
			disabled?: boolean
		}>(),
		{
			width: 450,
			trigger: 'click',
			background: '#FFF',
			color: '#606266',
			disabled: false
		}
	)

	let searchName = ref<string>('')
	let iconList = ref<any[]>(props.data || localIconList || [])

	const valueT = computed({
		get() {
			return props.modelValue
		},
		set(v: any) {
			emit('update:modelValue', v)
		}
	})
	const curIcon = computed(() => {
		if (props.data) {
			let data = iconList.value.find((e) => e.name === valueT.value)
			return data?.icon
		}
	})
	const listStyle = computed(() => ({
		backgroundColor: props.background,
		color: props.color
	}))

	/**
	 * 搜索过滤图标列表
	 */
	const filterIcons = () => {
		iconList.value = props.data || localIconList || []
		if (searchName.value) {
			if (props.data) {
				iconList.value = iconList.value.filter((item) => item.name.includes(searchName.value))
			} else {
				iconList.value = iconList.value.filter((item) => item.includes(searchName.value))
			}
		}
	}
	/**
	 * 选择图标
	 * @param item
	 */
	const selectedIcon = (item: Record<string, any>) => {
		if (props.data) {
			valueT.value = item.name
		} else {
			valueT.value = item
		}
		document.body.click()
	}
	/**
	 * 关闭时重置搜索框
	 */
	const reset = () => {
		searchName.value = ''
		iconList.value = props.data || localIconList || []
	}
</script>
<template>
	<el-popover placement="bottom-start" :width="width" :trigger="trigger" :disabled="disabled" @hide="reset">
		<div class="em-icon-body">
			<el-input
				v-model="searchName"
				style="position: relative"
				clearable
				:placeholder="t('em.pInputIcon')"
				@clear="filterIcons"
				@input.native="filterIcons"
				:suffix-icon="Search"
			/>
			<div class="icon-list" :style="listStyle">
				<div v-for="(item, index) in iconList" :key="index" @click="selectedIcon(item)">
					<template v-if="props.data">
						<img :src="item.icon" style="height: 30px; width: 16px" />
						<span style="margin-left: 2px">{{ item.name }}</span>
					</template>
					<template v-else>
						<em-icons :icon-class="item" style="height: 30px; width: 16px" />
						<span style="margin-left: 2px">{{ item }}</span>
					</template>
				</div>
			</div>
		</div>
		<template #reference>
			<el-input v-model="valueT" :placeholder="placeholder || t('em.cSelectIcon')" clearable :disabled="disabled">
				<template #prefix>
					<img v-if="valueT && props.data" :src="curIcon" style="height: 30px; width: 16px" :style="listStyle" />
					<em-icons v-else-if="valueT" :icon-class="valueT" class="el-input__icon" style="height: 30px; width: 16px" />
					<el-icon v-else class="el-input__icon">
						<Search />
					</el-icon>
				</template>
			</el-input>
		</template>
	</el-popover>
</template>
