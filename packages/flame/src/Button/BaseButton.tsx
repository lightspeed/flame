import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { space, SpaceProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';

export type ButtonHTML = React.HTMLProps<HTMLButtonElement> & React.HTMLProps<HTMLAnchorElement>;
export type ButtonSizes = 'small' | 'large' | 'xlarge' | 'medium';
export type BaseButtonProps = {
  theme?: any;
  /** One of 'small', 'medium', 'large', 'xlarge' */
  size?: ButtonSizes;
  disabled?: boolean;
  /** Sets display: block on Button */
  block?: boolean;
} & SpaceProps;

const generateSize = (height: number, px: number, font: string, radius: string) => (
  props: BaseButtonProps,
) =>
  css`
    min-height: ${themeGet(`space.${height}`)(props)};
    padding-top: ${themeGet(`space.1`)(props)};
    padding-bottom: ${themeGet(`space.1`)(props)};
    padding-left: ${themeGet(`space.${px}`)(props)};
    padding-right: ${themeGet(`space.${px}`)(props)};
    font-size: ${themeGet(`fontSizes.${font}`)(props)};
    border-radius: ${themeGet(`radii.${radius}`)(props)};
  `;

const sizeVariants = (props: BaseButtonProps) => {
  switch (props.size) {
    case 'small':
      return generateSize(5, 2, 'text-xs', 'radius-1')(props);
    case 'large':
      return generateSize(7, 4, 'text', 'radius-1')(props);
    case 'xlarge':
      return generateSize(9, 6, 'text-l', 'radius-2')(props);
    case 'medium':
    default:
      return generateSize(6, 3, 'text-s', 'radius-1')(props);
  }
};

const setBlock = (props: BaseButtonProps) =>
  props.block &&
  css`
    display: flex;
    width: 100%;
    text-align: center;
  `;

const setDisabled = (props: BaseButtonProps) =>
  props.disabled &&
  css`
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
    box-shadow: none;
  `;

export const BaseButton = styled('button')<Merge<ButtonHTML, BaseButtonProps>>`
  appearance: none;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  line-height: 1;
  user-select: none;
  text-decoration: none;
  text-align: center;
  font-family: ${themeGet('fontFamily.sans-serif')};
  font-weight: ${themeGet('fontWeights.bold')};
  transition-property: background, border, box-shadow, color;
  transition-duration: ${themeGet('transition.transition-duration-fast')};
  border: 1px solid;
  cursor: pointer;

  ${sizeVariants};
  ${setBlock};

  &:disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
    box-shadow: none;
  }

  ${setDisabled};
  ${space};
`;

BaseButton.defaultProps = {
  type: 'button',
};
