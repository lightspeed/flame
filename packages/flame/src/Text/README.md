# Text

Base component for every Text styles.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### `<Text>`

This component supports multiple properties from [Styled System](https://github.com/jxnblk/styled-system/blob/master/docs/api.md):

- color
- textAlign
- fontFamily
- fontSize
- fontWeight
- space
- lineHeight
- letterSpacing
- textTransform

It's important to note that you may change the underlying rendering by using the `as` prop.

| Prop         | Type                                       | Description                                                                                                | Default |
| ------------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------- |
| `as`         | string                                     | HTML element for text                                                                                      | 'p'     |
| `children`   | React.ReactNode                            | The content to display inside the text                                                                     | -       |
| `className`  | string                                     | Extra CSS classes appended to end of text element                                                          | -       |
| `fontWeight` | string                                     | Set the font-weight for the text                                                                           | -       |
| `color`      | string                                     | Any Flame color token, ex `green-100` or CSS value.                                                        | -       |
| `size`       | enum('small', 'normal', 'large', 'xlarge') | Automatically apply font size and line-height. This property will take precedence over styled-system props | -       |

#### `<Heading1>` `<Heading2>` `<Heading3>` `<Heading4>`

Heading components support the same [Styled System props](https://github.com/jxnblk/styled-system/blob/master/docs/api.md) as Text:

- color
- textAlign
- fontFamily
- fontSize
- fontWeight
- space
- lineHeight
- letterSpacing
- textTransform

| Prop         | Type            | Description                                         | Default |
| ------------ | --------------- | --------------------------------------------------- | ------- |
| `children`   | React.ReactNode | The content to display inside the text              | -       |
| `fontWeight` | string          | Set the font-weight for the text                    | -       |
| `color`      | string          | Any Flame color token, ex `green-100` or CSS value. | -       |

#### `<TextLink>`

| Prop         | Type            | Description                                       | Default |
| ------------ | --------------- | ------------------------------------------------- | ------- |
| `children`   | React.ReactNode | The content to display inside the link            | -       |
| `className`  | string          | Extra CSS classes appended to end of link element | -       |
| `fontWeight` | string          | Set the font-weight for the text                  | -       |

#### `<TextContent>`

| Prop       | Type            | Description                                                                                             | Default |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| `children` | React.ReactNode | The content to display. An extra class will be applied to each children of type `<Text>` to add spacing | -       |

#### Example

```js
import React from 'react';
import { Text, Heading1, TextLink, TextContent } from '@lightspeed/flame/Text';

const MyComponent = () => (
  <div>
    <Heading1>Heading</Heading1>
    <Text>Body text</Text>
    <TextLink href="https://www.lightspeedhq.com">Link</TextLink>
    <TextContent>
      <Heading1>Heading content</Heading1>
      <Text>Body text content</Text>
      <TextLink href="https://www.lightspeedhq.com">Link</TextLink>
    </TextContent>
  </div>
);

export default MyComponent;
```
