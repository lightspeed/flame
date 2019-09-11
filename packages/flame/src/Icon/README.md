# Icon

A set of highly customizable Icons.

## Adding a new Icon

Adding new icons is done automatically when a new svg file is detected within `svg/Icons` and when `yarn bootstrap` is executed.

For detailled information and guidelines on how to add a new icon please consult the following readme file: [How to add Icons](https://github.com/lightspeed/flame/blob/master/packages/flame/HOW_TO_ADD_ICONS.md)

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

> Color properties can be any Flame color token, ex `green-100` or any CSS value.

| Prop            | Type     | Description                                                   |
| --------------- | -------- | ------------------------------------------------------------- |
| `name`          | `string` | Icon name. Case sensitive                                     |
| `size`          | `string` | Any custom value (e.g: 1rem, 32px)                            |
| `color`         | `string` | Globally fill the icon with a color                           |
| `baseColor`     | `string` | Primary colour of the base shape                              |
| `baseColor1`    | `string` | Set the secondary base shape of the icon to a different color |
| `baseColor2`    | `string` | Set the secondary base shape of the icon to a different color |
| `detailsColor`  | `string` | Primary path fill color                                       |
| `detailsColor1` | `string` | Secondary path fill color                                     |
| `detailsColor2` | `string` | Tertiary path fill color                                      |

#### Example

If using all Icons:

```js
import React from 'react';
import { Icon } from '@lightspeed/flame/Icon';

const MyComponent = () => (
  <div>
    <Icon name="add" />
    <Icon name="checkmark" />
  </div>
);

export default MyComponent;
```

Or if using some Icons, use import them directly instead of the `<Icon>` component which will include **all** components in your app bundle:

```js
import React from 'react';
import { IconAdd } from '@lightspeed/flame/Icon/Add';
import { IconCheckmark } from '@lightspeed/flame/Icon/Checkmark';

const MyComponent = () => (
  <div>
    <Add />
    <Checkmark />
  </div>
);

export default MyComponent;
```
