/* getBrowserLanguage getLocal setLocal removeLocal clearLocal */
import { setLocal, getLocal } from './browserActivity'

export function setTheme (theme = '_main') {
  window.document.documentElement.setAttribute('data-theme', theme)
  setLocal('system-theme', theme)
}

export function setFont (size = '_small') {
  window.document.documentElement.setAttribute('data-font', size)
  setLocal('system-font', size)
}

export function setLayout (layout = '_header') {
  window.document.documentElement.setAttribute('data-layout', layout)
  setLocal('system-layout', layout)
}

export default function initPorject () {
  console.clear()
  console.log('%c ts-vue-management_ %c init %c success', 'color:#409EFF;font-size:40px', 'color:#E6A23C;font-size:40px', 'color:#67C23A;font-size:40px')
  setTheme(getLocal('system-theme', '_main'))
  setFont(getLocal('system-font', '_small'))
  setLayout(getLocal('system-layout', '_header'))
}
