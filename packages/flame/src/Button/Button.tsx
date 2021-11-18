import * as React from 'react';
import { Merge } from 'type-fest';
import styled from '@emotion/styled';
import {
  Button as HoustonButton,
  ButtonLink as HoustonButtonLink,
  ButtonVariant as HoustonButtonVariant,
} from '@lightspeed/design-system-react';
import { ButtonHTML, ButtonSizes, BaseButtonProps } from './BaseButton';

type ColorVariants = 'neutral' | 'default' | 'primary' | 'secondary' | 'danger' | 'input';

// Until we get Icon converted to an emotion component, we'll need to rely on flameName
const isIconChild = (child: React.ReactElement<any>) =>
  child && child.type && (child.type as any).flameName === 'Icon';
const isIconOnly = (children: React.ReactElement<any>) =>
  React.Children.count(children) === 1 && isIconChild(children);

type ButtonContent = {
  iconContent?: boolean;
  isFilled?: boolean;
  variant?: ColorVariants;
};

const ButtonContent = styled('span')<ButtonContent>`
  display: inline-flex;
  align-items: center;
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
    if (isIconOnly(children as any)) {
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
