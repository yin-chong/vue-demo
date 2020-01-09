/* eslint-disable new-parens */
const isProdBuild = process.env.NODE_ENV === 'production'
const isDevBuild = !isProdBuild // process.env.NODE_ENV === 'dev'

const publicPath = isDevBuild ? '' : ''
const outputDir = isDevBuild ? 'output' : 'output'
const lintOnSave = false
const plugins = []

if (isDevBuild) {
  // plugins.push(new BundleAnalyzerPlugin)
}

module.exports = {
  lintOnSave,
  publicPath,
  outputDir,
  configureWebpack: {
    externals: {
      'BMap': 'BMap'
    },
    output: {
      filename: '[name].[hash].bundle.js'
    },
    resolve: {
      extensions: ['.js', '.json', '.vue']
    },
    plugins,
    devServer: {
      proxy: 'http://dev.test.baidu.com:8080'
    }
  },

  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].minimize = isProdBuild
        return args
      })
  }
}
