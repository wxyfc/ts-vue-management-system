/* eslint-disable */

// @ts-nocheck
import Vue from 'vue'
import { RouteConfig } from 'vue-router'
import { inspectType } from '@function/utilsFunction'

interface CHILDREN {
  path?: string;
  name?: string;
  component?: any;
  redirect?: string;
  children?: CHILDREN[];
  meta: object;
}

const recursion = (route: CHILDREN) => {
  if (route.children && route.children.length) {
    route.children.map(res => recursion(res))
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

export default function (route: CHILDREN[]) {
  return route.map(recursion)
}
