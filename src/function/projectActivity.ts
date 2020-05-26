/* getBrowserLanguage getLocal setLocal removeLocal clearLocal */
import { setLocal, getLocal } from './browserActivity'
import store from '@store'

export function setTheme (theme = '_main') {
  // 设置主题方法,只需传入想要设置的主题即可(_main,_high,_dull)
  window.document.documentElement.setAttribute('data-theme', theme)
  setLocal('system-theme', theme)
}

export function setFont (size = '_small') {
  // 设置字体大小号方法(_large,_medium,_small)
  window.document.documentElement.setAttribute('data-font', size)
  setLocal('system-font', size)
}

export function setLayout (layout = '_header') {
  // 设置布局方法(_header,_aside)
  window.document.documentElement.setAttribute('data-layout', layout)
  setLocal('system-layout', layout)
}

export function handlerWindowChange () {
  let screenSize = 'large'
  let elementNavMenu = 'vertical'
  if (window.innerWidth < 996) {
    screenSize = 'small'
    elementNavMenu = 'horizontal'
  }
  store.dispatch('upVuex', { mutations: 'setSystemInfo', value: { screenSize, elementNavMenu } })
}

export function monitorWindowChange () {
  handlerWindowChange()
  window.addEventListener('resize', handlerWindowChange)
  window.addEventListener('beforeunload', (e) => {
    (window.event || e).returnValue = ('')
  }, true)
}

export default function initPorject () {
  console.clear()
  console.log('%c ts-vue-management_ %c init %c success', 'color:#409EFF;font-size:40px', 'color:#E6A23C;font-size:40px', 'color:#67C23A;font-size:40px')
  monitorWindowChange()
  setTheme(getLocal('system-theme', '_main'))
  setFont(getLocal('system-font', '_small'))
  setLayout(getLocal('system-layout', '_header'))
}
