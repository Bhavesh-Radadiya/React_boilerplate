var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8082',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  devtool: 'sourceMap',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-smart-import'),
                require('autoprefixer'),
              ]
            }
          }
        ]
      })
    },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist/assets',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins:[
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks:true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  devServer: {
    host: '0.0.0.0',
    contentBase: './dist',
    hot:true,
    historyApiFallback: true
  }
};
