/* eslint-disable import/no-extraneous-dependencies */
import React, { FormEventHandler } from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';
import { Checkbox } from './Checkbox';

type RenderTest = {
  when: string;
  props: {
    checked?: boolean;
    onChange?: FormEventHandler<any>;
    disabled?: boolean;
    indeterminate?: boolean;
    id?: string;
    value?: string;
    label?: any;
    description?: any;
  };
};

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    const renderTests: RenderTest[] = [
      { when: 'empty props', props: {} },
      { when: 'not checked', props: { checked: false } },
      { when: 'checked', props: { checked: true, onChange: () => {} } },
      { when: 'disabled', props: { disabled: true } },
      { when: 'indeterminate', props: { indeterminate: true } },
      {
        when: 'all props',
        props: { id: 'id', value: 'value', label: 'Label', description: 'Description' },
      },
      {
        when: 'all props and label/description with html',
        props: {
          id: 'id',
          value: 'value',
          label: <div>Label</div>,
          description: <div>Description</div>,
        },
      },
    ];
    renderTests.forEach(test => {
      describe(`when ${test.when}`, () => {
        it('should render correctly', () => {
          const component = createComponent(<Checkbox {...test.props} />);
          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });

  describe('Events', () => {
    it('handles the `onChange` event', () => {
      const onChange = jest.fn();
      const { container } = customRender(<Checkbox onChange={onChange} />);
      fireEvent.click(container.querySelector('input[type="checkbox"]'));
      expect(onChange).toHaveBeenCalled();
    });

    it('handles the `onFocus` event', () => {
      const onFocus = jest.fn();
      const { container } = customRender(<Checkbox onFocus={onFocus} />);
      fireEvent.focus(container.querySelector('input[type="checkbox"]'));
      expect(onFocus).toHaveBeenCalled();
    });

    it('handles the `onBlur` event', () => {
      const onBlur = jest.fn();
      const { container } = customRender(<Checkbox onBlur={onBlur} />);
      fireEvent.blur(container.querySelector('input[type="checkbox"]'));
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('Render', () => {
    it('renders with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(<Checkbox className={className} />);

      expect(container.querySelectorAll('.custom-class')).toBeTruthy();
    });

    it('renders custom components in Label and Description', () => {
      const { getByText } = customRender(
        <Checkbox label={<div>my label</div>} description={<div>my description</div>} />,
      );

      getByText('my label');
      getByText('my description');
    });
  });
});
