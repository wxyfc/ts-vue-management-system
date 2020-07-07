<template>
  <div class="about ">
    <h1>This is an about page11111</h1>
    <el-button @click="upThemeFun">{{ $t('navbar.test') }}</el-button>
    <el-button @click="setLayout('_header','_large','_main')">{{ $t('navbar.test') }}</el-button>
    <el-button @click="setLayout('_aside','_medium','_high')">{{ $t('navbar.test') }}</el-button>
    <el-button @click="setLayout('_aside','_small','_dull')">{{ $t('navbar.test') }}</el-button>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import { setLocal } from '@function/browserActivity'
import { setTheme, setFont, setLayout } from '@function/projectActivity'
import infoMixin from '@mixin/infoMixin'

interface OPTIONS {
  value: string;
  label: string;
}

type RELOAD = () => void;

@Component
export default class Demo extends Mixins(infoMixin) {
  options: OPTIONS[] = [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }]

  value = ''

  // @Inject('reload') readonly reload!: string
  @Inject() readonly reload!: RELOAD
  @Prop() private msg!: string;

  setLayout (type: string, font: string, color: string) {
    //
    //
    //
    setLayout(type)
    setFont(font)
    setTheme(color)
  }

  upThemeFun () {
    // this.$set(this.$i18n, 'locale', 'en-US')
    // setLocal('language', 'en-US')
    setTheme('_high')
    setFont('_large')
    setLayout('_aside')
    this.reload()
  }

  created () {
    this.setUserInfo({ [process.env.VUE_APP_USER_IDENTITY_KEY]: [4444, 2222, 1111, 1111, 22222] })
  }
}
</script>
<style scoped lang="scss">
  .about {
  }
</style>
