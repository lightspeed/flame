import { rgba } from 'polished';
import { colors } from '../colors';
import { shadows } from '../shadows';

// Helper to access colors with proper typing
const getColor = (key: string): string => (colors as Record<string, string>)[key];

// Helios 2 Tag Styles - Using Helios Go colors
const tagStyles: TagStyles = {
  main: {
    background: getColor('helios-go-default'),
    hoverBackground: getColor('helios-go-soft'),
    activeBackground: getColor('helios-go-strong'),
    focusBorder: getColor('helios-go-default'),
    color: colors.white,
    boxShadow: `0 0 0 0.0625rem ${colors.white}, 0 0 0 0.1875rem ${getColor(
      'helios-go-default',
    )}, ${
      // @ts-ignore
      shadows.inner['inner-shadow-2']
    }`,
  },
  remove: {
    background: getColor('helios-go-default'),
    hoverBackground: getColor('helios-go-soft'),
    activeBackground: getColor('helios-go-strong'),
    icon: {
      background: rgba(getColor('helios-neutral-dark'), 0.4),
      details: colors.white,
      hoverBackground: '',
      focusBackground: '',
      focusBoxShadow: `0 0 0 0.0625rem transparent, 0 0 0 0.125rem ${colors.white}`,
      activeBackground: '',
    },
  },
};

export { tagStyles };
