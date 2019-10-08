/* eslint-disable react/no-multi-comp */
import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';

import { IconVerified } from '../Icon/Verified';
import { IconWarning } from '../Icon/Warning';
import { IconDanger } from '../Icon/Danger';
import { Text } from '../Text';

const BORDER_COLOR = 'inputStyles.border';
const HOVER_BORDER_COLOR = 'inputStyles.hover.border';
const FOCUS_BORDER_COLOR = 'inputStyles.focus.border';
const ERROR_BORDER_COLOR = 'inputStyles.error.border';
const PLACEHOLDER_COLOR = 'inputStyles.placeholder.color';
const ACTIVE_BORDER_COLOR = 'inputStyles.active.border';

type StatusType = 'valid' | 'error' | 'warning' | '';
type InputSizes = 'small' | 'regular' | 'large';

const handleSizes = (props: { inputSize?: InputSizes; theme?: any }) => {
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
};

type BaseInputProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  Partial<{
    inputSize: InputSizes;
    hasSuffix: boolean;
    hasPrefix: boolean;
    readOnly: boolean;
    css: any;
  }>
>;
const BaseInput = styled('input')<BaseInputProps>`
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

  ${handleSizes};

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
    color: ${themeGet(PLACEHOLDER_COLOR)};
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
`;

type InputBackdropType = React.HTMLAttributes<HTMLDivElement> & {
  type: StatusType | string;
};
const InputBackdrop = styled('div')<InputBackdropType>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  border-radius: ${themeGet('radii.radius-1')};
  background: transparent;
  box-shadow: ${themeGet('inputStyles.boxShadow')};
  border: solid 1px ${themeGet(BORDER_COLOR)};
  transition: border-color ${themeGet('transition.transition-duration-fast')} ease-in-out;

  ${BaseInput}:not([disabled]):not([readonly]):hover ~ & {
    border-color: ${themeGet(HOVER_BORDER_COLOR)};
  }

  /* Prettier does some nasty things if we merge both selectors... */
  ${BaseInput}:not([disabled]):not([readonly]):focus ~ & {
    border-color: ${themeGet(FOCUS_BORDER_COLOR)};
  }
  ${BaseInput}:not([disabled]):not([readonly]):active ~ & {
    border-color: ${themeGet(ACTIVE_BORDER_COLOR)};
  }

  ${props =>
    props.type &&
    props.type === 'error' &&
    css`
      border-color: ${themeGet(ERROR_BORDER_COLOR)(props)};
    `};
`;

const InputContainer = styled('label')`
  display: block;
  width: 100%;
`;

const InputHeader = styled('div')`
  margin-bottom: ${themeGet('space.1')};
`;

const InputLabelWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const InputLabelHelper = styled('div')`
  display: flex;

  > * {
    vertical-align: middle;
  }
`;

const InputPrefix = styled('div')`
  display: flex;
  flex: 0 0 auto;
  font-size: ${themeGet('fontSizes.text-s')};
  padding-left: ${themeGet('space.2')};
  padding-right: ${themeGet('space.1')};
`;

const InputSuffix = styled('div')`
  display: flex;
  flex: 0 0 auto;
  padding-right: ${themeGet('space.2')};
  font-size: ${themeGet('fontSizes.text-s')};
`;

const setFillStatus = (props: { type: StatusType; theme?: any }) => {
  switch (props.type) {
    case 'valid':
      return css`
        fill: ${themeGet('inputStyles.valid.color')(props)};
      `;
    case 'error':
      return css`
        fill: ${themeGet('inputStyles.error.color')(props)};
      `;
    case 'warning':
      return css`
        fill: ${themeGet('inputStyles.warning.color')(props)};
      `;
    default:
      return '';
  }
};

type InputStatusProps = {
  type: StatusType;
};
const InputStatus = styled('div')<InputStatusProps>`
  display: flex;
  flex: 0 0 auto;
  padding-right: ${themeGet('space.2')};
  ${setFillStatus};
`;

type WrapperProps = {
  disabled: boolean;
  readOnly: boolean;
  isAutofilled: boolean;
};
const Wrapper = styled('div')<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${themeGet('space.1')};
  background: ${themeGet('inputStyles.background')};
  transition: all ${themeGet('transition.transition-duration-fast')} ease-in-out;

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
`;

const StatusIcon = ({ type }: { type?: StatusType }) => {
  switch (type) {
    case 'valid':
      return <IconVerified data-testid="icon-valid" />;
    case 'warning':
      return <IconWarning data-testid="icon-warning" />;
    case 'error':
      return <IconDanger data-testid="icon-error" />;
    default:
      return null;
  }
};

type InputLabelProps = Partial<{
  label: string;
  id: string;
  childrend: React.ReactNode;
}>;
const InputLabel: React.FC<InputLabelProps> = ({ label, id, children }) => (
  <InputLabelWrapper>
    <Text size="small" fontWeight="bold" color="textHeading" id={id}>
      {label}
    </Text>
    {children}
  </InputLabelWrapper>
);

const setStatusTextColor = (props: { status: StatusType; theme?: any }) => {
  switch (props.status) {
    case 'valid':
      return css`
        color: ${themeGet('inputStyles.valid.color')(props)};
      `;
    case 'error':
      return css`
        color: ${themeGet('inputStyles.error.color')(props)};
      `;
    case 'warning':
      return css`
        color: ${themeGet('inputStyles.warning.color')(props)};
      `;
    default:
      return '';
  }
};

const StatusText = styled(Text)<{ status: StatusType }>`
  ${setStatusTextColor};
`;

const TextHelper = styled(Text)`
  color: ${themeGet('inputStyles.helper.background')};
`;
type StatusObject = {
  type: StatusType;
  message: React.ReactNode;
};
type InnerInputProps = Merge<
  React.HTMLProps<HTMLInputElement>,
  Partial<{
    /** Text label for Input */
    label: string;
    /** Helper to appear to the right of the label */
    labelHelper: React.ReactElement<any> | string;
    /** Text to show belog the label */
    description: string;
    /** Value of Input */
    value: string;
    /** Node to place at start of Input */
    prefix: React.ReactElement<any> | Element | string;
    /** Node to place at end of Input */
    suffix: React.ReactElement<any> | Element | string;
    /** Context clarification to appear below Input */
    textHelper: string;
    /** Sets Input disabled state */
    disabled: boolean;
    /** Sets input readonly state (immutability) */
    readOnly: boolean;
    /** One of "valid", "warning", "error", or "" */
    status: Partial<StatusObject>;
    /** One of "small", "regular", "large" */
    size: InputSizes;
    /** https://reactjs.org/docs/forwarding-refs.html */
    forwardedRef: React.Ref<any>; // will be extracted out because autocomplete shenannigans
    /** https://reactjs.org/docs/refs-and-the-dom.html */
    ref: React.Ref<any>; // will be extracted out because autocomplete shenannigans
    css: any;
  }>
>;
type InnerInputState = {
  isAutofilled: boolean;
};
class InnerInput extends React.Component<InnerInputProps, InnerInputState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isAutofilled: false,
    };

    this.onAnimationStart = this.onAnimationStart.bind(this);
    this.setAutofilledState = this.setAutofilledState.bind(this);
    this.registerNode = this.registerNode.bind(this);
  }

  componentDidMount() {
    if (this.input) {
      this.input.addEventListener('animationstart', this.onAnimationStart, false);
    }
  }

  componentWillUnmount() {
    if (this.input) {
      this.input.removeEventListener('animationstart', this.onAnimationStart);
    }
  }

  onAnimationStart({ animationName }: { animationName?: string }) {
    this.setAutofilledState(animationName === 'onAutoFillStart');
  }

  setAutofilledState(isAutofilled?: boolean) {
    this.setState({
      isAutofilled,
    });
  }

  // eslint-disable-next-line react/sort-comp
  input: HTMLInputElement;

  registerNode(ref: any) {
    const { forwardedRef } = this.props;
    this.input = ref;

    if (typeof forwardedRef === 'function') {
      forwardedRef(ref);
    }
  }

  render() {
    const {
      id,
      label,
      labelHelper,
      description,
      prefix,
      suffix,
      textHelper,
      disabled,
      readOnly,
      status,
      forwardedRef,
      ref, // Extract this out
      size,
      ...rest
    } = this.props;

    const { isAutofilled } = this.state;

    const labelledBy = id && label && `${id}-label`;
    const describedBy = id && description && `${id}-description`;
    const statusType = status && status.type;
    const statusMessage = status && status.message;

    const statusHelperMarkup = statusMessage && (
      <StatusText mt="1" as="div" size="small" status={statusType}>
        {status.message}
      </StatusText>
    );

    const textHelperMarkup = textHelper && (
      <TextHelper as="div" size="small">
        {textHelper}
      </TextHelper>
    );

    return (
      <InputContainer htmlFor={id}>
        {(label || description) && (
          <InputHeader>
            {label && (
              <InputLabel id={labelledBy} label={label}>
                {labelHelper && <InputLabelHelper>{labelHelper}</InputLabelHelper>}
              </InputLabel>
            )}

            {description && (
              <Text as="div" size="small" id={`${id}-description`}>
                {description}
              </Text>
            )}
          </InputHeader>
        )}

        <Wrapper disabled={disabled} readOnly={readOnly} isAutofilled={isAutofilled}>
          {prefix && <InputPrefix>{prefix}</InputPrefix>}

          <BaseInput
            ref={this.registerNode}
            id={id}
            hasSuffix={!!suffix}
            hasPrefix={!!prefix}
            aria-labelledby={labelledBy}
            aria-describedby={describedBy}
            disabled={disabled}
            readOnly={readOnly}
            inputSize={size}
            {...rest}
          />

          {suffix && <InputSuffix>{suffix}</InputSuffix>}

          {statusType && (
            <InputStatus type={statusType}>
              <StatusIcon type={statusType} />
            </InputStatus>
          )}

          <InputBackdrop type={statusType} />
        </Wrapper>
        {statusHelperMarkup || textHelperMarkup}
      </InputContainer>
    );
  }
}

(InnerInput as any).defaultProps = {
  size: 'regular',
};

// @ts-ignore
InnerInput.defaultName = 'FlameInput';
// Keeping flameName for compat with Group & inputBlock prop. Will be deprecated.
// @ts-ignore
InnerInput.flameName = 'Input';

export type InputProps = Merge<React.HTMLProps<any>, InnerInputProps & { css?: any }>;
const Input: React.FunctionComponent<InputProps> = React.forwardRef((props, ref) => (
  <InnerInput {...props} forwardedRef={ref} />
));

// Keeping flameName for compat with Group & inputBlock prop. Will be deprecated.
// @ts-ignore
Input.flameName = 'Input';

export { Input };
