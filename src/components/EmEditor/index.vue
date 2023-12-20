<script lang="ts" setup>
	import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  import { t } from '../../locale'

  defineOptions({
    name: 'EmEditor'
  })

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string //绑定值
			toolbarConfig?: Record<string, any> //工具栏配置参数
			editorConfig?: Record<string, any> //文本框配置参数
			mode?: 'default' | 'simple' //模式
			height?: string | number //高度
			placeholder?: string //占位符
			disabled?: boolean //是否禁用
		}>(),
		{
			modelValue: '<p></p>',
			toolbarConfig: () => ({}),
			editorConfig: () => ({}),
			mode: 'default',
			height: '300px',
			placeholder: '',
			disabled: false
		}
	)

	let firstLoad = ref<boolean>(false) //是否是首次加载
	const _editor = shallowRef<any>()
	const valueT = computed({
		get() {
			return props.modelValue
		},
		set(v: any) {
      //由于初始化会给绑定的值赋值，然后会触发表单的校验，加个是否初始化的标识
			if (firstLoad.value || v === '<p><br></p>') {
				emit('update:modelValue', _editor.value.isEmpty() ? '' : v)
			}
			firstLoad.value = true
		}
	})
	const toolbarConfigT = computed(() => Object.assign({}, props.toolbarConfig))
	const editorConfigT = computed(() =>
		Object.assign(
			{
				autoFocus: false,
				placeholder: props.placeholder || t('em.pInput'),
				insertKeys: {
					index: 31,
					keys: ['previewX']
				}
			},
			props.editorConfig
		)
	)

	watch(
		() => props.disabled,
		(a: any) => {
			if (a) {
				_editor.value.disable()
			} else {
				_editor.value.enable()
			}
		}
	)

	function onCreated(d: any) {
		_editor.value = d
	}

	onBeforeUnmount(() => {
		if (!_editor.value) {
			return
		}
		_editor.value.destroy()
	})
</script>
<template>
	<div class="em-editor">
		<Toolbar
			class="editor-pro-toolbar"
			:editor="_editor"
			:defaultConfig="toolbarConfigT"
			:mode="mode"
			v-show="!disabled"
		/>
		<Editor
			class="editor-pro-editor"
			v-model="valueT"
			:defaultConfig="editorConfigT"
			:mode="mode"
			@onCreated="onCreated"
			:style="{ height: height }"
		/>
	</div>
</template>
