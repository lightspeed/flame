import { darken, setLightness, saturate, rgba } from 'polished';
import { colors } from '../colors';

const blue = colors['blue-500'];
const lightBlue = darken(0.2, saturate(0.2, colors['blue-50']));
const sortableButtonColor = rgba(colors['blue-500'], 0.1);
const progressBackground = `linear-gradient(
  45deg,
  ${blue} 0%,
  ${lightBlue} 25%,
  ${blue} 75%,
  ${lightBlue} 100%
)`;

const tableStyles: TableStyles = {
  progress: {
    background: progressBackground,
    backgroundSize: '400% 400%',
    loadingBackground: colors['gray-100'],
  },
  tr: {
    hover: {
      background: setLightness(0.99, colors['blue-50']),
    },
    borderColor: colors['gray-100'],
  },
  dropdown: {
    hover: {
      background: colors['gray-50'],
    },
  },
  sortable: {
    button: {
      background: sortableButtonColor,
    },
  },
};

export { tableStyles };
