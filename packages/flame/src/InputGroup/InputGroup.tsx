import * as React from 'react';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { color, ColorProps, zIndex, ZIndexProps, compose, space } from 'styled-system';

import { Flex, border, FlameFlexProps, BorderProps } from '../Core';

export interface InputGroupAddonProps
  extends FlameFlexProps,
    BorderProps,
    Partial<Omit<ColorProps, 'color'>>,
    ZIndexProps {}
export const InputGroupAddon = styled(Flex)<InputGroupAddonProps>`
  padding-left: ${themeGet('space.2')};
  padding-right: ${themeGet('space.2')};
  text-align: center;
  background-color: ${themeGet('groupStyles.addon.background')};
  border: solid 1px ${themeGet('groupStyles.addon.borderColor')};
  border-radius: ${themeGet('radii.radius-1')};
  align-items: center;
  ${compose(border, color, space, zIndex)};
`;

/**
 * If you need to regroup Input components together (namely `Button` and `Input`), you may wrap them with `InputGroup`.
 * This component will essentially attempt to forward values to the underlying children Styled System border and border radius props.
 *
 * Concretely, this also means that, as long as a component has the appropriate Styled System props, it too can be smooshed within the `InputGroup`.
 * Please be aware that this functionality will only apply to first level children and will not recursively check for components that have the border or border radius prop.
 */
export const InputGroup: React.FC<FlameFlexProps> = ({ children, ...restProps }) => {
  const nextChildren = React.Children.map(children, (child: any, index) => {
    if (!child) {
      return null;
    }

    if (index === 0) {
      return React.cloneElement(child, {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      });
    }

    if (index === React.Children.count(children) - 1 && React.Children.count(children) === 2) {
      return React.cloneElement(child, {
        borderLeft: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      });
    }

    if (index === React.Children.count(children) - 1) {
      return React.cloneElement(child, {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      });
    }

    return React.cloneElement(child, {
      borderLeft: 0,
      borderRight: 0,
      borderRadius: 0,
    });
  });

  return <Flex {...restProps}>{nextChildren}</Flex>;
};
