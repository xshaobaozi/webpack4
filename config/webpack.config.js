const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: 
        [
            'webpack-hot-middleware/client?noInfo=true&reload=true', 
            path.resolve(__dirname, '../src/index.js')
        ]
    ,
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, './../src/'),
            'js': path.resolve(__dirname, './../src/js'),
            'sass': path.resolve(__dirname, './../src/sass'),
            'image': path.resolve(__dirname, './../src/image'),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         hmr: process.env.NODE_ENV === 'development',
                    //     }
                    // },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(png|svg|jpg|gift)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        //     ignoreOrder: false, 
        // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './../src/index.html'),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}