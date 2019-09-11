import { colors } from '../colors';

const radioStyles: RadioStyles = {
  background: `${colors.snow} linear-gradient(180deg, ${colors.snow}, ${colors['snow-200']})`,
  border: colors['gray-200'],
  color: colors.snow,
  focus: {
    boxShadow: `0 0 0 1px ${colors.snow}, 0 0 0 3px ${colors.blue}`,
  },
  checked: {
    background: colors.blue,
    border: colors['blue-300'],
  },
  description: {
    color: colors['gray-300'],
  },
  label: {
    color: colors.night,
  },
};

export { radioStyles };
