const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclide: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  }
};
