const path = require('path');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const sass = require('sass');
const packageInfo = require('../package.json');

module.exports = {
  stories: [
    '../packages/flame/src/**/story.tsx',
    '../packages/flame-css/stories/*.stories.@(mdx|tsx)',
  ],
  addons: [
    'storybook-readme/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
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
        plugins: ['@babel/plugin-proposal-object-rest-spread', 'emotion'],
      },
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

    // @TODO: Remove this hack to suppress verbose build output when upgrading to Storybook v5.
    // Use `--silent` option instead for `build-storybook` and `start-storybook`:
    // https://storybook.js.org/docs/configurations/cli-options/
    //
    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins.filter(
      ({ constructor }) => constructor.name !== 'ProgressPlugin',
    );
    return config;
  },
};
