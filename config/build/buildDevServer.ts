import {BuildOptions} from "./types/types";

export const buildDevServer = (options: BuildOptions) => {
    return {
        port: options.port ?? 3100,
        open: false,
        historyApiFallback: true,
        hot: true
    }
}