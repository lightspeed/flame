# Spinner

Spinner component bundles the `progress` icon and makes it spin.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### `<Spinner>`

#### Passed down Props to the spinner Icon

> Color or Size properties can be any Flame token, ex `green-100` (color), `xlarge` (size) or any CSS value.

| Prop         | Type     | Description                                             |
| ------------ | -------- | ------------------------------------------------------- |
| `className`  | `string` | Custom className to add in addition to the default ones |
| `name`       | `string` | Name of the icon                                        |
| `size`       | `string` | Default 1rem, can be set to any custom value            |
| `color`      | `string` | Applied on the svg `fill` property                      |
| `baseColor`  | `string` | Applied on the base paths `fill` property               |
| `baseColor1` | `string` | Applied on the base-1 path `fill` property              |
| `baseColor2` | `string` | Applied on the base-2 path `fill` property              |

#### Example

```js
import React from 'react';
import { Spinner } from '@lightspeed/flame/Spinner';

const MyComponent = () => (
  <div>
    <Spinner size="large" color="maple-200" />
  </div>
);

export default MyComponent;
```
