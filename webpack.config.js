const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require('fs');
const babelrc = fs.readFileSync('./.babelrc');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
	entry: [
    'webpack/hot/only-dev-server',
	  './src'
	],
	output: {
		path: './public/dist',
		filename: '[name].js',
		publicPath:'/public/dist/'
	},
  resolve:{
    root:'/',
    extensions:["",".js",".jsx"]
  },
	devServer: {
		inline: true,
		port: 8080,
    hot: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
        loaders: ['react-hot', 'babel?'+babelrc]
			},
			{
			  test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&localIdentName=[local]___[hash:base64:5]")
			}
    ]
	},
	plugins: [
//    	new StaticSiteGeneratorPlugin('main', locals.routes),
    new ExtractTextPlugin("style.css")/*,
    new webpack.HotModuleReplacementPlugin()*/
  ]	
};