const path = require('path');
const webpack = require('webpack');
const version = require("./package.json").version;
const banner =
  "vue-markdown-plus v" + version + "\n" +
  "https://github.com/6etacat/vue-markdown-plus\n" +
  "MIT License";

module.exports = {
  entry: './src/VueMarkdownPlus.js',
  target: 'node',
  mode: 'production',
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-markdown-plus.common.js',
    library: 'VueMarkdownPlus',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};