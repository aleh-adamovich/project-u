import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildModeType, BuildOptions} from "./config/build/types/config";

const mode: BuildModeType = 'development';
const isDev = mode === 'development';

const options: BuildOptions = {
  mode,
  isDev,
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
}

const config: webpack.Configuration = buildWebpackConfig(options);

export default config;
