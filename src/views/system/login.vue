<template>
  <div class="login-mian">
    <div class="login-content">
      <p class="login-content-title-p">{{ $t('context.button.login title') }}</p>
      <el-form ref="login-form" :model="loginForm" label-width="80px" label-position="top" class="login-content-form" @keyup.enter.native="loginFun('login-form')">
        <el-form-item :label="$t('label.form.account')" prop="account" :rules="formRules.inputLengthRule()">
          <el-input v-model="loginForm.account" :placeholder="$t('placeholder.form.account')" size="medium"></el-input>
        </el-form-item>
        <el-form-item :label="$t('label.form.password')" prop="password" :rules="formRules.inputLengthRule()">
          <el-input v-model="loginForm.password" :placeholder="$t('placeholder.form.password')" size="medium" show-password></el-input>
        </el-form-item>
      </el-form>
      <EleButton @click="loginFun('login-form')" size="medium" long>{{ $t('context.button.login') }}</EleButton>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Prop, Inject, Mixins } from 'vue-property-decorator'
import infoMixin from '@mixin/infoMixin.ts'
import initProject from '@function/projectActivity.ts'

@Component({})
export default class Login extends Mixins(infoMixin) {

  loginForm = {}

  loginFun (formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        this.setUserInfo({ [process.env.VUE_APP_USER_IDENTITY_KEY]: [1111] })
        this.lastUserInfo()
        this.$router.push('/menu')
      }
    })
  }

  created () {
    // initProject()
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
      padding: calc(#{$login-height} / 18) calc(#{$login-width} / 8);
      @include _border-box-shadow;
      .login-content-title-p {
        text-align: center;
        margin-bottom: 12px !important;
        @include _font-size('_title');
      }
      .login-content-form {
        border: 1px solid transparent;
      }
    }
  }
</style>
