import { shadows } from '../shadows';
import { cardVariants } from './card';

const popoverStyles: PopoverStyles = {
  // @ts-ignore
  boxShadow: `${shadows.border['border-shadow']}, ${
    // @ts-ignore
    shadows.outer['shadow-3']
  }`,
  arrowColor: cardVariants.neutral.background,
  light: {
    background: cardVariants.neutral.background,
  },
  dark: {
    background: cardVariants.top.background,
  },
};

export { popoverStyles };
