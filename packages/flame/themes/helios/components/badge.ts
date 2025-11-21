import { colors } from '../colors';

// Helios 2.0 Badge Styles - Exact match with unified-components
// Using tokens from @lightspeed/unified-tokens/helios via colors object
// These use transparent backgrounds with alpha channel for subtle appearance
const badgeVariants: BadgeVariants = {
  default: {
    // bg-overlay-neutral-soft + text-neutral-default
    backgroundColor: (colors as Record<string, string>)['helios-overlay-neutral-soft'],
    color: (colors as Record<string, string>)['helios-neutral-dark'],
  },
  success: {
    // bg-success-highlight-strong + text-success-strong
    backgroundColor: (colors as Record<string, string>)['helios-success-highlight-strong'],
    color: (colors as Record<string, string>)['helios-success-strong-fg'],
  },
  warning: {
    // bg-warning-highlight-strong + text-warning-strong
    backgroundColor: (colors as Record<string, string>)['helios-warning-highlight-strong'],
    color: (colors as Record<string, string>)['helios-warning-strong-fg'],
  },
  danger: {
    // bg-no-highlight-strong + text-no-strong
    backgroundColor: (colors as Record<string, string>)['helios-no-highlight-strong'],
    color: (colors as Record<string, string>)['helios-no-strong-fg'],
  },
  info: {
    // bg-go-highlight-strong + text-go-strong
    backgroundColor: (colors as Record<string, string>)['helios-go-highlight-strong'],
    color: (colors as Record<string, string>)['helios-go-strong-fg'],
  },
  important: {
    // Same as info in Helios
    backgroundColor: (colors as Record<string, string>)['helios-go-highlight-strong'],
    color: (colors as Record<string, string>)['helios-go-strong-fg'],
  },
};

// Next badge variants - matching Helios 2.0 (no borders, just backgrounds)
// Helios uses shadow-transparent instead of borders, so we set border to 0
const nextBadgeVariants = {
  danger: {
    bg: (colors as Record<string, string>)['helios-no-highlight-strong'],
    borderWidth: '0',
    border: '0',
    color: (colors as Record<string, string>)['helios-no-strong-fg'],
  },
  default: {
    bg: (colors as Record<string, string>)['helios-overlay-neutral-soft'],
    borderWidth: '0',
    border: '0',
    color: (colors as Record<string, string>)['helios-neutral-dark'],
  },
  primary: {
    bg: (colors as Record<string, string>)['helios-go-highlight-strong'],
    borderWidth: '0',
    border: '0',
    color: (colors as Record<string, string>)['helios-go-strong-fg'],
  },
  success: {
    bg: (colors as Record<string, string>)['helios-success-highlight-strong'],
    borderWidth: '0',
    border: '0',
    color: (colors as Record<string, string>)['helios-success-strong-fg'],
  },
  warning: {
    bg: (colors as Record<string, string>)['helios-warning-highlight-strong'],
    borderWidth: '0',
    border: '0',
    color: (colors as Record<string, string>)['helios-warning-strong-fg'],
  },
};

export { badgeVariants, nextBadgeVariants };
