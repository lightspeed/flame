import variablesMap from '../generate-variables';

describe('generate-variables', () => {
  variablesMap.forEach(([fileName, output]) => {
    // eslint-disable-next-line jest/valid-describe
    describe(fileName, () => {
      it('should output the right CSS', () => {
        expect(output).toMatchSnapshot();
      });
    });
  });
});
