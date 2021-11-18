import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { TextInput as HoustonTextInput } from '@lightspeed/design-system-react';
import { themeGet } from '@styled-system/theme-get';
import { layout, zIndex, compose } from 'styled-system';
import { Merge } from 'type-fest';

import { Flex, Box, border } from '../Core';
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

interface WrapperProps {
  status?: StatusType;
}
const Wrapper = styled('div')<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  ${compose(layout, border, zIndex)}

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
      css,
      ...restProps
    },
    ref,
  ) => {
    const TextInputPrefix = styled(Flex)`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 12px;
      align-items: center;
    `;

    const TextInputSuffix = styled(Flex)`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 12px;
      align-items: center;
    `;

    return (
      <Wrapper status={status}>
        {prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
        <HoustonTextInput
          ref={ref}
          hasError={status === 'error'}
          disabled={disabled}
          readOnly={readOnly}
          className={[prefix && 'vd-input--icon-left', suffix && 'vd-input--icon-right']
            .filter(Boolean)
            .join(' ')}
          css={{
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
        {(status || suffix) && (
          <TextInputSuffix>
            {suffix}
            {status && (
              <Box ml={2}>
                <StatusIcon status={status} />
              </Box>
            )}
          </TextInputSuffix>
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
          <Flex width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Label
              id={labelId}
              htmlFor={id}
              description={description}
              descriptionProps={{ id: descriptionId }}
            >
              label
            </Label>
            {labelHelper}
          </Flex>
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
