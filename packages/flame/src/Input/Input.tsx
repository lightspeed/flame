import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { themeGet } from '@styled-system/theme-get';

import { Flex, Box, border, BorderProps, css as coreCss } from '../Core';
import { Label, FormHelper } from '../FormField';

import { IconVerified } from '../Icon/Verified';
import { IconWarning } from '../Icon/Warning';
import { IconDanger } from '../Icon/Danger';

type StatusType = 'valid' | 'error' | 'warning';
type InputSizes = 'small' | 'regular' | 'large';

interface InputBackdropProps extends BorderProps {
  status?: StatusType;
}
const InputBackdrop = styled('div')<InputBackdropProps>`
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

interface WrapperProps {
  disabled: boolean;
  readOnly: boolean;
  isAutofilled: boolean;
  status?: StatusType;
}
const Wrapper: React.FC<WrapperProps> = ({
  disabled,
  readOnly,
  isAutofilled,
  status,
  children,
  ...restProps
}) => (
  <div
    css={coreCss(get => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      transition: `all ${get('transition.transition-duration-fast')} ease-in-out`,
      background: get('inputStyles.background'),
      ...(disabled && {
        color: get('inputStyles.disabled.color'),
        background: get('inputStyles.disabled.background'),
        '-webkit-text-fill-color': 'currentColor',
      }),
      ...(readOnly && {
        background: get('inputStyles.readonly.background'),
      }),
      ...(isAutofilled && {
        background: get('inputStyles.autofilled.background'),
        backgroundImage: 'none',
        color: get('inputStyles.autofilled.color'),
      }),
      ...(status === 'error' && {
        '.cr-input__status-icon': {
          fill: get('inputStyles.error.border'),
        },
      }),
      ...(status === 'valid' && {
        '.cr-input__status-icon': {
          fill: get('inputStyles.valid.color'),
        },
      }),
      ...(status === 'warning' && {
        '.cr-input__status-icon': {
          fill: get('inputStyles.warning.color'),
        },
      }),
    }))}
    {...restProps}
  >
    {children}
  </div>
);

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

const setBaseInputSize = (inputSize: string, theme: any) => {
  switch (inputSize) {
    case 'small':
      return {
        fontSize: themeGet('fontSizes.text-xs')({ theme }),
        height: themeGet('space.5')({ theme }),
      };
    case 'large':
      return {
        height: themeGet('space.7')({ theme }),
      };
    case 'regular':
    default:
      return {};
  }
};

export type BaseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> &
  InputBackdropProps & {
    readOnly?: boolean;
    size?: InputSizes;
    status?: StatusType;
    disabled?: boolean;
    isAutofilled?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    css?: any;
  };
const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
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
        isAutofilled={isAutofilled}
        readOnly={readOnly}
        status={status}
        css={coreCss(get => ({
          borderRadius: borderRadius || get('radii.radius-2'),
          width: width || '100%',
          borderLeft,
          borderRight,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomLeftRadius,
          borderBottomRightRadius,
        }))}
      >
        {prefix && (
          <Flex flex={0} pl={2} pr={1} fontSize="text-s">
            {prefix}
          </Flex>
        )}
        <input
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          css={coreCss((get, t) => ({
            color: readOnly ? get('inputStyles.readonly.color') : get('inputStyles.color'),
            width: '100%',
            flex: '1 1 0%',
            boxSizing: 'border-box',
            border: 'solid 1px transparent',
            background: 'transparent',
            fontFamily: 'sans-serif',
            minWidth: 0,
            fontSize: ['text', 'text-s'],
            height: ['40px', '36px'],
            paddingLeft: prefix ? 0 : 2,
            paddingRight: suffix ? 0 : 2,
            '&::placeholder': {
              color: get('inputStyles.placeholder.color'),
            },
            transition: `all ${get('transition.transition-duration-fast')} ease-in-out`,
            '&:disabled': {
              opacity: 1,
            },
            '&:focus': {
              outline: 'none',
            },
            '&:active ': {
              outline: 'none',
            },
            '&:not([disabled]):not([readonly]):hover + div ': {
              borderColor: get('inputStyles.hover.border'),
            },
            '&:not([disabled]):not([readonly]):focus + div ': {
              borderColor: get('inputStyles.focus.border'),
            },
            '&:not([disabled]):not([readonly]):active + div ': {
              borderColor: get('inputStyles.active.border'),
            },
            ...setBaseInputSize(size, t),
          }))}
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

export interface InputProps extends Omit<BaseInputProps, 'status'> {
  label?: React.ReactNode;
  labelHelper?: React.ReactNode;
  description?: React.ReactNode;
  statusMessage?: React.ReactNode;
  textHelper?: React.ReactNode;
  status?:
    | StatusType
    | {
        type?: StatusType;
        message?: React.ReactNode;
      };
  css?: any;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, id, status, description, statusMessage, textHelper, labelHelper, ...restProps },
    ref,
  ) => {
    const labelId = id && label ? `${id}-label` : undefined;
    const descriptionId = id && description ? `${id}-description` : undefined;
    const nextStatus = typeof status === 'object' ? status.type : status;
    const nextMessage = typeof status === 'object' ? status.message : statusMessage;

    if (typeof status === 'object') {
      // eslint-disable-next-line no-console
      console.warn(`
Using status as an object will be deprecated in the next version of Flame.
Please prefer passing the status.type to the status prop directly and
pass the status.message to the statusMessage prop.
`);
    }

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

export { Input, InputBackdrop, BaseInput };
