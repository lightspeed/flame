import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { position } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Placement as TooltipPlacement } from '@popperjs/core';
import { usePopper, useToggle } from '../hooks';

const tooltipOffset = 'space.1';
const tooltipArrowSize = '5px';
const tooltipArrowBorderSize = '6px';
const tooltipDarkBg = 'tooltipStyles.dark.background';
const tooltipLightBg = 'tooltipStyles.light.background';
const tooltipLightBorder = 'tooltipStyles.light.border';
const tooltipLightColor = 'tooltipStyles.light.color';
const tooltipArrowStartOffset = '15px';
const tooltipArrowEndOffset = '9px';

const TooltipArrow = styled('span')`
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
    border-width: ${tooltipArrowSize};
  }

  &::before {
    border-width: ${tooltipArrowBorderSize};
  }
`;

const setLightMode = (props: Partial<TooltipProps>) =>
  props.light &&
  css`
    padding: calc(${themeGet('space.1')(props)} - 1);
    background-color: ${themeGet(tooltipLightBg)(props)};
    border-color: ${themeGet(tooltipLightBorder)(props)};
    color: ${themeGet(tooltipLightColor)(props)};

    &[data-placement^='top'] ${TooltipArrow}::after {
      border-top-color: ${themeGet(tooltipLightBg)(props)};
    }

    &[data-placement^='top'] ${TooltipArrow}::before {
      border-top-color: ${themeGet(tooltipLightBorder)(props)};
      margin-left: -${tooltipArrowBorderSize};
    }

    &[data-placement^='bottom'] ${TooltipArrow}::after {
      border-bottom-color: ${themeGet(tooltipLightBg)(props)};
    }

    &[data-placement^='bottom'] ${TooltipArrow}::before {
      border-bottom-color: ${themeGet(tooltipLightBorder)(props)};
      margin-left: -${tooltipArrowBorderSize};
    }

    &[data-placement^='left'] ${TooltipArrow}::after {
      border-left-color: ${themeGet(tooltipLightBg)(props)};
    }

    &[data-placement^='left'] ${TooltipArrow}::before {
      border-left-color: ${themeGet(tooltipLightBorder)(props)};
      margin-top: -${tooltipArrowBorderSize};
    }

    &[data-placement^='right'] ${TooltipArrow}::after {
      border-right-color: ${themeGet(tooltipLightBg)(props)};
    }

    &[data-placement^='right'] ${TooltipArrow}::before {
      border-right-color: ${themeGet(tooltipLightBorder)(props)};
      margin-top: -${tooltipArrowBorderSize};
    }

    &[data-placement$='-end'] ${TooltipArrow}::before {
      right: calc(${tooltipArrowEndOffset} - 1px);
    }
  `;

type TooltipContainerProps = {
  /** Sets a light color on Tooltip */
  light?: boolean;
  /** Sets the zIndex of Tooltip */
  zIndex?: string | number;
  as?: string;
};
const TooltipContainer = styled('div')<TooltipContainerProps>`
  padding: ${themeGet('space.1')};
  font-size: ${themeGet('fontSizes.text-xs')};
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: 1;
  color: ${themeGet('tooltipStyles.dark.color')};
  background: ${themeGet(tooltipDarkBg)};
  letter-spacing: ${themeGet('letterSpacings.1')};
  border-radius: ${themeGet('radii.radius-1')};
  box-shadow: ${themeGet('shadows.1')};
  border: 1px solid ${themeGet('tooltipStyles.dark.border')};
  transition-property: opacity;
  transition-duration: ${themeGet('transition.transition-duration-base')};
  ${position};
  &[data-placement^='top'] {
    margin-bottom: ${themeGet(tooltipOffset)};
  }

  &[data-placement^='bottom'] {
    margin-top: ${themeGet(tooltipOffset)};
  }

  &[data-placement^='left'] {
    margin-right: ${themeGet(tooltipOffset)};
  }

  &[data-placement^='right'] {
    margin-left: ${themeGet(tooltipOffset)};
  }

  /* Placement: top */
  &[data-placement^='top']
    ${TooltipArrow}::after,
    &[data-placement^='top']
    ${TooltipArrow}::before {
    top: 100%;
    left: 50%;
  }

  &[data-placement^='top'] ${TooltipArrow}::after {
    border-top-color: ${themeGet(tooltipDarkBg)};
    margin-left: -${tooltipArrowSize};
  }

  &[data-placement^='bottom']
    ${TooltipArrow}::after,
    &[data-placement^='bottom']
    ${TooltipArrow}::before {
    bottom: 100%;
    left: 50%;
  }

  &[data-placement^='bottom'] ${TooltipArrow}::after {
    border-bottom-color: ${themeGet(tooltipDarkBg)};
    margin-left: -${tooltipArrowSize};
  }

  &[data-placement^='left']
    ${TooltipArrow}::after,
    &[data-placement^='left']
    ${TooltipArrow}::before {
    left: 100%;
    top: 50%;
  }

  &[data-placement^='left'] ${TooltipArrow}::after {
    border-left-color: ${themeGet(tooltipDarkBg)};
    margin-top: -${tooltipArrowSize};
  }

  &[data-placement^='right']
    ${TooltipArrow}::after,
    &[data-placement^='right']
    ${TooltipArrow}::before {
    right: 100%;
    top: 50%;
  }

  &[data-placement^='right'] ${TooltipArrow}::after {
    border-right-color: ${themeGet(tooltipDarkBg)};
    margin-top: -${tooltipArrowSize};
  }

  &[data-placement$='-start']
    ${TooltipArrow}::after,
    &[data-placement$='-start']
    ${TooltipArrow}::before {
    left: ${tooltipArrowStartOffset};
  }

  &[data-placement$='-end']
    ${TooltipArrow}::after,
    &[data-placement$='-end']
    ${TooltipArrow}::before {
    left: auto;
    right: ${tooltipArrowEndOffset};
  }

  ${setLightMode};
`;

interface TooltipWrapper extends TooltipContainerProps {
  /** Element that will have the tooltip hover event bound to */
  targetRef?: React.RefObject<HTMLSpanElement>;
  /** CSS class name to be applied to the wrapper of the tooltip */
  className?: string;
  /** Sets the wrapper tag for Tooltip */
  tag?: string;
  /** One of "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" */
  placement?: TooltipPlacement;
  /** Sets a light color on Tooltip */
  light?: boolean;
}

export interface TooltipProps extends TooltipWrapper {
  children: React.ReactNode;
  /** Text content of Tooltip */
  content: string;
  /** Sets whether or not to display the tooltip */
  active?: boolean;
}

// The current behaviour of Tooltip is that the TooltipContainer is not rendered if
// not open. This is somwhat problematic with refs + usePopper as it cannot recompute fast
// enough the new position, which leads to the Tooltip container jump locations.
// To preserve the old behaviour, we need to put the usePopper in a seperate component
// to trigger a full re-render, which in turns means the ref will be created in time.
// This functionality should be removed in the future, since it's not good for a11y reasons.
/**
 * An extra bit of information, contextualized to a portion of a UI.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  active,
  light,
  className,
  as,
  tag,
  content,
  zIndex,
  placement = 'top' as TooltipPlacement,
  children,
}) => {
  const { isActive, setActive, setInactive } = useToggle(active);
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);

  const { attributes, styles } = usePopper(referenceElement, popperElement, {
    placement,
  });

  const onFocus = () => {
    !active && setActive();
  };
  const onBlur = () => {
    !active && setInactive();
  };
  const onMouseEnter = () => {
    !active && setActive();
  };
  const onMouseLeave = () => {
    !active && setInactive();
  };

  return (
    <React.Fragment>
      <span
        ref={setReferenceElement}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </span>
      {isActive && (
        <TooltipContainer
          as={as || tag || 'div'}
          className={className}
          style={styles.popper}
          data-placement={
            attributes && attributes.popper && attributes.popper['data-popper-placement']
          }
          light={light}
          ref={setPopperElement}
          zIndex={zIndex}
        >
          {content}
          <TooltipArrow />
        </TooltipContainer>
      )}
    </React.Fragment>
  );
};

export { TooltipPlacement };
