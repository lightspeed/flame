# FormField

A set of components used for consistency on form elements. Use directly only if you are rebuilding components with their underlying base.

## Components

### `<Label>`

Takes care of the needed styling and positioning of the input's label and optional description field.

#### Props

| Prop                | Type                                        | Description                                             |
| ------------------- | ------------------------------------------- | ------------------------------------------------------- |
| `children`          | `React.node`                                | The content of the label                                |
| `description?`      | `React.node`                                | The content of the description                          |
| `disabled?`         | `boolean`                                   | Children inputs scales to parent width (default: false) |
| `descriptionProps?` | `{ status: 'error' | 'valid' | 'warning' }` | Pass the status in a object to the description          |

#### Example

```js
import React from 'react';
import { Label } from '@lightspeed/flame/FormField';
import { Input } from '@lightspeed/flame/Input';

const MyComponent = () => (
  <Label htmlFor="myinput" description="Some description">My Label</Label>
  <Input id="myinput" placeholder="My input placeholder" />
);

export default MyComponent;
```

### `<FormHelper>`

Used to display helper text or status messages. Use it in conjunction when you need to display error messages. You'll need to manually set the status of the component, since it's just a pre-styled text component.

#### Props

| Prop       | Type                            | Description                    |
| ---------- | ------------------------------- | ------------------------------ |
| `children` | `React.node`                    | The content of the helper text |
| `status?`  | `'error' | 'valid' | 'warning'` | Status of the form helper text |

#### Example

```js
import React from 'react';
import { Label, FormHelper } from '@lightspeed/flame/FormField';
import { Input } from '@lightspeed/flame/Input';

const MyComponent = () => (
  <Label htmlFor="myinput" description="Some description">My Label</Label>
  // Input still has a status prop
  <Input id="myinput" placeholder="My input placeholder" status="error" />
  <FormHelper status="error">
    This is an error message
  </FormHelper>
);

export default MyComponent;
```
