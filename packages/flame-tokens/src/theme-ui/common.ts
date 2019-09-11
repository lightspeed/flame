import { typography, spacing, shadows, radii, transition } from '../index';

const commonTheme = {
  breakpoints: ['601px', '1024px'],
  fontFamily: typography.typeface,
  space: Object.values(spacing.scale),
  lineHeights: Object.values(spacing.scale),
  fontSizes: { ...typography.fontSizes, ...typography.fontSizeAliases },
  fontWeights: typography.weights,
  letterSpacings: [...Object.values(typography.letterSpacings)],
  shadows: Object.values(shadows.outer),
  innerShadows: Object.values(shadows.inner),
  innerShadowsN: Object.values(shadows.innerN),
  borderShadows: Object.values(shadows.border),
  radii: radii.values,
  transition: transition.durations,
};

export { commonTheme };
