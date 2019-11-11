import { colors } from '../colors';

const radioStyles: RadioStyles = {
  background: colors['gray-900'],
  border: colors['gray-300'],
  color: colors.white,
  focus: {
    boxShadow: `${colors.bodyBg} 0px 0px 0px 1px, ${colors['blue-500']} 0px 0px 0px 3px`,
  },
  checked: {
    background: colors['blue-300'],
    border: colors['blue-400'],
  },
  description: {
    color: colors['gray-500'],
  },
  label: {
    color: colors['gray-1000'],
  },
};

export { radioStyles };
