var webpack = require('webpack');

var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    //target: 'web',
    //debug: true,
    //devtool: 'source-map',
    context: __dirname + '/lib/',
    watch: true,
    entry: __dirname + '/lib/index.jsx',
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js',
        library: 'ReactTopui',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
       // modulesDirectories: [  '../node_modules'],
    },
    module: {
        loaders: [
        //{ test: /\.css/, loader: 'style-loader!css-loader' },
        //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
        { test: /\.jsx$/, loader: '../node_modules/jsx-loader' }
        ]    
    },
    externals: {
        'react': true,
        'react/addons': true
    },
    plugins: [
        new UglifyJsPlugin()
    ]
    };
