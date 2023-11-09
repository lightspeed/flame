import * as React from 'react';
import { Placement as PopoverPlacement } from '@popperjs/core';
import { PopoverArrow, PopoverContainer, PopoverContainerProps } from './PopoverContainer';
import { usePopper, useToggle, useOnClickOutside, useEventListener } from '../hooks';

interface PopperWrapper extends PopoverContainerProps {
  targetRef?: React.RefObject<any>;
  /** One of "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" */
  placement?: PopoverPlacement;
  isActive?: boolean;
  autoClose?: boolean;
  className?: string;
  /** Sets position:fixed to Popover */
  positionFixed?: boolean;

  /** Callback after Popover closes */
  onClose?(): void;

  /** Disables Popover from automatically staying in view */
  isFlipEnabled?: boolean;
}

export interface PopoverProps extends PopoverContainerProps, PopperWrapper {
  /** CSS class name */
  className?: string;
  /** Sets the open state of Popover */
  isOpen?: boolean;

  /** Node which Popover will point to */
  target(params: {
    targetProps?: object;
    targetEvents?: {
      onClick(event: React.MouseEvent): void;
    };
    active?: boolean;
  }): React.ReactNode;

  /** Disables arrow on side of Popover */
  noArrow?: boolean;

  /** Callback after Popover opens */
  onOpen?(): void;
}

// The current behaviour of Popover is that the PopoverContainer is not rendered if
// not open. This is somwhat problematic with refs + usePopper as it cannot recompute fast
// enough the new position, which leads to the popover container jump locations.
// To preserve the old behaviour, we need to put the usePopper in a seperate component
// to trigger a full re-render, which in turns means the ref will be created in time.
// This functionality should be removed in the future, since it's not good for a11y reasons.
/**
 * A small extension of an action taken, containing information, or more actions still.
 */
export const Popover: React.FC<PopoverProps> = (
  {
    className,
    isOpen = false,
    target,
    placement,
    noArrow,
    positionFixed = false,
    onOpen = () => {
    },
    onClose = () => {
    },
    autoClose = true,
    isFlipEnabled = true,
    light,
    zIndex,
    children,
  }) => {
  const [ targetRef, setTargetRef ] = React.useState(null);
  const [ popperRef, setPopperRef ] = React.useState(null);
  const [ popperRootRef, setPopperRootRef ] = React.useState(null);
  const clickOutsideRef = React.useRef();
  clickOutsideRef.current = popperRootRef;
  const isFirstPass = React.useRef(true);

  const { isActive, setInactive, setActive } = useToggle(isOpen);

  const { styles, attributes, update } = usePopper(targetRef, popperRef, {
    placement: placement || 'bottom-start',
    strategy: positionFixed ? 'fixed':'absolute',
    modifiers: [
      {
        name: 'flip',
        enabled: isFlipEnabled,
      },
    ],
  });

  useOnClickOutside(clickOutsideRef, () => {
    isActive && autoClose && onClose();
    isActive && update && update();
  });

  useEventListener<KeyboardEvent>('keyup', event => {
    if (event.key === 'Escape') {
      onClose();
    }
  });

  function handleTriggerClick(event: React.MouseEvent) {
    event.preventDefault();
    if (!isActive) {
      onOpen();
    } else {
      onClose();
    }
  }

  React.useEffect(() => {
    if (!isFirstPass.current) {
      if (isOpen) {
        setActive();
      } else {
        setInactive();
      }
    } else {
      isFirstPass.current = false;
    }
  }, [ isOpen, setActive, setInactive ]);

  const targetProps = { ref: setTargetRef };

  const targetEvents = {
    onClick: handleTriggerClick,
  };

  return (
    <div ref={setPopperRootRef}>
      {target({ targetProps, targetEvents, active: isOpen })}
      {isActive && (
        <PopoverContainer
          light={light}
          ref={setPopperRef}
          className={className}
          zIndex={zIndex as any}
          isActive={isActive}
          style={styles.popper}
          data-placement={
            attributes && attributes.popper && attributes.popper['data-popper-placement']
          }
        >
          {children}
          {!noArrow && <PopoverArrow/>}
        </PopoverContainer>
      )}
    </div>
  );
};

// TODO: This needs to be removed since it potentially breaks
export { PopoverPlacement };
