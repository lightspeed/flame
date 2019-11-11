import { rgba } from 'polished';
import { colors } from '../colors';

const buttonVariants: ButtonVariants = {
  fill: {
    primary: {
      backgroundImage: '',
      backgroundColor: colors['green-300'],
      borderColor: colors['green-300'],
      color: colors['gray-900'],
      '&:hover': {
        color: colors['gray-900'],
        backgroundColor: colors['green-400'],
        backgroundImage: `linear-gradient(180deg, ${colors['green-400']}, ${colors['green-400']})`,
      },
      '&:active': {
        boxShadow: `inset 0 2px 3px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    secondary: {
      backgroundImage: '',
      backgroundColor: colors['blue-200'],
      borderColor: colors['blue-200'],
      color: colors['gray-900'],
      '&:hover': {
        color: colors['gray-900'],
        backgroundColor: colors['blue-300'],
        backgroundImage: `linear-gradient(180deg, ${colors['blue-300']}, ${colors['blue-300']})`,
        borderColor: '',
      },
      '&:active': {
        boxShadow: `inset 0 2px 3px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    danger: {
      backgroundImage: '',
      backgroundColor: colors['maple-200'],
      borderColor: colors['maple-300'],
      color: colors['gray-900'],
      '&:hover': {
        color: colors['gray-900'],
        backgroundColor: colors['maple-300'],
        backgroundImage: `linear-gradient(180deg, ${colors['maple-300']}, ${colors['maple-300']})`,
        borderColor: '',
      },
      '&:active': {
        boxShadow: `inset 0 2px 3px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    neutral: {
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      borderColor: colors['gray-50'],
      color: colors['gray-100'],
      '&:hover': {
        color: colors['gray-100'],
        backgroundColor: `${rgba(colors['gray-50'], 0.1)}`,
        backgroundImage: `none`,
        borderColor: '',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors.white, 0.3)}`,
        backgroundColor: `${rgba(colors['gray-50'], 0.2)}`,
      },
    },
  },
  outline: {
    primary: {
      color: colors['green-200'],
      backgroundColor: 'transparent',
      borderColor: colors['green-400'],
      '&:hover': {
        backgroundColor: `${rgba(colors['green-300'], 0.1)}`,
        color: colors['green-200'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors.white, 0.3)}`,
        backgroundColor: `${rgba(colors['green-300'], 0.2)}`,
        color: colors['green-200'],
      },
    },
    secondary: {
      color: colors['blue-200'],
      backgroundColor: 'transparent',
      borderColor: colors['blue-400'],
      '&:hover': {
        backgroundColor: `${rgba(colors['blue-300'], 0.1)}`,
        color: colors['blue-200'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors.white, 0.3)}`,
        backgroundColor: `${rgba(colors['blue-300'], 0.2)}`,
        color: colors['blue-100'],
      },
    },
    danger: {
      color: colors['maple-200'],
      backgroundColor: 'transparent',
      borderColor: colors['maple-400'],
      '&:hover': {
        backgroundColor: `${rgba(colors['maple-300'], 0.1)}`,
        color: colors['maple-200'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors.white, 0.3)}`,
        backgroundColor: `${rgba(colors['maple-300'], 0.2)}`,
        color: colors['maple-100'],
      },
    },
  },
};

const buttonIconVariants = {
  fill: {
    primary: {
      fill: colors['gray-900'],
      color: colors['green-700'],
      '.cr-icon__details-2': {
        color: colors['green-200'],
        fill: colors['green-200'],
      },
    },
    secondary: {
      fill: colors['gray-900'],
      color: colors['blue-400'],
      '.cr-icon__details-2': {
        color: colors['blue-400'],
        fill: colors['blue-400'],
      },
    },
    danger: {
      fill: colors['gray-900'],
      color: colors['maple-400'],
      '.cr-icon__details-2': {
        color: colors['maple-400'],
        fill: colors['maple-400'],
      },
    },
    neutral: {
      fill: colors['gray-50'],
      color: colors['gray-850'],
      '.cr-icon__details-2': {
        color: colors['gray-850'],
        fill: colors['gray-850'],
      },
    },
  },
  outline: {
    primary: {
      fill: colors['green-200'],
      color: colors['green-500'],
      '.cr-icon__details-2': {
        color: colors['green-800'],
        fill: colors['green-800'],
      },
    },
    secondary: {
      fill: colors['blue-200'],
      color: colors['blue-500'],
      '.cr-icon__details-2': {
        color: colors['blue-800'],
        fill: colors['blue-800'],
      },
    },
    danger: {
      fill: colors['maple-200'],
      color: colors['maple-500'],
      '.cr-icon__details-2': {
        color: colors['maple-800'],
        fill: colors['maple-800'],
      },
    },
    neutral: {
      fill: colors['gray-50'],
      color: colors['gray-850'],
      '.cr-icon__details-2': {
        color: colors['gray-850'],
        fill: colors['gray-850'],
      },
    },
  },
};

export { buttonVariants, buttonIconVariants };
