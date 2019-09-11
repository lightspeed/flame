import * as React from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';

import Autocomplete, { exampleItems, exampleProps } from './examples';

describe('Autocomplete', () => {
  it('renders correctly', () => {
    const component = createComponent(<Autocomplete {...exampleProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with an initial value', () => {
    const component = createComponent(
      <Autocomplete {...exampleProps} initialValue={exampleItems[0]} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders as disabled', () => {
    const component = createComponent(<Autocomplete {...exampleProps} disabled />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders in loading mode', () => {
    const component = createComponent(<Autocomplete {...exampleProps} isLoading />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('onChange', () => {
    it('updates value state', () => {
      const { container, getByText, getAllByText, queryByText } = customRender(
        <Autocomplete {...exampleProps} />,
      );

      // Grab the hidden input, because obviously the rendered autocomplete
      // is not an input, but a div...
      const input = container.querySelector('input#color-input');
      fireEvent.change(input, { target: { value: 'r' } });

      // There should be the following options
      expect(getAllByText('Red')).toHaveLength(1);
      expect(getAllByText('Gray')).toHaveLength(1);

      // Let's select the "Red" option
      fireEvent.click(getByText('Red'));

      // Red should be the only text available
      // The other options should not exist
      expect(getAllByText('Red')).toHaveLength(1);
      expect(queryByText('Gray')).toBeNull();
    });
  });

  describe('optionRenderer', () => {
    it('modifies the rendered options', () => {
      const { container, getAllByTestId } = customRender(
        <Autocomplete
          {...exampleProps}
          components={{
            Option: props => {
              const { children, innerRef, innerProps } = props;
              return (
                <i ref={innerRef} {...innerProps} data-testid="icon">
                  {children}
                </i>
              );
            },
          }}
        />,
      );

      // Grab the hidden input, because obviously the rendered autocomplete
      // is not an input, but a div...
      const input = container.querySelector('input#color-input');
      fireEvent.change(input, { target: { value: 'r' } });

      expect(getAllByTestId('icon').length).toBeGreaterThan(0);
    });
  });

  describe('onFocus', () => {
    it('is called when passed as prop', () => {
      const onFocus = jest.fn();
      const { container } = customRender(<Autocomplete {...exampleProps} onFocus={onFocus} />);

      const input = container.querySelector('input#color-input');
      fireEvent.focus(input);
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('onBlur', () => {
    it('is called when passed as prop', () => {
      const onBlur = jest.fn();
      const { container } = customRender(<Autocomplete {...exampleProps} onBlur={onBlur} />);
      const input = container.querySelector('input#color-input');
      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('onCreate', () => {
    it('enables creatable when function is passed', async () => {
      const onCreateMock = jest.fn();
      const promisedMock = async () => {
        jest.fn();
        // yolo
        expect(onCreateMock).toHaveBeenCalled();
      };
      const { container, getByText } = customRender(
        <Autocomplete {...exampleProps} onCreate={promisedMock} />,
      );
      const input = container.querySelector('input#color-input');
      fireEvent.change(input, { target: { value: 'new option' } });
      fireEvent.click(getByText('Add “new option”'));
    });
  });
});
