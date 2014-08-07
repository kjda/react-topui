var webpack = require('webpack');

var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    target: 'web',
    //debug: true,
    //devtool: 'source-map',
    context: __dirname + '/lib/',
    watch: true,
    entry: './index.jsx',
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js',
        library: 'TopUI',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
        { test: /\.jsx$/, loader: '../node_modules/jsx-loader' }
        ]    
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    },

    plugins: [
        new UglifyJsPlugin()
    ]
};
