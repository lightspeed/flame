import * as React from 'react';

type CallbackEvent<T> = (event: T) => void;

export function useEventListener<T extends Event>(
  eventKey: string,
  callback: CallbackEvent<T>,
  target?: EventTarget,
) {
  React.useEffect(() => {
    const captureEvent: CallbackEvent<T> = event => {
      callback(event);
    };

    if (target || document) {
      (target || document).addEventListener(eventKey, captureEvent as any);
    }

    return () => {
      if (target || document) {
        (target || document).removeEventListener(eventKey, captureEvent as any);
      }
    };
  }, [callback]);
}
