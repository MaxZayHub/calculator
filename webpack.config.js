const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

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