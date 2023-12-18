import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";
import {Configuration} from 'webpack-dev-server'

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {

    const {mode, paths} = options

    const isDev = mode === 'development'

    const config: webpack.Configuration = {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }

    return config
}