import * as React from 'react';
import { customRender, fireEvent } from 'test-utils';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders correctly', () => {
    const { getByText } = customRender(<Alert title="title">Hello World</Alert>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders with an icon', () => {
    const { getByTestId } = customRender(
      <Alert title="title" icon={<i data-testid="icon" />}>
        Hello World
      </Alert>,
    );
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('renders with a title', () => {
    const { getByText } = customRender(<Alert title="My Title">Hello World</Alert>);
    expect(getByText('My Title')).toBeTruthy();
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('does not render the close button', () => {
    const { queryByRole } = customRender(
      <Alert title="My Title" noCloseBtn>
        Hello World
      </Alert>,
    );
    expect(queryByRole('button')).toBeFalsy();
  });

  it('accepts a custom handleClose function', () => {
    const handleClose = jest.fn();
    const { container } = customRender(
      <Alert title="title" onClose={handleClose}>
        Hello World
      </Alert>,
    );

    expect(handleClose).not.toHaveBeenCalled();

    fireEvent.click(container.querySelector('button'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
