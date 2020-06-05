import { lightspeedTheme } from '@lightspeed/flame-tokens';

const themeColors = lightspeedTheme.colors;

const aliases: ColorAliases = {
  primary: themeColors['green-700'],
  secondary: themeColors['blue-500'],
  danger: themeColors['maple-500'],
  warning: themeColors['orange-500'],
  white: themeColors.white,
  textBody: themeColors['gray-700'],
  textHeading: themeColors['gray-1000'],
  textDimmed: themeColors['gray-600'],
  dimmed: themeColors['gray-50'],
  disabled: themeColors['gray-100'],
  bodyBg: themeColors['gray-50'],
};

const colors = {
  ...themeColors,
  ...aliases,
};

export { colors };
