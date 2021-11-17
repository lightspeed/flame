import { pxToRem } from './utils';

const typeface = {
  serif: 'serif',
  'sans-serif': 'Lato, Helvetica Neue, Helvetica, Arial, sans-serif',
  monospace: 'monospace',
};

const weightsValues = [
  { name: 'regular', value: 400 },
  { name: 'bold', value: 700 },
];
const weights = weightsValues.reduce((obj: Record<string, string>, { name, value }) => {
  // eslint-disable-next-line no-param-reassign
  obj[`${name}`] = `${value}`;
  return obj;
}, {});

const fontSizesValues = [
  { name: 'xxxl', alias: 'xxlarge', value: 48 },
  { name: 'xxl', alias: 'xxlarge', value: 32 },
  { name: 'xl', alias: 'xlarge', value: 24 },
  { name: 'l', alias: 'large', value: 18 },
  { name: '', alias: '', value: 15 },
  { name: 's', alias: 'small', value: 14 },
  { name: 'xs', alias: 'xsmall', value: 12 },
  { name: 'xxs', alias: 'xxsmall', value: 8 },
];
const fontSizes = fontSizesValues.reduce((obj: Record<string, string>, { name, value }) => {
  // eslint-disable-next-line no-param-reassign
  obj[`text${name ? `-${name}` : ''}`] = pxToRem(value);
  return obj;
}, {});

const fontSizeAliases = fontSizesValues.reduce((obj: Record<string, string>, { alias, value }) => {
  // eslint-disable-next-line no-param-reassign
  obj[alias] = pxToRem(value);
  return obj;
}, {});

const letterSpacingValues = ['normal', 0.5, 1.0, 1.5];
const letterSpacings = letterSpacingValues.reduce((obj: Record<string, string>, value, index) => {
  const key = typeof value === 'string' ? value : index;
  const nextValue = typeof value === 'string' ? value : pxToRem(value);

  // eslint-disable-next-line no-param-reassign
  obj[`letter-spacing-${key}`] = nextValue;

  return obj;
}, {});

export { typeface, weights, fontSizes, fontSizeAliases, letterSpacings };
