<template>
  <div class="demo-main ">
    <EleButton @click="setLayout('_header','_large','_main')" size="large" type="vice">{{ $t('context.button.sure') }}</EleButton>
    <EleButton @click="setLayout('_aside','_medium','_high')" size="medium" type="theme">{{ $t('context.button.sure') }}</EleButton>
    <EleButton @click="setLayout('_aside','_small','_dull')" size="small" type="vice">{{ $t('context.button.sure') }}</EleButton>
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

@Component({
  // components: {
  //   SystemRecursionMenu: () => import('./SystemRecursionMenu'),
  // },
  // computed: { // vue 原生写法也可以在此使用
  //   menuRouters: {
  //     get () {
  //       return [...this.systemInfo.localRoutes, ...this.systemInfo.asyncRoutes]
  //     }
  //   }
  // }
})
export default class Demo extends Mixins(infoMixin) {

  // @Inject('reload') readonly reload!: string  // 应该是两种写法
  @Inject() readonly reload!: RELOAD

  setLayout (type: string, font: string, color: string) {
    setLayout(type)
    setFont(font)
    setTheme(color)
  }

  // @Prop({
  //   type: Boolean, // 父组件传递给子组件的数据类型
  //   required: false, // 是否必填
  //   default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  //     return false
  //   }
  // }) show !: number; // number 可以不指定

  // @Watch('show', { immediate: true, deep: true })
  // onShowChanged (v) {
  // ...
  // }

  // get testComputed (): Boolean {
  //   return this.rely
  // }

  // set testComputed (newRely: Boolean) {
  //   this.rely = newRely
  // }

  // upThemeFun () {
  //   this.$set(this.$i18n, 'locale', 'en-US')
  //   setLocal('language', 'en-US')
  //   setTheme('_high')
  //   setFont('_large')
  //   setLayout('_aside')
  //   this.reload()
  // }

  beforeCreate () {
    //创建前
  }

  created () {
    //创建
    axios.get('/user/12345')
      .then(function(response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
  }

  beforeMount () {
    //渲染前
  }

  mounted () {
    //渲染
    // alert(1)
  }

  activated () {
    //可见
  }

  deactivated () {
    //隐藏
  }

  beforeUpdate () {
    //更新前
  }

  updated () {
    //更新
  }

  beforeDestroy () {
    //销毁前
  }

  destroyed () {
    //销毁
  }
}
</script>
<style scoped lang="scss">
  .demo-main {
  }
</style>
