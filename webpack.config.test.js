const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
  		nodeRunner: './test/Runner.Node.ts',
  		browserRunner: './test/Runner.Browser.ts'
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
