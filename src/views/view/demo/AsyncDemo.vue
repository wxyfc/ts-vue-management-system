<template>
  <div class="async-demo-main ">
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import infoMixin from '@mixin/infoMixin'

@Component
export default class AsyncDemo extends Mixins(infoMixin) {


  created () {
  }
}
</script>
<style scoped lang="scss">
  .async-demo-main {
  }
</style>
