import * as React from 'react';
import { css } from '@styled-system/css';

export type BadgeVariants = 'default' | 'danger' | 'primary' | 'success' | 'warning';
export interface BadgeProps extends React.ComponentPropsWithRef<'span'> {
  /**
   * Adjust the overall look and feel of a badge.
   * The possible variants are:
   * 'default' | 'danger' | 'primary' | 'success' | 'warning'
   */
  variant?: BadgeVariants;
}
/**
 * A badge communicates the status of an item or event when placed beside it.
 * It uses bold colors to quickly signal the intent of an item or event.
 */
export const Badge: React.FC<BadgeProps> = ({ variant = 'default', ...restProps }) => (
  <span
    className="fl-badge"
    css={css({
      display: 'inline-flex',
      color: 'textHeading',
      px: 2,
      lineHeight: 4,
      border: '1px solid',
      borderRadius: '28px',
      fontSize: 'text-s',
      fontWeight: 'bold',
      textAlign: 'center',
      variant: `nextBadgeVariants.${variant}`,
    })}
    {...restProps}
  />
);
