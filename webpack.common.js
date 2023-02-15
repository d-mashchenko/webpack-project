const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'indexPage/index': {
      import: ['./src/index.js', './src/styles/style.scss'],
      dependOn: 'shared',
    },
    'anotherPage/another': {
      import: ['./src/another.js', './src/styles/another.scss'],
      dependOn: 'shared',
    },
    shared: ['lodash', 'moment'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.[contenthash].html',
      template: './src/index.html',
      chunks: ['indexPage/index', 'shared'],
    }),
    new HtmlWebpackPlugin({
      filename: 'another.[contenthash].html',
      template: './src/another.html',
      chunks: ['anotherPage/another', 'shared'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
