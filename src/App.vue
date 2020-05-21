<template>
  <div id="app">
    <router-view v-if="isReloadAlive"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

interface RELOAD {
  (): void;
}

@Component
export default class App extends Vue {
  isReloadAlive = true
  // @Provide('reload') reload: RELOAD = this.reloadFun
  @Provide() reload: RELOAD = this.reloadFun

  reloadFun () {
    this.isReloadAlive = false
    console.log(123)
    this.$nextTick(() => {
      this.isReloadAlive = true
    })
  }

  // created () {
  // }
}
</script>
<style scoped lang="scss">
  #app {
  }
</style>
