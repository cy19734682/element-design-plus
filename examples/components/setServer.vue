<script setup lang="ts">
	import { useStore } from '@/store/main'

	const store = useStore()

	const serverUrl = computed({
		get() {
			return store.serverUrl
		},
		set(v) {
			store.setServerUrl(v)
		}
	})
</script>
<template>
	<div class="lang">
		<el-radio-group v-model="serverUrl">
			<el-radio size="small" value="/mock">{{ $t('route.localServer') }}</el-radio>
			<el-radio size="small" value="">{{ $t('route.nodeServer') }}</el-radio>
		</el-radio-group>
	</div>
</template>
