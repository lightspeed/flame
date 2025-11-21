import { lightspeedTheme } from '@lightspeed/flame-tokens';
// @ts-ignore - unified-tokens types may not be fully resolved in this context
import { lsColorLightTheme } from '@lightspeed/unified-tokens/helios';

const themeColors = lightspeedTheme.colors;

// Helper to remove alpha channel from token values (FF suffix)
const getColorValue = (tokenValue: string): string => {
  return tokenValue.replace(/FF$/, '');
};

// Helios 2.0 Color System - Using tokens from @lightspeed/unified-tokens/helios
// Maps unified-tokens names to Flame theme color names
const tokenMapping: Record<string, keyof typeof lsColorLightTheme> = {
  'helios-go-default': 'bgGoDefault',
  'helios-go-soft': 'bgGoSoft',
  'helios-go-strong': 'bgGoStrong',
  'helios-no-default': 'bgNoDefault',
  'helios-no-soft': 'bgNoSoft',
  'helios-no-strong': 'bgNoStrong',
  'helios-success-default': 'bgSuccessDefault',
  'helios-success-soft': 'bgSuccessSoft',
  'helios-success-strong': 'bgSuccessStrong',
  'helios-warning-default': 'bgWarningDefault',
  'helios-warning-soft': 'bgWarningSoft',
  'helios-warning-strong': 'bgWarningStrong',
  'helios-supplementary-default': 'bgSupplementaryDefault',
  'helios-supplementary-soft': 'bgSupplementarySoft',
  'helios-supplementary-strong': 'bgSupplementaryStrong',
  'helios-neutral-dark': 'fgNeutralDefault',
  'helios-neutral-soft': 'fgNeutralSoft',
  'helios-neutral-inert': 'fgNeutralInertDefault',
  'helios-neutral-edge': 'bgNeutralEdge',
  'helios-neutral-backdrop': 'bgNeutralBackdrop',
  'helios-neutral-ondark-default': 'fgNeutralOndarkDefault',
  // Highlight colors for badges and alerts
  'helios-overlay-neutral-soft': 'overlayNeutralSoft',
  'helios-overlay-neutral-strong': 'overlayNeutralStrong',
  'helios-go-highlight-strong': 'bgGoHighlightStrong',
  'helios-go-strong-fg': 'fgGoStrong',
  'helios-success-highlight-strong': 'bgSuccessHighlightStrong',
  'helios-success-strong-fg': 'fgSuccessStrong',
  'helios-warning-highlight-strong': 'bgWarningHighlightStrong',
  'helios-warning-strong-fg': 'fgWarningStrong',
  'helios-no-highlight-strong': 'bgNoHighlightStrong',
  'helios-no-strong-fg': 'fgNoStrong',
  // Border colors
  'helios-border-neutral-soft': 'borderNeutralSoft',
  'helios-border-neutral-strong': 'borderNeutralStrong',
  'helios-border-go-default': 'borderGoDefault',
  'helios-border-success-default': 'borderSuccessDefault',
  'helios-border-no-default': 'borderNoDefault',
  'helios-border-warning-default': 'borderWarningDefault',
  // Foreground colors
  'helios-fg-go-default': 'fgGoDefault',
  'helios-fg-success-default': 'fgSuccessDefault',
  'helios-fg-no-default': 'fgNoDefault',
  'helios-fg-warning-default': 'fgWarningDefault',
  'helios-fg-supplementary-default': 'fgSupplementaryDefault',
  // Background colors
  'helios-bg-neutral-inert-softer': 'bgNeutralInertSofter',
  'helios-bg-neutral-inverted-top': 'bgNeutralInvertedTop',
};

const heliosColors = Object.keys(tokenMapping).reduce((acc, flameName) => {
  acc[flameName] = getColorValue(lsColorLightTheme[tokenMapping[flameName]]);
  return acc;
}, {} as Record<string, string>);

const aliases: ColorAliases = {
  primary: heliosColors['helios-go-default'], // Helios "Go" color
  secondary: heliosColors['helios-supplementary-default'], // Helios "Supplementary" color
  danger: heliosColors['helios-no-default'], // Helios "No" color
  warning: heliosColors['helios-warning-default'],
  white: themeColors.white,
  textBody: heliosColors['helios-neutral-dark'], // Helios neutral dark
  textHeading: themeColors['gray-1000'],
  textDimmed: heliosColors['helios-neutral-soft'],
  dimmed: heliosColors['helios-neutral-edge'],
  disabled: heliosColors['helios-neutral-inert'],
  bodyBg: themeColors.white, // Clean white background
};

const colors = {
  ...themeColors,
  ...heliosColors,
  ...aliases,
};

export { colors };
