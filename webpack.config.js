/**
 * Primary Webpack configuration.
 */



/**
 * Imports.
 */
const EsLintPlugin      = require( 'eslint-webpack-plugin' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path              = require( 'path' );
const StyleLintPlugin   = require( 'stylelint-webpack-plugin' );



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
		new EsLintPlugin(
			{
				extensions:
				[
					'ts',
					'tsx',
				],
			}
		),
		new StyleLintPlugin(
			{
				files: '**/*.pcss',
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
