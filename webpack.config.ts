import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type envMode = 'production' | 'development';

interface EnvVariable {
	mode: envMode;
	port: number;
}

export default(env: EnvVariable) => {

	const isDev = env.mode === 'development';

	const config: webpack.Configuration = {
		mode: env.mode ?? 'development',
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		devServer: isDev ? {
			port: env.port ?? 3000,
			open: true,
		}: undefined,
		devtool: isDev ? 'inline-source-map' : false,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[contenthash].js',
			clean: true,
		},
		optimization: {
			runtimeChunk: 'single',
		},
		plugins: [
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
			isDev && new webpack.ProgressPlugin(),
		].filter(Boolean),
	}

	return config;
}