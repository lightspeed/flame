import * as React from 'react';
import { Placement as PopoverPlacement } from 'popper.js';
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

const PopperWrapper: React.FC<PopperWrapper> = ({
  targetRef,
  placement,
  isFlipEnabled,
  positionFixed,
  isActive,
  light,
  className,
  zIndex,
  children,
  autoClose,
  onClose,
}) => {
  const popperRef = React.createRef<HTMLDivElement>();
  const { placement: nextPlacement } = usePopper(targetRef, popperRef, {
    placement: placement || 'bottom-start',
    positionFixed,
    modifiers: {
      flip: {
        enabled: isFlipEnabled,
      },
    },
  });

  useOnClickOutside(popperRef, () => {
    isActive && autoClose && onClose();
  });

  return (
    <PopoverContainer
      light={light}
      ref={popperRef}
      className={className}
      zIndex={zIndex as any}
      isActive={isActive}
      data-placement={nextPlacement}
    >
      {children}
    </PopoverContainer>
  );
};

// The current behaviour of Popover is that the PopoverContainer is not rendered if
// not open. This is somwhat problematic with refs + usePopper as it cannot recompute fast
// enough the new position, which leads to the popover container jump locations.
// To preserve the old behaviour, we need to put the usePopper in a seperate component
// to trigger a full re-render, which in turns means the ref will be created in time.
// This functionality should be removed in the future, since it's not good for a11y reasons.
/**
 * A small extension of an action taken, containing information, or more actions still.
 */
const Popover: React.FC<PopoverProps> = ({
  className,
  isOpen = false,
  target,
  placement,
  noArrow,
  positionFixed = false,
  onOpen = () => {},
  onClose = () => {},
  autoClose = true,
  isFlipEnabled = true,
  light,
  zIndex,
  children,
}) => {
  const targetRef = React.createRef<any>();
  const isFirstPass = React.useRef(true);

  const { isActive, setInactive, setActive } = useToggle(isOpen);

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
  }, [isOpen, isFirstPass.current]);

  const targetProps = { ref: targetRef };

  const targetEvents = {
    onClick: handleTriggerClick,
  };

  return (
    <React.Fragment>
      {target({ targetProps, targetEvents, active: isOpen })}
      {isActive && (
        <PopperWrapper
          targetRef={targetRef}
          light={light}
          className={className}
          zIndex={zIndex}
          isActive={isActive}
          onClose={onClose}
          placement={placement}
          positionFixed={positionFixed}
          autoClose={autoClose}
          isFlipEnabled={isFlipEnabled}
        >
          {children}
          {!noArrow && <PopoverArrow />}
        </PopperWrapper>
      )}
    </React.Fragment>
  );
};

export { Popover, PopoverPlacement };
