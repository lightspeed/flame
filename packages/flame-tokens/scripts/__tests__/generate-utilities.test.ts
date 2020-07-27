import utilitiesMap from '../generate-utilities';

describe('generate-utilities', () => {
  utilitiesMap.forEach(([fileName, cssOutput]) => {
    describe(`${fileName}.scss`, () => {
      it('should output the right CSS', () => {
        expect(cssOutput).toMatchSnapshot();
      });
    });
  });
});
