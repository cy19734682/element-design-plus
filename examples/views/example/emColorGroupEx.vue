<script lang="ts" setup>
	import { EmColorGroup } from '../../../src'

	defineOptions({
		name: 'EmColorGroupEx'
	})

  const colors = ref<string[]>(['#ccc','#ccc','#ccc','#ccc','#ccc','#ccc'])

</script>
<template>
	<div class="container">
		<h2>颜色组</h2>
    <div style="width: 100px;">
      <em-color-group v-model="colors" is-add-del/>
    </div>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
	}
</style>
