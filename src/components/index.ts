/* eslint-disable */
// @ts-nocheck
import Vue from 'vue'
import Fragment from './other/vue-fragment'

Vue.use(Fragment.Plugin)

console.log('VUE组件初始化')

let component = ['EleButton', 'EleIcon']
const comfor = e => {
  Vue.component(e, () => import('./' + e))
}
component.forEach(comfor)
