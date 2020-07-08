<template>
  <div class="system-layout-aside-main">
    <el-menu :default-active="$route.path" :mode="systemInfo.elementNavMenu" router :unique-opened="asideMenuUnique">
      <SystemRecursionMenu :menuRouters="menuRouters"></SystemRecursionMenu>
    </el-menu>
    <renderless-component v-if="systemInfo.elementNavMenu=='vertical'">
      <div class="system-layout-aside-setting">
        <EleIcon i-class="el-icon-setting" :content="$t('menu.setting.adjust menu mode')" @click="menuDrawerVisible = true"></EleIcon>
      </div>
      <el-drawer :visible.sync="menuDrawerVisible" direction="btt" :modal-append-to-body="false" :withHeader="false" size="80px">
        <div class="system-layout-aside-drawer-content">
          <div class="system-layout-aside-drawer-item">
            {{ $t('menu.setting.unique-opened') }}
            <el-switch v-model="asideMenuUnique"></el-switch>
          </div>
        </div>
      </el-drawer>
    </renderless-component>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Mixins } from 'vue-property-decorator'
import infoMixin from '@mixin/infoMixin'

@Component({
  components: {
    SystemRecursionMenu: () => import('./SystemRecursionMenu'),
    EleIcon: () => import('@components/EleIcon.vue'),
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

  menuDrawerVisible = false
  asideMenuUnique = false

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
    /deep/ .is-active {
      border-color: transparent;
    }
  }
</style>

<style scoped lang="scss">
  .system-layout-aside-main {
    height: 100%;
    width: 100%;
    position: relative;
    .el-drawer__wrapper {
      position: absolute;
    }
    /deep/ .v-modal {
      position: absolute;
    }
    .system-layout-aside-setting {
      display: inline-block;
      position: absolute;
      right: 15px;
      bottom: 15px;
    }
    .system-layout-aside-drawer-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .system-layout-aside-drawer-item {
        display: inline-block;
        text-align: center;
      }
    }
  }

  .el-menu {
    @include _background("_theme-color");
    @include _color("_color");
    border-color: transparent;
    /deep/ .el-submenu__title {
      &:hover, &:focus {
        @include _background("_vice-color");
        @include _color("_theme-color");
        @include _font-size('_title');
      }
    }
  }
</style>
