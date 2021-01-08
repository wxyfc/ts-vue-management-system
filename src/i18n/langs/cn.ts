import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui 国际化 中文
const cn = {
  navbar: {
    title: {
      close: '关闭',
      'set habit': '设置使用习惯',
      'main theme': '默认主题',
      'high theme': '高亮主题',
      'dull theme': '暗沉主题',
      'large fontsize': '较大字号',
      'medium fontsize': '中等字号',
      'small fontsize': '较小'
    }
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
      'demo-drag-form': '演示拖拽表单',
      'demo-ele-pagination-table': '演示表格',
      'demo-3': '演示3',
      'demo-4': '演示4',
      'demo-5': '演示5',
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
      account: '账号',
      password: '密码',
      'select language': '选择语言',
      'select theme': '选择主题',
      'select fontsize': '选择字号',
      'select layout': '选择布局',
      'select navigation': '额外导航'
    }
  },
  placeholder: {
    form: {
      account: '请输入账号',
      password: '请输入密码'
    }
  },
  context: {
    button: {
      login: '登录',
      sure: '确定',
      'login title': '后台管理'

    }
  },
  'in a word': {
    'sure set habit': '确认设置吗?点击确定将会帮您重新加载布局,这将会丢失您之前加载过的数据!'
  },
  ...zhLocale
}
export default cn
