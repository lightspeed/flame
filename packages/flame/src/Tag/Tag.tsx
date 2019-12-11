import * as React from 'react';
import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { withTheme } from 'emotion-theming';
import { Merge } from 'type-fest';
import { IconClose } from '../Icon/Close';

const StyledTag = styled('div')`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: stretch;
  border-radius: ${themeGet('radii.radius-1')};
`;

type SetTagLabelSizeProps = {
  /** Set the overall size of then component. By default, it is set to small. */
  size?: 'normal' | 'small';
};

const setTagLabelSize = (props: SetTagLabelSizeProps): SerializedStyles => {
  switch (props.size) {
    case 'small':
      return css`
        font-size: ${themeGet('fontSizes.text-xs')(props)};
        line-height: ${themeGet('space.2')(props)};
      `;
    case 'normal':
    default:
      return css`
        font-size: ${themeGet('fontSizes.text-s')(props)};
        line-height: ${themeGet('space.3')(props)};
      `;
  }
};

const BaseTagButton = styled('button')`
  appearance: none;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-family: inherit;
  outline: none;
  cursor: pointer;
`;

type StyledTagLabelProps = SetTagLabelSizeProps & {
  /** Automatically turns on when onRemove is set */
  hasSuffix?: boolean;
};

const StyledTagLabel = styled(BaseTagButton)<StyledTagLabelProps>`
  color: ${themeGet('tagStyles.main.color')};
  border-radius: ${themeGet('radii.radius-1')};
  padding: ${themeGet('space.1')};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${themeGet('tagStyles.main.background')};
  user-select: none;
  text-align: left;

  &::after {
    content: ' ';
    position: absolute;
    border-radius: ${themeGet('radii.radius-1')};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    z-index: -1;
    box-shadow: ${themeGet('radii.radius-1')};
  }

  &:hover {
    background-color: ${themeGet('tagStyles.main.hoverBackground')};
  }

  &:focus::after {
    display: flex;
    box-shadow: ${themeGet('tagStyles.main.boxShadow')};
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:active {
    background-color: ${themeGet('tagStyles.main.activeBackground')};
  }

  ${props =>
    props.hasSuffix &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `};

  ${setTagLabelSize};
`;

const StyledTagRemove = styled(BaseTagButton)`
  display: flex;
  border-top-right-radius: ${themeGet('radii.radius-1')};
  border-bottom-right-radius: ${themeGet('radii.radius-1')};
  background-color: ${themeGet('tagStyles.remove.background')};
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: ${themeGet('tagStyles.remove.hoverBackground')};
  }

  &:hover .cr-icon__base {
    fill: ${themeGet('tagStyles.remove.icon.hoverBackground')};
  }

  &:focus .cr-icon {
    box-shadow: ${themeGet('tagStyles.remove.icon.focusBoxShadow')};
  }

  &:focus .cr-icon__base {
    fill: ${themeGet('tagStyles.remove.icon.focusBackground')};
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:active {
    background-color: ${themeGet('tagStyles.remove.activeBackground')};
  }

  &:active .cr-icon__base {
    fill: ${themeGet('tagStyles.remove.icon.activeBackground')};
  }
`;

// When the IconClose will be in TS, we can remove any and have better typing
const StyledIconClose = styled(IconClose)<any>`
  margin: 0 ${themeGet('space.1')};
  border-radius: ${themeGet('radii.radius-circle')};
  z-index: 1;
`;

type ThemedIconProps = {};

const ThemedIcon = withTheme((props: ThemedIconProps) => (
  <StyledIconClose
    detailsColor={themeGet('tagStyles.remove.icon.details')(props)}
    baseColor1={themeGet('tagStyles.remove.icon.background')(props)}
  />
));

export type TagProps = Merge<
  React.HTMLProps<HTMLDivElement>,
  StyledTagLabelProps & {
    children: React.ReactNode;
    /** onClick event handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** onRemove event handler, creates X button */
    onRemove?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    css?: any;
  }
>;

/**
 * An organisational indicator specifying of a data point which part of a whole it belongs to.
 */
export const Tag = ({
  children,
  size = 'normal',
  onClick,
  onRemove,
  ...rest
}: Omit<TagProps, 'hasSuffix'>) => (
  <StyledTag {...rest}>
    <StyledTagLabel type="button" onClick={onClick} hasSuffix={!!onRemove} size={size}>
      {children}
    </StyledTagLabel>
    {!!onRemove && (
      <StyledTagRemove type="button" onClick={onRemove} data-testid="tag-remove-button">
        <ThemedIcon />
      </StyledTagRemove>
    )}
  </StyledTag>
);

Tag.defaultProps = {
  onClick: () => {},
};
