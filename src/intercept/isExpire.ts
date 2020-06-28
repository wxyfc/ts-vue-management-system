/* eslint-disable */
// @ts-nocheck
/*
*  是否过期
*  通过vuex中存贮的角色最后操作时间进行判断该角色是否已经过期
* */

import router from '@router'
import { userInfo } from '@function/handlerVuex'

export default function () {
  router.beforeEach((to, from, next) => {
    console.log(userInfo())
    next()
  })
}
