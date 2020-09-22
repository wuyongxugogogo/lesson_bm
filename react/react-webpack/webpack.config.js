const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const HappyPack = require('happypack');
const webpack = require('webpack');
// 1. 分离基础库（react/react-dom）可以缓存时间比较久的
// 业务代码：经常变动的

// extenals

const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDom'
  },
  // chunk 项目大
  // Dll 既可以分离基础库 又可以提升打包速度
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',   // all 所有的 import // async import() 
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //       },
  //     }
  //   }
  // },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        // use: ['babel-loader'],
        use: 'happypack/loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]'
            }
          }
        }
      ],
        //css-loader css 这个模块
        //style-loader css内容 插到html 的 style标签之内
        // css-module
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/ip6x2.png', to: './' },
      ],
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new MiniCssExtractPlugin(),
    new HappyPack({
      // 3) re-add the loaders you replaced above in #1:
      loaders: [ 'babel-loader']
    }),
  ]
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹