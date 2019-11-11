import { rgba } from 'polished';
import { colors } from '../colors';
import { shadows } from '../shadows';

const tagStyles: TagStyles = {
  main: {
    background: colors['blue-200'],
    hoverBackground: colors.secondary,
    activeBackground: colors['blue-400'],
    focusBorder: colors['blue-500'],
    color: colors['gray-900'],
    boxShadow: `0 0 0 0.0625rem ${colors.bodyBg}, 0 0 0 0.1875rem ${colors['blue-500']}, ${
      // @ts-ignore
      shadows.inner['inner-shadow-2']
    }`,
  },
  remove: {
    background: colors['blue-200'],
    hoverBackground: colors.secondary,
    activeBackground: colors['blue-400'],
    icon: {
      background: rgba(colors['gray-1000'], 0.4),
      details: 'none',
      hoverBackground: '',
      focusBackground: '',
      focusBoxShadow: `0 0 0 0.0625rem transparent, 0 0 0 0.125rem ${colors['blue-500']}`,
      activeBackground: '',
    },
  },
};

export { tagStyles };
