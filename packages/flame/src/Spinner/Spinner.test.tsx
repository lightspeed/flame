import * as React from 'react';
import { createComponent } from 'test-utils';
import { Spinner } from './Spinner';

describe('<Spinner />', () => {
  describe('Snapshots', () => {
    const renderTests = [
      { when: 'empty props', props: {} },
      { when: 'size is xlarge', props: { size: 'xlarge' } },
      { when: 'color is cr-blue', props: { color: 'blue' } },
    ];

    renderTests.forEach(test => {
      describe(`when ${test.when}`, () => {
        it('should render correctly', () => {
          const component = createComponent(<Spinner {...test.props} />);
          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});
