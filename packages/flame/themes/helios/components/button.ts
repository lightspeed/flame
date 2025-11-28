import { colors } from '../colors';

// Helper to access colors with proper typing
const getColor = (key: string): string => (colors as Record<string, string>)[key];

// Helios 2.0 Button Styles - Exact match with unified-components
// Key features: flat colors (no gradients), no borders (border-none, shadow-transparent)
// Using tokens from @lightspeed/unified-tokens/helios via colors object
const buttonVariants: ButtonVariants = {
  fill: {
    primary: {
      backgroundImage: 'none',
      backgroundColor: getColor('helios-go-default'), // #3A1AFE (bgGoDefault)
      borderColor: getColor('helios-go-default'), // Match bg for seamless look
      color: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: getColor('helios-go-soft'), // #4E58FD (bgGoSoft)
        backgroundImage: 'none',
        borderColor: getColor('helios-go-soft'),
      },
      '&:active': {
        backgroundColor: getColor('helios-go-strong'), // #2B13C7 (bgGoStrong)
        borderColor: getColor('helios-go-strong'),
        boxShadow: 'none',
      },
    },
    secondary: {
      backgroundImage: 'none',
      backgroundColor: getColor('helios-supplementary-default'), // #365B85 (bgSupplementaryDefault)
      borderColor: getColor('helios-supplementary-default'),
      color: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: getColor('helios-supplementary-soft'), // #5177A2 (bgSupplementarySoft)
        backgroundImage: 'none',
        borderColor: getColor('helios-supplementary-soft'),
      },
      '&:active': {
        backgroundColor: getColor('helios-supplementary-strong'), // #193F66 (bgSupplementaryStrong)
        borderColor: getColor('helios-supplementary-strong'),
        boxShadow: 'none',
      },
    },
    danger: {
      backgroundImage: 'none',
      backgroundColor: getColor('helios-no-default'), // #AA2128 (bgNoDefault)
      borderColor: getColor('helios-no-default'),
      color: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: getColor('helios-no-soft'), // #D3202F (bgNoSoft)
        backgroundImage: 'none',
        borderColor: getColor('helios-no-soft'),
      },
      '&:active': {
        backgroundColor: getColor('helios-no-strong'), // #801617 (bgNoStrong)
        borderColor: getColor('helios-no-strong'),
        boxShadow: 'none',
      },
    },
    neutral: {
      backgroundImage: 'none',
      backgroundColor: colors.white,
      borderColor: getColor('helios-neutral-edge'),
      color: colors.textBody,
      '&:hover': {
        color: colors.textBody,
        backgroundColor: getColor('helios-neutral-backdrop'), // #F1F2F7
        backgroundImage: 'none',
        borderColor: getColor('helios-neutral-edge'),
      },
      '&:active': {
        backgroundColor: getColor('helios-neutral-edge'), // #E3E4E9
        borderColor: getColor('helios-neutral-edge'),
        boxShadow: 'none',
      },
    },
  },
  // Outline variants styled as "ghost" buttons (Helios 2.0 ghost-primary/ghost-danger/ghost-secondary)
  // Ghost buttons: transparent bg initially, colored text, fill on hover with white text
  outline: {
    primary: {
      color: getColor('helios-go-default'), // Colored text initially
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      backgroundImage: 'none',
      '&:hover': {
        backgroundColor: getColor('helios-go-default'), // Fill with color on hover
        color: colors.white, // Text becomes white
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        backgroundColor: getColor('helios-go-strong'), // Darker on active
        color: colors.white,
        backgroundImage: 'none',
        boxShadow: 'none',
      },
    },
    secondary: {
      color: getColor('helios-supplementary-default'),
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      backgroundImage: 'none',
      '&:hover': {
        backgroundColor: getColor('helios-supplementary-default'),
        color: colors.white,
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        backgroundColor: getColor('helios-supplementary-strong'),
        color: colors.white,
        backgroundImage: 'none',
        boxShadow: 'none',
      },
    },
    danger: {
      color: getColor('helios-no-default'),
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      backgroundImage: 'none',
      '&:hover': {
        backgroundColor: getColor('helios-no-default'),
        color: colors.white,
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      '&:active': {
        backgroundColor: getColor('helios-no-strong'),
        color: colors.white,
        backgroundImage: 'none',
        boxShadow: 'none',
      },
    },
  },
};

// Button icon colors - white on filled buttons, colored on ghost/outline buttons
const buttonIconVariants: ButtonIconVariants = {
  fill: {
    primary: {
      fill: colors.white, // White icons on filled buttons
      color: colors.white,
      '.cr-icon__details-2': {
        color: colors.white,
        fill: colors.white,
      },
    },
    secondary: {
      fill: colors.white,
      color: colors.white,
      '.cr-icon__details-2': {
        color: colors.white,
        fill: colors.white,
      },
    },
    danger: {
      fill: colors.white,
      color: colors.white,
      '.cr-icon__details-2': {
        color: colors.white,
        fill: colors.white,
      },
    },
    neutral: {
      fill: colors.textBody, // Dark icons on neutral (white bg)
      color: colors.textBody,
      '.cr-icon__details-2': {
        color: colors.textBody,
        fill: colors.textBody,
      },
    },
  },
  outline: {
    primary: {
      fill: getColor('helios-go-default'), // Colored icons on ghost/outline buttons
      color: getColor('helios-go-default'),
    },
    secondary: {
      fill: getColor('helios-supplementary-default'),
      color: getColor('helios-supplementary-default'),
    },
    danger: {
      fill: getColor('helios-no-default'),
      color: getColor('helios-no-default'),
    },
    neutral: {
      fill: colors.textBody,
      color: colors.textBody,
    },
  },
};

export { buttonVariants, buttonIconVariants };
