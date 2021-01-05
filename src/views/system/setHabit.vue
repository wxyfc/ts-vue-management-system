<template>
  <div class="set-habit ">
    <h1 class="habit-title">{{ $t('navbar.title.set habit') }}</h1>
    <el-form label-width="70px">
      <el-form-item :label="$t('label.form.select language')">
        <el-radio v-for="(value,key) in LanguageChoice" :key="key" v-model="LanguageSelect" :label="key" border>{{ value }}</el-radio>
      </el-form-item>
      <el-form-item :label="$t('label.form.select theme')">
        <el-radio v-for="(value,key) in SystemThemeList" :key="key" v-model="SystemThemeSelect" :label="key" border>{{ value }}</el-radio>
      </el-form-item>
      <el-form-item :label="$t('label.form.select fontsize')">
        <el-radio v-for="(value,key) in SystemFontSizeList" :key="key" v-model="SystemFontSizeSelect" :label="key" border>{{ value }}</el-radio>
      </el-form-item>
      <el-form-item :label="$t('label.form.select layout')">
        <div class="layout-examples">
          <div v-for="(value,key) in SystemLayoutList" :key="key" :class="['layout-content',value,{'layout-content-is':SystemLayoutSelect == key}]" @click="SystemLayoutSelect = key">
            <div class="layout-examples-head"></div>
            <div class="layout-examples-aside"></div>
          </div>
        </div>
      </el-form-item>
      <el-form-item :label="$t('label.form.select navigation')">
        <div class="layout-examples">
          <div v-for="(value,key) in SystemNavList" :key="key" :class="['layout-content','layout-section',value,{'layout-content-is':SystemNavSelect == key}]" @click="SystemNavSelect = key">
            <div class="layout-examples-head"></div>
            <div class="layout-examples-aside"></div>
            <div class="layout-examples-section">
              <template v-if="key=='true'">
                <span class="layout-examples-nav" v-for="i in 3" :key="i"></span>
              </template>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        {{ $t('in a word.sure set habit') }}
        <EleButton type="theme" @click="upThemeFun">{{ $t('context.button.sure') }}</EleButton>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import { setLocal, getLocal } from '@/function/browserActivity.ts'
import { setTheme, setFont, setLayout, setNav } from '@/function/projectActivity.ts'
import { LanguageChoice } from '@/i18n/langs/index.ts'
import infoMixin from '@/mixin/infoMixin.ts'

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
export default class setHabit extends Mixins(infoMixin) {

  // @Inject('reload') readonly reload!: RELOAD  // 应该是两种写法 括号内 'reload' 如果不填 则默认以 readonly 后面的值 解析相同的名字
  @Inject() readonly reload!: RELOAD
  // 语言选择列表
  LanguageChoice = LanguageChoice
  // 语言选择
  LanguageSelect = getLocal('language', 'zh-CN')

  // 主题选择列表
  get SystemThemeList (): Object {
    return {
      '_main': this.$t('navbar.title.main theme'),
      '_high': this.$t('navbar.title.high theme'),
      '_dull': this.$t('navbar.title.dull theme')
    }
  }

  // 主题选择
  SystemThemeSelect = getLocal('system-theme', '_main')

  // 字号选择列表
  get SystemFontSizeList (): Object {
    return {
      '_large': this.$t('navbar.title.large fontsize'),
      '_medium': this.$t('navbar.title.medium fontsize'),
      '_small': this.$t('navbar.title.small fontsize')
    }
  }

  // 字号选择
  SystemFontSizeSelect = getLocal('system-font', '_small')

  // 布局选择列表
  get SystemLayoutList (): Object {
    return {
      '_header': 'layout-header',
      '_aside': 'layout-aside'
    }
  }

  // 布局选择
  SystemLayoutSelect = getLocal('system-layout', '_header')

  // 布局选择列表
  get SystemNavList (): Object {
    return {
      'true': this.SystemLayoutList[this.SystemLayoutSelect],
      'false': this.SystemLayoutList[this.SystemLayoutSelect]
    }
  }

  SystemNavSelect = getLocal('system-nav', 'true')
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

  upThemeFun () {
    this.$set(this.$i18n, 'locale', this.LanguageSelect)
    setLocal('language', this.LanguageSelect)
    setTheme(this.SystemThemeSelect)
    setFont(this.SystemFontSizeSelect)
    setLayout(this.SystemLayoutSelect)
    setNav(this.SystemNavSelect)
    this.reload()
  }

  created () {
    //创建
  }

  mounted () {
  }

}
</script>
<style scoped lang="scss">
  .set-habit {
    .habit-title {
      padding-left: 70px !important;
      margin-bottom: 20px !important;
      text-align: left;
      @include _font-size('_title');
    }
  }

  .layout-examples {
    display: flex;
    align-items: center;
    .layout-content {
      width: 120px;
      height: 120px;
      padding: 10px;
      box-sizing: border-box;
      display: inline-grid;
      grid-template-rows: 20px 80px;
      grid-template-columns: 20px 80px;
    }
    .layout-content-is {
      @include _background("_vice-color");
    }
    .layout-header {
      margin-right: 40px;
      grid-template-areas: "head head" "aside section";
    }
    .layout-aside {
      grid-template-areas: "aside head" "aside section"
    }
    .layout-section {
      margin-right: 40px;
    }
    /deep/ .layout-examples-head {
      grid-area: head;
      @include _background("_head-color");
    }
    /deep/ .layout-examples-aside {
      grid-area: aside;
      @include _background("_theme-color");
    }
    /deep/ .layout-examples-section {
      grid-area: section;
      background: #fff;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      .layout-examples-nav {
        width: 14px;
        height: 7px;
        margin: 1px 0 0 2px;
        border-radius: 2px;
        display: inline-block;
        @include _background("_theme-color");
      }
    }
  }
</style>
