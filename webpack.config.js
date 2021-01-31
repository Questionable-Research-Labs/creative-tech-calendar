const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


process.traceDeprecation = true;

const statSettings = {
    colors: true,
    hash: false,
    version: false,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
}

module.exports = {
    target: "web",
    mode: 'development',
    cache: true,
    entry: {
        index: './client/index.js',
        calender: './client/calender.js',
        embed: './client/embed.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    "css-loader",
                    {
                        loader: 'postcss-loader'
                    }
                ],
            },
            {
                test: /\.css$/i,
                exclude: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    "css-loader",
                ],
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {}
        }),
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "./client/index.html",
            chunks: ["index","calender"]
        }),
        new HtmlWebpackPlugin({
            filename: './embed.html',
            template: './client/embed.html',
            chunks: ["embed","calender"]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    stats: statSettings
}
