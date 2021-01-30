const path = require('path')
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
    entry: './src/index.js',
    resolve: {
        extensions: ['.js']
    },
    optimization: {
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            })
        ]
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
    devServer: {
        writeToDisk: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        stats: statSettings

    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {}
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CompressionPlugin({
            test: /\.(js|css)/
        }),
        new TerserPlugin(),
    ],
    stats: statSettings
}
