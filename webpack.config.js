const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = [
	'about',
	'services',
	'gallery',
	'contact',
	'404',
	'privacy',
];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
	return new HtmlWebpackPlugin({
		template: `./src/${name}.html`, // relative path to the HTML files
		filename: `${name}.html`, // output HTML files
		// chunks: [`${name}`], // respective JS files
	});
});

const config = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	devServer: {
		watchFiles: ['src/**/*'],
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.html$/i,
				use: {
					loader: 'html-loader',
					// options: {
					// 	sources: {
					// 		list: [
					// 			// Configure which tags to process
					// 			{ tag: 'video', attribute: 'src', type: 'src' },
					// 		],
					// 	},
					// },
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
		}),
	].concat(multipleHtmlPlugins),
};

module.exports = config;
