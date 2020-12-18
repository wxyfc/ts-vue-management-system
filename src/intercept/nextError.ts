/* eslint-disable */
// @ts-nocheck
import i18n from '@/i18n'
import { Message } from 'element-ui'

export default function (to, from, next: Function, path = '/404') {
  console.log('错误路由处理')
  const error = process.env.VUE_APP_ERROR_PAGE_JUMP
  // next(new Error()) // 进行跳转到要跳转的路由
  if (error === 'true' || path !== '/404') {
    next({ path, replace: true })
  } else {
    Message({ message: i18n.tc('tip.error.page'), type: 'error' })
    next({ path: from.path, replace: true })
  }
}
