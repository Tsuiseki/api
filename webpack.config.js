const { resolve }  = require('path');

module.exports = function(env) {
  return {
    entry: resolve(__dirname, 'src', 'index.js'),

    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
    },

    externals: {
      mongoose: 'mongoose'
    },

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
