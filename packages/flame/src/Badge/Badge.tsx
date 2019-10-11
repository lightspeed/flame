import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, variant, ColorProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

export type BadgeTypes = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'important';
export type BadgeSizes = 'small' | 'medium';

const badgeColors = variant({
  key: 'badgeVariants',
  prop: 'type',
});

const setBadgeSizing = (props: { size?: BadgeSizes }) => {
  switch (props.size) {
    case 'small':
      return css`
        padding-left: ${themeGet('space.1')(props)};
        padding-right: ${themeGet('space.1')(props)};
        font-size: ${themeGet('fontSizes.text-xxs')(props)};
        line-height: ${themeGet('lineHeights.3')(props)};
        letter-spacing: ${themeGet('letterSpacings.2')(props)};
      `;
    case 'medium':
    default:
      return css`
        padding-left: ${themeGet('space.1')(props)};
        padding-right: ${themeGet('space.1')(props)};
        font-size: ${themeGet('fontSizes.text-xs')(props)};
        line-height: ${themeGet('lineHeights.4')(props)};
        letter-spacing: ${themeGet('letterSpacings.3')(props)};
      `;
  }
};

const setPillBadgeSizing = (props: { size?: BadgeSizes }) => {
  switch (props.size) {
    case 'small':
      return css`
        padding-left: ${themeGet('space.1')(props)};
        padding-right: ${themeGet('space.1')(props)};
      `;
    case 'medium':
    default:
      return css`
        padding-left: ${themeGet('space.2')(props)};
        padding-right: ${themeGet('space.2')(props)};
      `;
  }
};

export type BadgeProps = ColorProps & {
  /** One of 'default', 'success', 'warning', 'danger', 'info', 'important' */
  type?: BadgeTypes;
  /** One of 'small', 'medium' */
  size?: BadgeSizes;
};

export const Badge = styled('span')<React.HTMLAttributes<HTMLSpanElement> & Partial<BadgeProps>>`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: ${themeGet('radii.radius-1')};
  ${badgeColors};

  ${setBadgeSizing};
  ${color};
`;

Badge.defaultProps = {
  type: 'default',
  size: 'medium',
};

export const PillBadge = styled('span')<React.HTMLAttributes<HTMLSpanElement> & BadgeProps>`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: ${themeGet('radii.radius-1')};
  ${badgeColors};
  ${setBadgeSizing};
  ${setPillBadgeSizing};
  ${color};
  border-radius: 10rem;
`;

PillBadge.defaultProps = {
  type: 'default',
  size: 'medium',
};
