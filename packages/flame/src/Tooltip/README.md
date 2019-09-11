# Tooltip

Tooltips are visual helpers when users hover or focus an element. They can also be activated without interaction to give extra information.

**Note that tooltips won't be triggered on touch devices.**

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### Content

The content inside of tooltips should NEVER be crucial information. As their discoverability isn’t that great and you don’t have hovers on touchscreen devices.

### Directions

The tooltip comes in two styles with multiple directions. The direction indicates the position of the content _(e.g. "top" means the content appears above the element)_

## React Component

This component supports the following properties from [Styled System](https://github.com/jxnblk/styled-system/blob/master/docs/api.md):

- zIndex

### Props

| Prop        | Type                                                                                            | Description                               |
| ----------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `children`  | React.ReactNode                                                                                 | The content that will trigger the tooltip |
| `content`   | string                                                                                          | The content to display within the tooltip |
| `placement` | oneOf([`top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `right`]) | Tooltip placement, defaults to `top`      |
| `light`     | boolean                                                                                         | Displays tooltip on a light background    |
| `active`    | boolean                                                                                         | Forces tooltip to always display          |

#### Example

```js
import React from 'react';
import { Tooltip } from '@lightspeed/flame/Tooltip';

const MyComponent = () => (
  <div>
    <Tooltip content="Tooltip">Trigger</Tooltip>
  </div>
);

export default MyComponent;
```
