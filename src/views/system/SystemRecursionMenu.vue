<template>
  <renderless-component>
    <template v-for="menuRouter in menuRouters">
      <renderless-component v-if="isShowMenuFun(menuRouter)" :key="menuRouter.path">
        <el-submenu v-if="isMenuChildrenFun(menuRouter)" :index="menuRouter.path">
          <template slot="title">
            <i :class="isMenuIconFun(menuRouter)"></i>
            <span>{{isMenuTitleFun(menuRouter)}}</span>
          </template>
          <SystemRecursionMenu :menuRouters="menuRouter.children"></SystemRecursionMenu>
        </el-submenu>
        <el-menu-item v-else-if="isMenuChildrenOneFun(menuRouter)" :index="menuRouter.children[0].path">
          <i :class="isMenuIconFun(menuRouter.children[0])"></i>
          <span slot="title">{{isMenuTitleFun(menuRouter.children[0])}}</span>
        </el-menu-item>
        <el-menu-item v-else :index="menuRouter.path">
          <i :class="isMenuIconFun(menuRouter)"></i>
          <span>{{isMenuTitleFun(menuRouter)}}</span>
        </el-menu-item>
      </renderless-component>
    </template>
  </renderless-component>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Mixins, Prop } from 'vue-property-decorator'
import infoMixin from '@mixin/infoMixin.ts'

@Component({
  name: 'SystemRecursionMenu'
})
export default class SystemRecursionMenu extends Mixins(infoMixin) {
  @Prop({
    default: () => {
      return []
    }
  }) private menuRouters

  /*
  * 该路由所对应的菜单是否要显示
  * 路由显示在菜单栏配置方法:
  *       meta:{
  *         views:['menu']
  *       }
  * */
  isShowMenuFun (menu) {
    if (menu.meta && menu.meta.views && menu.meta.views.length && menu.meta.views.includes('menu')) {
      return true
    } else {
      return false
    }
  }

  // 该菜单是否有子菜单
  isMenuChildrenFun (menu) {
    let NUM = process.env.VUE_APP_TEMPLATE_SHOW_CHILDREN_NUM
    if (menu.children && menu.children.length >= (+NUM)) {
      return true
    } else {
      return false
    }
  }

  // 该菜单只有一个子菜单
  isMenuChildrenOneFun (menu) {
    if (menu.children && menu.children.length == 1) {
      let menuItem = menu.children[0]
      if (menuItem.meta && menuItem.meta.views && menuItem.meta.views.length && menuItem.meta.views.includes('menu')) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  // 菜单图标icon处理
  isMenuIconFun (menuItem) {
    return menuItem.meta && menuItem.meta.show && menuItem.meta.show.icon
  }

  // 菜单标题title处理
  isMenuTitleFun (menuItem) {
    return this.$t(`menu.title.${menuItem.meta && menuItem.meta.show && menuItem.meta.show.title}`)
  }

  created () {
  }
}
</script>
<style scoped lang="scss">
  .el-menu {
    @include _background("_theme-color");
    /deep/ .el-menu--popup {
      @include _background("_theme-color");
      @include _color("_color");
    }
    .el-submenu {
      @include _background("_theme-color");
      @include _color("_color");
      .el-menu--inline {
        @include _background("_theme-color");
        .el-menu-item {
          @include _font-size('_title');
          @include _background("_theme-color");
          @include _color("_color");
          &.is-active, &:hover, &:focus {
            @include _background("_vice-color");
            @include _color("_theme-color");
            border-color: transparent;
          }
          &.is-active {
            /*background-clip: content-box*/
          }
        }
      }
      /deep/ .el-submenu__title {
        @include _background("_theme-color");
        @include _color("_color");
        @include _font-size('_title');
        border-color: transparent;
      }
      /deep/ .el-menu--inline {
        @include _background("_theme-color");
        @include _color("_color");
      }
      /deep/ .el-menu--popup {
        @include _background("_theme-color");
        @include _color("_color");
      }
    }
    .el-menu-item {
      @include _background("_theme-color");
      @include _color("_color");
      @include _font-size('_title');
      &.is-active, &:hover, &:focus {
        @include _background("_vice-color");
        @include _color("_theme-color");
        border-color: transparent;
      }
      &.is-active {
        /*background-clip: content-box*/
      }
    }
  }
</style>
