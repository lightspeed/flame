import { shadows } from '../shadows';
import { colors } from '../colors';

const blue = colors['blue-500'];
const lightBlue = colors['blue-300'];

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
  background: colors['gray-100'],
  // @ts-ignore
  boxShadow: shadows.inner['inner-shadow-0'],
  progressBar: {
    background: `${colors['gray-100']} ${progressBarSurface}`,
    backgroundSize: '400% 400%',
  },
  progressBarStatic: {
    background: colors['blue-500'],
  },
};

export { progressStyles };
