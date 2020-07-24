import { parseToRgb } from 'polished';
import { pxToRem } from './utils';
import { colorsMap } from './colors';

const { red, green, blue } = parseToRgb(colorsMap.night);

const outerValues = [
  { y: 1, blur: 2 },
  { y: 2, blur: 4 },
  { y: 3, blur: 6 },
  { y: 6, blur: 12 },
  { y: 12, blur: 24 },
];
const outer = outerValues.reduce((obj: Record<string, string>, { y, blur }, index) => {
  const scale = index + 1;
  // eslint-disable-next-line no-param-reassign
  obj[`shadow-${scale}`] = `0 ${pxToRem(y)} ${pxToRem(blur)} rgba(${red}, ${green}, ${blue}, 0.15)`;
  return obj;
}, {});

const innerValues = [
  { y: 1, blur: 2, r: 56, g: 61, b: 61, alpha: '0.1' },
  { y: 0, blur: 6 },
];
const inner = innerValues.reduce(
  (obj: Record<string, string>, { y, blur, r, g, b, alpha }, index) => {
    const scale = index + 1;
    const defaultAlpha = '0.18';
    const shadowColor = `rgba(${r || red}, ${g || green}, ${b || blue}, ${alpha || defaultAlpha})`;

    // eslint-disable-next-line no-param-reassign
    obj[`inner-shadow-${scale}`] = `inset 0 ${pxToRem(y)} ${pxToRem(blur)} ${shadowColor}`;
    return obj;
  },
  {},
);

const innerNValues = [{ y: -1, blur: 3 }];
const innerN = innerNValues.reduce((obj: Record<string, string>, { y, blur }, index) => {
  const scale = index + 1;
  // eslint-disable-next-line no-param-reassign
  obj[`inner-shadow-n${scale}`] = `inset 0 ${pxToRem(y)} ${pxToRem(
    blur,
  )} rgba(${red}, ${green}, ${blue}, 0.18)`;
  return obj;
}, {});

const borderValues = [{ spread: 1 }];
const border = borderValues.reduce((obj: Record<string, string>, { spread }) => {
  // eslint-disable-next-line no-param-reassign
  obj[`border-shadow`] = `0 0 0 ${pxToRem(spread)} rgba(${red}, ${green}, ${blue}, 0.15)`;
  return obj;
}, {});

export { outer, inner, innerN, border };
