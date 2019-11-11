import { shadows } from '../shadows';
import { colors } from '../colors';

const switchStyles: SwitchStyles = {
  on: {
    background: `linear-gradient(180deg, ${colors['blue-300']}, ${colors['blue-400']})`,
    border: colors['blue-600'],
    color: colors.white,
    focusBorder: colors['blue-500'],
    errorBorder: colors['maple-500'],
    checkedBorder: colors['blue-600'],
  },
  off: {
    background: `linear-gradient(180deg, ${colors['gray-800']}, ${colors['gray-700']})`,
    border: colors['gray-300'],
    color: colors['gray-600'],
  },
  slider: {
    border: colors['gray-200'],
    background: colors['gray-850'],
    // @ts-ignore
    shadow: shadows.outer['shadow-2'],
  },
  icons: {
    checkmarkBackground: colors.bodyBg,
    crossBackground: colors['gray-100'],
  },
};

export { switchStyles };
