const webpack = require('webpack');

module.exports = {
  plugins: [
    // short-circuits all Vue.js warning code
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
  // minify with dead-code elimination
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  // optimize module ids by occurrence count
  new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
