<script lang="ts" setup>
  defineOptions({
    name: 'EmIcons'
  })

	const props = withDefaults(
		defineProps<{
			iconClass: string
			className?: string
		}>(),
		{
			className: ''
		}
	)
	const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.iconClass))
	const iconName = computed(() => `#em-icon-${props.iconClass}`)
	const svgClass = computed(() => (props.className ? 'em-icon ' + props.className : 'em-icon'))
	const styleExternalIcon = computed(() => ({
		mask: `url(${props.iconClass}) no-repeat 50% 50%`,
		'-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
	}))
</script>

<template>
	<div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-bind="$attrs" />
	<svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
		<use :xlink:href="iconName" />
	</svg>
</template>
