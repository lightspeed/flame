# Tab

For when buttons aren't enough

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Cirrus in your application.

### React Component

`<Tab />`

Extends the Flex Component.

| Prop       | Type      | Default  | Description                                             |
| ---------- | --------- | -------- | ------------------------------------------------------- |
| `active`   | `boolean` | false    | Whether or not to display the underline beneath the tab |
| `children` | `node`    | required | Tab content                                             |

`<TabContainer />`

Wrap your Tabs with this component to get proper spacing between each element

| Prop       | Type   | Default  | Description      |
| ---------- | ------ | -------- | ---------------- |
| `children` | `node` | required | TagLabel content |

#### Example

```js
import React from 'react';
import { Tab, TabContainer } from '@lightspeed/cirrus/Tab';

const MyComponent = () => (
  <TabContainer>
    <Tab>First Tab</Tab>
    <Tab active>Active Tab</Tab>
  </TabContainer>
);

export default MyComponent;
```
