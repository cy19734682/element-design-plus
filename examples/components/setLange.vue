<script setup lang="ts">
  import { useStore } from '@/store/main'

  const { locale } = useI18n()
  const store = useStore()

  const language = computed({
    get(){
      return locale.value
    },
    set(v){
      locale.value = v
      store.setLang(v)
    }
  })
</script>
<style lang="scss" scoped>
  .lang{
    padding: 20px 0;
    text-align: right;
  }
</style>
<template>
  <div class="lang">
    <el-radio-group v-model="language">
      <el-radio label="zh-cn">中文</el-radio>
      <el-radio label="en">English</el-radio>
    </el-radio-group>
  </div>
</template>
