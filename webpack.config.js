const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './lib/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'isomoprhic-path.js',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
      rules: [{
        test: /\.ts?$/,
        use: [{loader: 'ts-loader'}]
      }]
    }
}
