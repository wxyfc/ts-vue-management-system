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
<style lang="scss">
  /deep/ .el-menu--horizontal {
    @include _background("_theme-color");
    /deep/ .el-menu--popup {
      @include _background("_theme-color");
    }
  }
</style>

<style scoped lang="scss">
  .el-menu {
    @include _background("_theme-color");
    @include _color("_color");
    border-color: transparent;
    /deep/ .el-submenu__title {
      &:hover, &:focus {
        @include _background("_vice-color");
        @include _color("_theme-color");
      }
    }
  }
</style>
