# Radio

A small wrapper around the radio component to give it the flame styling.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### `<Radio>`

| Prop            | Type                         | Default   | Description                                                    |
| --------------- | ---------------------------- | --------- | -------------------------------------------------------------- |
| `label`         | `string` or `child function` | undefined | Radio's label                                                  |
| `description`   | `string` or `child function` | undefined | Description's text                                             |
| `html property` | `string`                     | undefined | Any extra properties passed will be added to the `<Radio>` tag |

### Example

#### Simple stateless radio input

By default, the radio input is stateless.

```js
import React from 'react';
import { Radio } from '@lightspeed/flame/Radio';

const MyComponent = () => (
  <div>
    <Radio name="feature" value="a" />
    <Radio name="feature" value="b" />
  </div>
);

export default MyComponent;
```

##### Making a controlled radio input

If we need to control or set the checked property in any matter, we need to create
a controlled version of the radio input.

```js
import React from 'react';
import { Radio } from '@lightspeed/flame/Radio';

class StatefulRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioAChecked: false,
      radioBChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value === 'a') {
      this.setState({ radioAChecked: true, radioBChecked: false });
    } else if (event.target.value === 'b') {
      this.setState({ radioAChecked: false, radioBChecked: true });
    }
  }

  render() {
    const { checked } = this.state;
    return (
      <div>
        <Radio name="feature" checked={radioAChecked} onChange={this.handleChange} value="a" />
        <Radio name="feature" checked={radioBChecked} onChange={this.handleChange} value="b" />
      </div>
    );
  }
}

export default StatefulSwitch;
```

#### Extending the base elements

Should the need arise, Flame provides the base 2 components for label and description that you can forward into the Radio.

```jsx
import React from 'react';
import { Radio, RadioLabel, RadioDescription } from '@lightspeed/flame/Radio';

const MyComponent = () => (
  <div>
    <Radio
      id="feature-id"
      name="feature"
      label={labelId => (
        <RadioLabel id={labelId} color="hotpink">
          Custom Label
        </RadioLabel>
      )}
      description={descriptionId => (
        <RadioDescription id={descriptionId} color="hotpink" mt={3}>
          Custom description
        </RadioDescription>
      )}
    />
  </div>
);

export default MyComponent;
```

You can also forward your own custom label or description.

```jsx
import React from 'react';
import { Radio } from '@lightspeed/flame/Radio';
import { SomeCustomComponent } from 'myproject/components/SomeCustomComponent';

const MyComponent = () => (
  <div>
    <Radio
      id="feature-id"
      name="feature"
      label={<div>Custom Label</div>}
      description={<SomeCustomComponent>Custom description</SomeCustomComponent>}
    />
  </div>
);

export default MyComponent;
```

#### `<BaseRadio>`

The primitive element of Radio. No labels or descriptions.

This component has the exact same props as the native HTML radio.

#### `<RadioLabel>`

Specially styled label to be used in conjunction with the BaseRadio component. Use this component to properly align the description.

| Prop            | Type                         | Default   | Description                                                    |
| --------------- | ---------------------------- | --------- | -------------------------------------------------------------- |
| `description`   | `string` or `child function` | undefined | Description's text                                             |
| `html property` | `string`                     | undefined | Any extra properties passed will be added to the `<label>` tag |

##### Example

```jsx
import React from 'react';
import { BaseRadio, RadioLabel } from '@lightspeed/flame/Radio';

const MyComponent = () => (
  <RadioLabel description="This description will be properly aligned">
    <Radio id="feature-id" name="feature" />
    My Label
  </RadioLabel>
);

export default MyComponent;
```
