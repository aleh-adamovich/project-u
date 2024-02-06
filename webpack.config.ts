import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildModeType, BuildOptions} from "./config/build/types/config";

export default (env: BuildEnv): webpack.Configuration => {
  const mode: BuildModeType = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT: number = env.port || 3000;

  const options: BuildOptions = {
    mode,
    isDev,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
    port: PORT,
  };

  return buildWebpackConfig(options);
};
