import { darken, saturate, rgba } from 'polished';
import { colors } from '../colors';

// Helper to access colors with proper typing
const getColor = (key: string): string => (colors as Record<string, string>)[key];

// Helios 2.0 Table Styles - Exact match with unified-components
// Using tokens from @lightspeed/unified-tokens/helios via colors object
const blue = getColor('helios-go-default'); // #3A1AFE
const lightBlue = darken(0.1, saturate(0.2, '#869DFF29')); // Derived from go-highlight
const sortableButtonColor = rgba(getColor('helios-go-default'), 0.1);
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
    loadingBackground: getColor('helios-neutral-backdrop'),
  },
  tr: {
    hover: {
      background: getColor('helios-go-highlight-strong'),
    },
    borderColor: getColor('helios-border-neutral-soft'),
  },
  dropdown: {
    hover: {
      background: getColor('helios-neutral-backdrop'),
    },
  },
  sortable: {
    button: {
      background: sortableButtonColor,
    },
  },
};

export { tableStyles };
