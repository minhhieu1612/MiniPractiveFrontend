const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestWebpackPlugin = require('webpack-manifest-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const { map } = require('lodash');

module.exports = {
  entry: {
    index: { import: './src/app.js', dependOn: 'shared' },
    another: { import: './src/another.js', dependOn: 'shared' },
    shared: 'lodash',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash:5].bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'html webpack plugins',
      template: './src/view/index.html'
    }),
    new WebpackManifestPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' }
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        use: [
          { loader: 'file-loader' },
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ]
  }
}