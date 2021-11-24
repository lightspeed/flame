import * as React from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';
import { Radio } from './Radio';

describe('<Radio />', () => {
  describe('Snapshots', () => {
    it('renders a simple Radio correctly', () => {
      const component = createComponent(<Radio checked={false} onChange={jest.fn()} />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a Radio with a label and description correctly', () => {
      const component = createComponent(
        <Radio
          checked={false}
          onChange={jest.fn()}
          label="Label"
          description="Description"
          id="Radio"
          value="value"
        />,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a checked Radio correctly', () => {
      const component = createComponent(
        <Radio onChange={jest.fn()} id="Radio" value="value" checked />,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a disabled Radio correctly', () => {
      const component = createComponent(
        <Radio checked={false} onChange={jest.fn()} id="Radio" value="value" disabled />,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('handles the `onChange` event', () => {
      const onChange = jest.fn();
      const { container } = customRender(<Radio checked={false} onChange={onChange} />);
      expect(onChange).not.toHaveBeenCalled();
      fireEvent.click(container.querySelector('input'));
      expect(onChange).toHaveBeenCalled();
    });

    it('handles the `onFocus` event', () => {
      const onFocus = jest.fn();
      const { container } = customRender(
        <Radio checked={false} onChange={jest.fn()} onFocus={onFocus} />,
      );
      expect(onFocus).not.toHaveBeenCalled();
      fireEvent.focus(container.querySelector('input'));
      expect(onFocus).toHaveBeenCalled();
    });

    it('handles the `onBlur` event', () => {
      const onBlur = jest.fn();
      const { container } = customRender(
        <Radio checked={false} onChange={jest.fn()} onBlur={onBlur} />,
      );
      expect(onBlur).not.toHaveBeenCalled();
      fireEvent.blur(container.querySelector('input'));
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('Render', () => {
    const { getByText } = customRender(
      <Radio label={<div>my label</div>} description={<div>my description</div>} />,
    );

    getByText('my label');
    getByText('my description');
  });
});
