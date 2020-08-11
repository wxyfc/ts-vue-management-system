/* eslint-disable */
// @ts-nocheck
// 操作项目的事件
/* getBrowserLanguage getLocal setLocal removeLocal clearLocal */
import { setLocal, getLocal } from './browserActivity'
import { userInfo, otherInfo, briefInfo, systemInfo, setSystemInfo, clearVuex } from '@function/handlerVuex'

// import store from '@store'

export function setTheme (systemTheme = '_main') {
  // 设置主题方法,只需传入想要设置的主题即可(_main,_high,_dull)
  window.document.documentElement.setAttribute('data-theme', systemTheme)
  setLocal('system-theme', systemTheme)
  // setSystemInfo({ systemTheme })
}

export function setFont (systemFontSize = '_small') {
  // 设置字体大小号方法(_large,_medium,_small)
  window.document.documentElement.setAttribute('data-font', systemFontSize)
  setLocal('system-font', systemFontSize)
  // setSystemInfo({ systemFontSize })
}

export function setLayout (systemLayout = '_header') {
  // 设置布局方法(_header,_aside)
  window.document.documentElement.setAttribute('data-layout', systemLayout)
  setLocal('system-layout', systemLayout)
  // setSystemInfo({ systemLayout })
}

export function handlerWindowChange () {
  // 处理屏幕变化
  let systemScreenSize = 'large'
  let elementNavMenu = 'vertical'
  let isCollapse = systemInfo().handlerIsCollapse
  if (window.innerWidth < 996) {
    systemScreenSize = 'small'
    elementNavMenu = 'horizontal'
    isCollapse = false
    console.log('小屏模式')
  } else {
    console.log('大屏模式')
  }
  // 使用vuex同步状态
  setSystemInfo({ systemScreenSize, elementNavMenu, isCollapse })
  // store.dispatch('upVuex', { mutations: 'setSystemInfo', value: { screenSize, elementNavMenu, initProject: true } })
}

export function monitorWindowChange () {
  // 监听窗体变化
  handlerWindowChange()
  window.addEventListener('resize', handlerWindowChange)
  window.addEventListener('beforeunload', () => {
    setLocal('userInfo', userInfo())
    setLocal('otherInfo', otherInfo())
    setLocal('briefInfo', briefInfo())
    setLocal('systemInfo', systemInfo())
    // (window.event || e).returnValue = ('')
  }, true)
}

export default function initProject () {
  // console.clear()
  monitorWindowChange()
  setTheme(getLocal('system-theme', '_main'))
  // setTheme(systemInfo().systemTheme)
  setFont(getLocal('system-font', '_small'))
  // setFont(systemInfo().systemFontSize)
  setLayout(getLocal('system-layout', '_header'))
  // setLayout(systemInfo().systemLayout)
  console.log('%c ts-vue-management_ %c init %c success', 'color:#409EFF;font-size:40px', 'color:#E6A23C;font-size:40px', 'color:#67C23A;font-size:40px')
}
