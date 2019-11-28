import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';

import { IconCheckmark } from '../Icon/Checkmark';
import { TextProps } from '../Text';
import { RadioLabel } from '../Radio';

const CheckboxLabel = RadioLabel;

const Wrapper = styled('div')`
  position: relative;
  line-height: 1rem;
`;

const CheckboxCheckmarkWrapper = styled('div')<{ indeterminate: boolean }>`
  position: relative;
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
  border-radius: ${themeGet('radii.radius-1')};
  background-color: transparent;
  border: solid 1px ${themeGet('checkboxStyles.borderColor')};
  box-sizing: border-box;
  overflow: hidden;
  cursor: default;
  background: ${themeGet('checkboxStyles.background')};
  margin-right: ${themeGet('space.2')};

  ${props =>
    props.indeterminate &&
    css`
      border-color: ${themeGet('checkboxStyles.indeterminate.border')(props)};
    `};
`;

const CheckboxIndeterminate = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.125rem;
  border-radius: ${themeGet('radii.radius-1')};
  background: ${themeGet('checkboxStyles.indeterminate.background')};
`;

const StyledIcon = styled(IconCheckmark)<{ size: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: ${themeGet('checkboxStyles.checked.color')};
`;

const CheckboxInput = styled('input')<{ indeterminate: boolean }>`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0;
  left: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
  z-index: 1;

  &:checked + ${CheckboxCheckmarkWrapper} {
    background: ${themeGet('checkboxStyles.checked.background')};
    border-color: ${themeGet('checkboxStyles.checked.border')};

    ${CheckboxIndeterminate} {
      display: none;
    }
  }

  &:checked + div ${StyledIcon} {
    display: block;
  }

  &:not(:checked) + div ${StyledIcon} {
    display: none;
  }

  &:focus + ${CheckboxCheckmarkWrapper} {
    box-shadow: ${themeGet('checkboxStyles.focus.boxShadow')};
  }

  &[disabled] + ${CheckboxCheckmarkWrapper} {
    opacity: 0.5;
  }
`;

export type CheckboxDescriptionProps = Merge<React.HTMLProps<HTMLDivElement>, TextProps>;
export interface BaseCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
  checked?: boolean;
}
const BaseCheckbox = React.forwardRef<HTMLInputElement, BaseCheckboxProps>(
  ({ indeterminate, checked, css, className, ...restProps }, ref) => (
    <Wrapper css={css} className={className}>
      <CheckboxInput
        ref={ref}
        type="checkbox"
        indeterminate={indeterminate}
        checked={checked}
        {...restProps}
      />
      <CheckboxCheckmarkWrapper indeterminate={indeterminate}>
        <StyledIcon size="0.65rem" />
        {indeterminate && !checked && <CheckboxIndeterminate />}
      </CheckboxCheckmarkWrapper>
    </Wrapper>
  ),
);

export interface CheckboxProps extends BaseCheckboxProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
}
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, description, disabled, css, className, ...restProps }, ref) => (
    <CheckboxLabel
      htmlFor={id}
      description={description}
      css={css}
      className={className}
      disabled={disabled}
    >
      <BaseCheckbox ref={ref} id={id} disabled={disabled} {...restProps} />
      {label}
    </CheckboxLabel>
  ),
);

export { Checkbox, CheckboxLabel, BaseCheckbox };
