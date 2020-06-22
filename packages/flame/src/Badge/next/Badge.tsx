import * as React from 'react';
import { css } from '@styled-system/css';

interface Props extends React.ComponentPropsWithRef<'span'> {
  /**
   * Adjust the overall look and feel of a badge.
   */
  variant?: 'default' | 'danger' | 'primary' | 'success' | 'warning';
}
/**
 * A badge communicates the status of an item or event when placed beside it.
 * It uses bold colors to quickly signal the intent of an item or event.
 */
const Badge: React.FC<Props> = ({ variant = 'default', ...restProps }) => (
  <span
    className="fl-badge"
    css={css({
      display: 'inline-flex',
      color: 'textHeading',
      px: 2,
      lineHeight: 4,
      border: '1px solid',
      borderRadius: '12px',
      fontSize: 'text-s',
      fontWeight: 'bold',
      textAlign: 'center',
      variant: `nextBadgeVariants.${variant}`,
    })}
    {...restProps}
  />
);

export { Badge };
