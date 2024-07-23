const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(pdf|png|jpe?g|bmp|webp|gif|ico|json)$/i,
                include: path.join(__dirname, 'public'),
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                include: path.join(__dirname, 'public'),
                use: ['svg-inline-loader']
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        allowedHosts: "all",
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/images/avatar-nobg.png'
        })
    ],
    optimization: {
        moduleIds: 'determinisitic',
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: 'single'
      },
}