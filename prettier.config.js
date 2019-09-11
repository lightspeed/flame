// eslint-disable-next-line import/no-extraneous-dependencies
const baseConfig = require('@lightspeed/config-prettier');

module.exports = Object.assign(baseConfig, {
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'postcss',
      },
    },
  ],
});
