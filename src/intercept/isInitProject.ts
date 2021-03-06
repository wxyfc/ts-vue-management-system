/* eslint-disable */
// @ts-nocheck
/*
*  是否初始化工程路由拦截
*  没有进行过初始化的话会进行一些事件;如:localStorage存贮同步到vuex
* */
import router from '@/router/index.ts'
import { systemInfo, setUserInfo, setOtherInfo, setBriefInfo, setSystemInfo } from '@/function/handlerVuex.ts'
import { getLocal } from '@/function/browserActivity.ts'
import { handlerWindowChange } from '@/function/projectActivity.ts'

export default function () {
  router.beforeEach((to, from, next) => {
    if (systemInfo().initProject) {
      next()
    } else {
      const _userInfo = getLocal('userInfo', {})
      if (Object.keys(_userInfo).length > 0) {
        setUserInfo({ ..._userInfo })
      }
      const _otherInfo = getLocal('otherInfo', {})
      if (Object.keys(_otherInfo).length > 0) {
        setOtherInfo({ ..._otherInfo })
      }
      const _briefInfo = getLocal('briefInfo', {})
      if (Object.keys(_briefInfo).length > 0) {
        setBriefInfo({ ..._briefInfo })
      }
      const _systemInfo = getLocal('systemInfo', {})
      if (Object.keys(_systemInfo).length > 0) {
        setSystemInfo({ ..._systemInfo })
      }
      console.log('重置标识')
      setSystemInfo({ initProject: false, asyncRouter: false })
      handlerWindowChange()
      next()
    }
  })
  // router.afterEach((to, from) => {
  //   setSystemInfo({ initProject: true })
  // });
}
