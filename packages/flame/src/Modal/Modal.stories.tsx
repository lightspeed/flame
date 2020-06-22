import * as React from 'react';

import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

import { Button } from '../Button';

type Props = {
  header?: boolean;
  footer?: boolean;
  options?: boolean;
};

type State = {
  defaultModalIsOpen?: boolean;
  minimalModalIsOpen?: boolean;
  withCloseModalIsOpen?: boolean;
  noFooterIsOpen?: boolean;
  asideIsOpen?: boolean;
  overlayClickIsOpen?: boolean;
  scrollableIsOpen?: boolean;
  dismissWithEscIsOpen?: boolean;
};

class ModalStoryHelper extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      defaultModalIsOpen: false,
      minimalModalIsOpen: false,
      withCloseModalIsOpen: false,
      noFooterIsOpen: false,
      asideIsOpen: false,
      overlayClickIsOpen: false,
      scrollableIsOpen: false,
      dismissWithEscIsOpen: false,
    };

    this.openDefaultModal = this.openDefaultModal.bind(this);
    this.closeDefaultModal = this.closeDefaultModal.bind(this);
    this.openMinimalModal = this.openMinimalModal.bind(this);
    this.closeMinimalModal = this.closeMinimalModal.bind(this);
    this.openWithoutCloseModal = this.openWithoutCloseModal.bind(this);
    this.closeWithoutCloseModal = this.closeWithoutCloseModal.bind(this);
    this.openNoFooter = this.openNoFooter.bind(this);
    this.closeNoFooter = this.closeNoFooter.bind(this);
    this.openAside = this.openAside.bind(this);
    this.closeAside = this.closeAside.bind(this);
    this.openOverlayClick = this.openOverlayClick.bind(this);
    this.closeOverlayClick = this.closeOverlayClick.bind(this);
    this.openScrollable = this.openScrollable.bind(this);
    this.closeScrollable = this.closeScrollable.bind(this);
    this.openDismissWithEsc = this.openDismissWithEsc.bind(this);
    this.closeDismissWithEsc = this.closeDismissWithEsc.bind(this);
  }

  openDefaultModal() {
    this.setState({ defaultModalIsOpen: true });
  }

  closeDefaultModal() {
    this.setState({ defaultModalIsOpen: false });
  }

  openMinimalModal() {
    this.setState({ minimalModalIsOpen: true });
  }

  closeMinimalModal() {
    this.setState({ minimalModalIsOpen: false });
  }

  openWithoutCloseModal() {
    this.setState({ withCloseModalIsOpen: true });
  }

  closeWithoutCloseModal() {
    this.setState({ withCloseModalIsOpen: false });
  }

  openNoFooter() {
    this.setState({ noFooterIsOpen: true });
  }

  closeNoFooter() {
    this.setState({ noFooterIsOpen: false });
  }

  openAside() {
    this.setState({ asideIsOpen: true });
  }

  closeAside() {
    this.setState({ asideIsOpen: false });
  }

  openOverlayClick() {
    this.setState({ overlayClickIsOpen: true });
  }

  closeOverlayClick() {
    this.setState({ overlayClickIsOpen: false });
  }

  openDismissWithEsc() {
    this.setState({ dismissWithEscIsOpen: true });
  }

  closeDismissWithEsc() {
    this.setState({ dismissWithEscIsOpen: false });
  }

  openScrollable() {
    this.setState({ scrollableIsOpen: true });
  }

  closeScrollable() {
    this.setState({ scrollableIsOpen: false });
  }

  renderHeaderStory() {
    return (
      <div>
        <Button onClick={this.openDefaultModal}>With Title</Button>
        <Button onClick={this.openMinimalModal}>No Title</Button>
        <Button onClick={this.openWithoutCloseModal}>With title and no Close</Button>

        <Modal isOpen={this.state.defaultModalIsOpen} onRequestClose={this.closeDefaultModal}>
          <ModalHeader>Default Modal</ModalHeader>

          <ModalBody>
            A basic type of modal with a button aligned on the right. The header and footer are
            customizable.
          </ModalBody>

          <ModalFooter>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" fill>
                Button
              </Button>
            </div>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.minimalModalIsOpen} onRequestClose={this.closeMinimalModal}>
          <ModalBody>A simple modal without a title will be rendered this way.</ModalBody>

          <ModalFooter>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={this.closeMinimalModal}>Cancel</Button>
              <span className="cr-ml-2">
                <Button variant="primary" fill>
                  Button
                </Button>
              </span>
            </div>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.withCloseModalIsOpen}
          onRequestClose={this.closeWithoutCloseModal}
        >
          <ModalHeader showCloseButton={false}>Title</ModalHeader>

          <ModalBody>
            A simple modal with a title and without a close button will be rendered this way.
          </ModalBody>

          <ModalFooter>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={this.closeMinimalModal}>Cancel</Button>
              <span className="cr-ml-2">
                <Button variant="primary" fill>
                  Button
                </Button>
              </span>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  renderFooterStory() {
    return (
      <div>
        <Button onClick={this.openNoFooter}>Without Footer</Button>

        <Modal isOpen={this.state.noFooterIsOpen} onRequestClose={this.closeNoFooter}>
          <ModalHeader>No Footer</ModalHeader>

          <ModalBody>This is what happens when no footers are provided</ModalBody>
        </Modal>
      </div>
    );
  }

  renderOptionsStory() {
    return (
      <div>
        <Button onClick={this.openAside}>Aside</Button>

        <Modal isOpen={this.state.asideIsOpen} onRequestClose={this.closeAside} aside>
          <ModalHeader>Aside Modal</ModalHeader>

          <ModalBody>A modal with the aside option set.</ModalBody>

          <ModalFooter>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" fill key="primaryButton">
                Button
              </Button>
            </div>
          </ModalFooter>
        </Modal>

        <Button onClick={this.openOverlayClick}>Overlay Click</Button>

        <Modal
          isOpen={this.state.overlayClickIsOpen}
          onRequestClose={this.closeOverlayClick}
          shouldCloseOnOverlayClick
          closeOnEsc={false}
        >
          <ModalBody>This modal can be closed by clicking anywhere on the overlay.</ModalBody>
        </Modal>

        <Button onClick={this.openDismissWithEsc}>Closes on the ESC key</Button>

        <Modal
          isOpen={this.state.dismissWithEscIsOpen}
          onRequestClose={this.closeDismissWithEsc}
          closeOnEsc
          shouldCloseOnOverlayClick={false}
        >
          <ModalBody>This modal can be closed by pressing the ESC key.</ModalBody>
        </Modal>

        <Button onClick={this.openScrollable}>Scrollable</Button>

        <Modal isOpen={this.state.scrollableIsOpen} onRequestClose={this.closeScrollable}>
          <ModalHeader>This modal is scrollable</ModalHeader>

          <ModalBody scroll>
            <div>1</div>
          </ModalBody>
        </Modal>
      </div>
    );
  }

  render() {
    const { header, footer, options } = this.props;

    return (
      <div>
        {header && this.renderHeaderStory()}
        {footer && this.renderFooterStory()}
        {options && this.renderOptionsStory()}
      </div>
    );
  }
}

export default {
  title: 'Components|Modal',
  component: Modal,
  subcomponents: {
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
};

export const header = () => <ModalStoryHelper header />;
export const footer = () => <ModalStoryHelper footer />;
export const options = () => <ModalStoryHelper options />;
