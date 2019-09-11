# Flag

A set of small and readable flags.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

> Color properties can be any Flame color token, ex `green-100` or any CSS value.

| Prop   | Type     | Description                                                                       |
| ------ | -------- | --------------------------------------------------------------------------------- |
| `code` | `string` | ISO 3166-2 Country code (case is insensitive)                                     |
| `name` | `string` | Country / Region / Other name (case is insensitive)                               |
| `size` | `string` | Default 16 by 12, can be set to any custom value, the height will scale to be 75% |

#### Example

If using all flags:

```js
import React from 'react';
import { Flag } from '@lightspeed/flame/Flag';

const MyComponent = () => (
  <div>
    <Flag code="CA" />
    <Flag name="Canada" />
    <Flag code="CA-QC" />
    <Flag name="Quebec" />
    <Flag code="nl" size="1.75rem" />
  </div>
);

export default MyComponent;
```

Or if using some flags, import them directly instead of using the `<Flag>` component directly, which will include **all** components in your app bundle:

```js
import React from 'react';
import { FlagCA } from '@lightspeed/flame/Flag/CA';
import { FlagCA_QC } from '@lightspeed/flame/Flag/CA_QC';

const MyComponent = () => (
  <div>
    <CA />
    <CA_QC />
  </div>
);

export default MyComponent;
```
