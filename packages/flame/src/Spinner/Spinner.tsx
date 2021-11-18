import * as React from 'react';
import { Omit } from 'type-fest';
import { LoaderSpinner } from '@lightspeed/design-system-react';
import { IconProps } from '../Icon/utils/iconFactory';

const sizePropMap = (size: string) => {
  switch (size) {
    case 'small':
      return { width: '0.875rem', height: '0.875rem' };
    case 'xlarge':
      return { width: '1.75rem', height: '1.75rem' };
    case 'xxlarge':
      return { width: '2.25rem', height: '2.25rem' };
    default:
      return size ? { width: size, height: size } : {};
  }
};

export type SpinnerProps = Omit<IconProps, 'theme'>;
/**
 * Offers solace and mutual understanding that a task of unknowable duration (but usually short) is ongoing.
 */
export const Spinner: React.FC<SpinnerProps> = ({ size, ...restProps }) => (
  <LoaderSpinner css={{ ...sizePropMap(size) }} {...restProps} />
);
