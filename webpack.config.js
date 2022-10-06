const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/testingScript.js'),
   
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
      },
      mode : 'production',
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Js Education Page',
          filename: 'index.html',
          template: 'src/index.html'
        })
      ],
      devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
}