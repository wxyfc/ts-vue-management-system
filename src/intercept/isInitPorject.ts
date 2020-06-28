/* eslint-disable */
// @ts-nocheck
/*
*  是否初始化工程路由拦截
*  没有进行过初始化的话会进行一些事件;如:localStorage存贮同步到vuex
* */
import router from '@router'
import { systemInfo, setUserInfo, setOtherInfo, setBriefInfo, setSystemInfo } from '@function/handlerVuex'
import { getLocal } from '@function/browserActivity'

export default function () {
  router.beforeEach((to, from, next) => {
    if (systemInfo().initPorject) {
      next()
    } else {
      const userInfo = getLocal('userInfo', {})
      if (Object.keys(userInfo).length > 0) {
        setUserInfo({ ...userInfo })
      }
      const otherInfo = getLocal('otherInfo', {})
      if (Object.keys(otherInfo).length > 0) {
        setOtherInfo({ ...otherInfo })
      }
      const briefInfo = getLocal('briefInfo', {})
      if (Object.keys(briefInfo).length > 0) {
        setBriefInfo({ ...briefInfo })
      }
      const systemInfo = getLocal('systemInfo', {})
      if (Object.keys(systemInfo).length > 0) {
        setSystemInfo({ ...systemInfo, initPorject: true })
      }
      next()
    }
  })
}
