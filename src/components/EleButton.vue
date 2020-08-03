<template>
  <button type="button" :class="['ele-button-main','ele-button-'+type,,'ele-button-'+size,{'ele-button-disabled':isDisabled},{'ele-button-long':long}]" @click.stop="$_iHandlerClickFun">
    <slot></slot>
    <EleIcon v-if="loading" i-class="el-icon-loading" class="ele-button-loading"></EleIcon>
  </button>
</template>
<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class EleButton extends Vue {
  @Prop({
    type: String,
    default: () => {
      return '' // 主色 theme  副色 vice 默认不传淡白透明
    }
  }) type

  @Prop({
    type: String,
    default: () => {
      return 'small' // 大 large  中 medium  小 small
    }
  }) size

  @Prop({
    type: Boolean,
    default: () => {
      return false // 是否是加载中
    }
  }) loading

  @Prop({
    type: Boolean,
    default: () => {
      return false // large medium small
    }
  }) disabled

  @Prop({
    type: Boolean,
    default: () => {
      return false // large medium small
    }
  }) long

  isDisabled = false

  @Watch('disabled', { immediate: true, deep: true })
  onDisabledChanged (v) {
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
}
</script>
<style scoped lang="scss">
  .ele-button-main {
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    @include _border-box-shadow;
  }

  .ele-button- {
    background: rgba(255, 255, 255, .3);
  }

  .ele-button-theme {
    @include _background("_theme-color");
  }

  .ele-button-vice {
    @include _background("_vice-color");
  }

  .ele-button-large {
    padding: 12px 20px !important;
    @include _font-size('_content');
  }

  .ele-button-medium {
    padding: 10px 16px !important;
    @include _font-size('_content');
  }

  .ele-button-small {
    padding: 7px 12px !important;
    @include _font-size('_content');
  }

  .ele-button-loading {
    margin-left: 5px;
  }

  .ele-button-disabled {
    cursor: no-drop;
    /*pointer-events: none;*/
    // 会影响鼠标样式
    opacity: 0.6;
  }

  .ele-button-long {
    width: 100%;
  }

</style>
