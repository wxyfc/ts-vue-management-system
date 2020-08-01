<template>
  <div class="demo-main ">
    <EleButton @click="upThemeFun" loading>{{ $t('navbar.test') }}</EleButton>
    <EleButton @click="setLayout('_header','_large','_main')" size="large" type="vice">{{ $t('navbar.test') }}</EleButton>
    <EleButton @click="setLayout('_aside','_medium','_high')" size="medium" type="theme">{{ $t('navbar.test') }}</EleButton>
    <EleButton @click="setLayout('_aside','_small','_dull')" size="small" type="vice">{{ $t('navbar.test') }}</EleButton>
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
export default class Demo extends Mixins(infoMixin) {

  // @Inject('reload') readonly reload!: string  // 应该是两种写法
  @Inject() readonly reload!: RELOAD

  setLayout (type: string, font: string, color: string) {
    setLayout(type)
    setFont(font)
    setTheme(color)
  }

  upThemeFun () {
    this.$set(this.$i18n, 'locale', 'en-US')
    setLocal('language', 'en-US')
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
  .demo-main {
  }
</style>
