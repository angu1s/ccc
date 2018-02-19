const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'main.css',
});

const config = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    extractSass,
  ],
};

module.exports = config;
