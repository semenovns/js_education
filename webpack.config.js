const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    entry:
    {
        index: path.resolve(__dirname, 'src/testingScript.js')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),       
    ],

    rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader",],
        },
      ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },

}