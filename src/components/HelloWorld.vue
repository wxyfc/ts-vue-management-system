<template>
  <div class="hello">
    <h1 @click="upThemeFun">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </p>
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

type RELOAD = () => void;

@Component
export default class HelloWorld extends Vue {
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
  .hello {
    @include _background("_theme-color");
    @include _font-size("_title");
  }
</style>
