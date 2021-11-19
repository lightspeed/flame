import * as React from 'react';
import { Switch as HoustonSwitch } from '@lightspeed/design-system-react';
import { Merge } from 'type-fest';
import { Box } from '../Core';

export type SwitchProps = Merge<
  React.HTMLProps<HTMLInputElement>,
  {
    css?: any;
    /** CSS class name to apply to the wrapper component */
    className?: string;
    /** Sets the checked state of Switch */
    checked?: boolean;
  }
>;
/**
 * A toggleable control which stays on (or off) until manually triggered once more.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ css, className, checked, ...restProps }, ref) => (
    <Box css={css} className={className}>
      <HoustonSwitch ref={ref} small={true} checked={checked} {...(restProps as any)} />
    </Box>
  ),
);
