import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { layout, LayoutProps } from 'styled-system';
import { IconCheckmark } from '../Icon/Checkmark';
import { RadioLabel } from '../Radio';

const CheckboxLabel = RadioLabel;

const Wrapper = styled('div')`
  position: relative;
  line-height: 1rem;
`;

const CheckboxCheckmarkWrapper = styled('div')<LayoutProps & { indeterminate: boolean }>`
  position: relative;
  ${layout};
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

CheckboxCheckmarkWrapper.defaultProps = {
  width: ['18px', '16px'],
  height: ['18px', '16px'],
};

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
  ${layout}
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

CheckboxInput.defaultProps = {
  // Fun clashing between legacy props and our custom props
  // @ts-ignore
  width: ['18px', '16px'],
  // @ts-ignore
  height: ['18px', '16px'],
};

export interface BaseCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
  checked?: boolean;
  css?: any;
}
const BaseCheckbox = React.forwardRef<HTMLInputElement, BaseCheckboxProps>(
  ({ indeterminate, checked, ...restProps }, ref) => (
    <Wrapper>
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
  css?: any;
}
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, description, disabled, ...restProps }, ref) => {
    return (
      <React.Fragment>
        <CheckboxLabel htmlFor={id} description={description} disabled={disabled}>
          <BaseCheckbox ref={ref} id={id} {...restProps} disabled={disabled} />
          {label}
        </CheckboxLabel>
      </React.Fragment>
    );
  },
);

export { Checkbox, CheckboxLabel, BaseCheckbox };
