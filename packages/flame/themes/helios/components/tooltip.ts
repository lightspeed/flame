import { colors } from '../colors';

// Helios 2.0 Tooltip Styles - Exact match with unified-components
// Using tokens from @lightspeed/unified-tokens/helios via colors object
const tooltipStyles: TooltipStyles = {
  light: {
    background: (colors as Record<string, string>)['helios-neutral-backdrop'],
    border: (colors as Record<string, string>)['helios-border-neutral-soft'],
    color: colors.textBody, // #1E1E21 (text-neutral-default)
  },
  dark: {
    // Default Helios tooltip uses inverted dark background
    background: (colors as Record<string, string>)['helios-bg-neutral-inverted-top'],
    border: (colors as Record<string, string>)['helios-bg-neutral-inverted-top'],
    color: colors.white, // #FFFFFF (text-neutral-inverted-default)
  },
};

export { tooltipStyles };
