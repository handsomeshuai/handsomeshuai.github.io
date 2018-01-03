let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let srcPath = './src/views/dh-appactivity/hitPlane/';
let outputPath = './dev/dh-appactivity/hitPlane';

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: srcPath + 'main.js',
    },
    output: {
        path: path.resolve(outputPath),
        filename: '[name].js?[hash]',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
            {
                test: /\.(less|css)$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'less-loader', 'postcss-loader'],
                    fallback: 'style-loader'
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jqeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '1024',
                        name: '[name].[ext]',
                        outputPath: 'imgs/'
                    }
                }]
            },
            {
                test: /\.vue/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-withimg-loader'
                }]
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     __httpHost__: 99
        // }),
        new htmlWebpackPlugin({
            template: srcPath + 'index.html',
            filename: 'index.html',
            chunks: ['main']
        }),

        new ExtractTextWebpackPlugin('assets/[name].css'),
        new OptimizeCssAssetsPlugin(),
        // new CopyWebpackPlugin([{
        //     from: srcPath + '/mock',
        //     to: 'mock'
        // }])
    ],
    resolve: {
        alias: {
            'vue':
                'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: './unity/dh-appactivity/hitPlane',
        // proxy: {
        //     '/activity/wechat/redeemcode/': {
        //         target: 'http://218.205.115.242:18080/',
        //         host: 'http://218.205.115.242:18080/',
        //         changeOrigin: true,
        //         secure: false
        //     }
        // }

    }
};

