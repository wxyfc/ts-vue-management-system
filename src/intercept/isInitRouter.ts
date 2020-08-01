/* eslint-disable */
// @ts-nocheck
/*
*  是否初始化路由路由拦截
*  没有进行过初始化路由,将同步路由
* */
import router from '@router'
import { systemInfo, setSystemInfo } from '@function/handlerVuex'
import initRouter from '@function/initRouter'
import nextError from './nextError'

export default function () {
  router.beforeEach((to, from, next) => {
    /*
    *  name为null则是没有匹配到路由
    *  两种情况:
    *  1.没有加载过本地路由和菜单路由
    *  2.没有加载过异步路由
    *  通过initPorject判断是否加载过第一种情况
    * */
    if (to.name === null) {
      // 没有路由则认为需要初始化路由
      let { initPorject, asyncRouter } = systemInfo()
      if (!initPorject) {
        // 没有进行过第一种情况
        console.log('没有进行过第一种情况')
        let localRoutes = initRouter(require("@json/localRouter.json"))
        setSystemInfo({ initPorject: true, localRoutes }) // 加载第一种后进行initPorject标识true
        router.addRoutes(localRoutes)
        next(to.path) // 进行跳转到要跳转的路由
      } else if (initPorject && !asyncRouter) {
        // 进行过第一种情况 但是没进行异步路由
        console.log('进行过第一种情况但没有进行第二种情况')
        asyncRouterHandlerFun().then((asyncRoutes) => {
          setSystemInfo({ asyncRouter: true, asyncRoutes }) // 加载第二种后进行asyncRouter标识true
          router.addRoutes(asyncRoutes)
          next(to.path)
        })
      } else {
        console.log('进行过第一第二还是没有')
        nextError(next)
      }
    } else {
      // 有路由不需要进行初始化路由
      next()
      // next({ ...to, replace: true })
    }
  })
}

function asyncRouterHandlerFun () {
  return new Promise((resolve, reject) => {
    // http 接口 异步加载路由处
    let asyncRoutes = initRouter(require("@json/asyncRouter.json"))
    setTimeout(() => {
      resolve(asyncRoutes)
    }, 200)
  })
}
