<template>
  <div class="el-drag-form-handler-main ">
    <el-form ref="form" :model="form" label-width="120px">
      <div v-drag-inserted:ElFormInput@el-drag-form-viewer="handlerDrag">
        <ElFormInput label="测试输入框" v-model="form.input" placeholder="请输入内容"></ElFormInput>
      </div>
      <div v-drag-inserted:ElFormSelect@el-drag-form-viewer="handlerDrag">
        <ElFormSelect label="测试选择器" v-model="form.select" placeholder="请选择"></ElFormSelect>
      </div>
      <div v-drag-inserted:ElFormDatePicker@el-drag-form-viewer="handlerDrag">
        <ElFormDatePicker label="测试日期选择器" v-model="form.date" placeholder="请选择日期" type="date"></ElFormDatePicker>
      </div>
      <ElDragFormViewer id="el-drag-form-viewer"></ElDragFormViewer>
    </el-form>
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
  form = {}
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
    .container {
      width: 250px;
      height: 250px;
      margin-left: 250px;
      margin-top: 20px;
      background: #89ff61;
    }
    /deep/ .el-input {
      width: 220px;
    }
  }
</style>
