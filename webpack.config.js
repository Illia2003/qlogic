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
      {
        test: /\.(woff|woff2|eot|otf|ttf|svg)?$/,
        type: "asset/resource",
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "videos/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
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
    publicPath: "/",
    assetModuleFilename: "images/[name][ext]",
    clean: true,
  },
  devServer: {
    static: "./dist",
    open: true,
  },
};
