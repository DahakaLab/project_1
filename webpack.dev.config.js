const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './src/index.js',
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public'
    },
    module: {
        rules: [
            {

                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: "es2015"
                }
            }
        ]
    }
};