<template>
  <div class="el-drag-form-handler-main ">
    <div class="test" v-drag-inserted="'test'"></div>
    <div id="test" class="test"></div>
    <el-form ref="form" :model="form" label-width="120px">
      <ElFormInput label="测试" v-model="form.test" placeholder="测哇"></ElFormInput>
      <ElFormSelect label="请测试" v-model="form.test1" placeholder="请测哇"></ElFormSelect>
      <ElFormDatePicker label="请测试1" v-model="form.test1" placeholder="请测哇1" type="date"></ElFormDatePicker>
    </el-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import infoMixin from '@mixin/infoMixin.ts'
import { ElFormInput, ElFormSelect, ElFormDatePicker } from '@components/ElDragFormComponents.ts'

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
    .test {
      position: relative;
      width: 220px;
      height: 220px;
      background: #ffd04b;
    }
    /deep/ .el-input {
      width: 220px;
    }
  }
</style>
