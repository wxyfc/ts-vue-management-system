<template>
  <el-menu :default-active="$route.path" :mode="systemInfo.elementNavMenu" router>
    <SystemRecursionMenu :menuRouters="menuRouters"></SystemRecursionMenu>
  </el-menu>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Mixins } from 'vue-property-decorator'
import infoMixin from '@mixin/infoMixin'

@Component({
  components: {
    SystemRecursionMenu: () => import('./SystemRecursionMenu'),
  },
  computed: {
    menuRouters: {
      get () {
        return [...this.systemInfo.localRoutes, ...this.systemInfo.asyncRoutes]
      }
    }
  }
})
export default class SystemLayoutAside extends Mixins(infoMixin) {
  created () {
  }
}
</script>
<style scoped lang="scss">
</style>
