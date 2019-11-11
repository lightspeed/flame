import { inputStyles } from './input';
import { buttonVariants } from './button';

const selectStyles: SelectStyles = {
  backgroundColor: buttonVariants.fill.neutral.backgroundColor,
  background: 'none',
  border: buttonVariants.fill.neutral.borderColor,
  color: inputStyles.color,
  focusBorder: inputStyles.focus.border,
  disabledColor: inputStyles.disabled.color,
  disabledBackground: inputStyles.disabled.background,
};

export { selectStyles };
