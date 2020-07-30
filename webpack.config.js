let path = require('path')
let webpack = require('webpack')
let production = process.env.NODE_ENV === 'production'
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let resolve = (uri) => path.resolve(__dirname, uri)


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]_[hash:3].js"
    },
    mode: production ? 'production' : 'development',
    devServer: {
        hot: true,
        hotOnly: true,
        port: 9874,
        contentBase: './dist',
        host: "localhost",
        proxy: {

        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: { loader: 'vue-loader' }
            },
            {
                test: /\.js$/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.css$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.styl|stylus$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.svg$/,
                include: [resolve('./src/icon')],
                use: {
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: 'icon-[name]'
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                exclude: [resolve('./src/icon')],
                use: {
                    loader: 'url-loader', options: {
                        name: '[name].[ext]',
                        outputhPath: 'images/',
                        limit: 1024
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.join(__dirname, './src'),
            // '#': path.join(__dirname, './src/components'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            title: "my Cli"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:4].css'
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'Vue': 'vue'
        })
    ]
}