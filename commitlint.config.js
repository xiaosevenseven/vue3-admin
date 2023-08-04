module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  rules: {
    // 表示 git 提交的 type 必须在以下范围内
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下验证
      'always',
      // 泛型内容
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'chore',
        'revert'
      ]
    ],
    // subject 大小不做校验
    'subject-case': [0]
  }
}
