const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  entry: {
    main: './src/index-client.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/client/'),
    // library: 'index',
    // libraryTarget: 'umd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css|s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // 10kb
            },
          },
        ],
      },
    ],
  },
});
