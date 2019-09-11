# Card

Cards shape our interfaces into easily readable screens.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### `<Card>`

_Note:_ This components supports all [space](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space)
properties from styled-system

| Prop        | Type    | Description                                     |
| ----------- | ------- | ----------------------------------------------- |
| `top`       | Boolean | Top card variant                                |
| `color`     | String  | Set the text color within the card              |
| `bg`        | String  | Set the background color within the card        |
| `large`     | boolean | Forcebly set all children to have large spacing |
| `noSpacing` | boolean | Forcebly set all children to have noSpacing     |

#### `<CardSection>`

_Note:_ This components supports all [space](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space)
properties from styled-system

| Prop        | Type            | Description                                          |
| ----------- | --------------- | ---------------------------------------------------- |
| `children`  | React.ReactNode | The content to display inside the section            |
| `color`     | String          | Set the text color within the card                   |
| `bg`        | String          | Set the background color within the card             |
| `large`     | boolean         | Make the corresponding component have larger spacing |
| `noSpacing` | boolean         | Make the corresponding component remove any spacing  |

#### `<CardHeader>`

_Extends `CardSection`_

| Prop       | Type            | Description                                 |
| ---------- | --------------- | ------------------------------------------- |
| `title`    | String          | Title for the card                          |
| `actions`  | React.ReactNode | The action content (such as action buttons) |
| `children` | React.ReactNode | The content to display inside the header    |

#### `<CardFooter>`

_Extends `CardSection`_

#### Example

```js
import React from 'react';
import { Card, CardHeader, CardSection, CardFooter } from '@lightspeed/flame/Card';

const MyComponent = () => (
  <Card>
    <CardHeader title="Card Title" />
    <CardSection>Card Content</CardSection>
    <CardSection>Card Content</CardSection>
    <CardFooter>Card Footer</CardFooter>
  </Card>
);

export default MyComponent;
```
