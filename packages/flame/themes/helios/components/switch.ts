import { colors } from '../colors';

// Helper to access colors with proper typing
const getColor = (key: string): string => (colors as Record<string, string>)[key];

// Helios 2 Switch Styles - Using Helios semantic colors
const switchStyles: SwitchStyles = {
  on: {
    background: getColor('helios-go-default'),
    border: getColor('helios-go-default'),
    color: colors.white,
    focusBorder: getColor('helios-go-default'),
    errorBorder: getColor('helios-no-default'),
    checkedBorder: getColor('helios-go-default'),
  },
  off: {
    background: colors.white,
    border: getColor('helios-neutral-edge'),
    color: getColor('helios-neutral-soft'),
  },
  slider: {
    border: getColor('helios-neutral-edge'),
    background: colors.white,
    shadow: '0 0.125rem 0.25rem rgba(12, 13, 13, 0.15)',
  },
  icons: {
    checkmarkBackground: colors.white,
    crossBackground: getColor('helios-neutral-soft'),
  },
};

export { switchStyles };
