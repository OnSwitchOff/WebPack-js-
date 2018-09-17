const path = require ('path');

module.exports={
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					'tee-loader?label=after',
					{
						loader: 'babel-loader',
						options:{
							babelrc:false
						}
					},
					{
						loader: 'tee-loader',
						options:{
							label:'before'
						}
					}
				]// tee-loader(babel-loader(source))
			},
			{
				test: /\.css$/,
				exclude:/node_modules/,
				use: [
			    	{
			    		loader: 'css-loader',
			    		options: {
			        		modules: true,
			        		localIdentName: path.resolve(__dirname,'./dist/css/style.css')
			    		}
			    	}
				]
			}

		]
	},
	resolveLoader:{
		alias:{
			"tee-loader": path.resolve(__dirname, 'tee-loader.js')
		}
	}
}