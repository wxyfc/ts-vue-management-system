<template>
  <button type="button" :class="['ele-button-main','ele-button-'+type,,'ele-button-'+size,{'ele-button-disabled':isDisabled}]" @click.stop="$_iHandlerClickFun">
    <slot></slot>
    <EleIcon v-if="loading" i-class="el-icon-loading" class="ele-button-loading"></EleIcon>
  </button>
</template>
<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { setLayout, setFont, setTheme } from '@function/projectActivity'

@Component({})
export default class EleButton extends Vue {
  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
      return 'theme' // theme vice
    }
  }) type

  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
      return 'large' // large medium small
    }
  }) size

  @Prop({
    type: Boolean, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
      return false // large medium small
    }
  }) loading

  @Prop({
    type: Boolean, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
      return false // large medium small
    }
  }) disabled

  isDisabled = false

  @Watch('disabled', { immediate: true, deep: true })
  onRouteChanged (v) {
    this.isDisabled = v
  }

  $_iHandlerClickFun () {
    if (!this.isDisabled) {
      this.$emit('click')
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      }, 1000)
    }
  }

  // created () {
  // }
}
</script>
<style scoped lang="scss">
  .ele-button-main {
    border: 0;
    border-radius: 5px;
    text-align: center;
  }

  .ele-button- {
    padding: 10px 16px !important;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: transparent;
  }

  .ele-button-theme {
    @include _background("_theme-color");
  }

  .ele-button-vice {
    @include _background("_vice-color");
  }

  .ele-button-large {
    padding: 12px 20px !important;
    border: 1px solid rgba(255, 255, 255, 0.6);
    @include _font-size('_content');
  }

  .ele-button-medium {
    padding: 10px 16px !important;
    border: 1px solid rgba(255, 255, 255, 0.6);
    @include _font-size('_content');
  }

  .ele-button-small {
    padding: 7px 12px !important;
    border: 1px solid rgba(255, 255, 255, 0.6);
    @include _font-size('_content');
  }

  .ele-button-loading {
    margin-left: 5px;
  }

  .ele-button-disabled {
    cursor: no-drop;
    /*pointer-events: none;*/
    opacity: 0.6;
  }

</style>
