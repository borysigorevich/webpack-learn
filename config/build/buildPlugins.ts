import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import {BuildOptions} from "./types/types";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyWebpackPlugin from "copy-webpack-plugin";

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {

    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            // favicon: path.resolve(__dirname, options.paths.public, 'favicon.ico'),
        }),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
        }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
        // plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))

        plugins.push(new BundleAnalyzerPlugin({}))

        // plugins.push(
        //     new CopyWebpackPlugin({
        //         patterns: [
        //             {from: options.paths.public, to: options.paths.output}
        //         ]
        //     })
        // )
    }


    return plugins
}