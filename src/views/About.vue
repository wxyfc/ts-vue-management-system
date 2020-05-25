<template>
  <div class="about ">
    <h1>This is an about page</h1>
    <el-button @click="upThemeFun">{{ $t('navbar.test') }}</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
import { setLocal } from '@function/browserActivity'
import { setTheme, setFont, setLayout } from '@function/projectActivity'

interface OPTIONS {
  value: string;
  label: string;
}

interface RELOAD {
  (): void;
}

@Component
export default class HelloWorld extends Vue {
  options: Array<OPTIONS> = [{
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

  upThemeFun () {
    this.$set(this.$i18n, 'locale', 'en-US')
    setLocal('language', 'en-US')
    setTheme('_high')
    setFont('_large')
    setLayout('_aside')
    this.reload()
  }

  // created () {
  // }
}
</script>
<style scoped lang="scss">
  .about {
    @include _background("_theme-color");
    @include _font-size("_title");
  }
</style>
