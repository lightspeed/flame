# Checkbox

A flame themed and augmented Checkbox component.
Wraps around the native checkbox and gives it that flame styling, as well as an indeterminate state.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

The use case of a checkbox is often confused with the one of a switch. The primary use case for a checkbox is when our user can select multiple values or to opt-in on something. The best and easiest way to remember if you should use a checkbox or a switch is by checking if the function is answering:
Yes/No --> `<Checkbox>`
On/Off --> `<Switch>`.

**Never use a checkbox to turn something On/Off**

### React Component

#### `<Checkbox>`

| Prop            | Type                         | Description                                                                               |
| --------------- | ---------------------------- | ----------------------------------------------------------------------------------------- |
| `label`         | `string` or `child function` | Checkbox's label. Passing a child function will render that child instead.                |
| `description`   | `string` or `child function` | Description's text. Passing a child function will render that child instead.              |
| `checked`       | `boolean`                    | Use true for checked, false for unchecked                                                 |
| `indeterminate` | `boolean`                    | Set to true true for indeterminate style                                                  |
| `html property` | `string`                     | Any extra properties passed will be added to the underlying `<input type="checkbox">` tag |

### Example

#### Simple stateless Checkbox

By default, the switch is stateless.

```jsx
import React from 'react';
import { Checkbox } from '@lightspeed/flame/Checkbox';

const MyComponent = () => (
  <div>
    <Checkbox id="feature-id" name="feature" />
  </div>
);

export default MyComponent;
```

#### Making a controlled Checkbox

If we need to control or set the checked property in any matter, we need to create
a controlled version of the checkbox.

```jsx
import React from 'react';
import { Checkbox } from '@lightspeed/flame/Checkbox';

class StatefulCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    const { checked } = this.state;
    return (
      <div>
        <Checkbox id="feature-id" name="feature" checked={checked} onChange={this.handleChange} />
      </div>
    );
  }
}

export default StatefulSwitch;
```

#### Extending the base elements

Should the need arise, Flame provides the base 2 components for label's and description that you can forward into the Checkbox.

```jsx
import React from 'react';
import { Checkbox, CheckboxLabel, CheckboxDescription } from '@lightspeed/flame/Checkbox';

const MyComponent = () => (
  <div>
    <Checkbox
      id="feature-id"
      name="feature"
      label={labelId => (
        <CheckboxLabel id={labelId} color="hotpink">
          Custom Label
        </CheckboxLabel>
      )}
      description={descriptionId => (
        <CheckboxDescription id={descriptionId} color="hotpink" mt={3}>
          Custom description
        </CheckboxDescription>
      )}
    />
  </div>
);

export default MyComponent;
```

You can forward your own custom label or description.

```jsx
import React from 'react';
import { Checkbox } from '@lightspeed/flame/Checkbox';
import { SomeCustomComponent } from 'myproject/components/SomeCustomComponent';

const MyComponent = () => (
  <div>
    <Checkbox
      id="feature-id"
      name="feature"
      label={<div>Custom Label</div>}
      description={<SomeCustomComponent>Custom description</SomeCustomComponent>}
    />
  </div>
);

export default MyComponent;
```

#### `<BaseCheckbox>`

The primitive element of Checkbox. No labels or descriptions.

This component has the exact same props as the native HTML checkbox.

#### `<CheckboxLabel>`

Specially styled label to be used in conjunction with the BaseCheckbox component. Use this component to properly align the description.

| Prop            | Type                         | Default   | Description                                                                                   |
| --------------- | ---------------------------- | --------- | --------------------------------------------------------------------------------------------- |
| `description`   | `string` or `child function` | undefined | Description's text                                                                            |
| `html property` | `string`                     | undefined | Any extra properties passed will be added to the `<label>` tag, for example `id`, `for`, etc. |

##### Example

```jsx
import React from 'react';
import { BaseCheckbox, CheckboxLabel } from '@lightspeed/flame/Checkbox';

const MyComponent = () => (
  <CheckboxLabel description="This description will be properly aligned">
    <Checkbox id="feature-id" name="feature" />
    My Label
  </CheckboxLabel>
);

export default MyComponent;
```
