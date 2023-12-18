import path from "path";
import webpack from "webpack";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildOptions, Env} from "./config/build/types/types";

export default (env: Env) => {

    console.log({env})

    const options: BuildOptions = {
        mode: env.mode ?? 'development',
        port: env.port ?? 3200,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            output: path.resolve(__dirname, 'build'),
            src: path.resolve(__dirname, 'src'),
            public: path.resolve(__dirname, 'public'),
        }
    }

    const config: webpack.Configuration = buildWebpack(options)

    return config
}