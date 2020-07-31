/* eslint-disable */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs'
import { getLocal } from '@function/browserActivity'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: getLocal('language', 'zh-CN'), // 语言标识
  messages
})
export default i18n
