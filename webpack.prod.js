const merge = require('webpack-merge')
const common = require('./webpack.common')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // inline-source map for production mode
  plugins: [
    new htmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root'
    }),
    new DefinePlugin({
      FEATURE_FLAG: JSON.stringify({
        INPERSONSIGNING: true
      })
    })
  ]
})
