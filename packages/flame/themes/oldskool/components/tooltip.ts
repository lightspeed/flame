import { colors } from '../colors';
import { shadows } from '../shadows';

const tooltipStyles: TooltipStyles = {
  light: {
    background: colors['snow-200'],
    border: colors['gray-200'],
    // @ts-ignore
    shadow: shadows.outer['shadow-2'],
    color: colors.gray,
  },
  dark: {
    background: colors.gray,
    border: colors.gray,
    // @ts-ignore
    shadow: shadows.outer['shadow-2'],
    color: colors.snow,
  },
};

export { tooltipStyles };
