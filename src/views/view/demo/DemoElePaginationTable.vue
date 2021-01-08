<template>
  <div class="demo-ele-pagination-table ">
    <ElePaginationTable radio index
                        :pageSizes="[3,5,10]" :total="10"
                        :data="[
                        {text:'1'},
                        {text:'1'},
                        {text:'1'},
                        {text:'1'}
                        ]"
                        @page-change="pageChangeFun"
                        @selection-change="selectionChangeFun">
      <el-table-column
        prop="text"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="text"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="text"
        label="姓名"
        width="180">
      </el-table-column>
    </ElePaginationTable>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import infoMixin from '@/mixin/infoMixin.ts'


@Component({
  // components: {
  //   SystemRecursionMenu: () => import('./SystemRecursionMenu'),
  // },
  // computed: { // vue 原生写法也可以在此使用
  //   menuRouters: {
  //     get () {
  //       return [...this.systemInfo.localRoutes, ...this.systemInfo.asyncRoutes]
  //     }
  //   }
  // }
})
export default class DemoElePaginationTable extends Mixins(infoMixin) {

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
  .demo-ele-pagination-table {
  }
</style>
