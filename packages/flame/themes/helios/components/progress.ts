import { colors } from '../colors';

// Helper to access colors with proper typing
const getColor = (key: string): string => (colors as Record<string, string>)[key];

// Helios 2 Progress Styles
const progressStyles: ProgressStyles = {
  background: getColor('helios-neutral-edge'),
  progressBar: {
    background: `${getColor('helios-neutral-edge')} 
linear-gradient(
  45deg,
  ${getColor('helios-go-default')} 0%,
  ${getColor('helios-go-soft')} 25%,
  ${getColor('helios-go-default')} 75%,
  ${getColor('helios-go-soft')} 100%
)
`,
    backgroundSize: '400% 400%',
  },
  progressBarStatic: {
    background: getColor('helios-go-default'),
  },
};

export { progressStyles };
