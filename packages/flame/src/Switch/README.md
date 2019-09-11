# Switch

Switch component is a visual representation of an input type checkbox.
Wraps around the native checkbox and gives it that flame styling.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

To empower our users to turn settings on or off we offer them the switch. A visual indicator and control that shows our users if it’s enabled or not.

When the switch enables content to be active or disabled, make sure there is a clear state between those two states.

Like stated in the Checkbox component, Switches are only for turning settings on or off, NOT for opting in or out of something.

### React Component

#### Props

| Prop            | Type      | Description                                                        |
| --------------- | --------- | ------------------------------------------------------------------ |
| `checked`       | `boolean` | Use true for checked, false for unchecked                          |
| `html property` | `string`  | Any extra properties passed will be added to the `<input>` element |

#### Example

#### Simple stateless switch

By default, the switch is stateless.

```js
import React from 'react';
import { Switch } from '@lightspeed/flame/Switch';

const MyComponent = () => (
  <div>
    <Switch id="feature-id" name="feature" />
  </div>
);

export default MyComponent;
```

##### Making a controlled the switch

If we need to control or set the checked property in any matter, we need to create
a controlled version of the switch.

```js
import React from 'react';
import { Switch } from '@lightspeed/flame/Switch';

class StatefulSwitch extends React.Component {
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
        <Switch id="feature-id" name="feature" checked={checked} onChange={this.handleChange} />
      </div>
    );
  }
}

export default StatefulSwitch;
```
