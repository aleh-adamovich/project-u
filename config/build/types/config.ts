export type BuildModeType = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildModeType;
  isDev: boolean;
  paths: BuildPaths;
}