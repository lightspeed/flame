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
 * A wrapper component used to combine other components into a single cohesive whole.
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

export const BeThereOrBeSquare = InputGroup;
