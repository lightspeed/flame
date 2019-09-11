import { colors } from '../colors';

const alertVariants: AlertVariants = {
  success: {
    background: colors['green-100'],
    borderColor: colors['green-300'],
  },
  info: {
    background: colors['blue-100'],
    borderColor: colors.blue,
  },
  danger: {
    background: colors['maple-100'],
    borderColor: colors['maple-200'],
  },
  warning: {
    background: colors['orange-100'],
    borderColor: colors.orange,
  },
};

export { alertVariants };
