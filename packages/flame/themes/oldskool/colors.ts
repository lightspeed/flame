import { oldSkoolTheme } from '@lightspeed/flame-tokens';

const themeColors = oldSkoolTheme.colors;

const aliases: ColorAliases = {
  primary: themeColors.green,
  secondary: themeColors.blue,
  danger: themeColors.maple,
  warning: themeColors.orange,
  white: themeColors.snow,
  textBody: themeColors.gray,
  textHeading: themeColors.night,
  textDimmed: themeColors['gray-300'],
  disabled: themeColors['snow-300'],
  dimmed: themeColors['snow-200'],
  bodyBg: '#f2f5f8',
};

const colors = {
  ...themeColors,
  ...aliases,
};

export { colors };
