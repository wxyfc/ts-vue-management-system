/* eslint-disable */

// @ts-nocheck
import Vue from 'vue'
import { RouteConfig } from 'vue-router'
import { inspectType } from '@function/utilsFunction'
import { userInfo } from '@function/handlerVuex'

interface CHILDREN {
  path?: string;
  name?: string;
  component?: any;
  redirect?: string;
  children?: CHILDREN[];
  meta: object;
}

const recursion = (route: CHILDREN) => {
  // 读取配置中用户的角色字段来获取用户的角色值
  let user = userInfo()[process.env.VUE_APP_USER_IDENTITY]
  let current = false
  // 如果路由配置了meta role 才会进行拦截 没有配置说明不拦截
  if (user && user.length && route.meta && route.meta.role && route.meta.role.length) {
    current = (user.filter(x => route.meta.role.includes(x))).length > 0
  } else {
    current = true
  }
  if (current) {
    if (route.children && route.children.length) {
      route.children = route.children.filter(res => recursion(res))
    }
    if (route.component && inspectType(route.component) == 'string') {
      let path
      let router: RouteConfig
      if (route.component.split('/')[0] === '@system') {
        path = route.component.split('/')[1]
        router = {
          component: () => import('@system/' + path)
        }
        route.component = router.component
      } else {
        path = route.component
        router = {
          component: () => import('@view/' + path)
        }
        route.component = router.component
      }
    }
    return route
  }
}

export default function (route: CHILDREN[]) {
  return route.filter(recursion)
}
