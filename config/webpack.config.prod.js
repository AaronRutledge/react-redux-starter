const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
require("babel-core/register");
require("babel-polyfill");
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
// App files location
const PATHS = {
  app: path.join(__dirname, '../src/js'),
  styles: path.join(__dirname, '../src/styles'),
  build: path.join(__dirname, '../build'),
};

const plugins = [
  // new CopyWebpackPlugin([
  //   {
  //     from: PATHS.images,
  //     to: 'images',
  //   },
  //]),
  // Shared code
  new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
  // Avoid publishing files when compilation fails
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
];

module.exports = {
  entry: {
    app: ['babel-polyfill', path.join(PATHS.app, 'main.jsx')],
    vendor: ['react'],
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  stats: {
    colors: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: PATHS.app
      },
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=10000'
      },
    ]
  },
  plugins,
  devtool: 'source-map'
};
