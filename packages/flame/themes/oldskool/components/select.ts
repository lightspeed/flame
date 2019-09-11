import { colors } from '../colors';

const selectStyles: SelectStyles = {
  backgroundColor: colors.snow,
  background: `linear-gradient(180deg, ${colors.snow}, ${colors['snow-200']})`,
  border: colors['gray-100'],
  color: colors.gray,
  focusBorder: colors.blue,
  disabledColor: colors['gray-300'],
  disabledBackground: colors['snow-200'],
};

export { selectStyles };
