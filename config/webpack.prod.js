var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    // publicPath: '/Users/miguel/Documents/Projects/gapmaps-demographics-bitbucket/dist/',
    publicPath: '/Users/miguel/Sites/gapmaps/includes/js/ng/demographics/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618

      beautify: false, //prod
      dead_code: false, //debug  

      // mangle: {
      //    screw_ie8 : true,
      //   keep_fnames: true
      // }

      compress: {
        screw_ie8: true
      }, //prod
      // exclude: ['/materialize.js/g'],
      comments: false //prod

    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
