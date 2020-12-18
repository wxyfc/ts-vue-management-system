/* eslint-disable */
// @ts-nocheck
/*
*  是否通行
*  通过vuex中存贮的角色进行判断该角色的路由是否符合
* */

import router from '@router'
import { userInfo, systemInfo } from '@function/handlerVuex'
import nextError from './nextError'

export default function () {
  router.beforeEach((to, from, next) => {

    let user = userInfo()[process.env.VUE_APP_USER_IDENTITY_KEY]
    // 如果路由配置了meta role 才会进行拦截 没有配置说明不拦截
    if (to.meta && to.meta.role && to.meta.role.length) {
      if ((user.filter(x => to.meta.role.includes(x))).length > 0) {
        // 匹配的路由符合角色
        next()
      } else {
        nextError(to, from, next)
      }
    } else {
      // 没有配置路由
      next()
    }

  })
}
