import * as React from 'react';
import { SpaceProps, LayoutProps, ZIndexProps } from 'styled-system';
import styled from '@emotion/styled';
import {
  ButtonModifier as HoustonButtonModifier,
  ButtonVariant as HoustonButtonVariant,
} from '@lightspeed/design-system-react/dist/components/button/Button';
// @ts-ignore
import { mapPropsToAttributes as houstonMapPropsToAttributes } from '@lightspeed/design-system-react/dist/cjs/components/button/Button';
import { BorderProps } from '../Core';

export type ButtonProps = {
  theme?: any;
  /** One of 'small', 'medium', 'large', 'xlarge' */
  size?: ButtonSizes;
  /** Sets display: block on Button */
  block?: boolean;
  /** Sets the Button loading state */
  loading?: boolean;
  /** Disables space between a Button's children */
  noSpacing?: boolean;
  /** Disables multiline of text */
  noMultiline?: boolean;
  /** Sets Button fill. Does not apply to default variant */
  fill?: boolean;
  /** One of 'neutral', 'primary', 'secondary', 'danger' */
  variant?: ButtonVariants;
  /** @deprecated Forces cursor states onto Button */
  forcedState?: 'hover' | 'active';
  /** CSS class name */
  className?: string;
  /** Sets the disabled state */
  disabled?: boolean;
  /** Href for navigation. Turns the Button into a link. */
  href?: string;
} & SpaceProps &
  LayoutProps &
  BorderProps &
  ZIndexProps;

type ButtonVariants = 'neutral' | 'default' | 'primary' | 'secondary' | 'danger' | 'input';
type ButtonSizes = 'small' | 'large' | 'xlarge' | 'medium';

// Until we get Icon converted to an emotion component, we'll need to rely on flameName
const isIconChild = (child: React.ReactElement<any>) =>
  child && child.type && (child.type as any).flameName === 'Icon';
const isIconOnly = (children: React.ReactElement<any>) =>
  React.Children.count(children) === 1 && isIconChild(children);

const ButtonContent = styled('span')`
  display: inline-flex;
  align-items: center;
`;

const ChildWrapper = styled('span')`
  display: inline-flex;

  ${ButtonContent}:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`;

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

export const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
  const {
    className,
    loading,
    children,
    size,
    fill,
    variant,
    href,
    block,
    noMultiline,
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

  let extraCSS = { whiteSpace: noMultiline && 'nowrap' } as any;
  let modifier: HoustonButtonModifier;

  if (isIconOnly(children as any)) {
    modifier = 'icon';
  } else if (!fill) {
    modifier = 'text';
  }

  const mapVariantProp = (variant: ButtonVariants): HoustonButtonVariant => {
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

  const mapJumboProp = (size: ButtonSizes): boolean => {
    return ['large', 'xlarge'].includes(size);
  };

  const houstonVariant = mapVariantProp(variant);

  if (variant === 'input') {
    extraCSS = {
      ...extraCSS,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'var(--vd-colour--box)',
      padding: modifier !== 'icon' ? '12px 20px' : undefined,
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

  if (size === 'small') {
    extraCSS = {
      ...extraCSS,
      fontSize: '13px',
      padding: '8px 16px',
    };
  }

  extraCSS = {
    ...extraCSS,
    svg: fill
      ? {
          fill: 'white',
          color: 'white',
          '.cr-icon__details-2': {
            color: `var(--vd-colour--${houstonVariant})`,
            fill: `var(--vd-colour--${houstonVariant})`,
          },
        }
      : variant !== 'input' && {
          fill: `var(--vd-colour--${houstonVariant})`,
          color: `var(--vd-colour--${houstonVariant})`,
          '.cr-icon__details-2': {
            fill: 'white',
            color: 'white',
          },
        },
    '&:hover': {
      // @ts-ignore
      ...extraCSS['&:hover'],
      svg: !fill &&
        variant !== 'input' && {
          fill: 'white',
          color: 'white',
          '.cr-icon__details-2': {
            color: `var(--vd-colour--${houstonVariant})`,
            fill: `var(--vd-colour--${houstonVariant})`,
          },
        },
    },
  };

  const BaseButton = href && !disabled ? 'a' : 'button';

  return (
    <BaseButton
      {...houstonMapPropsToAttributes({
        block,
        className,
        jumbo: mapJumboProp(size),
        modifier,
        loading,
        variant: houstonVariant,
        ...{ href },
      })}
      disabled={disabled || loading}
      ref={ref}
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
      {React.Children.count(children) === 1 && !isIconOnly(children as any) ? (
        children
      ) : (
        <ChildWrapper>
          {React.Children.map(children, child => remapChild(child, size))}
        </ChildWrapper>
      )}
      {loading && <i className="vd-loader vd-loader--small" />}
    </BaseButton>
  );
}) as React.FC<
  (React.ComponentPropsWithRef<'button'> | React.ComponentPropsWithRef<'a'>) & ButtonProps
>;

Button.defaultProps = {
  size: 'medium',
  variant: 'neutral',
  block: false,
};
