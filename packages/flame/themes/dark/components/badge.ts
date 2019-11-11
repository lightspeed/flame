import { colors } from '../colors';

const badgeVariants: BadgeVariants = {
  default: {
    backgroundColor: colors['gray-300'],
    color: colors['gray-900'],
  },
  success: {
    backgroundColor: colors.primary,
    color: colors['gray-900'],
  },
  warning: {
    backgroundColor: colors['orange-300'],
    color: colors['gray-900'],
  },
  danger: {
    backgroundColor: colors.danger,
    color: colors.bodyBg,
  },
  info: {
    backgroundColor: colors.secondary,
    color: colors.bodyBg,
  },
  important: {
    backgroundColor: colors.secondary,
    color: colors.bodyBg,
  },
};

export { badgeVariants };
