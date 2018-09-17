'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const babelLoader = require('./babelLoader');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = function(env){
	const isDevelopment=env==='development';
	console.log(`This is a ${isDevelopment?'development':'production'} build`);

	const baseConfig = {
		mode:'production',
		entry: './app/app.js',
		output: {
		    path: path.resolve(__dirname, 'app/dist'),
		    filename: 'bundle.js',
		    publicPath: "/dist/"
		},
		plugins:[
			new webpack.DefinePlugin({
				ENV_IS_DEVELOPMENT: isDevelopment,
				ENV_IS: JSON.stringify(env),
			}),
			new webpack.ProvidePlugin({
		    	$: 'jquery',
		    	jQuery: 'jquery',
		    	'window.jQuery': 'jquery'
		    })
		]
	};

	if (isDevelopment) {
		return merge(baseConfig,{
			mode:'development',
			devServer:{
				contentBase: path.resolve(__dirname,'app'),
				publicPath: "/dist/",
				watchContentBase: true,
				hotOnly: true,
				overlay:{
					warnings:true,
					errors:true
				},
				//host:"0.0.0.0"
			},
			plugins:[
				new webpack.NpmInstallPlugin(),
				new webpack.NamedModulesPlugin(),
				new webpack.HotModuleReplacementPlugin()/*,
				{
					apply(compiler){
						compiler.plugin('done',function(params){
							console.log(require('util').inspect(compiler.options));
						});
					}
				}*/
			]
		});
	}
	else{
		return merge(baseConfig,babelLoader);
	}
};
