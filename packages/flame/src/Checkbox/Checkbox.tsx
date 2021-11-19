import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { Checkbox as HoustonCheckbox } from '@lightspeed/design-system-react';
import { Merge } from 'type-fest';

import { IconCheckmark } from '../Icon/Checkmark';
import { TextProps } from '../Text';
import { RadioLabel } from '../Radio';
import { Box } from '../Core';

export const CheckboxLabel = RadioLabel;

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
  /** Set the checkbox to an indeterminate state */
  indeterminate?: boolean;
  /** Set the checkbox to a checked state */
  checked?: boolean;
}
export const BaseCheckbox = React.forwardRef<HTMLInputElement, BaseCheckboxProps>(
  ({ indeterminate, checked, css, className, ...restProps }, ref) => {
    return (
      <Wrapper css={css} className={className}>
        <CheckboxInput
          ref={innerRef => {
            if (innerRef) {
              // eslint-disable-next-line no-param-reassign
              innerRef.indeterminate = !checked && indeterminate;
            }

            if (ref) {
              // @ts-ignore
              typeof ref === 'function' ? ref(innerRef) : (ref.current = innerRef); // eslint-disable-line no-param-reassign
            }
          }}
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
    );
  },
);

export interface CheckboxProps extends BaseCheckboxProps {
  /** The label text that appears right besides the checkbox */
  label?: React.ReactNode;
  /** Helper text that will be inserted below the checkbox */
  description?: React.ReactNode;
}
/**
 * Used to specify choices among large groups of options.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, description, disabled, css, className, ...restProps }, ref) => (
    <Box ref={ref} className={className} css={css}>
      <HoustonCheckbox
        id={id}
        label={label}
        description={description as any}
        disabled={disabled}
        {...(restProps as any)}
      />
    </Box>
  ),
);
