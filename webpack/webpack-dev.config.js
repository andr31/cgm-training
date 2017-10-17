var path = require('path');
var webpack = require('webpack');
var loaders = require("./webpack-loaders");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var PATHS = {
  app: path.join(__dirname, 'src/index.dev.ts'),
  build: path.join(__dirname, 'builds'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  devtool: "eval-source-map",
  watch: true,
  cache: true,
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server'
    ]
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: PATHS.build,
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
    devtoolModuleFilenameTemplate: function (info) {
      return "file:///" + info.absoluteResourcePath;
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.scss']
  },
  module: {
    rules: loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("app.css", {allChunks: true})
  ]
};
