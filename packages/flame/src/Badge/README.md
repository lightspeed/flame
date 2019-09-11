# Badge

Our basic badge component.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Components

#### `<Badge>`

| Prop       | Type                                                                     | Description                                                       |
| ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `children` | React.ReactNode                                                          | The content to display inside the button                          |
| `type`     | `'default', 'info', 'success', 'info', 'important', 'warning', 'danger'` | Style of badge                                                    |
| `size`     | `'small', 'medium'`                                                      | Change size of badge                                              |
| `bg`       | string                                                                   | Custom background color. Accepts any valid CSS color, i.e: `#000` |
| `color`    | string                                                                   | Custom text color. Accepts any valid CSS color, i.e: `#fff`       |

#### `<PillBadge>`

_extends `<Badge>`_

#### Example

```js
import React from 'react';
import { Badge, PillBadge } from '@lightspeed/flame/Badge';

const MyComponent = () => (
  <div>
    <Badge>My Badge</Badge>
    <PillBadge>My PillBadge</PillBadge>
  </div>
);

export default MyComponent;
```
