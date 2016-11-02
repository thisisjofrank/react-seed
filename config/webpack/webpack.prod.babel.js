const webpack                       = require('webpack')
const ExtractTextPlugin             = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin             = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const OfflinePlugin                 = require('offline-plugin')

const configure = require('./config')
const pkg       = require('../../package.json')

const config = {
  production: true,
  devtool:    'source-map',

  output: {
    path:       './dist',
    publicPath: '',
    filename:   '[name].[hash].js'
  },

  resolve: {
    alias: {
      'react':     'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  moduleRules: [
    {
      test:   /\.(css|pcss)$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style',
        loader:         ['css?modules&sourcemap&importLoaders', 'postcss']
      })
      // TODO: Update when plugin uses new syntax
      // use:  [
      //   {
      //     loader:  'css',
      //     options: {
      //       module:         true,
      //       sourceMap:      true,
      //       localIdentName: '[hash:base64]',
      //       importLoaders:  1
      //     }
      //   },
      //   'postcss'
      // ]
    }
  ],

  plugins: [
    // Important to keep React file size down
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false
    }),
    new webpack.optimize.DedupePlugin(),
    // Uncomment for multi-chunk apps
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:      'commons',
    //   minChunks: Infinity
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress:   {warnings: false},
      comments:   false,
      sourceMaps: false
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      production: true,
      title:      pkg.description,
      name:       pkg.name,
      template:   './config/template.html'
    }),
    new OfflinePlugin({
      events:         true,
      updateStrategy: 'all',
      caches:         {
        main: ['index.html', 'app.*.css', 'app.*.js']
      },

      AppCache: false
    })
  ]
}

module.exports = configure(config)
