const { pxToRem } = require('../utils');

describe('pxToRem', () => {
  it('returns rem value with default base value', () => {
    const result = pxToRem(3);
    expect(result).toEqual('0.1875rem');
  });

  it('returns rem value with custom base value', () => {
    const result = pxToRem(3, { base: 12 });
    expect(result).toEqual('0.25rem');
  });

  it('limits and rounds digits appearing after default decimals', () => {
    const result = pxToRem(3, { base: 14 });
    expect(result).toEqual('0.21429rem');
  });

  it('limits and rounds digits appearing after custom decimals', () => {
    const result = pxToRem(6, { base: 14, decimals: 2 });
    expect(result).toEqual('0.43rem');
  });

  it('returns without rem unit when value given is 0', () => {
    expect(pxToRem(0)).toEqual('0');
  });
});
