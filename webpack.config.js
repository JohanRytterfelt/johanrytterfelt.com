/**
 * Primary Webpack configuration.
 */



/**
 * Imports.
 */
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path              = require( 'path' );



/**
 * Main config object.
 */
module.exports =
{
	devtool: 'source-map',
	entry  :
	{
		app:
		[
			'./src/index.tsx'
		],
	},
	module:
	{
		rules:
		[
			{
				exclude: /node_modules/,
				loader : 'ts-loader',
				test   : /\.tsx?$/,
			},
			{
				test: /\.p?css$/i,
				use :
				[
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	output:
	{
		filename: 'assets/js/[name].js',
		path    : path.resolve(
			__dirname,
			'public'
		),
	},
	plugins:
	[
		new HtmlWebPackPlugin(
			{
				template: './src/index.html',
			}
		),
	],
	resolve:
	{
		extensions:
		[
			'.ts',
			'.tsx',
			'.js',
			'.jsx',
			'.json',
		],
		modules:
		[
			'node_modules/',
			'src/',
		],
	},
};
