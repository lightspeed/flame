import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';

export type ModalBodyProps = {
  /** Sets overflowY: scroll on Modal's content  */
  scroll?: boolean;
};
/**
 * Body of the Modal
 */
export const ModalBody = styled('div')<ModalBodyProps>`
  flex-grow: 1;
  padding: ${themeGet('space.4')};
  overflow-wrap: break-word;
  ${props =>
    props.scroll &&
    css`
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    `};
`;

ModalBody.defaultProps = {
  scroll: false,
};
