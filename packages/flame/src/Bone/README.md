# Bone

Used to build the skeleton preview of a component while loading data.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

| Prop       | Type      | Description                                    |
| ---------- | --------- | ---------------------------------------------- |
| `width`    | `string`  | custom CSS width                               |
| `height`   | `string`  | custom CSS height                              |
| `animated` | `boolean` | whether the bone is animated (default: true)   |
| `bg`       | `string`  | Override the base background color of the bone |

#### Example

```js
import React from 'react';
import { Bone } from '@lightspeed/flame/Bone';

const MyComponent = () => (
  <div>
    <Bone width="1rem" height="1rem" />
  </div>
);

export default MyComponent;
```
