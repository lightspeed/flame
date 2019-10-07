/* eslint-disable import/no-extraneous-dependencies */
import { themeGet } from '../index';
import { theme } from '../themes/flame';

describe('Typed themeGet', () => {
  it('should return the same value as themeGet for a given theme', () => {
    const primaryColor = themeGet('colors.primary')({ theme });
    expect(primaryColor).toBe(theme.colors.primary);
  });
});
