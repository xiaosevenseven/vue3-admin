module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'perf', name: 'perf: 改善性能' },
    { value: 'test', name: 'test: 测试' },
    { value: 'build', name: 'build: 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）' },
    { value: 'chore', name: 'chore: 变更构建流程或辅助工具' },
    { value: 'revert', name: 'revert: 代码回退' }
  ],
  // 步骤
  messages: {
    type: '选择一种你的提交类型:',
    customScope: '请输入修改的范围(可选):',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(y/n)'
  },
  subjietLimit: 100
}
