import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";


export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths} = options;
    const isDev = mode === 'development';
    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : false,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        optimization: {
            runtimeChunk: 'single',
        },
        plugins: buildPlugins(options),
    }
}