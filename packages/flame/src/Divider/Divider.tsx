import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { rgba } from 'polished';
import { space, SpaceProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

import { Card } from '../Card';

export type DividerVariants = 'dotted' | 'solid';

export type DividerProps = SpaceProps & {
  /** Sets color for Divider */
  color?: string;
  /** One of "dotted", "solid" */
  variant?: DividerVariants;
};

const setDottedBgImage = (color: string) =>
  `linear-gradient(to right, ${color} 33%, ${rgba(color, 0)} 0%)`;
const dividerVariants = (props: DividerProps) => {
  const baseColor = props.color || 'dividerStyles.color';
  const lineColor = props.color
    ? themeGet(`colors.${baseColor}`, props.color)(props)
    : themeGet('dividerStyles.color')(props);

  switch (props.variant) {
    case 'dotted':
      return css`
        &::after,
        &::before {
          background-position: bottom;
          background-repeat: repeat-x;
          background-size: 3px 1px;
          background-image: linear-gradient(to right, ${lineColor} 33%, ${rgba(lineColor, 0)} 0%);
          background-color: transparent;

          ${Card} & {
            background-image: ${props.color
              ? setDottedBgImage(lineColor)
              : setDottedBgImage(themeGet('dividerStyles.cardColor')(props))};
          }
        }
      `;
    case 'solid':
    default:
      return css`
        &::after,
        &::before {
          background-position: bottom;
          background-repeat: repeat-x;
          background-color: ${lineColor};

          ${Card} & {
            background-color: ${props.color
              ? lineColor
              : themeGet('dividerStyles.cardColor')(props)};
          }
        }
      `;
  }
};

/**
 * A simple line, used to divide content into manageable chunks.
 */
export const Divider = styled('div')<DividerProps>`
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1px;
  width: 100%;

  &::after,
  &::before {
    height: 1px;
    flex: 1 1 auto;
    content: '';
  }

  &::before {
    margin-right: ${themeGet('space.2')};
  }

  &::after {
    margin-left: ${themeGet('space.2')};
  }

  &:empty {
    &::before {
      margin-right: 0;
    }

    &::after {
      margin-left: 0;
    }
  }

  ${dividerVariants};
  ${space};
`;

Divider.displayName = 'Divider';
