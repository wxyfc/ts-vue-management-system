<template>
  <header></header>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Mixins } from 'vue-property-decorator'
import infoMixin from '@/mixin/infoMixin.ts'

@Component
export default class SystemLayoutHeader extends Mixins(infoMixin) {
  created () {
    // console.log(process.env.NODE_ENV)
  }
}
</script>
<style scoped lang="scss">
  header {
    width: 100%;
    height: 100%;
  }
</style>
