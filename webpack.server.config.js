const path = require('path');
const base = require('./webpack.base.config');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(base, {
  target: "node",
  entry: {
    main: './src/index-server.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/server/'),
    // library: 'index',
    // libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.css|s[ac]ss$/i,
        use: ['css-loader'],
      },
    ],
  },
});
