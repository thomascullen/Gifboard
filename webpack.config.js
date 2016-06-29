var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './app/app'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};

export default config;
