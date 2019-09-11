import { rgba } from 'polished';
import { colors } from '../colors';
import { shadows } from '../shadows';

const tagStyles: TagStyles = {
  main: {
    background: colors.blue,
    hoverBackground: colors['blue-200'],
    activeBackground: colors['blue-300'],
    focusBorder: colors.blue,
    color: colors.snow,
    boxShadow: `0 0 0 0.0625rem ${colors.snow}, 0 0 0 0.1875rem ${colors.blue}, ${
      // @ts-ignore
      shadows.inner['inner-shadow-2']
    }`,
  },
  remove: {
    background: colors.blue,
    hoverBackground: colors['blue-200'],
    activeBackground: colors['blue-300'],
    icon: {
      background: rgba(colors.night, 0.4),
      details: colors.snow,
      hoverBackground: rgba(colors.night, 0.65),
      focusBackground: rgba(colors.night, 0.4),
      focusBoxShadow: `0 0 0 0.0625rem transparent, 0 0 0 0.125rem ${colors.snow}`,
      activeBackground: rgba(colors.night, 0.2),
    },
  },
};

export { tagStyles };
