import { colors } from '../colors';

const checkboxStyles: CheckboxStyles = {
  background: `linear-gradient(180deg, ${colors.white}, ${colors['gray-50']})`,
  borderColor: colors['gray-200'],
  color: '',
  focus: {
    boxShadow: ` 0 0 0 1px ${colors.white}, 0 0 0 3px ${colors['blue-500']}`,
  },
  indeterminate: {
    border: colors['blue-600'],
    background: colors['blue-600'],
  },
  checked: {
    background: `linear-gradient(180deg, ${colors['blue-400']}, ${colors['blue-500']})`,
    border: colors['blue-600'],
    color: colors.white,
  },
  label: {
    color: colors['gray-800'],
  },
  description: {
    color: colors['gray-800'],
  },
};

export { checkboxStyles };
