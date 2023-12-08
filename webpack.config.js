const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: "./main.js",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
