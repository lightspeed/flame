import utilitiesMap from '../generate-utilities.ts';

describe('generate-utilities', () => {
  utilitiesMap.forEach(([fileName, cssOutput]) => {
    describe(`${fileName}.scss`, () => {
      it('should output the right CSS', () => {
        expect(cssOutput).toMatchSnapshot();
      });
    });
  });
});
