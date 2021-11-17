import { rgba } from 'polished';
import { colors } from '../colors';

const buttonVariants: ButtonVariants = {
  fill: {
    primary: {
      backgroundImage: `linear-gradient(180deg, ${colors['green-700']}, ${colors['green-800']})`,
      backgroundColor: '',
      borderColor: colors['green-900'],
      color: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: colors['green-800'],
        backgroundImage: `linear-gradient(180deg, ${colors['green-800']}, ${colors['green-800']})`,
      },
      '&:active': {
        boxShadow: `inset 0 2px 3px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    secondary: {
      backgroundImage: `linear-gradient(180deg, ${colors['blue-400']}, ${colors['blue-500']})`,
      backgroundColor: '',
      borderColor: colors['blue-600'],
      color: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: colors['blue-500'],
        backgroundImage: `linear-gradient(180deg, ${colors['blue-500']}, ${colors['blue-500']})`,
        borderColor: '',
      },
      '&:active': {
        boxShadow: `inset 0 2px 3px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    danger: {
      backgroundImage: `linear-gradient(180deg, ${colors['maple-400']}, ${colors['maple-500']})`,
      backgroundColor: '',
      borderColor: colors['maple-600'],
      color: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: colors['maple-500'],
        backgroundImage: `linear-gradient(180deg, ${colors['maple-500']}, ${colors['maple-500']})`,
        borderColor: '',
      },
      '&:active': {
        boxShadow: `inset 0 2px 3px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    neutral: {
      backgroundImage: `linear-gradient(180deg, ${colors.white}, ${colors['gray-50']})`,
      backgroundColor: '',
      borderColor: colors['gray-200'],
      color: colors['gray-800'],
      '&:hover': {
        color: colors['gray-800'],
        backgroundColor: colors['gray-50'],
        backgroundImage: `linear-gradient(180deg, ${colors['gray-50']}, ${colors['gray-50']})`,
        borderColor: '',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
  },
  outline: {
    primary: {
      color: colors['green-800'],
      backgroundColor: colors.white,
      borderColor: colors['green-800'],
      '&:hover': {
        backgroundColor: colors['green-50'],
        color: colors['green-800'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    secondary: {
      color: colors['blue-500'],
      backgroundColor: colors.white,
      borderColor: colors['blue-500'],
      '&:hover': {
        backgroundColor: colors['blue-50'],
        color: colors['blue-500'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
    danger: {
      color: colors['maple-500'],
      backgroundColor: colors.white,
      borderColor: colors['maple-500'],
      '&:hover': {
        backgroundColor: colors['maple-50'],
        color: colors['maple-500'],
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        boxShadow: `inset 0 1px 4px 0 ${rgba(colors['gray-900'], 0.3)}`,
      },
    },
  },
};

const buttonIconVariants: ButtonIconVariants = {
  fill: {
    primary: {
      fill: colors.white,
      color: colors['green-700'],
      '.cr-icon__details-2': {
        color: colors['green-700'],
        fill: colors['green-700'],
      },
    },
    secondary: {
      fill: colors.white,
      color: colors['blue-500'],
      '.cr-icon__details-2': {
        color: colors['blue-500'],
        fill: colors['blue-500'],
      },
    },
    danger: {
      fill: colors.white,
      color: colors['maple-400'],
      '.cr-icon__details-2': {
        color: colors['maple-400'],
        fill: colors['maple-400'],
      },
    },
    neutral: {
      fill: colors['gray-800'],
      color: colors.white,
      '.cr-icon__details-2': {
        color: colors.white,
        fill: colors.white,
      },
    },
  },
  outline: {
    primary: {
      fill: colors['green-800'],
      color: colors['green-50'],
    },
    secondary: {
      fill: colors['blue-500'],
      color: colors['blue-50'],
    },
    danger: {
      fill: colors['maple-500'],
      color: colors['maple-50'],
    },
    neutral: {
      fill: colors['gray-800'],
      color: colors.white,
    },
  },
};

export { buttonVariants, buttonIconVariants };
