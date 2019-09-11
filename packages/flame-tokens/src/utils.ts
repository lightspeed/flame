const pxToRem = (value: number, { base = 16, decimals = 5 } = {}) => {
  if (value === 0) return '0';
  const result = parseFloat((value / base).toFixed(decimals));
  return `${result}rem`;
};

const cssUnitFromSize = (size: string) => size.replace(/.+?([^\d]+$)/, '$1');

export { pxToRem, cssUnitFromSize };
