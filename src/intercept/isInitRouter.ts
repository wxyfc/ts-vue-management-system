/* eslint-disable */
// @ts-nocheck
/*
*  是否初始化路由路由拦截
*  没有进行过初始化路由,将同步路由
* */
import router from '@router'
import { systemInfo, setUserInfo, setOtherInfo, setBriefInfo, setSystemInfo } from '@function/handlerVuex'

export default function () {
  router.beforeEach((to, from, next) => {
    if (systemInfo().initPorject) {
      next()
    } else {
      asyncRouterHandlerFun().then((asyncRouter) => {
        next()
      })
    }
  })
}

function asyncRouterHandlerFun () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 10)
  })
}
