import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui 国际化 中文
const cn = {
  navbar: {
    title: {
      close: '关闭'
    },
    test: '测试'
  },
  tip: {
    error: {
      page: '找不到的错误页面'
    },
    'form rule': {
      'that item': '该项',
      rule: '规则',
      'not null': '不能为空',
      'must choose': '必须选择',
      'format error': '格式不正确',
      'length error': '长度不正确'
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
      'is-collapse': '是否折叠',
      'unique-opened': '只展开一个子菜单'
    }
  },
  label: {
    form: {
      account: '账户',
      password: '密码'
    }
  },
  placeholder: {
    form: {
      account: '请输入账户',
      password: '请输入密码'
    }
  },
  context: {
    button: {
      login: '登录'
    }
  },
  ...zhLocale
}
export default cn
