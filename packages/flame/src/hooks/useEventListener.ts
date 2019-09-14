import * as React from 'react';

type CallbackEvent<T> = (event: T) => void;

export function useEventListener<T extends Event>(
  eventKey: string,
  callback: CallbackEvent<T>,
  target: EventTarget = document,
) {
  React.useEffect(() => {
    const captureEvent: CallbackEvent<T> = event => {
      callback(event);
    };

    if (target) {
      target.addEventListener(eventKey, captureEvent as any);
      return () => {
        target.removeEventListener(eventKey, captureEvent as any);
      };
    }
  }, [callback]);
}
