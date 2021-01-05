/* eslint-disable */
// @ts-nocheck
/*
*  是否过期
*  通过vuex中存贮的角色最后操作时间进行判断该角色是否已经过期
* */

import router from '@/router/index.ts'
import { userInfo, systemInfo } from '@/function/handlerVuex.ts'
import nextError from './nextError.ts'

export default function () {
  router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.role && to.meta.role.length) {
      // 如果路由配置了角色 那么认为该路由需要拦截
      let lastTime = userInfo().lastTime
      // 该路由需要拦截 但是没有用户的登录时间 那么认为用户时间过期
      if (lastTime && Object.keys(lastTime).length == 2 && lastTime.date && lastTime.second) {
        let EXPIRE = process.env.VUE_APP_USER_EXPIRE_TIME
        let nowTime = new Date().getTime()
        let dVlue = 3600000 * (+EXPIRE)
        if ((nowTime - lastTime.second) < dVlue) {
          next()
        } else {
          // 时间过期
          console.log('时间过期')
          nextError(to, from, next, '/login')
        }
      } else {
        // 没有登录时间
        console.log('没有登录时间')
        nextError(to, from, next, '/login')
      }
    } else {
      // 如果没有配置则认为不需要拦截
      next()
    }
  })
}
