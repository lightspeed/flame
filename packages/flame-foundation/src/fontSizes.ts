/**
 * The fontSizes key controls all the following properties
 *
 * font-size
 */

const fontSizes: Record<string, string> = {
  xxlarge: '2.25rem',
  xlarge: '1.5rem',
  large: '1.125rem',
  normal: '1rem',
  small: '0.875rem',
  xsmall: '0.75rem',
  xxsmall: '0.5rem',
};

// Aliases
fontSizes['text-xxl'] = fontSizes.xxlarge;
fontSizes['text-xl'] = fontSizes.xlarge;
fontSizes['text-l'] = fontSizes.large;
fontSizes.text = fontSizes.normal;
fontSizes['text-s'] = fontSizes.small;
fontSizes['text-xs'] = fontSizes.xsmall;
fontSizes['text-xxs'] = fontSizes.xxsmall;

export { fontSizes };
