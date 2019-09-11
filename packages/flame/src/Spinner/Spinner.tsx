import * as React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Omit } from 'type-fest';
import { IconSpinner } from '../Icon/Spinner';
import { IconProps } from '../Icon/utils/iconFactory';

const spinnerSpin = keyframes`
 0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledIcon = styled(IconSpinner)`
  animation: ${spinnerSpin} 1s infinite cubic-bezier(0.35, 0.3, 0.3, 0.35);
`;

export type SpinnerProps = Omit<IconProps, 'theme'>;
export const Spinner: React.FC<SpinnerProps> = ({ ...restProps }) => <StyledIcon {...restProps} />;
