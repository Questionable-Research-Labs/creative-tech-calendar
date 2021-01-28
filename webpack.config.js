const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader'
                }
            },
        ],
    },
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
    },
    plugins: [
    ]
}
