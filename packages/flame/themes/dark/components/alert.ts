import { desaturate } from 'polished';
import { colors } from '../colors';

const alertVariants: AlertVariants = {
  success: {
    background: desaturate(0.8, colors['green-1000']),
    borderColor: desaturate(0.5, colors['green-900']),
  },
  info: {
    background: desaturate(0.8, colors['blue-1000']),
    borderColor: desaturate(0.5, colors['blue-900']),
  },
  danger: {
    background: desaturate(0.8, colors['maple-1000']),
    borderColor: desaturate(0.5, colors['maple-900']),
  },
  warning: {
    background: desaturate(0.8, colors['orange-1000']),
    borderColor: desaturate(0.5, colors['orange-900']),
  },
};

export { alertVariants };
