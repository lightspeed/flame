import { colors } from '../colors';

// Helios 2.0 Alert Styles - Light, subtle backgrounds with colored borders
// Using tokens from @lightspeed/unified-tokens/helios via colors object
// Alerts use highlight backgrounds (16% opacity) with semantic border colors
const alertVariants: AlertVariants = {
  success: {
    background: (colors as Record<string, string>)['helios-success-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-border-success-default'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-fg-success-default'],
    },
  },
  info: {
    background: (colors as Record<string, string>)['helios-go-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-border-go-default'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-fg-go-default'],
    },
  },
  danger: {
    background: (colors as Record<string, string>)['helios-no-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-border-no-default'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-fg-no-default'],
    },
  },
  warning: {
    background: (colors as Record<string, string>)['helios-warning-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-border-warning-default'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-fg-warning-default'],
    },
  },
};

// AlertInCard variants - using slightly less opacity for in-card context
const alertInCardVariants = {
  success: {
    bg: (colors as Record<string, string>)['helios-success-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-success-highlight-strong'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-success-strong'],
    },
  },
  info: {
    bg: (colors as Record<string, string>)['helios-go-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-go-highlight-strong'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-go-strong'],
    },
  },
  danger: {
    bg: (colors as Record<string, string>)['helios-no-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-no-highlight-strong'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-no-strong'],
    },
  },
  warning: {
    bg: (colors as Record<string, string>)['helios-warning-highlight-strong'],
    borderColor: (colors as Record<string, string>)['helios-warning-highlight-strong'],
    '.fl-alert__icon svg': {
      fill: (colors as Record<string, string>)['helios-warning-strong'],
    },
  },
};

export { alertVariants, alertInCardVariants };
