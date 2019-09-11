import { pxToRem } from './utils';

const base = 6;
const multipliers = Array.from({ length: 11 }, (_, index) => index);
const scale = multipliers.reduce((obj: Record<string, string | number>, scaleNum) => {
  const value = pxToRem(scaleNum * base);
  // eslint-disable-next-line no-param-reassign
  obj[`spacing-${scaleNum}`] = scaleNum === 0 ? 0 : value;
  return obj;
}, {});

export { base, multipliers, scale };
