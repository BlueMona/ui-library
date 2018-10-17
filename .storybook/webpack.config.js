// @ts-check
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (_baseConfig, _env, config) => {
  config.module.rules.push(
    // needed to generate prop tables from typescript interface defs:
    {
      test: /\.tsx?$/,
      use: ['babel-loader', 'react-docgen-typescript-loader']
    },
    // needed to inject and hot-update the root sass file:
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  );

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../tsconfig.json')
    })
  );

  config.resolve.extensions.push('.ts', '.tsx', '.scss');

  return config;
};
