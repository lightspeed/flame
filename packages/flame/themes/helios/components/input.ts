import { shadows } from '../shadows';
import { colors } from '../colors';

// Helper to access colors with proper typing
const getColor = (key: string): string => (colors as Record<string, string>)[key];

// Helios 2.0 Input Styles - Exact match with unified-components
// Using tokens from @lightspeed/unified-tokens/helios via colors object
const inputStyles: InputStyles = {
  background: colors.white, // #FFFFFF (bg-neutral-top)
  color: colors.textBody, // #1E1E21 (text-neutral-default)
  border: (colors as Record<string, string>)['helios-border-neutral-soft'],
  // @ts-ignore
  boxShadow: shadows.inner['inner-shadow-1'],
  placeholder: {
    color: (colors as Record<string, string>)['helios-fg-supplementary-default'],
  },
  hover: {
    border: getColor('helios-neutral-soft'), // #69696D
  },
  active: {
    border: getColor('helios-go-default'), // #3A1AFE (border-go-default)
  },
  disabled: {
    color: getColor('helios-neutral-inert'),
    background: getColor('helios-bg-neutral-inert-softer'),
  },
  focus: {
    border: getColor('helios-go-default'), // #3A1AFE (border-go-default)
  },
  helper: {
    background: getColor('helios-neutral-dark'),
  },
  warning: {
    color: getColor('helios-warning-default'),
  },
  error: {
    border: (colors as Record<string, string>)['helios-border-no-default'],
    color: (colors as Record<string, string>)['helios-fg-no-default'],
  },
  valid: {
    color: (colors as Record<string, string>)['helios-fg-success-default'],
  },
  readonly: {
    color: colors.textBody, // #1E1E21
    background: (colors as Record<string, string>)['helios-bg-neutral-inert-softer'],
  },
  label: {
    color: colors.textBody,
  },
  autofilled: {
    background: colors.white,
    color: colors.textBody,
  },
  autocomplete: {
    border: getColor('helios-neutral-edge'),
    controlDropdownIndicator: {
      color: getColor('helios-neutral-backdrop'),
    },
    controlHover: {
      border: getColor('helios-neutral-soft'),
    },
    indicator: {
      color: getColor('helios-neutral-edge'),
    },
    optionSelected: {
      background: getColor('helios-neutral-backdrop'),
      color: colors.textBody,
    },
    multiValue: {
      color: colors.textBody,
      background: colors.white,
      backgroundDisabled: colors.white,
      border: getColor('helios-neutral-edge'),
      borderDisabled: getColor('helios-neutral-edge'),
    },
    multiValueLabel: {
      color: colors.textBody,
      colorDisabled: getColor('helios-neutral-dark'),
    },
    multiValueRemove: {
      color: '',
      colorDisabled: colors.textHeading,
    },
  },
};

export { inputStyles };
