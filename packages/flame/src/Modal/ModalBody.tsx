import * as React from 'react';
import { ModalContent } from '@lightspeed/design-system-react';

export type ModalBodyProps = {
  /** Sets overflowY: scroll on Modal's content  */
  scroll?: boolean;
};
/**
 * Body of the Modal
 */
export const ModalBody: React.FC<ModalBodyProps> = ({ scroll, ...restProps }) => (
  <ModalContent scrollable={scroll} {...restProps} />
);

ModalBody.defaultProps = {
  scroll: false,
};
