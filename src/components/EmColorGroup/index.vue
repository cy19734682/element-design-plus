<script lang="ts" setup>
  import { ElColorPicker } from 'element-plus'
  defineOptions({
    name: 'EmColorGroup'
  })
	const emit = defineEmits(['update:modelValue'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string[] //绑定值
			showAlpha?: boolean //是否显示透明色
			remain?: number //剩余几个时不可删除
			isAddDel?: boolean //是否可以新增和删除
		}>(),
		{
			modelValue: () => [],
			showAlpha: false,
			remain: 0,
			isAddDel: true
		}
	)

	const colorObj = ref<Record<string, any>>({})
	const valueT = computed({
		get() {
			return props.modelValue
		},
		set(val) {
			emit('update:modelValue', val)
		}
	})
	watch(
		() => valueT.value,
		() => {
			colorObj.value = {}
			valueT.value.forEach((e: string, index: number) => {
				colorObj.value['val' + index] = e
			})
		},
		{
			deep: true,
			immediate: true
		}
	)

	/**
	 * 颜色选择响应
	 * @param color
	 * @param index
	 */
	const changeHandle = (color: any, index: number) => {
		valueT.value[index] = color
	}
	/**
	 * 颜色添加数据
	 * @param index
	 */
	const addColor = (index?: number) => {
		if (index || index === 0) {
			valueT.value.splice(index, 0, '#fff')
		} else {
			valueT.value.push('#fff')
		}
	}
	/**
	 * 颜色移除数据
	 * @param index
	 */
	const removeColor = (index: number) => {
		if (valueT.value && valueT.value.length > props.remain) {
			valueT.value.splice(index, 1)
		}
	}
</script>
<template>
	<div class="em-colors-box">
		<template v-if="valueT && valueT.length > 0">
			<div class="colors-item" v-for="(item, index) in valueT" :key="index + item">
				<div class="colors-item-bar" v-if="isAddDel">
					<div class="colors-item-tool" @click="removeColor(index)">-</div>
					<div class="colors-item-tool" @click="addColor(index)">+</div>
				</div>
				<el-color-picker
					size="small"
					v-model="colorObj['val' + index]"
					@change="changeHandle($event, index)"
					:show-alpha="showAlpha"
				/>
			</div>
		</template>
		<div class="colors-item" v-if="isAddDel"><i class="el-icon-plus" @click="addColor()"></i></div>
	</div>
</template>
