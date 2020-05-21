import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import i18n from './i18n'

import router from './router'
import store from './store'

import initPorject from '@function/projectActivity'

Vue.use(ElementUI, { size: 'mini', zIndex: 5233, i18n: (key: string, value: string) => i18n.t(key, value) })
Vue.config.productionTip = false

initPorject()

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
