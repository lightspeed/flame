import * as React from 'react';
import styled from '@emotion/styled';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../Modal';
import { Button } from '../Button';
import { Box, Flex } from '../Core';

type OptionalProps = {
  /** Variant of the Dialog's CTA */
  type: 'default' | 'primary' | 'secondary' | 'danger';
  /** Sets the Dialog's title */
  title: string;
  /** Sets overflowY:scroll to the Dialog's body */
  scroll: boolean;
  /** Sets the visibility of the Dialog */
  isOpen: boolean;
  /** Sets the loading state of Dialog's Buttons */
  isLoading: boolean;
  /** Text on Cancel Button */
  cancelText: string;
  /** Text on Confirm Button */
  confirmText: string;
  /** RestProps for Cancel Button */
  cancelRest: any;
  /** RestProps for Confirm Button */
  confirmRest: any;
  /** Sets the Dialog Close button visibility */
  showCloseButton: boolean;
};

const StyledModal = styled(Modal)`
  max-width: 500px;
`;

export type DialogProps = Partial<OptionalProps> & {
  /** Sets Dialog's content */
  message: React.ReactNode;
  /** Event handler for clicking Dialog's Cancel Button */
  onCancel?(event: MouseEvent | KeyboardEvent): void;
  /** Event handler for clicking Dialog's Confirm Button */
  onConfirm: (callback: Function) => void;
};
const Dialog: React.FC<DialogProps> = props => {
  const {
    type,
    title,
    message,
    isOpen,
    isLoading,
    onCancel,
    onConfirm,
    cancelText,
    confirmText,
    cancelRest,
    confirmRest,
    showCloseButton,
    scroll,
    ...rest
  } = props;

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onCancel}
      shouldCloseOnOverlayClick={!isLoading}
      {...rest}
    >
      <ModalHeader showCloseButton={showCloseButton}>{title}</ModalHeader>
      <ModalBody scroll={scroll}>{message}</ModalBody>
      <ModalFooter>
        <Flex justifyContent="flex-end">
          <Box>
            <Button {...cancelRest} onClick={onCancel} disabled={isLoading}>
              {cancelText}
            </Button>
          </Box>
          <Box ml={2}>
            <Button fill {...confirmRest} onClick={onConfirm} loading={isLoading} variant={type}>
              {confirmText}
            </Button>
          </Box>
        </Flex>
      </ModalFooter>
    </StyledModal>
  );
};

Dialog.defaultProps = {
  title: '',
  type: 'default',
  cancelText: 'Cancel',
  confirmText: 'Ok',
  isLoading: false,
  scroll: false,
};

export { Dialog };
