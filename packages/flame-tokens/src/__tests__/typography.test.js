const { fontSizes, fontSizeAliases } = require('../typography');

describe('fontSizes', () => {
  it('returns list of rem value by size', () => {
    expect(fontSizes).toMatchSnapshot();
  });
});

describe('fontSizeAliases', () => {
  it('returns list of rem value by alias size', () => {
    expect(fontSizeAliases).toMatchSnapshot();
  });
});
