import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';

import { Box, FlameBoxProps } from '../Core';
import { Button, ButtonProps } from '../Button';
import { IconSmallChevronDown } from '../Icon/SmallChevronDown';
import { BasePopoverContainer, PopoverContainerProps } from '../Popover/PopoverContainer';
import { usePopper } from '../hooks/usePopper';
import { useToggle } from '../hooks/useToggle';
import { useEventListener } from '../hooks/useEventListener';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

interface Props extends Merge<PopoverContainerProps, ButtonProps> {
  buttonContent: React.ReactNode;
  initiallyOpen?: boolean;
  placement?: 'start' | 'center' | 'end';
}

const Context = React.createContext<{ closeDropdown: () => void }>({
  closeDropdown: () => {},
});

const containerIsActive = (props: { isActive: boolean }) =>
  props.isActive
    ? css`
        top: 8px !important;
        opacity: 1;
        visibility: visible;
      `
    : css`
        top: 5px !important;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      `;

const animSpeed = 'transition.transition-duration-fast';

const DropdownContainer = styled(BasePopoverContainer)<{ isActive: boolean }>`
  ${containerIsActive}

  transition-property: opacity, visibility;
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

const DropdownContent: React.FC<FlameBoxProps> = ({ children, ...restProps }) => (
  <Box my={2} mx={2} {...restProps}>
    {children}
  </Box>
);

const placementWhitelist: { [key: string]: string } = {
  start: 'bottom-start',
  center: 'bottom',
  end: 'bottom-end',
};

const useDropdown = () => {
  const { closeDropdown } = React.useContext(Context);
  return { closeDropdown };
};

const Dropdown: React.FC<Props> = ({
  buttonContent,
  placement = 'start',
  initiallyOpen = false,
  zIndex = 1,
  children,
  ...restProps
}) => {
  const targetRef = React.createRef<HTMLDivElement>();
  const popperRef = React.createRef<HTMLDivElement>();

  usePopper(targetRef, popperRef, {
    placement: (placementWhitelist[placement] as any) || 'bottom-start',
  });

  const { isActive, toggle, setInactive } = useToggle(!!initiallyOpen);
  useEventListener<KeyboardEvent>('keyup', event => {
    if (event.key === 'Escape') {
      setInactive();
    }
  });

  useOnClickOutside(popperRef, () => {
    isActive && setInactive();
  });

  return (
    <Context.Provider
      value={{
        closeDropdown: setInactive,
      }}
    >
      <Box display="inline-block" ref={targetRef}>
        <Button
          pr={2}
          pl={2}
          onClick={toggle}
          forcedState={isActive ? 'active' : null}
          {...(restProps as any)}
        >
          <React.Fragment>{buttonContent}&nbsp;</React.Fragment>
          <IconSmallChevronDown />
        </Button>
      </Box>

      <DropdownContainer ref={popperRef} light zIndex={zIndex} isActive={isActive}>
        {typeof children === 'function' ? children(setInactive) : children}
      </DropdownContainer>
    </Context.Provider>
  );
};

export { Dropdown, DropdownContent, DropdownContainer, useDropdown };
