import { colors } from '../colors';

// Helios 2.0 Checkbox Styles - Exact match with unified-components
// Using exact color values from @lightspeed/unified-tokens/helios
// Key features: border-none when checked, hover states, clean focus outline
const checkboxStyles: CheckboxStyles = {
  background: colors.white, // White background when unchecked
  borderColor: (colors as Record<string, string>)['helios-border-neutral-strong'],
  color: '',
  focus: {
    // Focus outline uses go-default color
    boxShadow: `0 0 0 1px ${colors.white}, 0 0 0 3px ${
      (colors as Record<string, string>)['helios-go-default']
    }`,
  },
  indeterminate: {
    // Indeterminate: In Helios 2.0, this should be fully filled like checked state
    // NOTE: Flame's component limitation - only border changes, not wrapper background
    // Using go-default for both border and dash to maintain Helios color consistency
    border: (colors as Record<string, string>)['helios-go-default'], // #3A1AFE (border accent)
    background: (colors as Record<string, string>)['helios-go-default'], // #3A1AFE (dash color, same as border)
  },
  checked: {
    // Checked state: filled with go-default color, white checkmark, no border
    background: (colors as Record<string, string>)['helios-go-default'], // #3A1AFE (bg-go-default)
    border: 'transparent', // border-none when checked
    color: colors.white, // #FFFFFF (text-neutral-ondark-default)
  },
  label: {
    color: colors.textBody, // #1E1E21 (text-neutral-default)
  },
  description: {
    color: colors.textBody, // #1E1E21 (text-neutral-default)
  },
};

export { checkboxStyles };
