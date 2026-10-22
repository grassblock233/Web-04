const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 部署到 GitHub Pages 项目页时，资源需要从 /<仓库名>/ 下加载；
  // 由 CI 通过 PUBLIC_PATH 环境变量注入，本地构建默认使用根路径。
  publicPath: process.env.PUBLIC_PATH || '/'
})
