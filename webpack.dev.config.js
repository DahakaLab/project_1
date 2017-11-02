const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        index: './src/pageContent/index.js',
        lolkek: './src/pageContent/lolkek.js',
        viewText: './src/pageContent/viewText.js'
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js',
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    }
};