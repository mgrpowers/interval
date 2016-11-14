var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: './app/index.js'
  },
  output: {
    path: __dirname + '/dist',
    chunkFilename: "[id].js",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ]
  },
  sassLoader: {
    includePaths: ["./sass"]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  externals: {
    'Config': JSON.stringify(process.env.ENV === 'production' ? {
      serverUrl: ""
    } : {
      serverUrl: ""
    })
  }
}
