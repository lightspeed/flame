import * as React from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';
import { Input } from './Input';

type BaseProps = {
  id: string;
  name: string;
  placeholder: string;
};

describe('<Input />', () => {
  const baseProps: BaseProps = {
    id: 'username',
    name: 'username',
    placeholder: 'Placeholder text',
  };

  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const component = createComponent(<Input {...baseProps} />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it('should have rendered an input of type text', () => {
    const { getByPlaceholderText } = customRender(
      <Input {...baseProps} placeholder="test-input" size="large" />,
    );
    const element: any = getByPlaceholderText('test-input');
    expect(element.type).toBe('text');
  });

  it('should not crash on null status', () => {
    const { getByPlaceholderText } = customRender(
      <Input {...baseProps} status={null} placeholder="test-input" size="large" />,
    );
    const element: any = getByPlaceholderText('test-input');
    expect(element.type).toBe('text');
  });

  it('should forward the disabled property to the base input', () => {
    const { getByPlaceholderText } = customRender(
      <Input {...baseProps} disabled placeholder="test-input" size="small" />,
    );
    const element: any = getByPlaceholderText('test-input');
    expect(element.disabled).toBeTruthy();
  });

  it('should forward the read-only property to the base input', () => {
    const { getByPlaceholderText } = customRender(
      <Input {...baseProps} readOnly placeholder="test-input" />,
    );

    expect(getByPlaceholderText('test-input')).toHaveAttribute('readonly');
  });

  it('should contain a prefix and a Suffix', () => {
    const { getByText } = customRender(
      <Input {...baseProps} prefix={<span>My Prefix</span>} suffix={<span>My Suffix</span>} />,
    );
    getByText('My Prefix');
    getByText('My Suffix');
  });

  describe('Input types and their messages', () => {
    it('should render a valid state', () => {
      const { getByText, getByTestId } = customRender(
        <Input {...baseProps} status="valid" statusMessage="Valid input." />,
      );
      getByText('Valid input.');
      getByTestId('icon-valid');
    });

    it('should render an errored state', () => {
      const { getByText, getByTestId } = customRender(
        <Input {...baseProps} status="error" statusMessage="Error input!" />,
      );
      getByText('Error input!');
      getByTestId('icon-error');
    });

    it('should render an warning state', () => {
      const { getByText, getByTestId } = customRender(
        <Input {...baseProps} status="warning" statusMessage="Warning input." />,
      );
      getByText('Warning input.');
      getByTestId('icon-warning');
    });

    it('should support the legacy API', () => {
      const { getByText, getByTestId } = customRender(
        <Input {...baseProps} status={{ type: 'warning', message: 'Warning input.' }} />,
      );
      getByText('Warning input.');
      getByTestId('icon-warning');
    });
  });

  describe('when passing ref to the component', () => {
    it('should pass the node correctly', () => {
      const ref = jest.fn();
      const { container } = customRender(<Input ref={ref} />);
      const input = container.querySelector('input');
      const [firstArg] = ref.mock.calls[0];

      expect(ref).toHaveBeenCalledTimes(1);
      expect(firstArg).toBe(input);
    });
  });

  describe('label', () => {
    it('Can find input by label', () => {
      const { getByText } = customRender(<Input label="My Label" />);

      expect(getByText('My Label')).toBeTruthy();
    });

    it('Should set htmlFor properly', () => {
      const { container, queryByLabelText } = customRender(<Input id="my-id" label="My Label" />);
      const input = queryByLabelText('My Label');
      const linkedLabel = container.querySelector(`label[for="${input.id}"]`);

      expect(input).toBeInTheDocument();
      expect(linkedLabel).toBeInTheDocument();
    });

    it('Should render aria-labelledBy properly', () => {
      const { container, queryByLabelText } = customRender(<Input id="my-id" label="My Label" />);
      const input = queryByLabelText('My Label');
      const linkedAriaText = container.querySelector(`#${input.getAttribute('aria-labelledBy')}`);

      expect(input).toBeInTheDocument();
      expect(linkedAriaText).toBeInTheDocument();
    });
  });

  describe('Events', () => {
    it('handles the `onChange` event', () => {
      const onChange = jest.fn();
      const { container } = customRender(<Input onChange={onChange} />);
      const input = container.querySelector('input');

      expect(onChange).not.toHaveBeenCalled();
      fireEvent.change(input, { target: { value: 'Awesome value' } });
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('handles the `onFocus` event', () => {
      const onFocus = jest.fn();
      const { container } = customRender(<Input onFocus={onFocus} />);
      const input = container.querySelector('input');

      expect(onFocus).not.toHaveBeenCalled();
      fireEvent.focus(input);
      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it('handles the `onBlur` event', () => {
      const onBlur = jest.fn();
      const { container } = customRender(<Input onBlur={onBlur} />);
      const input = container.querySelector('input');

      expect(onBlur).not.toHaveBeenCalled();
      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
});
