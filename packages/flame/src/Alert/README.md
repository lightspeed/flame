# Alert

A flame themed Alert Component.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### Props

| Prop                  | Type                                      | Description                                |
| --------------------- | ----------------------------------------- | ------------------------------------------ |
| `type`                | `info`, `warning`, `danger`, or `success` | default is `info`                          |
| `title`               | `string`                                  |                                            |
| `onClose`             | `fn()`                                    | custom `fn(event)` passed the event object |
| `noCloseBtn`          | `boolean`                                 |                                            |
| `children` (required) | `any`                                     | The content of the alert                   |

### Styled System props

Available `styled-system` props:

- [space](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space)

### Example

```js
import React from 'react';
import { Alert } from '@lightspeed/flame/Alert';

const MyComponent = () => (
  <div>
    <Alert type="info" title="My Title">
      Alert content
    </Alert>
    <Alert type="info" title="My Title" mb={2}>
      Alert content with bottom margin
    </Alert>
  </div>
);

export default MyComponent;
```
