const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let htmlPageNames = [
	'about',
	'services',
	'gallery',
	'contact',
	'404',
	'privacy',
];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
	let chunks = ['main'];

	if (name === 'contact') {
		chunks.push('contact');
	}

	if (name === 'gallery') {
		chunks.push('gallery');
	}

	return new HtmlWebpackPlugin({
		template: `./src/${name}.html`, // relative path to the HTML files
		filename: `${name}.html`, // output HTML files
		chunks: chunks, // respective JS files
	});
});

const config = {
	entry: {
		index: './src/js/index.js',
		contact: './src/js/contact.js',
		main: './src/js/main.js',
		gallery: './src/js/gallery.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js', // Using [name] placeholder for dynamic filenames
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
					MiniCssExtractPlugin.loader,
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
				test: /\.(png|svg|jpg|jpeg|gif|mp4|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
			{
				test: /\.(webmanifest|xml|ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'favicons/[name][ext]',
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			chunks: ['main', 'index'], // Include 'main' and 'index' entry point in this HTML file
		}),
		...multipleHtmlPlugins, // array of html plugins
		new MiniCssExtractPlugin({
			filename: '[name].css', // Output CSS file name using
		}),
		new FaviconsWebpackPlugin('./src/images/kangaHeadnew.png'),
		new CopyWebpackPlugin({
			patterns: [
				// Copy all files within src/images over to the dist folder
				{ from: 'src/images', to: 'images' },
			],
		}),
	],
};

module.exports = config;
