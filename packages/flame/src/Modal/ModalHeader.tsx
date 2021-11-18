import * as React from 'react';
import { Consumer } from './ModalContext';

const Container: React.FC = props => <div className="vd-dialog-header" {...props} />;
const Content: React.FC = props => <div className="vd-header vd-header--dialog" {...props} />;
const CloseWrap: React.FC = props => <div className="vd-dialog-close" {...props} />;
const CloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => (
  <button className="vd-dialog-close-button" type="button" {...props}>
    <i className="vd-i vd-i-times vd-icon vd-dialog-close-icon" />
    <span className="vd-dialog-close-label">ESC</span>
  </button>
);

const safelyCall = (f: Function) => {
  if (f && typeof f === 'function') {
    f();
  }
};

export type ModalHeaderProps = React.HTMLProps<HTMLDivElement> & {
  /** Sets Close button visibility */
  showCloseButton?: boolean;
  css?: any;
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
            <CloseButton
              tabIndex={0}
              onClick={() => {
                onCloseClicked();
                safelyCall(onCancel);
              }}
              data-testid="modal-close-button"
            />
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
