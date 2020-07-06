/* eslint-disable */
// @ts-nocheck
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import i18n from './i18n'
import router from './router'
import store from './store'
import initPorject from '@function/projectActivity'
import intercept from './intercept'
import './components'

Vue.use(ElementUI, { size: 'mini', zIndex: 5233, i18n: (key: string, value: string) => i18n.t(key, value) })
Vue.config.productionTip = false
// 初始化项目
initPorject()
// 路由拦截初始化
intercept()

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
