import { lightspeedTheme } from '@lightspeed/flame-tokens';

const themeColors = lightspeedTheme.colors;

const aliases: ColorAliases = {
  primary: themeColors['green-400'],
  secondary: themeColors['blue-300'],
  danger: themeColors['maple-300'],
  warning: themeColors['orange-300'],
  white: themeColors.white,
  textBody: themeColors['gray-100'],
  textHeading: themeColors.white,
  textDimmed: themeColors['gray-200'],
  dimmed: themeColors['gray-850'],
  disabled: themeColors['gray-800'],
  bodyBg: themeColors[`gray-900`],
};

const colors = {
  ...themeColors,
  ...aliases,
};

export { colors };
