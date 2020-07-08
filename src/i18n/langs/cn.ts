import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui 国际化 中文
const cn = {
  navbar: {
    test: '测试',
    close: '关闭'
  },
  tip: {
    error: {
      page: '找不到的错误页面'
    }
  },
  menu: {
    title: {
      'async router': '异步路由',
      'menu router': '菜单路由',
      undefined: '未定义'
    },
    setting: {
      'adjust menu mode': '调整菜单模式',
      'unique-opened': '只展开一个子菜单'
    }

  },
  ...zhLocale
}
export default cn
