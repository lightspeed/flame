import { rgba } from 'polished';
import { colors } from '../colors';
import { shadows } from '../shadows';

const tagStyles: TagStyles = {
  main: {
    background: colors['blue-500'],
    hoverBackground: colors['blue-400'],
    activeBackground: colors['blue-700'],
    focusBorder: colors['blue-500'],
    color: colors.white,
    boxShadow: `0 0 0 0.0625rem ${colors.white}, 0 0 0 0.1875rem ${colors['blue-500']}, ${
      // @ts-ignore
      shadows.inner['inner-shadow-2']
    }`,
  },
  remove: {
    background: colors['blue-500'],
    hoverBackground: colors['blue-400'],
    activeBackground: colors['blue-700'],
    icon: {
      background: rgba(colors['gray-1000'], 0.4),
      details: colors.white,
      hoverBackground: '',
      focusBackground: '',
      focusBoxShadow: `0 0 0 0.0625rem transparent, 0 0 0 0.125rem ${colors.white}`,
      activeBackground: '',
    },
  },
};

export { tagStyles };
