import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { layout, LayoutProps } from 'styled-system';
import { Merge } from 'type-fest';
import { IconCheckmark } from '../Icon/Checkmark';
import { Box } from '../Core';
import { Text, TextProps } from '../Text';

const Wrapper = styled('div')`
  position: relative;
  line-height: 1rem;
`;

const Label = styled('label')`
  position: relative;
  display: inline-flex;
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

export type CheckboxLabelProps = TextProps;
export const CheckboxLabel = styled(Text)<CheckboxLabelProps>`
  ${props =>
    !props.color &&
    css`
      color: ${themeGet('checkboxStyles.label.color')(props)};
    `}
`;
CheckboxLabel.defaultProps = {
  ml: 2,
  fontWeight: 'bold',
  fontSize: ['text', 'text-s'],
  lineHeight: 3,
  as: 'div',
};

// Probably wondering why we add this additional wrapper?
// This is to detach the text from a specific color and instead rely on
// a color alias from the theme
const CheckboxDescriptionWrapper = styled(Box)`
  ${Text} {
    ${props =>
      !props.color
        ? css`
            color: ${themeGet('checkboxStyles.description.color')(props)};
          `
        : css`
            color: ${themeGet(`colors.${props.color}`, props.color)(props)};
          `}
  }
`;

export type CheckboxDescriptionProps = Merge<React.HTMLProps<HTMLDivElement>, TextProps>;
export const CheckboxDescription: React.FC<CheckboxDescriptionProps> = ({
  children,
  color,
  ...restProps
}) => (
  <CheckboxDescriptionWrapper ml="1rem" color={color}>
    <Text as="div" size="small" ml={2} {...restProps}>
      {children}
    </Text>
  </CheckboxDescriptionWrapper>
);

export type CheckboxProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    /** ClassName for the <input> */
    inputClassName?: string;
    /** Sets label for Checkbox */
    label?: string | Function;
    /** Sets description text for Checkbox */
    description?: string | Function;
    /** Sets indeterminate state for Checkbox */
    indeterminate?: boolean;
    /** https://reactjs.org/docs/forwarding-refs.html */
    innerRef?: Function;
    /** https://reactjs.org/docs/refs-and-the-dom.html */
    ref?: Function;
  }
> & { css?: any };
export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  inputClassName,
  id,
  label,
  description,
  checked,
  indeterminate,
  innerRef,
  ref,
  ...props
}) => {
  const labelId = id ? `${id}-label` : null;
  const descriptionId = id ? `${id}-description` : null;
  const labelledBy = label ? labelId : null;
  const describedBy = description ? descriptionId : null;

  const setCheckboxRef = (elem: HTMLInputElement) => {
    if (elem) {
      // eslint-disable-next-line no-param-reassign
      elem.indeterminate = indeterminate && !checked;

      if (innerRef && typeof innerRef === 'function') {
        innerRef(elem);
      }

      if (ref && typeof innerRef === 'function') {
        ref(elem);
      }
    }
  };

  return (
    <Wrapper className={className}>
      <Label role="presentation">
        <CheckboxInput
          type="checkbox"
          id={id}
          aria-labelledby={labelledBy}
          aria-describedby={describedBy}
          checked={checked}
          ref={setCheckboxRef}
          className={inputClassName}
          indeterminate={indeterminate}
          {...props}
        />
        <CheckboxCheckmarkWrapper indeterminate={indeterminate}>
          <StyledIcon size="0.65rem" />
          {indeterminate && !checked && <CheckboxIndeterminate />}
        </CheckboxCheckmarkWrapper>
        {typeof label === 'string' && <CheckboxLabel id={labelId}>{label}</CheckboxLabel>}
        {typeof label === 'function' && label(labelId)}
      </Label>
      {typeof description === 'string' && (
        <CheckboxDescription id={descriptionId}>{description}</CheckboxDescription>
      )}
      {typeof description === 'function' && description(descriptionId)}
    </Wrapper>
  );
};
