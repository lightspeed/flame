import * as React from 'react';
import { Select as HoustonSelect } from '@lightspeed/design-system-react';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select: React.FC<SelectProps> = (props: any) => {
  const {
    width,
    borderLeft,
    borderRight,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    ...restProps
  } = props;
  return (
    <HoustonSelect
      css={{
        width,
        borderLeft,
        borderRight,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
      {...restProps}
    />
  );
};
