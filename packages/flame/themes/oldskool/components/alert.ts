import { colors } from '../colors';

const alertVariants: AlertVariants = {
  success: {
    background: colors['green-100'],
    borderColor: colors['green-300'],
    '.fl-alert__icon svg': {
      fill: 'primary',
    },
  },
  info: {
    background: colors['blue-100'],
    borderColor: colors.blue,
    '.fl-alert__icon svg': {
      fill: 'secondary',
    },
  },
  danger: {
    background: colors['maple-100'],
    borderColor: colors['maple-200'],
    '.fl-alert__icon svg': {
      fill: 'danger',
    },
  },
  warning: {
    background: colors['orange-100'],
    borderColor: colors.orange,
    '.fl-alert__icon svg': {
      fill: 'warning',
    },
  },
};

const alertInCardVariants = {
  success: {
    bg: 'green-100',
    borderColor: 'green-300',
    '.fl-alert__icon svg': {
      fill: 'primary',
    },
  },
  info: {
    bg: 'blue-100',
    borderColor: 'blue',
    '.fl-alert__icon svg': {
      fill: 'secondary',
    },
  },
  danger: {
    bg: 'maple-100',
    borderColor: 'maple-200',
    '.fl-alert__icon svg': {
      fill: 'danger',
    },
  },
  warning: {
    bg: 'orange-100',
    borderColor: 'orange',
    '.fl-alert__icon svg': {
      fill: 'orange',
    },
  },
};

export { alertVariants, alertInCardVariants };
