# Input

The most generic form of them all is the input form. The input enables our users to fill in their data or content within our software. Each input can have an input Label, description, a required mark & a regular label. Input component includes a wide variety of options to quickly create accessible forms.

---

## States

Input comes in more states than any other component, each for its own scenario. In this section, you’ll find a small description and scenario about each one.

| State        | Description                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------- |
| **Normal**   | This is the default state of each form.                                                                  |
| **Entered**  | When the user has given input on the form.                                                               |
| **Focused**  | When the user has the form selected.                                                                     |
| **Typing**   | The user is currently typing inside the form.                                                            |
| **Disabled** | Forms with a disabled state can’t be used.                                                               |
| **Error**    | When the form has invalid content inside, note that each error state needs an error description as well. |

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

| Prop            | Type                         | Description                                                                                                                         |
| --------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `string`                     | Inputs ID, Recommended for accessibility                                                                                            |
| `size`          | `enum[small, medium, large]` | Switch between various sizes of the input                                                                                           |
| `label`         | `string`                     | Input's label above the input                                                                                                       |
| `labelHelper`   | `react.node`                 | Label helper aligned to the right                                                                                                   |
| `description`   | `string`                     | Description above the input                                                                                                         |
| `prefix`        | `react.node`                 | Node inside the input aligned to the left                                                                                           |
| `suffix`        | `react.node`                 | Node inside the input aligned to the right                                                                                          |
| `textHelper`    | `string`                     | Help text below the input                                                                                                           |
| `disabled`      | `boolean`                    | Set the input in a disabled state                                                                                                   |
| `status`        | `object`                     | Sets the status of the input `{ type: 'valid\|warning\|error', message: String\|Element }`. The message will replace the textHelper |
| `ref`           | `function`                   | A function that takes a DOM node as the argument and can return anything                                                            |
| `html property` | `string`                     | Any extra properties passed will be added to the `<input>` tag                                                                      |
| `className`     | `string`                     | Passed to the `<input />` tag                                                                                                       |

#### Example

```js
import React from 'react';
import { Input } from '@lightspeed/flame/Input';

const handleChange = event => {
  console.log(event.target.value);
};

const MyComponent = () => (
  <div>
    <Input
      id="username"
      name="username"
      placeholder="Username"
      data-attribute="custom attribute"
      onChange={handleChange}
    />
  </div>
);

export default MyComponent;
```
