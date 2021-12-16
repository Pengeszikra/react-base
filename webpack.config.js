const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: 'eval-cheap-source-map',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.(js|jsx|ts)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.(css|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.html$/, use: "html-loader" },
      { test: /\.(glsl)$/, use: "webpack-glsl-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new webpack.ProvidePlugin({process: 'process/browser'}),
    new CopyPlugin({
      patterns: [
        { from: "./src/static", to: "static" },
      ],
    }),    
  ],
};