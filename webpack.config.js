var webpack = require('webpack')
var path = require('path')
module.exports = {
  // 这是一个主文件包括其他模块
  entry: {
    filter:'./src/filter.js',
  },
  // 编译的文件路径
  output: {
      //`dist`文件夹
    path: path.resolve(__dirname, './dist'),
    // 文件 `build.js` 即 dist/build.js
    filename: '[name].js',
  },
  module: {
    // 一些特定的编译规则
    loaders: [
      {
        // 让webpack去验证文件是否是.js结尾将其转换
        test: /\.js$/,
        // 通过babel转换
        loader: 'babel-loader',
        // 不用转换的node_modules文件夹
        exclude: /node_modules/
      },
       {
          test: /\.vue$/,
          loader: 'vue-loader'
       }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ]
}
