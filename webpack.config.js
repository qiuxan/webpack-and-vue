let webpack = require('webpack');
let path = require('path');

module.exports={
    mode: 'development',


    entry: {
        app: './resources/assets/js/app.js',
    },

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        publicPath: './public'
    },

};