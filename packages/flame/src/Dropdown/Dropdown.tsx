import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';
import { Placement as PopperPlacement } from '@popperjs/core';

import { Box, FlameBoxProps } from '../Core';
import { Button, ButtonProps } from '../Button';
import { IconSmallChevronDown } from '../Icon/SmallChevronDown';
import { BasePopoverContainer, PopoverContainerProps } from '../Popover/PopoverContainer';
import { usePopper } from '../hooks/usePopper';
import { useToggle } from '../hooks/useToggle';
import { useEventListener } from '../hooks/useEventListener';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

type Placement = 'start' | 'center' | 'end' | PopperPlacement;

interface Props extends Merge<PopoverContainerProps, Omit<ButtonProps, 'onClick'>> {
  buttonContent: React.ReactNode;
  initiallyOpen?: boolean;
  placement?: Placement;
  onClick?: (toggle: () => void, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Context = React.createContext<{ closeDropdown: () => void }>({
  closeDropdown: () => {},
});

/* istanbul ignore next */
const inactivePlacement = (placement: Placement) => {
  const pos = placement && placement.replace(/-start|-center|-end/gi, '');

  switch (pos) {
    case 'top':
      return 'top: 5px !important';
    case 'right':
    case 'left':
      return '';
    default:
      return 'top: -5px !important';
  }
};
const containerIsActive = (props: { isActive: boolean; placement?: Placement }) => {
  return props.isActive
    ? css`
        opacity: 1;
        visibility: visible;
      `
    : css`
        ${inactivePlacement(props.placement)};
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      `;
};

const animSpeed = 'transition.transition-duration-fast';

export const DropdownContainer = styled(BasePopoverContainer)<{
  isActive: boolean;
  placement?: Placement;
}>`
  ${containerIsActive}

  transition-property: opacity, visibility, transform;
  transition-duration: ${themeGet('transition.transition-duration-base')};
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  ${props =>
    props.isActive
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        `}

  /* thank you prettier, dis so pretty now */
  transition: opacity ${themeGet(animSpeed, '100ms')} ease-in-out, visibility ${themeGet(
  animSpeed,
  '100ms',
)} ease-in-out, top ${themeGet(animSpeed, '100ms')} ease-in-out;
`;

export const DropdownContent: React.FC<FlameBoxProps> = ({ children, ...restProps }) => (
  <Box my={2} mx={2} {...restProps}>
    {children}
  </Box>
);

const placementWhitelist: { [key: string]: string } = {
  start: 'bottom-start',
  center: 'bottom',
  end: 'bottom-end',
};

export const useDropdown = () => {
  const { closeDropdown } = React.useContext(Context);
  return { closeDropdown };
};

/**
 * When there is too much to show, place your precious UI in here.
 */
export const Dropdown: React.FC<Props> = ({
  buttonContent,
  placement = 'start',
  initiallyOpen = false,
  zIndex = 1,
  children,
  onClick,
  ...restProps
}) => {
  const [targetRef, setTargetRef] = React.useState(null);
  const [popperRef, setPopperRef] = React.useState(null);
  const popperComponentRef = React.createRef();

  const { styles, forceUpdate } = usePopper(targetRef, popperRef, {
    placement: (placementWhitelist[placement] as any) || placement || 'bottom-start',
    modifiers: [
      {
        name: 'computeStyles',
        options: {
          adaptive: false, // true by default
        },
      },
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const { isActive, toggle, setInactive } = useToggle(!!initiallyOpen);
  useEventListener<KeyboardEvent>('keyup', event => {
    if (event.key === 'Escape') {
      setInactive();
    }
  });

  useOnClickOutside(popperComponentRef, () => {
    forceUpdate && forceUpdate();
    isActive && setInactive();
  });

  return (
    <Context.Provider
      value={{
        closeDropdown: setInactive,
      }}
    >
      <Box display="inline-block" ref={setTargetRef}>
        <Button
          pr={2}
          pl={2}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (typeof onClick === 'function') {
              onClick(toggle, event);
            } else {
              toggle();
            }
          }}
          forcedState={isActive ? 'active' : null}
          {...(restProps as any)}
        >
          <React.Fragment>{buttonContent}&nbsp;</React.Fragment>
          <IconSmallChevronDown />
        </Button>
      </Box>

      <DropdownContainer
        ref={ref => {
          setPopperRef(ref);
          // @ts-ignore
          popperComponentRef.current = ref;
        }}
        light
        zIndex={zIndex}
        isActive={isActive}
        placement={placement}
        style={styles.popper}
      >
        {typeof children === 'function' ? children(setInactive) : children}
      </DropdownContainer>
    </Context.Provider>
  );
};
