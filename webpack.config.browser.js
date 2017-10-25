const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './lib/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'isomorphic-path.browser.js',
        library: 'isomorphic-path.browser',
        libraryTarget: 'umd'
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
