import * as React from 'react';

export function useToggle(initiallyToggled = false) {
  const [isActive, setIsToggled] = React.useState(initiallyToggled);

  const toggle = React.useCallback(() => setIsToggled(prevState => !prevState), []);
  const setActive = React.useCallback(() => setIsToggled(true), []);
  const setInactive = React.useCallback(() => setIsToggled(false), []);

  return {
    isActive,
    toggle,
    setActive,
    setInactive,
  };
}
