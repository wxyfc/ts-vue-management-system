// @ts-nocheck
// 总路由拦截
import isInitProject from './isInitProject.ts'
import isInitRouter from './isInitRouter.ts'
import isCurrent from './isCurrent.ts'
import isExpire from './isExpire.ts'
import routerError from './routerError.ts'

console.log('路由拦截初始化')
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
/*
* 路由错误处理
* */
routerError()
