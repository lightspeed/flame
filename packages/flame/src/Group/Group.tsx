import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { flexbox, FlexboxProps, layout, LayoutProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';

type Align = 'center' | 'right' | 'left';
type VerticalAlign = 'top' | 'bottom' | 'middle';
type GroupType = 'horizontal' | 'vertical';

export type GroupItemProps = FlexboxProps & LayoutProps;
export const GroupItem = styled('div')<GroupItemProps>`
  position: relative;
  display: flex;
  z-index: 0;

  &:hover {
    z-index: 2;
  }

  &:not(:first-of-type) {
    margin-left: ${themeGet('space.2')};
  }

  & > * {
    align-self: center;
    width: 100%;
    justify-content: center;
  }

  ${flexbox};
  ${layout};
`;

// @ts-ignore
GroupItem.flameName = 'FlameGroupItem';

const horizontalAlignment = (props: { theme: any; align?: Align }) => {
  switch (props.align) {
    case 'center':
      return css`
        justify-content: center;
      `;
    case 'right':
      return css`
        justify-content: flex-end;
      `;
    case 'left':
    default:
      return css`
        justify-content: flex-start;
      `;
  }
};

const verticalAlignment = (props: { theme: any; verticalAlign?: VerticalAlign }) => {
  switch (props.verticalAlign) {
    case 'top':
      return css`
        align-items: flex-start;
      `;
    case 'bottom':
      return css`
        align-items: flex-end;
      `;
    case 'middle':
    default:
      return css`
        align-items: center;
      `;
  }
};

export type GroupAddonProps = React.HTMLAttributes<HTMLElement> &
  LayoutProps & {
    align?: Align;
    verticalAlign?: VerticalAlign;
  };
export const GroupAddon = styled('div')<GroupAddonProps>`
  display: flex;
  padding: ${themeGet('space.1')} ${themeGet('space.2')};
  text-align: center;
  background-color: ${themeGet('groupStyles.addon.background')};
  border: solid 1px ${themeGet('groupStyles.addon.borderColor')};
  border-radius: ${themeGet('radii.radius-1')};
  align-items: center;
  line-height: 1;

  ${verticalAlignment};
  ${horizontalAlignment};

  ${layout};
`;

// @ts-ignore
GroupAddon.flameName = 'FlameGroupAddon';

type BaseGroupProps = LayoutProps &
  FlexboxProps & {
    type?: GroupType;
    noSpacing?: boolean;
  };
// Due to self referential shenannigans, I'll need to disable ts on this
// @ts-ignore
const BaseGroup = styled('div')<BaseGroupProps>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;

  ${layout};
  ${flexbox};

  ${props =>
    !props.type &&
    !props.noSpacing &&
    css`
      /*
      Self referential shenannigans to keep same margins you'd get
      like GroupItem
    */
      & > ${BaseGroup /* eslint-disable-line */}, ${GroupAddon} {
        &:not(:first-of-type) {
          margin-left: ${themeGet('space.2')(props)};
        }
      }
    `};

  ${props =>
    props.type &&
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      margin-left: 0;

      ${GroupItem} {
        flex-direction: column;
        margin: 0;

        &:not(:first-of-type) {
          margin-top: ${themeGet('space.2')(props)};
        }
      }

      ${GroupAddon} {
        padding-top: ${themeGet('space.1')(props)};
        padding-bottom: ${themeGet('space.1')(props)};
      }
    `};

  ${props =>
    props.type &&
    props.type === 'vertical' &&
    props.noSpacing &&
    css`
      flex-direction: column;

      ${GroupItem}, ${GroupAddon} {
        margin: 0;

        &:not(:first-of-type) {
          margin-top: -1px;
        }

        &:not(${GroupAddon}) * {
          border-radius: 0;
        }

        &:first-of-type,
        &:first-of-type * {
          border-top-left-radius: ${themeGet('radii.radius-1')(props)};
          border-top-right-radius: ${themeGet('radii.radius-1')(props)};
        }

        &:last-child,
        &:last-child * {
          border-bottom-left-radius: ${themeGet('radii.radius-1')(props)};
          border-bottom-right-radius: ${themeGet('radii.radius-1')(props)};
        }
        ${GroupAddon} {
          &:not(:first-of-type) {
            margin-left: -1px;
          }
        }
      }
    `};

  ${props =>
    !props.type &&
    props.noSpacing &&
    css`
      ${GroupItem}, ${GroupAddon} {
        border-radius: 0;
        &:not(:first-of-type) {
          margin-left: -1px !important;
        }

        &:not(${GroupAddon}) * {
          border-radius: 0;
        }

        &:first-of-type,
        &:first-of-type * {
          border-top-left-radius: ${themeGet('radii.radius-1')(props)};
          border-bottom-left-radius: ${themeGet('radii.radius-1')(props)};
        }

        &:last-child,
        &:last-child * {
          border-top-right-radius: ${themeGet('radii.radius-1')(props)};
          border-bottom-right-radius: ${themeGet('radii.radius-1')(props)};
        }
      }
    `};
`;

export type GroupProps = Merge<
  React.HTMLProps<HTMLElement>,
  FlexboxProps & {
    children: React.ReactNode;
    /** Sets the direction of Group. Like flexDirection. */
    type?: GroupType;
    /** Disables space between a Group's children */
    noSpacing?: boolean;
    /** Sets display: block on Group */
    block?: boolean;
    /** Sets flex=1 on Inputs when using Input inside Group */
    inputBlock?: boolean;
  }
>;
/**
 * Group component bundles other components.
 */
export const Group: React.FunctionComponent<GroupProps> = ({
  children,
  block,
  inputBlock,
  ...restProps
}) => {
  const wrappedChildren = React.Children.map(children, (child: any) => {
    if (
      child &&
      child.type &&
      (child.type.flameName === 'FlameGroupItem' ||
        child.type.flameName === 'FlameGroupAddon' ||
        child.type.flameName === 'FlameGroup')
    ) {
      return child;
    }

    if (child && block) {
      return <GroupItem flex="1">{child}</GroupItem>;
    }

    // TODO: Deprecate inputBlock & flameName in favour of using GroupItem with flex
    if (child && child.type.flameName === 'Input' && inputBlock) {
      return <GroupItem flex="1">{child}</GroupItem>;
    }

    return child && <GroupItem>{child}</GroupItem>;
  });

  return <BaseGroup {...restProps}>{wrappedChildren}</BaseGroup>;
};

// @ts-ignore
Group.flameName = 'FlameGroup';
