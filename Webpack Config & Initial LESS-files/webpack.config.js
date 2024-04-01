const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/less/index.less'],
    output: {},
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets/images', to: './src/assets/images' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],
    devServer: {
        compress: true,
        port: 9000
    },
};
