import { colors } from '../colors';

const badgeVariants: BadgeVariants = {
  default: {
    backgroundColor: colors['gray-100'],
    color: colors['gray-900'],
  },
  success: {
    backgroundColor: colors['green-700'],
    color: colors.white,
  },
  warning: {
    backgroundColor: colors['orange-500'],
    color: colors['gray-900'],
  },
  danger: {
    backgroundColor: colors['maple-500'],
    color: colors.white,
  },
  info: {
    backgroundColor: colors['blue-500'],
    color: colors.white,
  },
  important: {
    backgroundColor: colors['blue-500'],
    color: colors.white,
  },
};

export { badgeVariants };
