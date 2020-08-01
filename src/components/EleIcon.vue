<template>
  <el-tooltip :effect="effect" :content="content" :placement="placement" :disabled="!content">
    <i :class="[iClass,'ele-icon']" @click.stop="iHandlerClickFun"></i>
  </el-tooltip>
</template>
<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class EleIcon extends Vue {
  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
      return 'dark'
    }
  }) effect !: number;
  @Prop({ default: '' }) content !: string;
  @Prop({ default: 'el-icon-star-off' }) 'i-class' !: string;
  @Prop({ default: 'bottom', required: false }) placement !: string; // !: string 不加也没问题

  iHandlerClickFun () {
    this.$emit('click')
  }
}
</script>
<style scoped lang="scss">
  .ele-icon {
    @include _font-size('_title');
  }
</style>
