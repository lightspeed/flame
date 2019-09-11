import { rgba } from 'polished';
import { colors } from '../colors';
import { shadows } from '../shadows';

const popoverStyles: PopoverStyles = {
  // @ts-ignore
  boxShadow: `${shadows.border['border-shadow']}, ${shadows.outer['shadow-3']}`,
  arrowColor: rgba(colors.night, 0.15),
  light: {
    background: colors.snow,
  },
  dark: {
    background: colors['snow-200'],
  },
};

export { popoverStyles };
