import * as React from 'react';
import styled from '@emotion/styled';
import { FieldLabel as HoustonFieldLabel } from '@lightspeed/design-system-react';

import { Text, TextProps } from '../Text';

type StatusTypes = 'error' | 'valid' | 'warning';

const formHelperColorMap = {
  error: 'danger',
  valid: 'primary',
  warning: 'warning',
};

export interface FormHelperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<TextProps, 'color'> {
  status?: StatusTypes;
  css?: any;
}
const FormHelper: React.FC<FormHelperProps> = ({ status, children, ...restProps }) => {
  const nextColor = formHelperColorMap[status];

  return (
    <Text as="div" size="small" color={nextColor} {...restProps}>
      {children}
    </Text>
  );
};

export type BaseLabelProps = React.ComponentPropsWithRef<'label'> & TextProps & { css?: any };
const BaseLabel = styled(Text as any)<BaseLabelProps>`
  display: flex;
`.withComponent('label');

BaseLabel.defaultProps = {
  fontWeight: 'bold',
  color: 'textHeading',
  fontSize: 'text-s',
  lineHeight: 3,
};

export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'color'>,
    TextProps {
  description?: React.ReactNode;
  disabled?: boolean;
  descriptionProps?: FormHelperProps;
  css?: any;
}
const Label: React.FC<LabelProps> = ({
  description,
  disabled,
  descriptionProps,
  children,
  ...restProps
}) => {
  return (
    <HoustonFieldLabel
      label={children as any}
      supplementaryLabel={description as any}
      {...(restProps as any)}
      style={{ flex: 1 }}
    />
  );
};

export { BaseLabel, Label, FormHelper };
