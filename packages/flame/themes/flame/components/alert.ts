import { colors } from '../colors';

const alertVariants: AlertVariants = {
  success: {
    background: colors['green-50'],
    borderColor: colors['green-700'],
  },
  info: {
    background: colors['blue-50'],
    borderColor: colors['blue-500'],
  },
  danger: {
    background: colors['maple-50'],
    borderColor: colors['maple-500'],
  },
  warning: {
    background: colors['orange-50'],
    borderColor: colors['orange-500'],
  },
};

export { alertVariants };
