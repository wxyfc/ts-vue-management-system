<template>
  <header>header========header========header=========header=header=========header===========header<span @click="test">123</span></header>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Mixins } from 'vue-property-decorator'
import { setLocal } from '@function/browserActivity'
import infoMixin from '@mixin/infoMixin'

@Component
export default class SystemLayoutHeader extends Mixins(infoMixin) {
  created () {
    // console.log(process.env.NODE_ENV)
  }

  test () {
    this.setUserInfo({ test: 111111111 })
  }
}
</script>
<style scoped lang="scss">
  header {
    width: 100%;
    height: 100%;
    word-break: break-all;
  }
</style>
