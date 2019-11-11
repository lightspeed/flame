import { rgba } from 'polished';
import { colors } from '../colors';

const modalStyles: ModalStyles = {
  overlay: {
    background: rgba(colors['gray-1000'], 0.8),
  },
  modal: {
    background: colors.bodyBg,
    color: colors.textBody,
  },
  header: {
    border: colors['gray-800'],
    color: colors.textHeading,
  },
  footer: {
    background: colors['gray-850'],
    border: colors['gray-800'],
  },
};

export { modalStyles };
