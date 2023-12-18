export type Env = {
    mode: BuildMode
    port: number
    analyzer?: boolean
    platform: BuildPlatform
}

type BuildPlatform = 'desktop' | 'mobile'
type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string
    html: string
    output: string
    src: string
    public: string
}

export interface BuildOptions {
    port: number;
    paths: BuildPaths
    mode: BuildMode
    analyzer?: boolean
    platform?: BuildPlatform
}