var webpack = require('webpack');
var path = require('path');

//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {

	//页面入口文件配置
	entry: [
		'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/js/index' // Your appʼs entry point
	],

	//入口文件输出配置
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: 'index.js',
		publicPath: '/dist/js/'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				enclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				loaders: ['react-hot', 'jsx-loader?harmony']
			}
		]
	},

	//插件项
	plugins: [
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
		//commonsPlugin
	]
}