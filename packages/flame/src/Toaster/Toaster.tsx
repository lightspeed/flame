import * as React from 'react';
import { keyframes } from '@emotion/core';
import { css } from '@styled-system/css';
import {
  ToastProvider,
  ToastProviderProps,
  ToastProps,
  useToasts as useReactToastNotifications,
  AppearanceTypes,
  Options,
} from 'react-toast-notifications';

import { IconVerified } from '../Icon/Verified';
import { IconDanger } from '../Icon/Danger';
import { IconMathMultiply } from '../Icon/MathMultiply';
import { Box, Flex } from '../Core';

const toastStates = {
  entering: { transform: 'translate3d(0, 120%, 0)', opacity: 0 },
  entered: { transform: 'translate3d(0,0,0.1%)', opacity: 1 },
  exiting: { transform: 'translate3d(0, 120%, 0)', opacity: 0 },
  exited: { transform: 'translate3d(0, 120%, 0)', opacity: 0 },
};

const gutter = 8;
const shrinkKeyframes = keyframes`from { width: 100%; } to { width: 0% }`;

interface CountdownProps {
  autoDismissTimeout: number;
  opacity: number;
  isRunning: boolean;
  appearance?: AppearanceTypes;
}
const Countdown: React.FC<CountdownProps> = ({
  autoDismissTimeout,
  opacity,
  isRunning,
  appearance = 'success',
  ...props
}) => (
  <div
    className="fl-toaster__countdown"
    css={{
      animation: `${shrinkKeyframes} ${autoDismissTimeout}ms linear`,
      animationPlayState: isRunning ? 'running' : 'paused',
      bottom: 0,
      height: '2px',
      left: 0,
      opacity,
      position: 'absolute',
    }}
    {...props}
  />
);

const Toaster: React.FC<ToastProps> = ({
  children,
  transitionDuration,
  transitionState,
  autoDismiss,
  autoDismissTimeout,
  isRunning,
  appearance = 'success',
  onDismiss,
}) => {
  const [height, setHeight] = React.useState<string | number>('auto');
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    if (transitionState === 'entered') {
      const el = elementRef.current;
      setHeight(el.offsetHeight + gutter);
    }
    if (transitionState === 'exiting') {
      setHeight(0);
    }
  }, [transitionState]);

  return (
    <div
      ref={elementRef}
      style={{ height }}
      css={css({
        transition: `height ${transitionDuration - 100}ms 100ms`,
        variant: `toasterVariants.${appearance}`,
      })}
      className="fl-toaster"
    >
      <div
        css={css({
          display: 'flex',
          borderRadius: 'radius-2',
          boxShadow: 0,
          marginBottom: `${gutter}px`,
          transition: `transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1), opacity ${transitionDuration}ms`,
          minWidth: '345px',
          maxWidth: '600px',
          overflow: 'hidden',
          position: 'relative',
          ...toastStates[transitionState],
        })}
        className="fl-toaster__container"
      >
        <Flex role="alert" width="100%" alignItems="center" my={2} className="fl-toaster__wrapper">
          <Box ml={3} lineHeight={1} aria-hidden="true" className="fl-toaster__icon">
            {appearance === 'error' ? (
              <IconDanger color="danger" />
            ) : (
              <IconVerified color="primary" />
            )}
          </Box>
          <Flex
            flex="1"
            fontWeight="bold"
            ml={2}
            justifyContent="space-between"
            fontSize="text-s"
            width="100%"
            className="fl-toaster__content"
          >
            {children}
          </Flex>
          <button
            type="button"
            aria-label="Dismiss toast"
            className="fl-toaster__dismiss-btn"
            css={css({
              // Needs to be visually centered
              marginTop: '1px',
              appearance: 'none',
              border: 'none',
              background: 'none',
              margin: 0,
              padding: 0,
              cursor: 'pointer',
              marginRight: 3,
              marginLeft: 2,
            })}
            onClick={() => onDismiss()}
          >
            {/* @TODO: Probably should use theming here? */}
            <IconMathMultiply size="24px" aria-hidden="true" />
          </button>
        </Flex>

        <Countdown
          opacity={autoDismiss ? 1 : 0}
          autoDismissTimeout={autoDismissTimeout}
          isRunning={isRunning}
          appearance={appearance}
        />
      </div>
    </div>
  );
};

const ToasterContainer: React.FC = ({ children }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    width="100%"
    p={`${gutter}px`}
    css={{
      boxSizing: 'border-box',
      maxHeight: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'fixed',
      zIndex: 1000,
      bottom: 0,
      flexDirection: 'column',
    }}
  >
    {children}
  </Flex>
);

// Pre-bind some defaults to the base ToastProvider.
const ToasterProvider: React.FC<ToastProviderProps> = ({
  children,
  autoDismissTimeout = 5000,
  ...restProps
}) => (
  <ToastProvider
    placement="bottom-center"
    autoDismissTimeout={autoDismissTimeout}
    components={{ Toast: Toaster, ToastContainer: ToasterContainer }}
    transitionDuration={200}
    {...restProps}
  >
    {children}
  </ToastProvider>
);

interface ActionableToastContent {
  actionCallback: () => void;
  actionTitle: string;
}
const ActionableToastContent: React.FC<ActionableToastContent> = ({
  children,
  actionCallback,
  actionTitle,
}) => (
  <React.Fragment>
    {children}
    <button
      type="button"
      aria-label={actionTitle}
      onClick={actionCallback}
      className="fl-toast__action-btn"
      css={css({
        appearance: 'none',
        border: 'none',
        background: 'none',
        margin: 0,
        padding: 0,
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#2e61de',
        fontSize: 'text-s',
      })}
    >
      {actionTitle}
    </button>
  </React.Fragment>
);

interface ActionableContent {
  content: React.ReactNode;
  actionTitle: string;
  actionCallback: () => void;
}
// Augment the default `useToasts` hook with some of our stuff
function useToasts() {
  const baseToast = useReactToastNotifications();
  const addToast = baseToast.addToast;

  const addActionableToast = React.useCallback(
    (params: ActionableContent, options?: Options, cb?: (id: string) => void) => {
      addToast(
        <ActionableToastContent
          actionTitle={params.actionTitle}
          actionCallback={params.actionCallback}
        >
          {params.content}
        </ActionableToastContent>,
        options,
        cb,
      );
    },
    [addToast],
  );

  return {
    ...baseToast,
    addActionableToast,
  };
}

export { Toaster, ToasterProvider, useToasts, ActionableToastContent };
