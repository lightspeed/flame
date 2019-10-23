🚨 **Group will be deprecated in the next major version of Flame, see how each [component](#react-component) can be replaced** 🚨

# Group

Group component bundles other components.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### `<Group>`

🚨 **Group will be removed in the next major version of Flame. Please use [SpacedGroup](https://github.com/lightspeed/flame/tree/master/packages/flame/src/SpacedGroup) or [InputGroup](https://github.com/lightspeed/flame/tree/master/packages/flame/src/InputGroup) instead.** 🚨

| Prop         | Type                                | Description                                                |
| ------------ | ----------------------------------- | ---------------------------------------------------------- |
| `className`  | `string`                            | Custom className to add in addition to the default ones    |
| `children *` | `React.node`                        | The content of the group                                   |
| `type`       | `oneOf(['horizontal', 'vertical'])` | Group type (default: 'horizontal')                         |
| `noSpacing`  | `boolean`                           | Removes the default spacing between items (default: false) |
| `block`      | `boolean`                           | Children scales to parent width (default: false)           |
| `inputBlock` | `boolean`                           | Children inputs scales to parent width (default: false)    |

#### `<GroupAddon>`

🚨 **GroupAddon will be removed in the next major version of Flame. Please use [InputGroup and InputGroupAddon](https://github.com/lightspeed/flame/tree/master/packages/flame/src/InputGroup) instead.** 🚨

| Prop            | Type                                 | Description                                                   |
| --------------- | ------------------------------------ | ------------------------------------------------------------- |
| `children *`    | `React.node`                         | The content of the group addon                                |
| `className`     | `string`                             | Custom className to add in addition to the default ones       |
| `align`         | `oneOf(['left', 'center', 'right'])` | Aligns the text rendered element (default: left)              |
| `verticalAlign` | `oneOf(['top', 'middle', 'bottom'])` | Vertically aligns the text rendered element (default: middle) |

#### `<GroupItem>`

🚨 **GroupItem will be removed in the next major version of Flame. Please use [Flex and Box](https://github.com/lightspeed/flame/tree/master/packages/flame/src/Core) components for wrapping things properly.** 🚨

| Prop         | Type         | Description                                             |
| ------------ | ------------ | ------------------------------------------------------- |
| `children *` | `React.node` | The content of the group addon                          |
| `className`  | `string`     | Custom className to add in addition to the default ones |
| `flex`       | `string`     | Styled-system enabled flex property                     |

#### Example

```js
import React from 'react';
import { Group, GroupAddon, GroupItem } from '@lightspeed/flame/Group';
import { Button } from '@lightspeed/flame/Button';

const MyComponent = () => (
  <div>
    <Group>
      <Button>first button</Button>
      <GroupItem flex="1">
        <Button>second button</Button>
      </GroupItem>
      <Button>third button</Button>
      <GroupAddon>addon</GroupAddon>
    </Group>
  </div>
);

export default MyComponent;
```
