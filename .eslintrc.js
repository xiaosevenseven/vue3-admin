module.exports = {
  root: true,
  env: {
    node: true
  },
  // ESLint 中配置基础需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  /**
   * 错误级别分三种
   * “off”或者0：关闭规则。
   * “warn”或者1：打开规则，并且作为一个警告（不影响exit code）。
   * “error”或者2：打开规则，并且作为一个错误（exit code将会是1）。
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
