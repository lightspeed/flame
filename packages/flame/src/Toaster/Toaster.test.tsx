import * as React from 'react';
import { customRender, screen, fireEvent, waitFor } from 'test-utils';
import { ToasterProvider, useToasts } from './index';

const TestAddToast: React.FC<{ appearance: 'success' | 'error'; autoDismiss: boolean }> = ({
  appearance,
  autoDismiss,
}) => {
  const { addToast } = useToasts();
  return (
    <button
      type="button"
      onClick={() => {
        addToast('this is a message', {
          appearance,
          autoDismiss,
        });
      }}
    >
      create toast
    </button>
  );
};

const TestAddActionableToast: React.FC<{ actionCallback: () => void }> = ({ actionCallback }) => {
  const { addActionableToast } = useToasts();
  return (
    <button
      type="button"
      onClick={() => {
        addActionableToast({
          content: 'actionable toast',
          actionTitle: 'action-title',
          actionCallback,
        });
      }}
    >
      create toast
    </button>
  );
};

describe('Toaster', () => {
  describe('without auto-dismss set to false', () => {
    it('should render out a toaster', async () => {
      customRender(
        <ToasterProvider>
          <TestAddToast appearance="success" autoDismiss={false} />
        </ToasterProvider>,
      );

      const toaster = await screen.queryByRole('alert');
      expect(toaster).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('alert')).toHaveTextContent(/this is a message/);
      fireEvent.click(screen.getByLabelText('Dismiss toast'));

      await waitFor(() => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      });
    });

    it('should render out a success toaster with a custom action', async () => {
      const spy = jest.fn();
      customRender(
        <ToasterProvider>
          <TestAddActionableToast actionCallback={spy} />
        </ToasterProvider>,
      );

      const toaster = await screen.queryByRole('alert');
      expect(toaster).not.toBeInTheDocument();

      fireEvent.click(screen.getByText('create toast'));
      expect(screen.getByRole('alert')).toHaveTextContent(/actionable toast/);

      fireEvent.click(screen.getByLabelText('action-title'));
      expect(spy).toHaveBeenCalledTimes(1);

      fireEvent.click(screen.getByLabelText('Dismiss toast'));

      await waitFor(() => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      });
    });
  });

  // We have fake timers running here, isolate these test-cases in their own
  // describe block
  describe('with auto-dismiss set to true', () => {
    it('should render out a success toaster that disappears after a while', async () => {
      jest.useFakeTimers();

      customRender(
        <ToasterProvider>
          <TestAddToast appearance="success" autoDismiss={true} />
        </ToasterProvider>,
      );

      const toaster = await screen.queryByRole('alert');
      expect(toaster).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('alert')).toHaveTextContent(/this is a message/);

      jest.runAllTimers();

      await waitFor(() => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      });
    });
  });
});
