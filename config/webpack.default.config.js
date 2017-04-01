const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, '../app'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader']
      }
    ]
  },

  resolve: {
    alias: {
      'vue': '../node_modules/vue/dist/vue.esm.js'
    }
  }
};
