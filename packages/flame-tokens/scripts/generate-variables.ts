import { colors, typography, spacing, shadows, radii, transition } from '../src';
import { namespace } from './config';

const variables = Object.assign(
  {},
  colors.colors,
  typography.typeface,
  typography.fontSizes,
  typography.weights,
  typography.letterSpacings,
  spacing.scale,
  shadows.outer,
  shadows.inner,
  shadows.innerN,
  shadows.border,
  radii.values,
  transition.durations,
);

const generate = {
  css() {
    return `:root {${Object.keys(variables).reduce(
      (css, name) => `${css}\n  ${`--${namespace}${name}`}: ${variables[name]};`,
      '',
    )}\n}\n`;
  },
  scss() {
    return Object.keys(variables).reduce(
      (css, name) => `${css}${`$${namespace}${name}`}: ${variables[name]};\n`,
      `$${namespace}namespace: '${namespace}';\n`,
    );
  },
};

function generateTokensFile(type: 'css' | 'scss') {
  return generate[type]();
}

export default [
  ['index.css', generateTokensFile('css')],
  ['index.scss', generateTokensFile('scss')],
];
