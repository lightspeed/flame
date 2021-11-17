import { colors } from '../colors';

const cardVariants: CardVariants = {
  neutral: {
    boxShadow:
      '0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  },
  top: {
    boxShadow:
      '0 0 0 1px rgba(0, 0, 0, 0.06), 0 6px 12px 0 rgba(0, 0, 0, 0.03), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',
  },
};

const cardStyles: CardStyles = {
  background: colors.white,
  header: {
    border: '#e5eaed',
  },
  footer: {
    border: '#e5eaed',
  },
};

export { cardVariants, cardStyles };
