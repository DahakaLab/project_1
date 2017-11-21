const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        root: './src/pageContent/root.js',
        notebooks: './src/pageContent/notebooks.js',
        viewText: './src/pageContent/viewText.js'
    },
    devServer: {
        contentBase: './public'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js',
        publicPath: '/public'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
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
