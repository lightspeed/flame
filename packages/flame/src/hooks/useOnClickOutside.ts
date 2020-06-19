import * as React from 'react';

export function useOnClickOutside(ref: any, handler: (event: Event) => void) {
  const savedCallback = React.useRef(handler);

  React.useEffect(() => {
    savedCallback.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      savedCallback.current(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref]);
}
