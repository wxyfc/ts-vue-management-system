<template>
  <div class="async-demo-main ">
    async-demo
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins } from 'vue-property-decorator'
import infoMixin from '@/mixin/infoMixin.ts'

@Component({
  components: {}
})
export default class AsyncDemo extends Mixins(infoMixin) {

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
