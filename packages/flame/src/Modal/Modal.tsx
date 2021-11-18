import * as React from 'react';
import ReactModal from 'react-modal';
import { Global, keyframes, ClassNames } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ModalSize } from '@lightspeed/design-system-react';
import { themeGet } from '@styled-system/theme-get';
import { Provider } from './ModalContext';

ReactModal.setAppElement('body');

const asideShowKeyframe = keyframes`
 from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const asideHideKeyframe = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
`;

export type ModalProps = {
  /** Sets the open state of Modal */
  size?: ModalSize;
  /** Sets the open state of Modal */
  isOpen?: boolean;
  /** Sets whether ESC key closes Modal */
  closeOnEsc?: boolean;
  /** Sets whether clicking Modal overlay closes Modal */
  shouldCloseOnOverlayClick?: boolean;
  /** Sets Modal to a side Modal  */
  aside?: boolean;
  /** Sets title for MOdal */
  title?: string;
  /** Sets aria-label for Modal */
  contentLabel?: string;
  /** CSS class name */
  className?: string;
  theme?: any;
  // Using the same typing as React Modal since we are proxying those events
  /** Callback after Modal opens */
  onAfterOpen?(): void;
  /** For closing Modal from Modal's own content */
  onRequestClose?(event: MouseEvent | KeyboardEvent): void;
};
export type ModalState = {
  isOpen: boolean;
};

/**
 * An overlain window, interrupting user interactions for just a short while.
 */
class BaseModal extends React.Component<ModalProps, ModalState> {
  // eslint-disable-next-line react/sort-comp
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  static getDerivedStateFromProps(nextProps: ModalProps, prevState: ModalState) {
    if (nextProps.isOpen !== prevState.isOpen) {
      return { isOpen: nextProps.isOpen };
    }

    return null;
  }

  handleClose(e: MouseEvent | KeyboardEvent) {
    const { onRequestClose } = this.props;

    if (onRequestClose && typeof onRequestClose === 'function') onRequestClose(e);

    this.setState(() => ({ isOpen: false }));
  }

  handleOpen() {
    const { onAfterOpen } = this.props;

    if (onAfterOpen && typeof onAfterOpen === 'function') onAfterOpen();
  }

  render() {
    const {
      children,
      size,
      className,
      shouldCloseOnOverlayClick,
      closeOnEsc,
      aside,
      contentLabel,
      theme,
      ...rest
    } = this.props;

    const animationTransitionTime = themeGet('transition.transition-duration-base', '0')({ theme });
    const closeTimeoutMS = parseInt(animationTransitionTime.replace(/\D/g, ''), 10);

    return (
      <ClassNames>
        {({ css, cx }) => {
          const setAsideAnimation = (props: ModalProps) => css`
            &.ReactModal__Content--after-open {
              animation: ${asideShowKeyframe}
                ${themeGet('transition.transition-duration-base')(props)} cubic-bezier(0, 0, 0.2, 1)
                forwards;
            }
            &.ReactModal__Content--before-close {
              animation: ${asideHideKeyframe}
                ${themeGet('transition.transition-duration-base')(props)}
                cubic-bezier(0.4, 0, 0.6, 1) forwards;
            }
          `;

          const crModalOverlay = () => css`
            z-index: 10000;
          `;

          const crModalAside = (props: ModalProps) => css`
            min-height: 100%;
            min-width: 40%;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-right: 0;

            ${setAsideAnimation(props)};
          `;

          const crModalOverlayAside = css`
            justify-content: flex-end;
          `;

          return (
            <>
              <Global
                styles={{
                  '.ReactModal__Body--open': {
                    overflow: 'hidden',
                  },
                }}
              />

              <Provider onCancel={this.handleClose}>
                <ReactModal
                  isOpen={this.state.isOpen}
                  className={cx(
                    `vd-modal-container vd-modal--size-${size} vd-modal--with-close-button`,
                    aside && crModalAside({ theme }),
                    className,
                  )}
                  overlayClassName={cx(
                    'vd-overlay vd-overlay--visible vd-dialog',
                    crModalOverlay(),
                    aside && crModalOverlayAside,
                  )}
                  onAfterOpen={this.handleOpen}
                  // @ts-ignore
                  onRequestClose={this.handleClose}
                  closeTimeoutMS={closeTimeoutMS}
                  shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                  shouldCloseOnEsc={closeOnEsc}
                  contentLabel={contentLabel}
                  {...rest}
                >
                  <div className="vd-modal-inner-container">{children}</div>
                </ReactModal>
              </Provider>
            </>
          );
        }}
      </ClassNames>
    );
  }
}

(BaseModal as any).defaultProps = {
  size: 'medium',
  onAfterOpen: null,
  onRequestClose: null,
  closeOnEsc: true,
  shouldCloseOnOverlayClick: true,
  aside: false,
  contentLabel: 'Modal',
};

export const Modal = withTheme(BaseModal);
export type ModalSlideInProps = ModalProps;
export type ModalSlideInState = ModalState;
export const ModalSlideIn = (props: ModalSlideInProps) => <Modal {...props} aside />;
