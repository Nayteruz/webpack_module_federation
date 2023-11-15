import webpack from 'webpack';

import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths} from "./config/build/types/types";
import path from "path";


interface EnvVariable {
    port: number;
    mode: BuildMode;
}

export default (env: EnvVariable) => {

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode,
        paths
    });

    return config;
}