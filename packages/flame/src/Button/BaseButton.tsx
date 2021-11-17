import styled from '@emotion/styled';
import { SpaceProps, LayoutProps, ZIndexProps } from 'styled-system';
import { Merge } from 'type-fest';
import { BorderProps } from '../Core';

export type ButtonSizes = 'small' | 'large' | 'xlarge' | 'medium';
export type BaseButtonProps = {
  theme?: any;
  /** One of 'small', 'medium', 'large', 'xlarge' */
  size?: ButtonSizes;
  disabled?: boolean;
  /** Sets display: block on Button */
  block?: boolean;
} & SpaceProps &
  LayoutProps &
  BorderProps &
  ZIndexProps;

export const BaseButton = styled('button')<Merge<ButtonHTML, BaseButtonProps>>``;

BaseButton.defaultProps = {
  type: 'button',
};
