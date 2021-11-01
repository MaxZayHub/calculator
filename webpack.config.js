const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    mode: 'development',

    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

		output: {
			path: path.resolve(__dirname, './dist'),
			filename: '[name].bundle.js',
		},

		plugins: [
			new HtmlWebpackPlugin({
					title: 'webpack Boilerplate',
					template: path.resolve(__dirname, './src/index.html'),
					filename: 'index.html',
			}),
			new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new PrettierPlugin({
        printWidth: 80,               // Specify the length of line that the printer will wrap on.
        tabWidth: 2,                  // Specify the number of spaces per indentation-level.
        useTabs: false,               // Indent lines with tabs instead of spaces.
        semi: true,                   // Print semicolons at the ends of statements.
        encoding: 'utf-8',            // Which encoding scheme to use on files
      }),
		],

		module: {
			rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: ['babel-loader'],
					},

          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
			],
	}
}