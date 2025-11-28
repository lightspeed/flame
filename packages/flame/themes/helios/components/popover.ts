import { colors } from '../colors';

// Helios 2.0 Popover Styles - Exact match with unified-components
// Using tokens from @lightspeed/unified-tokens/helios via colors object
const popoverStyles: PopoverStyles = {
  boxShadow: '0 0 0 0.0625rem rgba(12, 13, 13, 0.15), 0 0.1875rem 0.375rem rgba(12, 13, 13, 0.15)',
  arrowColor: colors.white, // #FFFFFF (bg-neutral-top for arrow)
  light: {
    background: colors.white, // #FFFFFF (bg-neutral-top)
  },
  dark: {
    background: (colors as Record<string, string>)['helios-neutral-backdrop'],
  },
};

export { popoverStyles };
