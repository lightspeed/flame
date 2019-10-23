# SpacedGroup

Automatically wrap children in `Flex` components with even spacing. Use this component for whenever you need to quickly add spacing between components.

## Components

### `<SpacedGroup>`

`SpacedGroup` takes the exact same props as the `Flex` component.

#### Example

```js
import React from 'react';
import { SpacedGroup } from '@lightspeed/flame/Group';
import { Button } from '@lightspeed/flame/Button';

const MyComponent = () => (
  <SpacedGroup>
    <Button>first button</Button>
    <Button>second button</Button>
    <Button>third button</Button>
  </SpacedGroup>
);

export default MyComponent;
```
