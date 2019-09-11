module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
  env: {
    test: {
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            debug: false,
            targets: {
              node: true,
            },
          },
        ],
        '@emotion/babel-preset-css-prop',
      ],
    },
    // for ESM builds
    production: {
      plugins: ['transform-react-remove-prop-types'],
      presets: [
        [
          '@emotion/babel-preset-css-prop',
          {
            sourceMap: false,
          },
        ],
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        '@babel/preset-typescript',
      ],
    },
    cjs: {
      plugins: ['transform-react-remove-prop-types'],
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
          },
        ],
        [
          '@emotion/babel-preset-css-prop',
          {
            sourceMap: false,
          },
        ],
      ],
    },
  },
};
