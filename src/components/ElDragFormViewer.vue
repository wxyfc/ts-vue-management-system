<template>
  <div class="el-drag-form-viewer ">
    <el-form :model="formData" label-width="120px" class="el-drag-form-viewer-class">
      <template v-for="(item,index) in viewer">
        <component :key="index" :is="item.component" :label="item.label" :placeholder="item.placeholder" :class="`drag-item-${item.type}`" v-model="formData[item.value]"></component>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import infoMixin from '@/mixin/infoMixin.ts'
import { ElFormInput, ElFormSelect, ElFormDatePicker } from './ElDragFormComponents.ts'


@Component({
  components: {
    ElFormInput,
    ElFormSelect,
    ElFormDatePicker
  },
  // computed: { // vue 原生写法也可以在此使用
  //   menuRouters: {
  //     get () {
  //       return [...this.systemInfo.localRoutes, ...this.systemInfo.asyncRoutes]
  //     }
  //   }
  // }
})
export default class ElDragFormViewer extends Mixins(infoMixin) {
  formData = {}
  @Prop({
    type: Array, // 父组件传递给子组件的数据类型
    default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
      return []
    }
  }) viewer

  // @Watch('show', { immediate: true, deep: true })
  // onShowChanged (v) {
  // ...
  // }

  // get testComputed (): Boolean {
  //   return this.rely
  // }

  // set testComputed (newRely: Boolean) {
  //   this.rely = newRely
  // }

  beforeCreate () {
    //创建前
  }

  created () {
    //创建
  }

  beforeMount () {
    //渲染前
  }

  mounted () {
    //渲染
  }

  activated () {
    //可见
  }

  deactivated () {
    //隐藏
  }

  beforeUpdate () {
    //更新前
  }

  updated () {
    //更新
  }

  beforeDestroy () {
    //销毁前
  }

  destroyed () {
    //销毁
  }
}
</script>
<style scoped lang="scss">
  .el-drag-form-viewer {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    @include _border-box-shadow;
    .el-drag-form-viewer-class {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .drag-item-move {
        border: dashed 1px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
      }
      .drag-item-mouseup {
        border: dashed 1px transparent;
        box-sizing: border-box;
      }
    }
  }
</style>
