<script setup lang="ts">
	import appHeader from '../components/appHeader.vue'
  import { useStore } from '@/store/main'
  import zhCn from 'element-plus/es/locale/lang/zh-CN' // 中文包
  import en from 'element-plus/es/locale/lang/en'

  const store = useStore()
  const language = computed(() => (store.lang === "zh-cn" ? zhCn : en));
</script>
<template>
  <el-config-provider :locale="language">
    <section class="app-main">
      <appHeader />
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </section>
  </el-config-provider>
</template>
<style lang="scss" scoped>
	.app-main {
		padding: 30px;
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
    display: flex;
    flex-direction: column;
	}
</style>
