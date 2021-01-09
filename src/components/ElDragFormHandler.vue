<template>
  <div class="el-drag-form-handler-main" id="el-drag-form-handler-main">
    <el-form label-width="100px" class="el-drag-form-class">
      <div v-drag-inserted:ElFormInput@el-drag-form-viewer@el-drag-form-handler-main="handlerDrag">
        <ElFormInput label="输入框" placeholder="请输入内容"></ElFormInput>
      </div>
      <div v-drag-inserted:ElFormSelect@el-drag-form-viewer@el-drag-form-handler-main="handlerDrag">
        <ElFormSelect label="选择器" placeholder="请选择"></ElFormSelect>
      </div>
      <div v-drag-inserted:ElFormDatePicker@el-drag-form-viewer@el-drag-form-handler-main="handlerDrag">
        <ElFormDatePicker label="日期选择器" placeholder="请选择日期" type="date"></ElFormDatePicker>
      </div>
    </el-form>
    <div id="el-drag-form-viewer">
      <ElDragFormViewer></ElDragFormViewer>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import infoMixin from '@/mixin/infoMixin.ts'
import { ElFormInput, ElFormSelect, ElFormDatePicker } from '@/components/ElDragFormComponents.ts'
import ElDragFormViewer from './ElDragFormViewer.vue'

@Component({
  components: {
    ElFormInput,
    ElFormSelect,
    ElFormDatePicker,
    ElDragFormViewer
  },
  // computed: { // vue 原生写法也可以在此使用
  //   menuRouters: {
  //     get () {
  //       return [...this.systemInfo.localRoutes, ...this.systemInfo.asyncRoutes]
  //     }
  //   }
  // }
})
export default class ElDragFormHandler extends Mixins(infoMixin) {
  // @Prop({
  //   type: Boolean, // 父组件传递给子组件的数据类型
  //   required: false, // 是否必填
  //   default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  //     return false
  //   }
  // }) show !: number; // number 可以不指定

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
  handlerDrag (v) {
    console.log(v)
  }

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
  .el-drag-form-handler-main {
    width: 100%;
    height: 100%;
    .el-drag-form-class {
      display: inline-block;
      width: 330px;
      margin-right: 20px;
      padding: 10px;
      box-sizing: border-box;
      height: 100%;
      @include _border-box-shadow;
    }
    #el-drag-form-viewer {
      display: inline-block;
      width: calc(100% - 350px);
      height: 100%;
    }
    /deep/ .el-input {
      width: 200px;
    }
  }
</style>
