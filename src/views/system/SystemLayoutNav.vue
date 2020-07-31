<template>
  <renderless-component>
    <renderless-component v-for="(value,key) in tagRouters" :key="key">
      <div :class="handlerTagShowCloseFun(key)" @click="handlerTagNext(key)">
        <EleIcon :i-class="value&&value.icon"></EleIcon>
        {{ $t(`menu.title.${value&&value.title}`) }}
        <EleIcon v-if="$route.path!=key" class="ele-icon-hide" i-class="el-icon-circle-close" :content="$t('navbar.title.close')" @click="tagCloseHandlerFun(key)"></EleIcon>
      </div>
    </renderless-component>
  </renderless-component>
</template>
<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Mixins, Watch } from 'vue-property-decorator'
import { setLayout, setFont, setTheme } from '@function/projectActivity'
import { RouteConfig } from 'vue-router'
import infoMixin from '@mixin/infoMixin'

@Component({
  components: {}
})
export default class SystemLayoutNav extends Mixins(infoMixin) {
  tagRouters: object = {}

  @Watch('$route', { immediate: true, deep: true })
  onRouteChanged (menu: RouteConfig) {
    if (menu.meta && menu.meta.views && menu.meta.views.length && menu.meta.views.includes('tag')) {
      this.$set(this.tagRouters, menu.path, menu.meta.show)
    }
  }

  // 处理tag标签当前显示的样式
  handlerTagShowCloseFun (path) {
    return ['system-layout-nav', { 'system-layout-nav-disabled-close': Object.keys(this.tagRouters).length == 1 }, { 'system-layout-nav-is-activity': path == this.$route.path }]
  }

  // tag标签关闭事件处理
  tagCloseHandlerFun (p) {
    this.$delete(this.tagRouters, p)
    if (p == this.$route.path) {
      let routerPaths = this.JSONCopy(Object.keys(this.tagRouters))
      let path = routerPaths[routerPaths.length - 1]
      this.$router.replace({ path })
    }
  }

  // tag点击跳转路由
  handlerTagNext (path) {
    if (path !== this.$route.path) {
      this.$router.push(path)
    }
  }

  // created () {
  // }
}
</script>
<style scoped lang="scss">
  .system-layout-nav {
    display: inline-flex;
    align-items: center;
    @include _font-size('_title');
    @include _border-box-shadow;
    @include _background("_theme-color");
    @include _color("_color");
    padding: 0 12px;
    margin-right: 10px;
    cursor: pointer;
    .ele-icon-hide {
      display: none;
    }
    &:hover {
      .ele-icon-hide {
        display: inline-block;
      }
    }
  }

  .system-layout-nav-is-activity {
    @include _background("_vice-color");
    @include _color("_theme-color");
    cursor: no-drop;
    /*pointer-events: none;*/
  }

  .system-layout-nav-disabled-close {
    &:last-child {
      .ele-icon-hide {
        display: none;
      }
    }
  }
</style>
