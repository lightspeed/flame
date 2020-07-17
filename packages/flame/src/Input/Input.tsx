import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { themeGet } from '@styled-system/theme-get';
import { layout, LayoutProps, zIndex, ZIndexProps, compose } from 'styled-system';
import { Merge } from 'type-fest';

import { Flex, Box, border, BorderProps } from '../Core';
import { Label, FormHelper } from '../FormField';

import { IconVerified } from '../Icon/Verified';
import { IconWarning } from '../Icon/Warning';
import { IconDanger } from '../Icon/Danger';

type StatusType = 'valid' | 'error' | 'warning';

type StyledInputProps = {
  /** Set the size of the input */
  inputSize?: 'small' | 'regular' | 'large';
  hasSuffix?: boolean;
  hasPrefix?: boolean;
  /** Sets the element to read-only. The content will be selectable, but not editable */
  readOnly?: boolean;
};
const StyledInput = styled('input')<StyledInputProps>`
  width: 100%;
  flex: 1 1 0%;
  box-sizing: border-box;
  height: ${themeGet('space.6')};
  font-family: ${themeGet('fontFamily.sans-serif')};
  font-size: ${themeGet('fontSizes.text-s')};
  padding-left: ${themeGet('space.2')};
  padding-right: ${themeGet('space.2')};
  border: solid 1px transparent;
  background: transparent;
  color: ${themeGet('inputStyles.color')};
  min-width: 0;
  transition: all ${themeGet('transition.transition-duration-fast')} ease-in-out;

  &:disabled {
    opacity: 1;
  }

  ${props => {
    switch (props.inputSize) {
      case 'small':
        return css`
          font-size: ${themeGet('fontSizes.text-xs')(props)};
          height: ${themeGet('space.5')(props)};
        `;
      case 'large':
        return css`
          height: ${themeGet('space.7')(props)};
        `;
      case 'regular':
      default:
        return css``;
    }
  }}

  ${props =>
    props.hasPrefix &&
    css`
      padding-left: 0;
    `};

  ${props =>
    props.hasSuffix &&
    css`
      padding-right: 0;
    `};

  &::placeholder {
    color: ${themeGet('inputStyles.placeholder.color')};
  }

  &:focus,
  &:active {
    outline: none;
  }

  ${props =>
    props.readOnly &&
    css`
      color: ${themeGet('inputStyles.readonly.color')(props)};
    `};

  &:not([disabled]):not([readonly]):hover + div {
    border-color: ${themeGet('inputStyles.hover.border')};
  }

  /* Prettier does some nasty things if we merge both selectors... */
  &:not([disabled]):not([readonly]):focus + div {
    border-color: ${themeGet('inputStyles.focus.border')};
  }

  &:not([disabled]):not([readonly]):active + div {
    border-color: ${themeGet('inputStyles.active.border')};
  }
`;

interface InputBackdropProps extends BorderProps {
  status?: StatusType;
}
export const InputBackdrop = styled('div')<InputBackdropProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  border-radius: ${themeGet('radii.radius-1')};
  background: transparent;
  box-shadow: ${themeGet('inputStyles.boxShadow')};
  border: solid 1px ${themeGet('inputStyles.border')};
  transition: border-color ${themeGet('transition.transition-duration-fast')} ease-in-out;

  ${props =>
    props.status === 'error' &&
    css`
      border-color: ${themeGet('inputStyles.error.border')(props)} !important;
    `};
  ${border}
`;

interface WrapperProps extends BorderProps, LayoutProps, ZIndexProps {
  disabled: boolean;
  readOnly: boolean;
  isAutofilled: boolean;
  status?: StatusType;
}
const Wrapper = styled('div')<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${themeGet('radii.radius-2')};
  background: ${themeGet('inputStyles.background')};
  transition: all ${themeGet('transition.transition-duration-fast')} ease-in-out;
  width: 100%;

  ${compose(
    layout,
    border,
    zIndex,
  )}

  ${props =>
    props.disabled &&
    css`
      color: ${themeGet('inputStyles.disabled.color')(props)};
      background: ${themeGet('inputStyles.disabled.background')(props)};
      -webkit-text-fill-color: currentColor;
    `};

  ${props =>
    props.readOnly &&
    css`
      background: ${themeGet('inputStyles.readonly.background')(props)};
    `};

  ${props =>
    props.isAutofilled &&
    css`
      background: ${themeGet('inputStyles.autofilled.background')(props)};
      background-image: none;
      color: ${themeGet('inputStyles.autofilled.color')(props)};
    `};

  ${props => {
    switch (props.status) {
      case 'error':
        return css`
          .cr-input__status-icon {
            fill: ${themeGet('inputStyles.error.border')(props)};
          }
        `;
      case 'valid':
        return css`
          .cr-input__status-icon {
            fill: ${themeGet('inputStyles.valid.color')(props)};
          }
        `;
      case 'warning':
        return css`
          .cr-input__status-icon {
            fill: ${themeGet('inputStyles.warning.color')(props)};
          }
        `;
      default:
        return '';
    }
  }};
`;

interface StatusIconProps {
  status?: StatusType;
}
const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  switch (status) {
    case 'valid':
      return <IconVerified data-testid="icon-valid" className="cr-input__status-icon" />;
    case 'error':
      return <IconDanger data-testid="icon-error" className="cr-input__status-icon" />;
    case 'warning':
      return <IconWarning data-testid="icon-warning" className="cr-input__status-icon" />;
    default:
      return null;
  }
};

export type BaseInputProps = Merge<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
  Omit<StyledInputProps, 'inputSize'>
> &
  InputBackdropProps & {
    size?: 'small' | 'regular' | 'large';
    status?: StatusType;
    disabled?: boolean;
    /** (Legacy) Was this element automatically filled by the browser? */
    isAutofilled?: boolean;
    /** Element to show inside the input on the left hand side. Usually reserved for Icons */
    prefix?: React.ReactNode;
    /** Element to show inside the input on the right hand side. Usually reserved for Icons */
    suffix?: React.ReactNode;
    css?: any;
  };
export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      size,
      status,
      disabled,
      readOnly,
      isAutofilled,
      prefix,
      suffix,
      borderLeft,
      borderRight,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      width,
      ...restProps
    },
    ref,
  ) => {
    return (
      <Wrapper
        disabled={disabled}
        readOnly={readOnly}
        isAutofilled={isAutofilled}
        status={status}
        width={width}
        borderLeft={borderLeft}
        borderRight={borderRight}
        borderRadius={borderRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
      >
        {prefix && (
          <Flex flex={0} pl={2} pr={1} fontSize="text-s">
            {prefix}
          </Flex>
        )}
        <StyledInput
          ref={ref}
          disabled={disabled}
          inputSize={size}
          hasPrefix={!!prefix}
          hasSuffix={!!status || !!suffix}
          readOnly={readOnly}
          type="text"
          {...restProps}
        />
        <InputBackdrop
          status={status}
          borderLeft={borderLeft}
          borderRight={borderRight}
          borderRadius={borderRadius}
          borderTopLeftRadius={borderTopLeftRadius}
          borderTopRightRadius={borderTopRightRadius}
          borderBottomLeftRadius={borderBottomLeftRadius}
          borderBottomRightRadius={borderBottomRightRadius}
        />
        {(status || suffix) && (
          <Flex flex={0} pr={2} fontSize="text-s">
            {suffix}
            {status && (
              <Box ml={2}>
                <StatusIcon status={status} />
              </Box>
            )}
          </Flex>
        )}
      </Wrapper>
    );
  },
);

export interface InputProps extends Omit<BaseInputProps, 'status' | 'hasPrefix' | 'hasSuffix'> {
  /** The text label that will appear above the Input */
  label?: React.ReactNode;
  /** Helper element that will be positioned to the top right of the Input */
  labelHelper?: React.ReactNode;
  /** Paragraph that will appear beneath the label */
  description?: React.ReactNode;
  /** If a status is present, this content will appear on the bottom of the Input */
  statusMessage?: React.ReactNode;
  /** Paragraph that will appear on the bottom of the Input */
  textHelper?: React.ReactNode;
  /** Set the status of the Input */
  status?:
    | StatusType
    | {
        type?: StatusType;
        message?: React.ReactNode;
      };
  css?: any;
}

/**
 * The Acceptor of User Information, Messenger of the Internet Gods.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, id, status, description, statusMessage, textHelper, labelHelper, ...restProps },
    ref,
  ) => {
    const labelId = id && label ? `${id}-label` : undefined;
    const descriptionId = id && description ? `${id}-description` : undefined;
    const nextStatus = status && typeof status === 'object' ? status.type : (status as StatusType);
    const nextMessage = status && typeof status === 'object' ? status.message : statusMessage;

    return (
      <React.Fragment>
        {label && (
          <Label
            id={labelId}
            htmlFor={id}
            description={description}
            descriptionProps={{ id: descriptionId }}
          >
            {labelHelper ? (
              <Flex
                width="100%"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div>{label}</div>
                <div>{labelHelper}</div>
              </Flex>
            ) : (
              label
            )}
          </Label>
        )}
        <BaseInput
          ref={ref}
          id={id}
          status={nextStatus}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          {...restProps}
        />
        {status && nextMessage && (
          <FormHelper mt={1} status={nextStatus}>
            {nextMessage}
          </FormHelper>
        )}
        {textHelper && !nextMessage && <FormHelper mt={1}>{textHelper}</FormHelper>}
      </React.Fragment>
    );
  },
);

// Keeping flameName for compat with Group & inputBlock prop. Will be deprecated.
// @ts-ignore
Input.flameName = 'Input';
