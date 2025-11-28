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

// Mapping from flame-tokens color names to Helios equivalents
// This provides backward compatibility for components using the old color names
const flameTokensToHeliosMapping: Record<string, string> = {
  // Maple (red/danger) → Helios "No" colors
  maple: heliosColors['helios-no-default'],
  'maple-100': heliosColors['helios-no-soft'],
  'maple-200': heliosColors['helios-no-default'],
  'maple-300': heliosColors['helios-no-strong'],
  // Blue (primary) → Helios "Go" colors (primary action)
  blue: heliosColors['helios-go-default'],
  'blue-100': heliosColors['helios-go-soft'],
  'blue-200': heliosColors['helios-go-default'],
  'blue-300': heliosColors['helios-go-strong'],
  // Green (success) → Helios "Success" colors
  green: heliosColors['helios-success-default'],
  'green-100': heliosColors['helios-success-soft'],
  'green-200': heliosColors['helios-success-default'],
  'green-300': heliosColors['helios-success-strong'],
  // Orange (warning) → Helios "Warning" colors
  orange: heliosColors['helios-warning-default'],
  'orange-100': heliosColors['helios-warning-soft'],
  'orange-200': heliosColors['helios-warning-default'],
  'orange-300': heliosColors['helios-warning-strong'],
  // Yellow (warning/attention) → Helios "Warning" colors
  yellow: heliosColors['helios-warning-default'],
  'yellow-100': heliosColors['helios-warning-soft'],
  'yellow-200': heliosColors['helios-warning-default'],
  'yellow-300': heliosColors['helios-warning-strong'],
  // Gray (neutral) → Helios neutral colors
  gray: heliosColors['helios-neutral-dark'],
  'gray-100': heliosColors['helios-neutral-soft'],
  'gray-200': heliosColors['helios-neutral-inert'],
  'gray-300': heliosColors['helios-neutral-edge'],
  // Seal (darker gray) → Helios neutral colors
  seal: heliosColors['helios-neutral-dark'],
  'seal-100': heliosColors['helios-neutral-soft'],
  'seal-200': heliosColors['helios-neutral-inert'],
  'seal-300': heliosColors['helios-neutral-edge'],
  // Dive (dark blue) → Helios "Supplementary" colors
  dive: heliosColors['helios-supplementary-default'],
  'dive-100': heliosColors['helios-supplementary-soft'],
  'dive-200': heliosColors['helios-supplementary-default'],
  'dive-300': heliosColors['helios-supplementary-strong'],
  // Night (very dark/black) → Helios neutral dark
  night: heliosColors['helios-neutral-dark'],
  'night-100': heliosColors['helios-neutral-soft'],
  'night-200': heliosColors['helios-neutral-dark'],
  'night-300': heliosColors['helios-neutral-ondark-default'],
  // Snow (white) → white
  snow: themeColors.white,
  'snow-100': themeColors.white,
  'snow-200': heliosColors['helios-neutral-backdrop'],
  'snow-300': heliosColors['helios-neutral-edge'],
};

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
  ...flameTokensToHeliosMapping,
  ...aliases,
};

export { colors };
