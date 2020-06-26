module.exports = {
  root: false,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': 'off',
    'no-undef': 'off',//不能有未定义的变量
    'no-undef-init': 'off',//变量初始化时不能直接给它赋值为undefined
    'no-undefined': 'off',//不能使用undefined
    'no-unused-vars': 0,
    'dot-notation': 0,//避免不必要的方括号
  }
}
