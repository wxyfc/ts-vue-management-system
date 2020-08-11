// @ts-nocheck
// 总路由拦截
import isInitProject from './isInitProject'
import isInitRouter from './isInitRouter'
import isCurrent from './isCurrent'
import isExpire from './isExpire'

export default function () {
  /*
  *  是否初始化工程路由拦截
  *  没有进行过初始化的话会进行一些事件;如:localStorage存贮同步到vuex
  * */
  isInitProject()
  /*
  *  是否初始化路由路由拦截
  *  没有进行过初始化路由,将初始化路由
  * */
  isInitRouter()
  /*
  *  是否过期
  *  通过vuex中存贮的角色最后操作时间进行判断该角色是否已经过期
  * */
  isExpire()
  /*
  *  是否通行
  *  通过vuex中存贮的角色进行判断该角色的路由是否符合
  * */
  isCurrent()
}
