import { colors } from '../colors';

// Helios 2.0 Radio Styles - Exact match with unified-components
// Using exact color values from @lightspeed/unified-tokens/helios
const radioStyles: RadioStyles = {
  background: colors.white, // #FFFFFF (bg-neutral-top)
  border: (colors as Record<string, string>)['helios-border-neutral-strong'],
  color: colors.white, // #FFFFFF (inner dot color)
  focus: {
    boxShadow: `${colors.white} 0px 0px 0px 1px, ${
      (colors as Record<string, string>)['helios-go-default']
    } 0px 0px 0px 3px`,
  },
  checked: {
    background: (colors as Record<string, string>)['helios-go-default'], // #3A1AFE (bg-go-default)
    border: 'transparent', // border-none when checked
  },
  description: {
    color: colors.textBody, // #1E1E21 (text-neutral-default)
  },
  label: {
    color: colors.textBody, // #1E1E21 (text-neutral-default)
  },
};

export { radioStyles };
