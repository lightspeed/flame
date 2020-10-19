/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { customRender, createComponent } from 'test-utils';
import { Flag } from '../index';

describe('<Flag />', () => {
  describe('Snapshots', () => {
    const renderTests = [
      { when: 'country code', props: { code: 'ca' } },
      { when: 'country name', props: { name: 'canada' } },
      { when: 'region code', props: { code: 'ca-qc' } },
      { when: 'region name', props: { name: 'quebec' } },
      { when: 'size', props: { code: 'nl', size: '2rem' } },
    ];
    renderTests.forEach(test => {
      describe(`when ${test.when}`, () => {
        it('should render correctly', () => {
          const component = createComponent(<Flag {...test.props} />);
          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });

  describe('Render', () => {
    it('renders with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(<Flag code="CA" className={className} />);
      expect(container.querySelector('.custom-class')).toBeTruthy();
    });
  });
});
