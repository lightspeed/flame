import { colors } from '../colors';

const badgeVariants: BadgeVariants = {
  default: {
    backgroundColor: colors['gray-200'],
    color: colors.night,
  },
  success: {
    backgroundColor: colors.green,
    color: colors.snow,
  },
  warning: {
    backgroundColor: colors['orange-200'],
    color: colors.gray,
  },
  danger: {
    backgroundColor: colors['maple-200'],
    color: colors.snow,
  },
  info: {
    backgroundColor: colors['blue-200'],
    color: colors.snow,
  },
  important: {
    backgroundColor: colors.blue,
    color: colors.snow,
  },
};

export { badgeVariants };
