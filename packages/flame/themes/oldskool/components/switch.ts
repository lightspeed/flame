import { colors } from '../colors';
import { shadows } from '../shadows';

const switchStyles: SwitchStyles = {
  on: {
    background: colors.blue,
    border: colors['blue-300'],
    color: colors.snow,
    focusBorder: colors['blue-300'],
    errorBorder: colors['maple-200'],
    checkedBorder: colors['blue-300'],
  },
  off: {
    background: colors.snow,
    border: colors['gray-200'],
    color: colors['gray-300'],
  },
  slider: {
    border: colors['gray-200'],
    background: colors.snow,
    // @ts-ignore
    shadow: shadows.outer['shadow-3'],
  },
  icons: {
    checkmarkBackground: colors.snow,
    crossBackground: colors['gray-300'],
  },
};

export { switchStyles };
