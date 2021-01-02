/* eslint-disable */
// @ts-nocheck
import VueRouter from 'vue-router'
import router from '@router/index.ts'

export default function () {
  const routerMethods = ['push', 'replace']
  routerMethods.forEach(method => {
    let originalCall = VueRouter.prototype[method]
    VueRouter.prototype[method] = function (location, onResolve, onReject) {
      if (onResolve || onReject) {
        return originalCall.call(this, location, onResolve, onReject)
      }
      return originalCall.call(this, location).catch(err => {
        console.log(err)
      })
    }
  })

  router.onError((err) => {
    console.log((err))
  })
}
