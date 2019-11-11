import { colors } from '../colors';

const checkboxStyles: CheckboxStyles = {
  background: colors['gray-900'],
  borderColor: colors['gray-300'],
  color: colors.white,
  focus: {
    boxShadow: `${colors.bodyBg} 0px 0px 0px 1px, ${colors['blue-500']} 0px 0px 0px 3px`,
  },
  indeterminate: {
    border: colors['blue-400'],
    background: colors['blue-400'],
  },
  checked: {
    background: colors['blue-300'],
    border: colors['blue-400'],
    color: colors.bodyBg,
  },
  label: {
    color: colors['gray-800'],
  },
  description: {
    color: colors['gray-800'],
  },
};

export { checkboxStyles };
