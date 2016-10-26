const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// App files location
const PATHS = {
  app: path.join(__dirname, '../src/js'),
  styles: path.join(__dirname, '../src/styles'),
  build: path.join(__dirname, '../build')
};

const plugins = [
  // Shared code
  new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
  // Avoid publishing files when compilation fails
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
];

module.exports = {
  env: process.env.NODE_ENV,
  entry: {
    app: path.join(PATHS.app, 'main.jsx'),
    vendor: ['react'],
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  stats: {
    colors: true,
    reasons: true,
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
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=10000'
      },
    ]
  },
  plugins,
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'eval',
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
