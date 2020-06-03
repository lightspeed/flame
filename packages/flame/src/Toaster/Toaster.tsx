import * as React from 'react';
import { keyframes } from '@emotion/core';
import { css } from '@styled-system/css';
import {
  ToastProvider,
  ToastProviderProps,
  ToastProps,
  useToasts as useReactToastNotifications,
  Options,
} from 'react-toast-notifications';

import { IconVerified } from '../Icon/Verified';
import { IconDanger } from '../Icon/Danger';
import { IconMathMultiply } from '../Icon/MathMultiply';
import { Box, Flex } from '../Core';

const toastStates = {
  entering: { transform: 'translate3d(0, 120%, 0)', opacity: 0 },
  entered: { transform: 'translate3d(0,0,0)', opacity: 1 },
  exiting: { transform: 'translate3d(0, 120%, 0)', opacity: 0 },
  exited: { transform: 'translate3d(0, 120%, 0)', opacity: 0 },
};

const gutter = 8;
const shrinkKeyframes = keyframes`from { width: 100%; } to { width: 0% }`;

interface CountdownProps {
  autoDismissTimeout: number;
  opacity: number;
  isRunning: boolean;
}
const Countdown: React.FC<CountdownProps> = ({
  autoDismissTimeout,
  opacity,
  isRunning,
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
  ...rest
}) => {
  const [height, setHeight] = React.useState<string | number>('auto');
  const elementRef = React.useRef(null);
  // Only allow success or error, since the DSD specs says that
  // these are the only two possibilities
  const nextAppearance = appearance !== 'success' ? 'error' : 'success';

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
        variant: `toasterVariants.${nextAppearance}`,
        pointerEvents: 'all',
      })}
      className="fl-toaster"
      {...rest}
    >
      <div
        css={css({
          display: 'flex',
          borderRadius: 'radius-2',
          boxShadow: 0,
          marginBottom: `${gutter}px`,
          transition: `transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1), opacity ${transitionDuration}ms`,
          minWidth: ['300px', '345px'],
          maxWidth: ['300px', '600px', '600px'],
          overflow: 'hidden',
          position: 'relative',
          ...toastStates[transitionState],
        })}
        className="fl-toaster__container"
      >
        <Flex role="alert" width="100%" alignItems="center" my={2} className="fl-toaster__wrapper">
          <Box ml={3} lineHeight={1} aria-hidden="true" className="fl-toaster__icon">
            {nextAppearance === 'error' ? (
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
            fontSize={['text', 'text-s']}
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
            <IconMathMultiply size="24px" aria-hidden="true" />
          </button>
        </Flex>

        <Countdown
          opacity={autoDismiss ? 1 : 0}
          autoDismissTimeout={autoDismissTimeout}
          isRunning={isRunning}
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
      pointerEvents: 'none',
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
        ml: 2,
        fontSize: ['text', 'text-s'],
      })}
    >
      {actionTitle}
    </button>
  </React.Fragment>
);

type RestrictedOptions = Options & { appearance: 'success' | 'error' };
type RestrictedAddToast = (
  content: React.ReactNode,
  options?: RestrictedOptions,
  callback?: (id: string) => void,
) => void;
type ActionableContent = {
  content: React.ReactNode;
  actionTitle: string;
  actionCallback: () => void;
};
// Augment the default `useToasts` hook with some of our stuff
// Also, restrict the types a bit since the DSD only allows 2 types of
// Toast styles
function useToasts() {
  const { addToast: baseAddToast, ...rest } = useReactToastNotifications();

  const addActionableToast = React.useCallback(
    (params: ActionableContent, options?: RestrictedOptions, cb?: (id: string) => void) => {
      baseAddToast(
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
    [baseAddToast],
  );

  const addToast = baseAddToast as RestrictedAddToast;

  return {
    addToast,
    addActionableToast,
    ...rest,
  };
}

export { Toaster, ToasterProvider, useToasts, ActionableToastContent };
