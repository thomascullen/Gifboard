import webpack from 'webpack';
import devConfig from './webpack.config';

const config = {
  ...devConfig,
  plugins: [
    ...devConfig.plugins,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
}

export default config
