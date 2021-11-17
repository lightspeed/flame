import { houstonTheme } from '@lightspeed/flame-tokens';

const themeColors = houstonTheme.colors;
const textColor = '#27252A';

const aliases: ColorAliases = {
  primary: themeColors['green-500'],
  secondary: themeColors['blue-500'],
  danger: themeColors['maple-500'],
  warning: themeColors['orange-500'],
  white: themeColors.white,
  textBody: textColor,
  textHeading: textColor,
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
