# Dialog

Reusable and structured dialog box.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

| Prop          | Type   | Default    | Required | Description                                                                                         |
| ------------- | ------ | ---------- | -------- | --------------------------------------------------------------------------------------------------- |
| `type`        | string | `default`  | no       | One of `default`, `primary`, `secondary`, `danger`                                                  |
| `message`     | node   |            | yes      | `node` rendered in the `ModalBody` as the message, `required`                                       |
| `title`       | string |            | no       | String shown in the `ModalHeader` as title                                                          |
| `isOpen`      | bool   | `false`    | no       | State to determine if `<Dialog>` should be displayed                                                |
| `isLoading`   | bool   | `false`    | no       | State to determine if the actions buttons should be disabled while some promise is getting resolved |
| `scroll`      | bool   | `false`    | no       | State to determine if the body of the modal should be scrollable or not                             |
| `onCancel`    | func   |            | yes      | Function called when the `cancel` button is clicked, `required`                                     |
| `onConfirm`   | func   |            | yes      | Function called when the `confirm` button is clicked, `required`                                    |
| `cancelText`  | string | `'Cancel'` | no       | String shown on the `cancel` button                                                                 |
| `confirmText` | string | `'Ok'`     | no       | String shown on the `confirm` button                                                                |
| `cancelRest`  | object |            | no       | Shape with any object pass to the `cancel` button, e.g(`{data-test: 'dialog-cancel-button'}`)       |
| `confirmRest` | object |            | no       | Shape with any object pass to the `confirm` button, e.g(`{data-test: 'dialog-cancel-button'}`)      |

#### Example

```js
import React from 'react';
import { Dialog } from '@lightspeed/flame/Dialog';

const MyComponent = () => (
  <Dialog
    title="Title"
    message="Messsage"
    isOpen={this.state.isOpen}
    isLoading={this.state.isLoading}
    onCancel={this.onCancel}
    onConfirm={this.onConfirm}
    cancelText="No"
    confirmText="Yes"
    type="danger"
  />
);

export default MyComponent;
```
