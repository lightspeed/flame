const path = require('path');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const sass = require('sass');
const packageInfo = require('../package.json');

const babelOptions = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.25%', 'not op_mini all', 'not ie <= 10'],
        },
        debug: false,
      },
    ],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    'emotion',
    [
      'module-resolver',
      {
        root: ['../packages'],
        alias: {
          'react-popper': 'react-popper/lib/cjs',
        },
      },
    ],
  ],
};
module.exports = {
  stories: [
    '../packages/flame/src/**/*.stories.@(mdx|tsx)',
    '../packages/flame-css/stories/*.stories.@(mdx|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: false,
        babelOptions,
        sourceLoaderOptions: {
          test: /\.(stories|story)\.[tj]sx?$/,
        },
      },
    },
  ],

  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: babelOptions,
    });
    config.resolve.extensions.push('.ts', '.tsx');

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
            plugins: () => [
              atImport(),
              autoprefixer({ overrideBrowserslist: packageInfo.browserslist }),
            ],
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

    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: require.resolve('file-loader'),
    });

    return config;
  },
};
