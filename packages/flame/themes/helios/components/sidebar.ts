import { colors } from '../colors';

const sidebarStyles: SidebarStyles = {
  background: colors['gray-900'],
  borderColor: colors['gray-700'],
  iconDetails: colors['gray-900'],
  sidebarLink: {
    focus: {
      background: colors['gray-800'],
    },
    active: {
      background: colors['blue-500'],
    },
  },
  menulink: {
    normal: {
      color: colors['blue-500'],
    },
    danger: {
      color: colors['maple-600'],
    },
  },
  shopButton: {
    background: colors['gray-800'],
    active: {
      background: colors['gray-700'],
    },
    hover: {
      background: colors['gray-700'],
    },
  },
  lockButton: {
    borderColor: colors['gray-500'],
  },
};

export { sidebarStyles };
