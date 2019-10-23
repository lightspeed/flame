# InputGroup

Group input components together in various styles.

## Components

### `<InputGroup>`

If you need to regroup Input components together (namely `Button` and `Input`), you may wrap them with `InputGroup`. This component will essentially attempt to forward values to the underlying children Styled System border and border radius props.

Concretely, this also means that, as long as a component has the appropriate Styled System props, it too can be smooshed within the `InputGroup`.

Please be aware that this functionality will only apply to first level children and will not recursively check for components that have the border or border radius prop.

#### Example

```js
import React from 'react';
import { InputGroup } from '@lightspeed/flame/InputGroup';
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

### `<InputGroupAddon>`

A pre-styled flex component that was designed to play nicely inside the `InputGroup`.

#### Example

```js
import React from 'react';
import { InputGroup, InputGroupAddon } from '@lightspeed/flame/InputGroup';
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
