const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const zopfli = require("@gfx/zopfli");
const webpack = require('webpack');

module.exports = {
	entry: path.join(__dirname, "src", "index.tsx"),
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js",
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", {
					loader: 'style-loader',
					loader: 'resolve-url-loader',
					loader: "sass-loader",
					options: {
						sourceMap: true,
						sassOptions: {
							includePaths: ['node_modules'],
						},
						implementation: require("sass"),
					},
				}]
			},
			{
				test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: [
					// {
					// 	loader: "file-loader",
					// 	options: {
					// 		name: "[path][name]-[hash:8].[ext]"
					// 	}
					// },
					{
						loader: 'url-loader',
					}
				]
			},
			{
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: ['lodash'],
							presets: [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
						}
					}
				],
				test: /\.js$/,
				exclude: /node_modules/,
			}
		]
	},
	resolve:
	{
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		contentBase: __dirname + '/build'
	},
	plugins: [
		new LodashModuleReplacementPlugin({
			'collections': true,
			'paths': true
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(__dirname, "src", "index.html")
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new CopyPlugin({
			patterns:
				[
					{ from: '**/*', to: 'assets/', context: 'src/assets/' }
				],
			options: {
				concurrency: 100,
			},
		})
	]
};