import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { variant as styledVariant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';
import { Spinner } from '../Spinner';
import { BaseButton, ButtonHTML, ButtonSizes, BaseButtonProps } from './BaseButton';

type ColorVariants = 'neutral' | 'default' | 'primary' | 'secondary' | 'danger' | string;

const fillButtonVariants = styledVariant({
  key: 'buttonVariants.fill',
});

const fillButtonIconVariants = styledVariant({
  key: 'buttonIconVariants.fill',
});

const outlineButtonVariants = styledVariant({
  key: 'buttonVariants.outline',
});

const outlineButtonIconVariants = styledVariant({
  key: 'buttonIconVariants.outline',
});

// Until we get Icon converted to an emotion component, we'll need to rely on flameName
const isIconChild = (child: React.ReactElement<any>) =>
  child && child.type && (child.type as any).flameName === 'Icon';
const isIconOnly = (children: React.ReactElement<any>) =>
  React.Children.count(children) === 1 && isIconChild(children);

type StyledSpinnerProps = {
  fill?: boolean;
  variant?: ColorVariants;
  size?: any;
};
const StyledSpinner = styled(Spinner)<StyledSpinnerProps>`
  ${props => props.fill && fillButtonIconVariants(props)};
  ${props => !props.fill && outlineButtonIconVariants(props)};
`;

type ExtendedBaseButtonProps = {
  isFillButton?: boolean;
  variant?: ColorVariants;
};
const ExtendedBaseButton = styled(BaseButton)<ExtendedBaseButtonProps>`
  &:focus {
    outline: thin dotted;
    box-shadow: none;
  }

  svg {
    ${props =>
      props.isFillButton
        ? css(fillButtonIconVariants(props))
        : css(outlineButtonIconVariants(props))};
  }

  ${props =>
    props.isFillButton || props.variant === 'neutral'
      ? css`
          ${fillButtonVariants(props)};
          box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);

          &.cr-button--hover,
          &.cr-button--active {
            ${css(themeGet(`buttonVariants.fill.${props.variant}.&:hover`)(props))}
          }
          &.cr-button--active {
            ${css(themeGet(`buttonVariants.fill.${props.variant}.&:active`)(props))}
          }
        `
      : css`
          ${outlineButtonVariants(props)};
          &.cr-button--hover,
          &.cr-button--active {
            ${css(themeGet(`buttonVariants.outline.${props.variant}.&:hover`)(props))}
          }
          &.cr-button--active {
            ${css(themeGet(`buttonVariants.outline.${props.variant}.&:active`)(props))}
          }
        `}
`;

const loneIconAdjustments = (children: any, size: ButtonSizes) => {
  if (isIconOnly(children)) {
    switch (size) {
      case 'small':
        return { px: '0.4375rem', py: 0 };
      case 'large':
        return { px: '0.6875rem', py: 0 };
      case 'xlarge':
        return { px: '0.875rem', py: 0 };
      default:
        return { px: '0.5625rem', py: 0 };
    }
  }

  return {};
};

const remapChild = (child: any, size: ButtonSizes) => {
  // This is no bueno. We need to have additional logic
  // to handle buttons with a single Icon which have completely different styling.
  // We should probably extract this out into a seperate component instead as we're
  // adding a bit too much complexity on an already loaded component.
  if (isIconOnly(child)) {
    const clone = React.cloneElement(child, {
      size: child.props.size || size,
    });
    return <ButtonContent>{clone}</ButtonContent>;
  }

  return <ButtonContent>{child}</ButtonContent>;
};

const SpinnerWrapper = styled('span')`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
`;

type ButtonContent = {
  iconContent?: boolean;
  isFilled?: boolean;
  variant?: ColorVariants;
};

const ButtonContent = styled('span')<ButtonContent>`
  display: inline-flex;
  align-items: center;
`;

type ChildWrapperProps = {
  isLoading?: boolean;
  noSpacing?: boolean;
};
const ChildWrapper = styled('span')<ChildWrapperProps>`
  opacity: ${props => (props.isLoading ? 0 : 1)};
  display: inline-flex;

  ${props =>
    !props.noSpacing &&
    css`
      ${ButtonContent}:not(:first-of-type) {
        margin-left: 0.5rem;
      }
    `};
`;

export type ButtonProps = Merge<
  ButtonHTML,
  BaseButtonProps & {
    /** Sets the Button loading state */
    loading?: boolean;
    /** Disables space between a Button's children */
    noSpacing?: boolean;
    /** Sets Button fill. Does not apply to default variant */
    fill?: boolean;
    /** One of 'neutral', 'primary', 'secondary', 'danger' */
    variant?: ColorVariants;
    /** Forces cursor states onto Button */
    forcedState?: 'hover' | 'active';
    /** CSS class name */
    className?: string;
    /** Sets the disabled state */
    disabled?: boolean;
    /** Href for navigation. Turns the Button into a link. */
    href?: string;
  }
>;

/**
 * Buttons are used to take action or confirm a decision. They help merchants get things done.
 */
export const Button = React.forwardRef<
  React.ComponentPropsWithRef<'button'> | React.ComponentPropsWithRef<'a'>,
  ButtonProps
>(
  (
    {
      loading,
      children,
      size,
      noSpacing,
      fill,
      variant,
      forcedState,
      className,
      disabled,
      ...restProps
    },
    ref,
  ) => {
    const iconAdjustments = loneIconAdjustments(children, size);

    const nextChildren = React.Children.map(children, child => remapChild(child, size));
    const LinkifiedButton = restProps.href
      ? ExtendedBaseButton.withComponent('a')
      : ExtendedBaseButton;

    const nextForceState = forcedState && `cr-button--${forcedState}`;
    const isDisabled = loading || disabled;

    // TODO: Need to rework or split off the link buttons from the main component.
    // It causes some gnarly typing errors and overloads the component with even
    // more useless logic, since emotion supports the `as` prop anyways...
    return (
      // @ts-ignore
      <LinkifiedButton
        ref={ref}
        isFillButton={fill}
        size={size}
        disabled={isDisabled}
        variant={variant === 'default' ? 'neutral' : variant}
        className={[className, nextForceState].join(' ')}
        {...iconAdjustments}
        {...(restProps as any)}
      >
        {loading && (
          <SpinnerWrapper title="Loading...">
            <StyledSpinner fill={fill} variant={variant} size={size} />
          </SpinnerWrapper>
        )}
        <ChildWrapper noSpacing={noSpacing} isLoading={loading}>
          {nextChildren}
        </ChildWrapper>
      </LinkifiedButton>
    );
  },
);

Button.defaultProps = {
  size: 'medium',
  variant: 'neutral',
  block: false,
};
