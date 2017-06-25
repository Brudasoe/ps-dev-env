import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.LoaderOptionsPlugin({
    debug: true,
    noInfo: false
  })],
  module: {
    rules: [
      {test: /\.js$/,
      use: [{
        loader:'babel-loader',
        options: {
          ignore:'/node_modules'
        }
      }]
    },

      {test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader:'css-loader'
      }]
      }
    ]}
}
