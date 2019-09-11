/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';

import { customRender, createComponent } from 'test-utils';

import { Bone } from './Bone';

describe('<Bone />', () => {
  describe('Snapshots', () => {
    const renderTests = [
      { when: 'it has empty props', props: {} },
      { when: 'it has width and height', props: { width: '1rem', height: '1rem' } },
      { when: 'it animated is false', props: { animated: false } },
    ];

    renderTests.forEach(test => {
      describe(`when ${test.when}`, () => {
        it('should render correctly', () => {
          const component = createComponent(<Bone {...test.props} />);
          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });

  describe('Render', () => {
    it('renders with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(<Bone className={className} />);

      expect(container.querySelector('.custom-class')).toBeTruthy();
    });
  });
});
