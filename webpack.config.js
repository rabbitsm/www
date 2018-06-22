const path = require('path')

const watchOptions = {
  ignored: /(node_modules)/
}

const browserConfig = {
  entry: './src/browser/',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  watchOptions
}

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] }
      }
    ]
  },
  watchOptions
}

module.exports = [browserConfig, serverConfig]