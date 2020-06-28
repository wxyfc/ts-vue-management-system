/* eslint-disable */
// @ts-nocheck
/*
*  是否通行
*  通过vuex中存贮的角色进行判断该角色的路由是否符合
* */

import router from '@router'
import { userInfo } from '@function/handlerVuex'

export default function () {
  router.beforeEach((to, from, next) => {
    console.log(userInfo())
    next()
  })
}
