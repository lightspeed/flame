import { colors, typography, spacing, shadows, radii, transition } from '../src';
import { theme as lsTheme } from '../src/theme-ui/lightspeed';

const baseVariables = Object.assign(
  {},
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

const smooshColorsIntoTheme = (c: any) => ({ ...c, ...baseVariables });

function generateCssVariables(themeObject: any, namespace = ['cr-', 'fl-']) {
  const nextThemeObject = smooshColorsIntoTheme(themeObject);

  return `:root {${Object.keys(nextThemeObject).reduce((css, name) => {
    const nextRule = namespace
      .map(n => `  ${`--${n}${name}`}: ${nextThemeObject[name]};`)
      .join('\n');
    return `${css}\n${nextRule}`;
  }, '')}\n}\n`;
}

function generateSassVariables(themeObject: any, namespace = ['cr-', 'fl-']) {
  const nextThemeObject = smooshColorsIntoTheme(themeObject);

  const baseRule = namespace.map(n => `$${n}namespace: '${n}';\n`).join('\n');

  return Object.keys(nextThemeObject).reduce((css, name) => {
    const nextRule = namespace.map(n => `${`$${n}${name}`}: ${nextThemeObject[name]};`).join('\n');
    return `${css}${nextRule}\n`;
  }, baseRule);
}

export default [
  ['index.css', generateCssVariables(colors.colors)],
  ['index.scss', generateSassVariables(colors.colors)],
  ['css/flame/index.css', `${generateCssVariables(lsTheme.colors)}`],
  ['sass/flame/index.scss', generateSassVariables(lsTheme.colors)],
  ['css/oldskool/index.css', generateCssVariables(colors.colors)],
  ['sass/oldskool/index.scss', generateSassVariables(colors.colors)],
];
