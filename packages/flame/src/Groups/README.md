# Groups

A utility box of Group components to group together in various styles.

### React Component

#### `<InputGroup>`

If you need to regroup Input components together (namely `Button` and `Input`), you may wrap them with `InputGroup`. This component will essentially attempt to forward values to the underlying children styled-system border and border radius props.

Concretely, this also means that, as long as a component has the appropriate styled-system props, it too can be smooshed within the `InputGroup`.

Please be aware that this functionality will only apply to first level children and will not recursively check for components that have the border or border radius prop.

#### Example

```js
import React from 'react';
import { InputGroup } from '@lightspeed/flame/Group';
import { Button } from '@lightspeed/flame/Button';

const MyComponent = () => (
  <InputGroup>
    <Button>first button</Button>
    <Button>second button</Button>
    <Button>third button</Button>
  </InputGroup>
);

export default MyComponent;
```

#### `<SpacedGroup>`

Automatically wrap children in `Flex` components with even spacing. Use this component for whenever you need to quickly add spacing between components.

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

#### `<InputGroupAddon>`

A pre-styled flex component that was designed to play nicely inside the `InputGroup`.

#### Example

```js
import React from 'react';
import { InputGroup, InputGroupAddon } from '@lightspeed/flame/Group';
import { Button } from '@lightspeed/flame/Button';
import { Input } from '@lightspeed/flame/Input';

const MyComponent = () => (
  <InputGroup>
    <InputGroupAddon>Addon</InputGroupAddon>
    <Input>first button</Input>
    <Button>third button</Button>
  </InputGroup>
);

export default MyComponent;
```
