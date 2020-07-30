<template>
  <button type="button" :class="['ele-button-main']" @click.stop="$_iHandlerClickFun">{{ $t('navbar.test') }}</button>
</template>
<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Prop, Vue } from 'vue-property-decorator'
import { setLayout, setFont, setTheme } from '@function/projectActivity'

@Component({})
export default class EleIcon extends Vue {
  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
      return 'theme'
    }
  }) effect !: number;

  $_iHandlerClickFun () {
    this.$emit('click')
  }

  // created () {
  // }
}
</script>
<style scoped lang="scss">
  .ele-button-main {
  }
</style>
