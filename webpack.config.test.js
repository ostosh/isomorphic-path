const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './test/index.ts',
    output: {
        path: path.resolve(__dirname, 'temp/test'),
        filename: 'runner.js',
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
