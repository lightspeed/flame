import * as React from 'react';

type CallbackEvent<T> = (event: T) => void;

export function useEventListener<T extends Event>(
  eventKey: string,
  callback: CallbackEvent<T>,
  // On SSR, document may not be defined at all
  target: EventTarget | undefined = typeof document !== 'undefined' ? document : undefined,
) {
  // Store callback in a ref so we don't have to remove/add the event listener when callback changes
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // We have a conditional return for the cleanup function in this specific case,
  // we can safely disable this rule.
  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    const handler: CallbackEvent<any> = event => callbackRef.current(event);

    if (target) {
      target.addEventListener(eventKey, handler);
      return () => {
        target.removeEventListener(eventKey, handler);
      };
    }
  }, [target, eventKey]);
}
