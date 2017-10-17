var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports =
  [{
    test: /\.scss$/,
    use: [{
      loader: "style-loader" // creates style nodes from JS strings
    }, {
      loader: "css-loader" // translates CSS into CommonJS
    }, {
      loader: "sass-loader" // compiles Sass to CSS
    }, {
      loader: "ts-loader" // compiles Sass to CSS
    }]
  }, {
    test: /\.ts$/,
    use: 'ts-loader'
  }];
