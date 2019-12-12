import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { themeGet } from '@styled-system/theme-get';
import { Box, Flex, FlameBoxProps } from '../Core';
import { Divider } from '../Divider';

interface TabsProps {
  /** Highlight the nav to show that it's currently selected */
  active?: boolean;
}
/**
 * Top-level separation of related, but different sections.
 */
export const Tab = styled(Flex)<TabsProps>`
  border-bottom: 3px solid transparent;
  cursor: pointer;
  justify-content: center;
  font-size: ${themeGet('fontSizes.text-s')};
  transition: border-bottom-color ease-in-out ${themeGet('transition.transition-duration-fast')};

  ${props =>
    props.active &&
    css`
      border-bottom-color: ${themeGet('colors.secondary')(props)};
    `};
`;
Tab.defaultProps = {
  pt: 2,
  pb: 2,
  pl: 1,
  pr: 1,
  alignItems: 'center',
  role: 'button',
};

const Wrapper = styled(Flex)`
  ${Tab}:not(:first-of-type) {
    margin-left: ${themeGet('space.4')};
  }
`;
Wrapper.defaultProps = {
  mx: 2,
};

export const TabContainer: React.FC<FlameBoxProps> = ({ children, ...restProps }) => {
  return (
    <Box {...restProps}>
      <Wrapper>{children}</Wrapper>
      <Divider />
    </Box>
  );
};
