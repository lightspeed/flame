# Alert

A flame themed Alert Component.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### Props

| Prop                  | Type                                      | Description                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                | `info`, `warning`, `danger`, or `success` | default is `info`                                                                                                                                                                                           |
| `icon`                | `React.ReactNode`                         | An [icon](https://lightspeed-flame.netlify.com/?path=/story/icon--story) to place inside of the alert. Will default to a preset icon if none is passed. This prop will be removed in the next major version |
| `title`               | `string`                                  |                                                                                                                                                                                                             |
| `onClose`             | `fn()`                                    | custom `fn(event)` passed the event object                                                                                                                                                                  |
| `noCloseBtn`          | `boolean`                                 |                                                                                                                                                                                                             |
| `children` (required) | `any`                                     | The content of the alert                                                                                                                                                                                    |

### Styled System props

Available `styled-system` props:

- [space](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space)

### Example

```js
import React from 'react';
import { Alert } from '@lightspeed/flame/Alert';
import { IconWarning } from '@lightspeed/flame/Icon/Warning';

const MyComponent = () => (
  <div>
    <Alert type="info" title="My Title">
      Alert content
    </Alert>
    <Alert type="info" title="My Title" mb={2}>
      Alert content with bottom margin
    </Alert>
    <Alert type="warning" title="My Title" mb={2}>
      Alert content with icon
    </Alert>
  </div>
);

export default MyComponent;
```

## AlertInCard

A specially stylized Alert meant to be used within the `<Card />` component.

### Props

| Prop                  | Type                                      | Description                                |
| --------------------- | ----------------------------------------- | ------------------------------------------ |
| `type`                | `info`, `warning`, `danger`, or `success` | default is `info`                          |
| `onClose`             | `fn()`                                    | custom `fn(event)` passed the event object |
| `noCloseBtn`          | `boolean`                                 |                                            |
| `children` (required) | `any`                                     | The content of the alert                   |

### Example

```js
import React from 'react';
import { AlertInCard } from '@lightspeed/flame/Alert';

const MyComponent = () => (
  <Card>
    <AlertInCard type="info">
      Alert content
    </Alert>
  </Card>
);

export default MyComponent;
```
