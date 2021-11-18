import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { variant as styledVariant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';
import {
  Button as HoustonButton,
  ButtonLink as HoustonButtonLink,
  ButtonVariant as HoustonButtonVariant,
} from '@lightspeed/design-system-react';
import { BaseButton, ButtonHTML, ButtonSizes, BaseButtonProps } from './BaseButton';

type ColorVariants = 'neutral' | 'default' | 'primary' | 'secondary' | 'danger' | 'input';

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

type ExtendedBaseButtonProps = {
  isFillButton?: boolean;
  variant?: ColorVariants;
};
const ExtendedBaseButton = styled(BaseButton)<ExtendedBaseButtonProps>`
  /* &:focus {
    outline: thin dotted;
    box-shadow: none;
  } */

  svg {
    ${props =>
      props.isFillButton
        ? css(fillButtonIconVariants(props))
        : css(outlineButtonIconVariants(props))};
  }

  /* ${props =>
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
        `} */
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
    /** @deprecated Forces cursor states onto Button */
    forcedState?: 'hover' | 'active';
    /** CSS class name */
    className?: string;
    /** Sets the disabled state */
    disabled?: boolean;
    /** Href for navigation. Turns the Button into a link. */
    href?: string;
  }
>;

const mapVariantProp = (variant: ColorVariants): HoustonButtonVariant => {
  const DEFAULT_VARIANT = 'do';
  switch (variant) {
    case 'secondary':
      return 'supplementary';
    case 'danger':
      return 'no';
    default:
      return DEFAULT_VARIANT;
  }
};

const mapSizeProp = (size: ButtonSizes): boolean => {
  return ['large', 'xlarge'].includes(size);
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      loading,
      children,
      size,
      fill,
      variant,
      href,
      block,
      disabled,
      borderLeft,
      borderRight,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      ...restProps
    } = props;

    const BaseButton = styled(href ? HoustonButtonLink : HoustonButton)<ButtonProps>`
      svg {
        ${props =>
          props.fill
            ? {
                fill: 'white',
                color: 'white',
                '.cr-icon__details-2': {
                  color: `var(--vd-colour--${props.variant})`,
                  fill: `var(--vd-colour--${props.variant})`,
                },
              }
            : variant !== 'input' && {
                fill: `var(--vd-colour--${props.variant})`,
                color: `var(--vd-colour--${props.variant})`,
                '.cr-icon__details-2': {
                  color: `var(--vd-colour--${props.variant})`,
                  fill: `var(--vd-colour--${props.variant})`,
                },
              }}
      }
      &:hover {
        svg {
          ${props =>
            !props.fill &&
            variant !== 'input' && {
              fill: 'white',
              color: 'white',
              '.cr-icon__details-2': {
                color: `var(--vd-colour--${props.variant})`,
                fill: `var(--vd-colour--${props.variant})`,
              },
            }}
        }
      }
    `;

    let modifier;
    if (isIconOnly(children)) {
      modifier = 'icon';
    }
    if (!fill) {
      modifier = 'text';
    }

    let extraCSS = {};
    if (variant === 'input') {
      extraCSS = {
        ...extraCSS,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'var(--vd-colour--box)',
        padding: '12px 20px',
        border: '2px solid var(--vd-colour--framing)',
        color: 'var(--vd-colour--text)',
        transitionDuration: '0.2s',
        transitionProperty: 'background, border',
        wordBreak: 'normal',
        '&:hover': {
          zIndex: '2',
          backgroundColor: 'var(--vd-colour--box)',
          borderColor: 'var(--vd-colour--keyline)',
          color: 'var(--vd-colour--text)',
        },
        '&:focus': {
          zIndex: '2',
          backgroundColor: 'var(--vd-colour--box)',
          borderColor: 'var(--vd-colour--go)',
          color: 'var(--vd-colour--text)',
          boxShadow: '0 0 3px var(--vd-colour--go)',
        },
        '&:active': {
          zIndex: '2',
          backgroundColor: 'var(--vd-colour--background)',
          borderColor: 'var(--vd-colour--keyline)',
          color: 'var(--vd-colour--text)',
          boxShadow: 'none',
        },
      };
    }

    return (
      <BaseButton
        ref={ref}
        fill={fill}
        modifier={modifier}
        variant={mapVariantProp(variant)}
        jumbo={mapSizeProp(size)}
        block={block}
        loading={loading}
        disabled={disabled}
        css={{
          ...extraCSS,
          borderLeft,
          borderRight,
          borderRadius,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomLeftRadius,
          borderBottomRightRadius,
        }}
        {...(restProps as any)}
      >
        {children}
      </BaseButton>
    );
  },
) as React.FC<
  (React.ComponentPropsWithRef<'button'> | React.ComponentPropsWithRef<'a'>) & ButtonProps
>;

Button.defaultProps = {
  size: 'medium',
  variant: 'neutral',
  block: false,
};
