import { colors } from '../colors';

const radioStyles: RadioStyles = {
  background: `linear-gradient(180deg, ${colors.white}, ${colors['gray-50']})`,
  border: colors['gray-200'],
  color: colors.white,
  focus: {
    boxShadow: `${colors.white} 0px 0px 0px 1px, ${colors['blue-500']} 0px 0px 0px 3px`,
  },
  checked: {
    background: `linear-gradient(180deg, ${colors['blue-400']}, ${colors['blue-500']})`,
    border: colors['blue-600'],
  },
  description: {
    color: colors['gray-500'],
  },
  label: {
    color: colors['gray-1000'],
  },
};

export { radioStyles };
