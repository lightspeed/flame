import { darken, rgba } from 'polished';
import { colors } from '../colors';

const linearGradient = (top: string, bottom: string) =>
  `linear-gradient(to bottom, ${top}, ${bottom})`;
const outlineGradient = (top: string, bottom: string, overshoot: string) =>
  `linear-gradient(to bottom, ${top} 38%, ${bottom} ${overshoot})`;

const buttonVariants: ButtonVariants = {
  fill: {
    primary: {
      backgroundImage: linearGradient(colors['green-200'], colors.green),
      backgroundColor: colors.green,
      borderColor: colors['green-300'],
      color: colors.snow,
      '&:hover': {
        backgroundImage: 'none',
        color: colors.snow,
        backgroundColor: colors.green,
        borderColor: rgba(colors.night, 0.5),
      },
      '&:active': {
        backgroundImage: 'none',
        color: colors.snow,
        backgroundColor: darken(0.02, colors.green),
        boxShadow: `inset 0 1px 0 0 ${rgba(colors['green-300'], 0.4)}`,
        borderColor: rgba(colors.night, 0.5),
      },
    },
    secondary: {
      backgroundImage: linearGradient(colors['blue-200'], colors.blue),
      backgroundColor: colors.blue,
      borderColor: colors['blue-300'],
      color: colors.snow,
      '&:hover': {
        color: colors.snow,
        backgroundImage: 'none',
        backgroundColor: colors.blue,
        borderColor: rgba(colors.night, 0.5),
      },
      '&:active': {
        color: colors.snow,
        backgroundImage: 'none',
        backgroundColor: darken(0.05, colors.blue),
        boxShadow: `inset 0 1px 0 0 rgba(38,133,63,0.4)`,
        borderColor: rgba(colors.night, 0.5),
      },
    },
    danger: {
      backgroundImage: linearGradient(colors.maple, colors['maple-200']),
      backgroundColor: colors['maple-200'],
      borderColor: colors['maple-300'],
      color: colors.snow,
      '&:hover': {
        color: colors.snow,
        backgroundImage: 'none',
        backgroundColor: colors['maple-200'],
        borderColor: rgba(colors.night, 0.5),
      },
      '&:active': {
        color: colors.snow,
        backgroundImage: 'none',
        backgroundColor: darken(0.05, colors['maple-200']),
        boxShadow: `inset 0 1px 0 0 ${rgba(colors['green-300'], 0.4)}`,
        borderColor: rgba(colors.night, 0.5),
      },
    },
    neutral: {
      backgroundImage: linearGradient(colors.snow, colors['snow-200']),
      backgroundColor: colors['snow-200'],
      borderColor: colors['gray-100'],
      color: colors.gray,
      '&:hover': {
        color: colors.gray,
        backgroundImage: 'none',
        backgroundColor: colors['snow-200'],
        borderColor: colors['gray-200'],
      },
      '&:active': {
        color: colors.gray,
        backgroundImage: 'none',
        backgroundColor: colors['snow-200'],
        boxShadow: `rgba(12, 13, 13, 0.18) 0px 0px 0.375rem inset`,
        borderColor: colors['gray-200'],
      },
    },
  },
  outline: {
    primary: {
      color: colors.green,
      backgroundImage: outlineGradient(colors.snow, colors['green-100'], '205%'),
      borderColor: colors.green,
      '&:hover': {
        backgroundColor: colors['green-100'],
        color: colors['green-300'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        backgroundImage: 'none',
        backgroundColor: colors['green-100'],
        color: colors['green-300'],
        boxShadow: `inset 0 0 0.375rem ${rgba(colors['green-300'], 0.4)}`,
      },
    },
    secondary: {
      color: colors.blue,
      backgroundImage: outlineGradient(colors.snow, colors['blue-100'], '138%'),
      borderColor: colors.blue,
      '&:hover': {
        backgroundColor: colors['blue-100'],
        color: colors['blue-300'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        backgroundImage: 'none',
        backgroundColor: colors['blue-100'],
        color: colors['blue-300'],
        boxShadow: `inset 0 0 0.375rem ${rgba(colors['blue-300'], 0.4)}`,
      },
    },
    danger: {
      color: colors['maple-200'],
      backgroundImage: outlineGradient(colors.snow, colors['maple-100'], '220%'),
      borderColor: colors['maple-200'],
      '&:hover': {
        backgroundColor: colors['maple-100'],
        color: colors['maple-300'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        backgroundImage: 'none',
        backgroundColor: colors['maple-100'],
        color: colors['maple-300'],
        boxShadow: `inset 0 0 0.375rem ${rgba(colors['maple-300'], 0.4)}`,
      },
    },
  },
};

const buttonIconVariants: ButtonIconVariants = {
  fill: {
    primary: {
      fill: colors.snow,
      color: colors.green,
      '.cr-icon__details-2': {
        color: colors.green,
        fill: colors.green,
      },
    },
    secondary: {
      fill: colors.snow,
      color: colors.blue,
      '.cr-icon__details-2': {
        color: colors.blue,
        fill: colors.blue,
      },
    },
    danger: {
      fill: colors.snow,
      color: colors.maple,
      '.cr-icon__details-2': {
        color: colors.maple,
        fill: colors.maple,
      },
    },
    neutral: {
      fill: colors.gray,
      color: colors.snow,
      '.cr-icon__details-2': {
        color: colors.snow,
        fill: colors.snow,
      },
    },
  },
  outline: {
    primary: {
      fill: colors.green,
      color: colors['green-100'],
    },
    secondary: {
      fill: colors.blue,
      color: colors['blue-100'],
    },
    danger: {
      fill: colors['maple-200'],
      color: colors['maple-100'],
    },
    neutral: {
      fill: colors.gray,
      color: colors.snow,
    },
  },
};

export { buttonVariants, buttonIconVariants };
