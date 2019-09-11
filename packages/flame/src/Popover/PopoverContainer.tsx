import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { layout, LayoutProps, position, PositionProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

export interface PopoverContainerProps extends LayoutProps, PositionProps {
  /** Sets a light color on Popover */
  light?: boolean;
  isActive?: boolean;
}

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const popoverBackground = 'popoverStyles.dark.background';
const popoverLightBackground = 'popoverStyles.light.background';
const popoverOffset = 'space.2';
const popoverRadius = 'radii.radius-2';
const popoverArrowSize = '6px';
const popoverArrowBorderSize = '7px';
const popoverArrowStartOffset = '18px'; // popoverArrowSize * 3
const popoverArrowEndOffset = '11px'; // (popoverArrowSize * 2) - 3
const popoverAnimationEaseIn = 'cubic-bezier(0, 0, 0.2, 1)';

const popoverArrowColor = (props: { theme?: any }) =>
  themeGet('popoverStyles.arrowColor', '#0c0d0d')(props);

export const PopoverArrow = styled('div')`
  &::after,
  &::before {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &::after {
    border-width: ${popoverArrowSize};
  }

  &::before {
    border-width: ${popoverArrowBorderSize};
  }
`;

const setLightMode = (props: { theme?: any; light?: boolean }) =>
  props.light &&
  css`
    background-color: ${themeGet(popoverLightBackground)(props)};

    &[data-placement^='top'] ${PopoverArrow}::after {
      border-top-color: ${themeGet(popoverLightBackground)(props)};
    }

    &[data-placement^='bottom'] ${PopoverArrow}::after {
      border-bottom-color: ${themeGet(popoverLightBackground)(props)};
    }

    &[data-placement^='left'] ${PopoverArrow}::after {
      border-left-color: ${themeGet(popoverLightBackground)(props)};
    }

    &[data-placement^='right'] ${PopoverArrow}::after {
      border-right-color: ${themeGet(popoverLightBackground)(props)};
    }

    & [data-placement$='-end'] ${PopoverArrow}::before {
      right: calc(${popoverArrowEndOffset} - 1px);
    }
  `;

export const BasePopoverContainer = styled('div')<Partial<PopoverContainerProps>>`
  position: absolute;
  background: ${themeGet(popoverBackground)};
  border-radius: ${themeGet(popoverRadius)};
  box-shadow: ${themeGet('popoverStyles.boxShadow')};
  ${layout};
  ${position};

  &[data-placement^='top'] {
    margin-bottom: ${themeGet(popoverOffset)};
  }

  &[data-placement^='bottom'] {
    margin-top: ${themeGet(popoverOffset)};
  }

  &[data-placement^='left'] {
    margin-right: ${themeGet(popoverOffset)};
  }

  &[data-placement^='right'] {
    margin-left: ${themeGet(popoverOffset)};
  }

  &::after,
  &::before {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &[data-placement^='top']
    ${PopoverArrow}::after,
    &[data-placement^='top']
    ${PopoverArrow}::before {
    top: 100%;
    left: 50%;
  }

  &[data-placement^='top'] ${PopoverArrow}::after {
    border-top-color: ${themeGet(popoverBackground)};
    margin-left: -${popoverArrowSize};
  }

  &[data-placement^='top'] ${PopoverArrow}::after {
    border-top-color: ${themeGet(popoverBackground)};
  }

  &[data-placement^='top'] ${PopoverArrow}::before {
    border-top-color: ${popoverArrowColor};
    margin-left: -${popoverArrowBorderSize};
  }

  &[data-placement^='bottom']
    ${PopoverArrow}::after,
    &[data-placement^='bottom']
    ${PopoverArrow}::before {
    bottom: 100%;
    left: 50%;
  }

  &[data-placement^='bottom'] ${PopoverArrow}::after {
    border-bottom-color: ${themeGet(popoverBackground)};
    margin-left: -${popoverArrowSize};
  }

  &[data-placement^='bottom'] ${PopoverArrow}::after {
    border-bottom-color: ${themeGet(popoverBackground)};
  }

  &[data-placement^='bottom'] ${PopoverArrow}::before {
    border-bottom-color: ${popoverArrowColor};
    margin-left: -${popoverArrowBorderSize};
  }

  &[data-placement^='left']
    ${PopoverArrow}::after,
    &[data-placement^='left']
    ${PopoverArrow}::before {
    left: 100%;
    top: 50%;
  }

  &[data-placement^='left'] ${PopoverArrow}::after {
    border-left-color: ${themeGet(popoverBackground)};
    margin-top: -${popoverArrowSize};
  }

  &[data-placement^='left'] ${PopoverArrow}::after {
    border-left-color: ${themeGet(popoverBackground)};
  }

  &[data-placement^='left'] ${PopoverArrow}::before {
    border-left-color: ${popoverArrowColor};
    margin-top: -${popoverArrowBorderSize};
  }

  &[data-placement^='right']
    ${PopoverArrow}::after,
    &[data-placement^='right']
    ${PopoverArrow}::before {
    right: 100%;
    top: 50%;
  }

  &[data-placement^='right'] ${PopoverArrow}::after {
    border-right-color: ${themeGet(popoverBackground)};
    margin-top: -${popoverArrowSize};
  }

  &[data-placement^='right'] ${PopoverArrow}::after {
    border-right-color: ${themeGet(popoverBackground)};
  }

  &[data-placement^='right'] ${PopoverArrow}::before {
    border-right-color: ${popoverArrowColor};
    margin-top: -${popoverArrowBorderSize};
  }

  &[data-placement='top-start']
    ${PopoverArrow}::before,
    &[data-placement='bottom-start']
    ${PopoverArrow}::before,
    &[data-placement='top-start']
    ${PopoverArrow}::after,
    &[data-placement='bottom-start']
    ${PopoverArrow}::after {
    left: ${popoverArrowStartOffset};
  }

  &[data-placement='left-start']
    ${PopoverArrow}::before,
    &[data-placement='right-start']
    ${PopoverArrow}::before,
    &[data-placement='left-start']
    ${PopoverArrow}::after,
    &[data-placement='right-start']
    ${PopoverArrow}::after {
    top: ${popoverArrowStartOffset};
  }

  &[data-placement='top-end']
    ${PopoverArrow}::before,
    &[data-placement='bottom-end']
    ${PopoverArrow}::before,
    &[data-placement='top-end']
    ${PopoverArrow}::after,
    &[data-placement='bottom-end']
    ${PopoverArrow}::after {
    left: auto;
    right: ${popoverArrowEndOffset};
  }

  &[data-placement='left-end']
    ${PopoverArrow}::before,
    &[data-placement='right-end']
    ${PopoverArrow}::before,
    &[data-placement='left-end']
    ${PopoverArrow}::after,
    &[data-placement='right-end']
    ${PopoverArrow}::after {
    top: auto;
    bottom: ${popoverArrowEndOffset};
  }

  &[data-placement='top-end']
    ${PopoverArrow}::before,
    &[data-placement='bottom-end']
    ${PopoverArrow}::before {
    right: calc(${popoverArrowEndOffset} - 1px);
  }

  &[data-placement='left-end']
    ${PopoverArrow}::before,
    &[data-placement='right-end']
    ${PopoverArrow}::before {
    bottom: calc(${popoverArrowEndOffset} - 1px);
  }

  ${setLightMode};
`;

export const PopoverContainer = styled(BasePopoverContainer)<Partial<PopoverContainerProps>>`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation: ${fadein} ${themeGet('transition.transition-duration-base')} ${popoverAnimationEaseIn}
    forwards;
`;
