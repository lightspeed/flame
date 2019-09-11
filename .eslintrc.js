module.exports = {
  extends: '@lightspeed/eslint-config',
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'jsx-a11y/label-has-for': [2, { required: { some: ['nesting', 'id'] } }],
    // Disabling for all files as we're in the middle of moving everything to TypeScript
    'react/prop-types': 'off',
    // Not a deal-breaker in Flame, turning destructuring rules off
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    // Make `allowElseIf: true` in our rules, as airbnb disables it:
    // https://github.com/airbnb/javascript/blob/495a62aaa9c2110cb06e6243d91373aa4fb384da/packages/eslint-config-airbnb-base/rules/best-practices.js#L64-L66
    'no-else-return': ['error', { allowElseIf: true }],
    // Enabling this here for now but it should eventually be done in our @lightspeed/eslint-config
    // See https://github.com/lightspeedretail/web-tools/issues/65
    '@typescript-eslint/ban-types': 'error',
  },
  overrides: [
    {
      files: ['**/.storybook/*.js', 'packages/**/story.js', '**/scripts/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  settings: {
    // Using `export * ...` does not work with eslint-plugin-import and makes ESLint trips,
    // disable it for test-utils where we have this export type. Eventually TypeScript will
    // remove the need for this.
    'import/ignore': ['node_modules', 'test-utils'],
    'import/resolver': {
      alias: {
        map: [['test-utils', './tests/test-utils.js']],
        typescript: {},
      },
    },
  },
};
