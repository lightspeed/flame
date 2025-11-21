import { colors } from '../colors';

// Helios 2.0 Divider Styles - Exact match with Helios design
// Using tokens from @lightspeed/unified-tokens/helios via colors object
const dividerStyles: DividerStyles = {
  color: (colors as Record<string, string>)['helios-border-neutral-soft'],
  cardColor: (colors as Record<string, string>)['helios-border-neutral-soft'],
};

export { dividerStyles };
