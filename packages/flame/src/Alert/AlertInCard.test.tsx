import * as React from 'react';
import { customRender, fireEvent } from 'test-utils';
import { AlertInCard } from './AlertInCard';

describe('AlertInCard ', () => {
  it('renders correctly', () => {
    const { getByText } = customRender(<AlertInCard type="info">Hello World</AlertInCard>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('removes close button', () => {
    const { queryByText, getByRole } = customRender(
      <AlertInCard type="info">Hello World</AlertInCard>,
    );
    fireEvent.click(getByRole('button'));
    expect(queryByText('Hello World')).toBeFalsy();
  });

  it('does not render the close button', () => {
    const { queryByRole } = customRender(
      <AlertInCard type="info" noCloseBtn>
        Hello World
      </AlertInCard>,
    );

    expect(queryByRole('button')).toBeFalsy();
  });

  it('accepts a custom handleClose function', () => {
    const handleClose = jest.fn();
    const { getByRole } = customRender(
      <AlertInCard onClose={handleClose}>Hello World</AlertInCard>,
    );

    expect(handleClose).not.toHaveBeenCalled();

    fireEvent.click(getByRole('button'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
