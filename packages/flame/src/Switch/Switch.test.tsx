import * as React from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';

import { Switch } from './Switch';

describe('<Switch />', () => {
  const renderTests = [
    { when: 'empty props', props: {} },
    { when: 'id, name', props: { id: 'feature1-id', name: 'feature1' } },
    { when: 'checked', props: { checked: true } },
    { when: 'disabled', props: { disabled: true } },
    { when: 'autoFocus', props: { autoFocus: true } },
    { when: 'passing data-props', props: { 'data-property1': true } },
  ];

  renderTests.forEach(test => {
    describe(`when ${test.when}`, () => {
      it('should render correctly', () => {
        const component = createComponent(<Switch {...test.props} />);
        expect(component.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('Events', () => {
    it('should handle the `onChange` event', () => {
      const onChange = jest.fn();
      const { getByTestId } = customRender(<Switch onChange={onChange} data-testid="my-switch" />);
      fireEvent.click(getByTestId('my-switch'));
      expect(onChange).toHaveBeenCalled();
    });
  });

  describe('Render', () => {
    it('renders with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(<Switch className={className} />);
      expect(container.querySelectorAll('.custom-class')).toBeTruthy();
    });
  });

  xit('should forward the ref properly', () => {
    const ref = React.createRef<HTMLInputElement>();
    customRender(<Switch ref={ref} />);
    expect(ref.current.type).toBe('checkbox');
  });
});
