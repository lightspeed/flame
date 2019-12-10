import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';

/**
 * Footer of the Modal
 */
export const ModalFooter = styled('div')`
  padding: ${themeGet('space.3')} ${themeGet('space.4')};
  background-color: ${themeGet('modalStyles.footer.background')};
  border-top: 1px solid ${themeGet('modalStyles.footer.border')};
  border-radius: 0 0 ${themeGet('radii.radius-2')} ${themeGet('radii.radius-2')};
`;
