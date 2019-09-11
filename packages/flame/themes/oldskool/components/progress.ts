import { darken, saturate } from 'polished';
import { colors } from '../colors';
import { shadows } from '../shadows';

const blue = colors.blue;
const lightBlue = darken(0.2, saturate(0.2, colors['blue-100']));

const progressBarSurface = `
linear-gradient(
  45deg,
  ${blue} 0%,
  ${lightBlue} 25%,
  ${blue} 75%,
  ${lightBlue} 100%
)
`;

const progressStyles: ProgressStyles = {
  background: colors['snow-300'],
  // @ts-ignore
  boxShadow: shadows.inner['inner-shadow-0'],
  progressBar: {
    background: `${colors.blue} ${progressBarSurface}`,
    backgroundSize: '400% 400%',
  },
  progressBarStatic: {
    background: colors.blue,
  },
};

export { progressStyles };
