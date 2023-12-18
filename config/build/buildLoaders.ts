import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from 'webpack'
import {buildBabelLoader} from "./babel/buildBabelLoader";
import {BuildOptions} from "./types/types";
import ReactRefreshTypescript from 'react-refresh-typescript'

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {

    const isDev = options.mode === 'development'

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: isDev,
                    getCustomTransformers: () => ({
                        // before: [isDev && ReactRefreshTypescript()].filter(Boolean)
                    })
                },
            }
        ],
    }

    const babelLoader = buildBabelLoader(options)

    const assetsLoader = {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
    }

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            },
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            'sass-loader'
        ],
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icons: true,
                    svgConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            }
                        ]
                    }
                }
            }
        ],
    }

    return [
        assetsLoader,
        // tsLoader,
        babelLoader,
        scssLoader,
        assetsLoader
    ]
}