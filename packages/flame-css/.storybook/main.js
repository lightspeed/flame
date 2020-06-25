const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const sass = require('sass');
const path = require('path');

const packageInfo = require('../package.json');

module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/,
      use: [
        {
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            sourceMap: false,

            importLoaders: 2,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [atImport(), autoprefixer({ browsers: packageInfo.browserslist })],
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            implementation: sass,
            includePaths: [path.resolve(__dirname, '../node_modules')],
          },
        },
      ],
    });
    return config;
  },
};
