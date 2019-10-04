import * as React from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders correctly', () => {
    const component = createComponent(<Alert>Hello World</Alert>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  ['success', 'info', 'warning', 'danger'].forEach(type => {
    it(`renders type ${type} correctly`, () => {
      const component = createComponent(
        <Alert key={type} type={type}>
          Hello World
        </Alert>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it('renders a number', () => {
    const component = createComponent(<Alert>{300}</Alert>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with an icon', () => {
    const { getByTestId } = customRender(
      <Alert icon={<i data-testid="icon" />}>Hello World</Alert>,
    );
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('renders with a title', () => {
    const component = createComponent(<Alert title="My Title">Hello World</Alert>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Removes close button', () => {
    const component = createComponent(
      <Alert title="My Title" noCloseBtn>
        Hello World
      </Alert>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('accepts a custom handleClose function', () => {
    const handleClose = jest.fn();
    const { container } = customRender(<Alert onClose={handleClose}>Hello World</Alert>);

    expect(handleClose).not.toHaveBeenCalled();

    fireEvent.click(container.querySelector('button'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
