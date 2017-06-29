const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/main.jsx',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  devtool: 'source-maps'
  // node: {
  //   fs: "empty",
  //   net: "empty",
  //   child_process: "empty"
  // }
};
