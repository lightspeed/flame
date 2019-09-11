import { rgba } from 'polished';
import { colors } from '../colors';

const modalStyles: ModalStyles = {
  overlay: {
    background: rgba(colors.night, 0.8),
  },
  modal: {
    background: colors.snow,
    color: colors.gray,
  },
  header: {
    border: colors['gray-100'],
    color: colors['night-300'],
  },
  footer: {
    background: colors['snow-200'],
    border: colors['gray-100'],
  },
};

export { modalStyles };
