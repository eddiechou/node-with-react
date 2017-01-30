'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'client/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/front'),
    publicPath: '/',
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // new ExtractTextPlugin('[name]-[hash].min.css'),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //     screw_ie8: true
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }]
  }

  // , {
    //   test: /\.css$/,
    //   loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    // }]
  // ,
  // postcss: [
  //   require('autoprefixer')
  // ]
}
