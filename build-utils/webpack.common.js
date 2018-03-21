const commonPaths = require("./common-paths");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "[hash].bundle.js",
    path: commonPaths.outputPath,
    publicPath: "./"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};

module.exports = config;
