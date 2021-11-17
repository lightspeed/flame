import { shadows } from '../shadows';
import { colors } from '../colors';

const popoverStyles: PopoverStyles = {
  // @ts-ignore
  boxShadow: `${shadows.border['border-shadow']}, ${
    // @ts-ignore
    shadows.outer['shadow-3']
  }`,
  arrowColor: colors['gray-200'],
  light: {
    background: colors.white,
  },
  dark: {
    background: colors['gray-50'],
  },
};

export { popoverStyles };
