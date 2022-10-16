const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");


module.exports = {

    entry:
    {
        index: path.resolve(__dirname, 'src/testingScript.js')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },


    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin(),],

    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin(),]
    },
    
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/i,
                type: "asset/resource",
            },
        ],
    },


    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },

}