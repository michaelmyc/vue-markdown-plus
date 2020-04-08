const path = require('path');
const webpack = require('webpack');
const version = require("./package.json").version;
const banner =
  "vue-markdown-plus v" + version + "\n" +
  // "https://github.com/miaolz123/vue-markdown\n" +
  "MIT License";

module.exports = {
  entry: './src/build.js',
  target: 'web',
  mode: 'production',
  performance: { hints: false },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-markdown-plus.js',
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
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
};
