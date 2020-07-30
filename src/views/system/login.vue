<template>
  <div class="login-mian ">
    <div class="login-content">
      <el-form ref="login-form" :model="loginForm" label-width="80px" label-position="top">
        <el-form-item label="活动名称">
          <el-input v-model="loginForm.account" placeholder="请输入内容" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="loginForm.account" placeholder="请输入内容" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <EleButton @click="loginFun"></EleButton>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Prop, Inject, Mixins } from 'vue-property-decorator'
import { setLocal } from '@function/browserActivity'
import { setTheme, setFont, setLayout } from '@function/projectActivity'
import infoMixin from '@mixin/infoMixin'

interface OPTIONS {
  value: string;
  label: string;
}

type RELOAD = () => void;
@Component({
})
export default class Login extends Mixins(infoMixin) {

  loginForm = {}

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

  loginFun () {
    console.log('1')
  }

  created () {
    this.setUserInfo({ [process.env.VUE_APP_USER_IDENTITY_KEY]: [1111] })
    this.lastUserInfo()
    // this.clearVuex()
  }
}
</script>
<style scoped lang="scss">
  $login-width: 500px;
  $login-height: 309px;
  .login-mian {
    font-size: 0;
    border: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("~@img/login/loginBg.png");
    background-position: 0% 0%; /*这个是按从左往右，从上往下的百分比位置进行调整*/
    background-size: 100% 100%; /*按比例缩放*/
    /*background-size: 100px 100px;!*这个是按数值缩放*!*/
    background-repeat: no-repeat; /*还有repeat-x,y等*/
    position: relative;
    .login-content {
      position: absolute;
      left: calc(50% - (#{$login-width} / 2));
      top: calc(50% - (#{$login-height} / 2));
      background: rgba(255, 255, 255, 0.3);
      width: $login-width;
      height: $login-height;
      box-sizing: border-box;
      padding: calc(#{$login-height} / 8) calc(#{$login-width} / 8);
      @include _border-box-shadow;
    }
  }
</style>
