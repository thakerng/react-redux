const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
	    './src'
	],
	output: {
		path: './public/dist',
		filename: '[name].js',
		publicPath:'/public/dist/'
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader",
                "css-loader?modules&localIdentName=[local]___[hash:base64:5]") }
    ]
	},
	plugins: [
//    	new StaticSiteGeneratorPlugin('main', locals.routes),
    	new ExtractTextPlugin("style.css"),
  ]	
};