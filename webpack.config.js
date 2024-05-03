const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "QLogic",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  output: {
    clean: true,
  },
  devServer: {
    static: "./dist",
    open: true,
  },
};
