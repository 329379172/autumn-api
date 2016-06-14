var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.jade/,
                loader: 'jade'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    externals: {
    }
};
