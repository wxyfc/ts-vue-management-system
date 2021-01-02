/* eslint-disable */
// @ts-nocheck
import { RouteConfig } from 'vue-router'
import { inspectType } from '@function/utilsFunction.ts'
import { userInfo } from '@function/handlerVuex.ts'

interface CHILDREN {
  path?: string;
  name?: string;
  component?: any;
  redirect?: string;
  children?: CHILDREN[];
  meta: META;

}

interface META {
  role: string[];
}

const recursion = (route: CHILDREN) => {
  // 读取配置中用户的角色字段来获取用户的角色值
  const user: string[] = userInfo()[process.env.VUE_APP_USER_IDENTITY_KEY]
  let current = false
  // 如果路由配置了meta role 才会进行拦截 没有配置说明不拦截
  if (user && user.length && route.meta && route.meta.role && route.meta.role.length) {
    current = (user.filter((x: string) => route.meta.role.includes(x))).length > 0
  } else {
    current = true
  }
  if (current) {
    if (route.children && route.children.length) {
      route.children = route.children.filter(res => recursion(res))
    }
    if (route.component && inspectType(route.component) === 'string') {
      let path: string
      let router: RouteConfig
      if (route.component.split('/')[0] === '@system') {
        path = route.component.split('/')[1]
        router = {
          path: '',
          component: () => import('@system/' + path)
        }
        route.component = router.component
      } else {
        path = route.component
        router = {
          path: '',
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
