import { shadows } from '../shadows';
import { colors } from '../colors';

const blue = colors['blue-300'];
const lightBlue = colors['blue-200'];

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
  background: colors['gray-700'],
  // @ts-ignore
  boxShadow: shadows.inner['inner-shadow-0'],
  progressBar: {
    background: `${colors['gray-700']} ${progressBarSurface}`,
    backgroundSize: '400% 400%',
  },
  progressBarStatic: {
    background: colors['blue-300'],
  },
};

export { progressStyles };
