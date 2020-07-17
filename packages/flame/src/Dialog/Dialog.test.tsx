import * as React from 'react';
import { customRender, fireEvent } from 'test-utils';

import { Dialog } from './Dialog';
import { DialogWithSize } from './__mocks__/DialogWithSize';

describe('<Dialog />', () => {
  const title = 'Dialog Prompt';
  const message = 'Are you sure?';
  const onCancel = jest.fn(() => {});
  const onConfirm = jest.fn(() => {});

  beforeEach(() => {
    onCancel.mockClear();
    onConfirm.mockClear();
  });

  it('should have rendered a header and some body content', () => {
    const { getByText } = customRender(
      <Dialog title={title} message={message} isOpen onCancel={onCancel} onConfirm={onConfirm} />,
    );
    getByText('Dialog Prompt');
    getByText('Are you sure?');
  });

  it('should call the cancel action when cancel button is clicked', () => {
    const { getByText } = customRender(
      <Dialog
        title={title}
        message={message}
        onCancel={onCancel}
        onConfirm={onConfirm}
        cancelText="Cancel Text"
        isOpen
      />,
    );
    const cancelButton = getByText('Cancel Text');

    fireEvent.click(cancelButton);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should call the confirm action when confirm button is clicked', () => {
    const { getByText } = customRender(
      <Dialog
        title={title}
        message={message}
        onCancel={onCancel}
        onConfirm={onConfirm}
        confirmText="Confirm Text"
        isOpen
      />,
    );
    const confirmButton = getByText('Confirm Text');

    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it(`should disable all the actions button when it's loading`, () => {
    const { getByText } = customRender(
      <Dialog
        title={title}
        message={message}
        onCancel={onCancel}
        onConfirm={onConfirm}
        isOpen
        confirmText="Confirm Text"
        cancelText="Cancel Text"
        isLoading
      />,
    );
    const confirmButton = getByText('Confirm Text');
    const cancelButton = getByText('Cancel Text');

    fireEvent.click(confirmButton);
    fireEvent.click(cancelButton);

    expect(onConfirm).not.toHaveBeenCalled();
    expect(onCancel).not.toHaveBeenCalled();
  });

  it('should call the cancel action if we click on the X button', () => {
    const { getByTestId } = customRender(
      <Dialog
        title={title}
        message={message}
        onCancel={onCancel}
        onConfirm={onConfirm}
        confirmText="Confirm Text"
        isOpen
      />,
    );
    const closeButton = getByTestId('modal-close-button');
    fireEvent.click(closeButton);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should not render the X button', () => {
    const { queryByTestId } = customRender(
      <Dialog
        title={title}
        message={message}
        onCancel={onCancel}
        onConfirm={onConfirm}
        showCloseButton={false}
        confirmText="Confirm Text"
        isOpen
      />,
    );
    expect(queryByTestId('modal-close-button')).toBeNull();
  });

  it('should have a max-width', () => {
    const { getByRole } = customRender(
      <Dialog title={title} message={message} isOpen onCancel={onCancel} onConfirm={onConfirm} />,
    );
    const modalEl = getByRole('dialog', { hidden: true });
    const modalStyles = window.getComputedStyle(modalEl);

    expect(modalStyles.getPropertyValue('max-width')).toEqual('500px');
  });

  it('should allow to override the defaults', () => {
    const maxWidth = '6969px';
    const { getByRole } = customRender(<DialogWithSize maximumWidth={maxWidth} />);
    const modalEl = getByRole('dialog', { hidden: true });
    const modalStyles = window.getComputedStyle(modalEl);

    expect(modalStyles.getPropertyValue('max-width')).toEqual(maxWidth);
  });
});
