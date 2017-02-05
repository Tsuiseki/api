const { resolve }  = require('path');

module.exports = function(env) {
  return {
    entry: resolve(__dirname, 'src', 'server.js'),
    target: 'node',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
    },
    externals: [
      'mongoose',
      'express',
      'body-parser',
      '@tsuiseki/common'
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader'
          ],
          exclude: /node_modules/
        }
      ]
    }
  }
}
