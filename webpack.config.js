const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'out.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ /* your config */ })
    ]
  }
}
