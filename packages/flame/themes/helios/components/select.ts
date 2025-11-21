import { colors } from '../colors';

// Helios 2.0 Select Styles - Exact match with unified-components
// Using exact color values from @lightspeed/unified-tokens/helios
const selectStyles: SelectStyles = {
  backgroundColor: '',
  background: colors.white, // #FFFFFF (bg-neutral-top)
  border: (colors as Record<string, string>)['helios-border-neutral-soft'],
  color: colors.textBody, // #1E1E21 (text-neutral-default)
  focusBorder: (colors as Record<string, string>)['helios-go-default'], // #3A1AFE (border-go-default)
  disabledColor: (colors as Record<string, string>)['helios-neutral-inert'],
  disabledBackground: (colors as Record<string, string>)['helios-bg-neutral-inert-softer'],
};

export { selectStyles };
