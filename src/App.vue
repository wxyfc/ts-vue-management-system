<template>
  <div id="app">
    <router-view v-if="isReloadAlive"/>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Vue, Provide } from 'vue-property-decorator'

type RELOAD = () => void;

@Component
export default class App extends Vue {
  isReloadAlive = true
  // @Provide('reload') reload: RELOAD = this.reloadFun
  @Provide() reload: RELOAD = this.reloadFun

  reloadFun () {
    console.log('重新加载页面')
    this.isReloadAlive = false
    this.$nextTick(() => {
      this.isReloadAlive = true
    })
  }
}
</script>
<style scoped lang="scss">
  #app {
  }
</style>
