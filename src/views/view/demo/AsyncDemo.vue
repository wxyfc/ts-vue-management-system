<template>
  <div class="async-demo-main ">
    <EleButton @click="upThemeFun" loading>{{ $t('navbar.test') }}</EleButton>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import { setLocal } from '@function/browserActivity'
import { setTheme, setFont, setLayout } from '@function/projectActivity'
import infoMixin from '@mixin/infoMixin'

type RELOAD = () => void;

@Component
export default class AsyncDemo extends Mixins(infoMixin) {

  @Inject() readonly reload!: RELOAD

  upThemeFun () {
    this.$set(this.$i18n, 'locale', 'zh-CN')
    setLocal('language', 'zh-CN')
    setTheme('_high')
    setFont('_large')
    setLayout('_aside')
    this.reload()
  }

  created () {
  }
}
</script>
<style scoped lang="scss">
  .async-demo-main {
  }
</style>
