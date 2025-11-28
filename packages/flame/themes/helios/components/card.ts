import { colors } from '../colors';

// Helios 2.0 Card Styles - Exact match with unified-components
// Using exact color values from @lightspeed/unified-tokens/helios
const cardStyles: CardStyles = {
  background: colors.white, // #FFFFFF (bg-neutral-top)
  header: {
    border: (colors as Record<string, string>)['helios-border-neutral-soft'],
  },
  footer: {
    border: (colors as Record<string, string>)['helios-border-neutral-soft'],
  },
};

// Card variants use subtle shadows matching Helios design
const cardVariants: CardVariants = {
  neutral: {
    // Neutral card with subtle border shadow
    boxShadow:
      '0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  },
  top: {
    // Floating card with more prominent shadow (appearance="floating")
    boxShadow:
      '0 0 0 1px rgba(0, 0, 0, 0.06), 0 6px 12px 0 rgba(0, 0, 0, 0.03), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',
  },
};

export { cardStyles, cardVariants };
