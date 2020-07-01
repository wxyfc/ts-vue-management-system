/* eslint-disable */
// @ts-nocheck
/*
*  是否初始化路由路由拦截
*  没有进行过初始化路由,将同步路由
* */
import router from '@router'
import { systemInfo, setSystemInfo } from '@function/handlerVuex'
import initRouter from '@function/initRouter'
import i18n from '@/i18n'
import { Message } from 'element-ui';

const error = process.env.VUE_APP_ERROR_PAGE
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
      let { initPorject, asyncRouter } = systemInfo()
      if (!initPorject) {
        // 没有进行过第一种情况
        console.log('没有进行过第一种情况')
        let localRouter = initRouter(require("@json/localRouter.json"))
        let menuRouter = initRouter(require("@json/menuRouter.json"))
        router.addRoutes([...localRouter, ...menuRouter])
        setSystemInfo({ initPorject: true }) // 加载第一种后进行initPorject标识true
        next(to.path) // 进行跳转到要跳转的路由
      } else if (initPorject && !asyncRouter) {
        // 进行过第一种情况 但是没进行异步路由
        console.log('进行过第一种情况但没有进行第二种情况')
        asyncRouterHandlerFun().then((asyncRoute) => {
          router.addRoutes(asyncRoute)
          setSystemInfo({ asyncRouter: true }) // 加载第二种后进行asyncRouter标识true
          next(to.path)
        })
      } else {
        console.log('进行过第一第二还是没有')
        // next(new Error()) // 进行跳转到要跳转的路由
        if (error === 'true') {
          next('/404')
        } else {
          Message({ message: i18n.tc('tip.error.page'), type: 'error' })
          next(false)
        }
      }
    } else {
      next()
      // next({ ...to, replace: true })
    }
  })
}

function asyncRouterHandlerFun () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(initRouter(require("@json/asyncRouter.json")))
    }, 1000)
  })
}
