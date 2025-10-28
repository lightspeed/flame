module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread', '@emotion/babel-plugin'],
  env: {
    test: {
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        ],
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
      ],
      plugins: ['@emotion/babel-plugin'],
    },
    // for ESM builds
    production: {
      plugins: ['transform-react-remove-prop-types', '@emotion/babel-plugin'],
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        ],
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
    },
    cjs: {
      plugins: ['transform-react-remove-prop-types', '@emotion/babel-plugin'],
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        ],
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
          },
        ],
      ],
    },
  },
};
