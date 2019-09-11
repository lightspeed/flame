import { shadows } from '../shadows';
import { colors } from '../colors';

const switchStyles: SwitchStyles = {
  on: {
    background: `linear-gradient(180deg, ${colors['blue-400']}, ${colors['blue-500']})`,
    border: colors['blue-600'],
    color: colors.white,
    focusBorder: colors['blue-500'],
    errorBorder: colors['maple-500'],
    checkedBorder: colors['blue-600'],
  },
  off: {
    background: `linear-gradient(180deg, ${colors.white}, ${colors['gray-50']})`,
    border: colors['gray-100'],
    color: colors['gray-600'],
  },
  slider: {
    border: colors['gray-200'],
    background: colors.white,
    // @ts-ignore
    shadow: shadows.outer['shadow-2'],
  },
  icons: {
    checkmarkBackground: colors.white,
    crossBackground: colors['gray-600'],
  },
};

export { switchStyles };
