# Divider

Divider component is used to separate html sections by creating a dividing line.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

| Prop       | Type            | Description                            | Default    |
| ---------- | --------------- | -------------------------------------- | ---------- |
| `children` | React.ReactNode | The content to display inside the text | -          |
| `variant`  | string          | `dotted` or `solid`                    | `solid`    |
| `color`    | string          | Override the color of the divider      | `gray-100` |
| `pt`       | string          | set the top padding of the divider     | -          |
| `pb`       | string          | set the bottom padding of the divider  | -          |

#### Example

```js
import React from 'react';
import { Divider } from '@lightspeed/flame/Divider';

const MyComponent = () => (
  <div>
    <Divider>My Divider</Divider>
  </div>
);

export default MyComponent;
```
