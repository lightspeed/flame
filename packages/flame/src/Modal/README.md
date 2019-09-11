# Modal

Flame component for displaying Modals.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### `<Modal>`

| Prop                        | Type     | Description                                                                   | Default |
| --------------------------- | -------- | ----------------------------------------------------------------------------- | ------- |
| `isOpen`                    | boolean  | Used to show the modal                                                        | N/A     |
| `onAfterOpen`               | function | Callback invoked after the modal is shown                                     | null    |
| `onRequestClose`            | function | Callback invoked when the modal is closed                                     | null    |
| `closeOnEsc`                | boolean  | Determines whether the user can use the ESC key to dismiss the modal.         | true    |
| `shouldCloseOnOverlayClick` | boolean  | Determines whether the user can dismiss the modal by clicking on the overlay. | true    |
| `aside`                     | boolean  | When specified indicates that the modal should be displayed as an aside.      | false   |

#### `<ModalHeader>`

| Prop              | Type            | Description                                                       | Default |
| ----------------- | --------------- | ----------------------------------------------------------------- | ------- |
| `children`        | React.ReactNode | The content to display inside the header                          | N/A     |
| `onCloseClicked`  | function        | Callback invoked when the close button is clicked                 | null    |
| `showCloseButton` | boolean         | When specified indicates that a close button should be displayed. | true    |

#### `<ModalBody>`

| Prop       | Type            | Description                                                        | Default |
| ---------- | --------------- | ------------------------------------------------------------------ | ------- |
| `children` | React.ReactNode | The content to display inside the modal body                       | N/A     |
| `scroll`   | boolean         | When specified indicates tha the modal body content is scrollable. | false   |

#### `<ModalFooter>`

| Prop       | Type            | Description                                    | Default |
| ---------- | --------------- | ---------------------------------------------- | ------- |
| `children` | React.ReactNode | The content to display inside the modal footer | N/A     |

#### Example

```js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@lightspeed/flame/Modal';
import { Button } from '@lightspeed/flame/Button';

class MyModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
        >
          <ModalHeader onCloseClicked={this.closeModal}>My Modal</ModalHeader>

          <ModalBody>This is my modal. There are many modals like it but this one is mine.</ModalBody>

          <ModalFooter>
            <Button primary onClick={doSomething}>
              Fly, little Modal, FLY!
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
    );
  }
}

export default MyModal;
```
