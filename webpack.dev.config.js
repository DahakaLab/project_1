const path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './public'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}