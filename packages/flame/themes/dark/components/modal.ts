import { rgba } from 'polished';
import { colors } from '../colors';

const modalStyles: ModalStyles = {
  overlay: {
    background: rgba(colors['gray-1000'], 0.8),
  },
  modal: {
    background: colors.white,
    color: colors['gray-800'],
  },
  header: {
    border: colors['gray-200'],
    color: colors['gray-1000'],
  },
  footer: {
    background: colors['gray-50'],
    border: colors['gray-200'],
  },
};

export { modalStyles };
