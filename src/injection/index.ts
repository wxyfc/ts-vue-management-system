import Vue from 'vue'

import { get, post, form } from '@function/http.ts'

console.log('VUE注入初始化')
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$form = form
