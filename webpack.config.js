const path = require('path');

module.exports = {
  target: 'node',
  devtool: 'inline-source-map',
  entry: './lib/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'isomorphic-path.js',
    library: 'isomorphic-path',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      }
    ]
  }
}
