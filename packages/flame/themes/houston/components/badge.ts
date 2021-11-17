import { colors } from '../colors';

const badgeVariants: BadgeVariants = {
  default: {
    backgroundColor: colors['gray-100'],
    color: colors['gray-900'],
  },
  success: {
    backgroundColor: colors['green-500'],
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

const nextBadgeVariants = {
  danger: {
    bg: 'maple-100',
    borderColor: 'maple-200',
  },
  default: {
    bg: 'gray-100',
    borderColor: 'gray-200',
  },
  primary: {
    bg: 'blue-100',
    borderColor: 'blue-200',
  },
  success: {
    bg: 'green-100',
    borderColor: 'green-200',
  },
  warning: {
    bg: 'orange-200',
    borderColor: 'orange-300',
  },
};

export { badgeVariants, nextBadgeVariants };
