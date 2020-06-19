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

const nextBadgeVariants = {
  danger: {
    bg: 'maple-100',
    borderColor: 'maple-300',
  },
  default: {
    bg: 'gray-100',
    borderColor: 'gray-300',
  },
  primary: {
    bg: 'blue-100',
    borderColor: 'blue-300',
  },
  success: {
    bg: 'green-100',
    borderColor: 'green-300',
  },
  warning: {
    bg: 'orange-100',
    borderColor: 'orange-300',
  },
};

export { badgeVariants, nextBadgeVariants };
