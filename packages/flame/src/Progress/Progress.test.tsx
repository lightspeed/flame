import * as React from 'react';
import { createComponent } from 'test-utils';

import { Progress } from './Progress';

type RenderTest = {
  when: string;
  props: {
    type: 'determinate' | 'indeterminate' | 'static';
    current: number;
    total: number;
  };
};
describe('<Progress />', () => {
  describe('Snapshots', () => {
    const renderTests: RenderTest[] = [
      { when: 'determinate', props: { type: 'determinate', current: 10, total: 100 } },
      { when: 'indeterminate', props: { type: 'indeterminate', current: 0, total: 100 } },
      { when: 'static', props: { type: 'static', current: 0, total: 100 } },
      { when: 'full', props: { type: 'determinate', current: 100, total: 100 } },
    ];

    renderTests.forEach(test => {
      describe(`when ${test.when}`, () => {
        it('should render correctly', () => {
          const { type, current, total } = test.props;

          const component = createComponent(
            <Progress type={type} current={current} total={total} />,
          );
          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});
