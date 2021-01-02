<template>
  <div class="async-demo-main ">
    <!--selection-->
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
    {{ form }}
    <el-form ref="form" :model="form" label-width="80px">
      <ElFormInput label="测试" v-model="form.test" placeholder="测哇"></ElFormInput>
    </el-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins } from 'vue-property-decorator'
import infoMixin from '@mixin/infoMixin.ts'
import { ElFormInput } from '@components/ElDragFormComponents.ts'

@Component({
  components: {
    ElFormInput
  }
})
export default class AsyncDemo extends Mixins(infoMixin) {
  form = {}

  pageChangeFun (pageData) {
    console.log('pageData返回的emit', pageData)
  }

  selectionChangeFun (rowData) {
    console.log('rowData返回的emit', rowData)
  }

  created () {
  }
}
</script>
<style scoped lang="scss">
  .async-demo-main {
  }
</style>
