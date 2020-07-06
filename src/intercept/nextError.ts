import i18n from '@/i18n'
import { Message } from 'element-ui'

export default function (next: Function) {
  console.log('错误路由处理')
  const error = process.env.VUE_APP_ERROR_PAGE_JUMP
  // next(new Error()) // 进行跳转到要跳转的路由
  if (error === 'true') {
    next({ path: '/404', replace: true })
  } else {
    Message({ message: i18n.tc('tip.error.page'), type: 'error' })
    next(false)
  }
}
