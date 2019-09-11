import { darken, setLightness, saturate, rgba } from 'polished';
import { colors } from '../colors';

const blue = colors.blue;
const lightBlue = darken(0.2, saturate(0.2, colors['blue-100']));
const sortableButtonColor = rgba(colors.blue, 0.1);
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
    loadingBackground: colors['snow-300'],
  },
  tr: {
    hover: {
      background: setLightness(0.98, colors['blue-100']),
    },
    borderColor: colors['snow-300'],
  },
  dropdown: {
    hover: {
      background: colors['snow-200'],
    },
  },
  sortable: {
    button: {
      background: sortableButtonColor,
    },
  },
};

export { tableStyles };
