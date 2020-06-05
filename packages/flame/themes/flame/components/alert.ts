import { colors } from '../colors';

const alertVariants: AlertVariants = {
  success: {
    background: colors['green-50'],
    borderColor: colors['green-700'],
    '.fl-alert__icon svg': {
      fill: 'primary',
    },
  },
  info: {
    background: colors['blue-50'],
    borderColor: colors['blue-500'],
    '.fl-alert__icon svg': {
      fill: 'secondary',
    },
  },
  danger: {
    background: colors['maple-50'],
    borderColor: colors['maple-500'],
    '.fl-alert__icon svg': {
      fill: 'danger',
    },
  },
  warning: {
    background: colors['orange-50'],
    borderColor: colors['orange-500'],
    '.fl-alert__icon svg': {
      fill: 'warning',
    },
  },
};

const alertInCardVariants = {
  success: {
    bg: 'green-50',
    borderColor: 'green-100',
    '.fl-alert__icon svg': {
      fill: 'primary',
    },
  },
  info: {
    bg: 'blue-50',
    borderColor: 'blue-100',
    '.fl-alert__icon svg': {
      fill: 'secondary',
    },
  },
  danger: {
    bg: 'maple-50',
    borderColor: 'maple-100',
    '.fl-alert__icon svg': {
      fill: 'danger',
    },
  },
  warning: {
    bg: 'orange-50',
    borderColor: 'orange-100',
    '.fl-alert__icon svg': {
      fill: 'warning',
    },
  },
};

export { alertVariants, alertInCardVariants };
