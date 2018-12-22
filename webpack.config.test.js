const path = require('path');

module.exports = {
    target: 'node',
    devtool: 'inline-source-map',
    entry: {
  		nodeRunner: './test/Runner.Node.ts'
  	},
    output: {
        path: path.resolve(__dirname, 'temp/test'),
    		filename: '[name].js',
        library: '[name]',
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
