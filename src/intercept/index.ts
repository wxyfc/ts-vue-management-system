// @ts-nocheck
// 总路由拦截
import isInitPorject from './isInitPorject'
import isCurrent from './isCurrent'
import isExpire from './isExpire'

export default function () {
  /*
  *  是否初始化工程路由拦截
  *  没有进行过初始化的话会进行一些事件;如:localStorage存贮同步到vuex
  * */
  isInitPorject()
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
