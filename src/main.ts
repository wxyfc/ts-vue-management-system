/* eslint-disable */
// @ts-nocheck
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker.ts'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import i18n from './i18n/index.ts'
import router from './router/index.ts'
import store from './store/index.ts'
// 工程初始化
import '@function/projectActivity.ts'
// 路由拦截初始化
import './intercept/index.ts'
// VUE注入初始化
import './injection/index.ts'
// VUE组件初始化
import './components/index.ts'
// VUE组件初始化
import './directive/index.ts'

Vue.use(ElementUI, { size: 'mini', zIndex: 5233, i18n: (key: string, value: string) => i18n.t(key, value) })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
