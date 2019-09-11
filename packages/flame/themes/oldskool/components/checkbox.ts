import { colors } from '../colors';

const checkboxStyles: CheckboxStyles = {
  background: `linear-gradient(180deg, ${colors.snow}, ${colors['snow-200']})`,
  borderColor: colors['gray-200'],
  color: colors.snow,
  focus: {
    boxShadow: ` 0 0 0 1px ${colors.snow}, 0 0 0 3px ${colors.blue}`,
  },
  indeterminate: {
    border: colors.blue,
    background: colors['blue-300'],
  },
  checked: {
    background: colors.blue,
    border: colors['blue-300'],
    color: colors.snow,
  },
  label: {
    color: colors.night,
  },
  description: {
    color: colors['gray-300'],
  },
};

export { checkboxStyles };
