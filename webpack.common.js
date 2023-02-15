const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another.js',
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
      chunks: ['index', 'shared'],
    }),
    new HtmlWebpackPlugin({
      filename: 'another.[contenthash].html',
      template: './src/another.html',
      chunks: ['another', 'shared'],
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
