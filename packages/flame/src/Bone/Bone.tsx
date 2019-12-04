import styled from '@emotion/styled';
import { system, color, WidthProps, ColorProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Omit } from 'type-fest';

const boneStyles = system({
  height: {
    property: 'height',
    scale: 'space',
  },
  width: {
    property: 'width',
    scale: 'space',
  },
});

export type BoneProps = WidthProps &
  Omit<ColorProps, 'color'> & {
    /** Give the Bone component a pulsating animation */
    animated?: boolean;
    /** Height of the Bone (theme number, px, rem, em, vh) */
    height?: string | number;
  };

export const Bone = styled('span')<BoneProps>`
  @keyframes boneAnimation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }

  display: block;
  border-radius: ${themeGet('radii.radius-1')};
  background: ${themeGet('boneStyles.background')};
  ${props => props.animated && 'animation: boneAnimation 1.8s infinite;'};
  ${boneStyles};
  ${color};
`;

Bone.defaultProps = {
  animated: true,
  width: '100%',
  height: '2',
};
