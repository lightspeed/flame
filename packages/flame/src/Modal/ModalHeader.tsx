import * as React from 'react';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { Consumer } from './ModalContext';
import { IconClose } from '../Icon/Close';

const Container = styled('div')`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  border-bottom: 1px solid ${themeGet('modalStyles.header.border')};
  z-index: 1;
`;

const Content = styled('div')`
  flex: 1;
  color: ${themeGet('modalStyles.header.color')};
  font-size: ${themeGet('fontSizes.text-l')};
  font-weight: ${themeGet('fontWeights.bold')};
  margin-left: ${themeGet('space.4')};
`;

const CloseWrap = styled('div')`
  margin: ${themeGet('space.3')};
  height: ${themeGet('fontSizes.text')};
`;

const Button = styled('button')`
  appearance: none;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  height: 1rem;

  &:focus {
    outline: none;
  }

  svg {
    vertical-align: baseline;
  }
`;

const safelyCall = (f: Function) => {
  if (f && typeof f === 'function') {
    f();
  }
};

export type ModalHeaderProps = React.HTMLProps<HTMLDivElement> & {
  /** Sets Close button visibility */
  showCloseButton?: boolean;
  css?: any;
  children?: React.ReactNode;
  /** Callback when Close button is clicked */
  onCloseClicked?: () => void;
};
/**
 * Header of the Modal
 */
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  showCloseButton,
  onCloseClicked,
  ...restProps
}) => (
  <Consumer>
    {({ onCancel }) => (
      <Container {...restProps}>
        <Content>{children}</Content>
        <CloseWrap>
          {showCloseButton && (
            <Button
              type="button"
              tabIndex={0}
              onClick={() => {
                onCloseClicked();
                safelyCall(onCancel);
              }}
              data-testid="modal-close-button"
            >
              <IconClose baseColor="rgba(12, 13, 13, 0.1)" detailsColor="rgba(12, 13, 13, 0.5)" />
            </Button>
          )}
        </CloseWrap>
      </Container>
    )}
  </Consumer>
);

ModalHeader.defaultProps = {
  showCloseButton: true,
  onCloseClicked: () => {},
};
