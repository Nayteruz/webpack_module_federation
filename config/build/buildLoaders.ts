import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import ReactRefreshTypeScript from 'react-refresh-typescript';
import {BuildOptions} from "./types/types";
import {buildBabelLoader} from "./babel/buildBabelLoader";

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {

    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/i,
        use: [{
            loader: '@svgr/webpack', options: {
                icon: true, svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            }
        }],
    };

    const cssLoaderModule = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:8]',
            },
        },
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, cssLoaderModule, "sass-loader"],
    }

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     exclude: /node_modules/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    //                 }),
    //                 transpileOnly: isDev
    //             }
    //         }
    //     ]
    // }

    const babelLoader = buildBabelLoader(options);

    return [
        assetLoader,
        svgLoader,
        cssLoader,
        babelLoader,
    ]
}