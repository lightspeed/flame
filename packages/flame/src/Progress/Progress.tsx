import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';

const ProgressBarWrapper = styled('div')`
  width: 100%;
  height: ${themeGet('space.1')};
  background: ${themeGet('progressStyles.background')};
  border-radius: ${themeGet('space.1')};
  box-shadow: ${themeGet('progressStyles.boxShadow')};
`;

type ProgressBarProps = {
  animate: boolean;
};

const generateProgressBarBg = (props: ProgressBarProps) => {
  if (!props.animate) {
    return css`
      background: ${themeGet('progressStyles.progressBarStatic.background')(props)};
    `;
  }

  return css`
    background: ${themeGet('progressStyles.progressBar.background')(props)};
    background-size: ${themeGet('progressStyles.progressBar.backgroundSize')(props)};
  `;
};

const ProgressBar = styled('div')<ProgressBarProps>`
  @keyframes progressBarAnimation {
    0% {
      background-position: 0 50%;
    }

    100% {
      background-position: 100% 50%;
    }
  }

  height: 100%;
  ${generateProgressBarBg};
  border-radius: ${themeGet('space.1')};
  animation: progressBarAnimation 3s linear infinite;
  transition: width 500ms ease-in;
`;

export type ProgressProps = Merge<
  React.HTMLAttributes<any>,
  {
    /** One of 3 Progress variants */
    type: 'determinate' | 'indeterminate' | 'static';
    /** Current value of Progress */
    current: number;
    /** Total number of steps to Progress */
    total: number;
    css?: any;
  }
>;
/**
 * A linear indicator showing the progression of longstanding tasks.
 */
const Progress: React.FunctionComponent<ProgressProps> = ({
  type,
  current,
  total,
  ...restProps
}) => {
  const barWidth = type === 'indeterminate' ? 100 : (100 * current) / total;
  const animate = type !== 'static' && current !== total;

  return (
    <ProgressBarWrapper {...restProps}>
      <ProgressBar animate={animate} style={{ width: `${barWidth}%` }} />
    </ProgressBarWrapper>
  );
};

export { Progress };
