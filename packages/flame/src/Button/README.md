# Button

The most essential element of a user interface.

---

## Sizes

Our buttons come in four different sizes: Small, Medium, Large & Extra Large. All buttons have a fixed height and padding unless stated differently inside the type

| Size     | Usage                                                                                                                                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `small`  | These little buttons are used in compact little spaces, e.g. inside the header of a card.                                                                                                                         |
| `medium` | Default size of the Button                                                                                                                                                                                        |
| `large`  | The large button is mainly used inside an open but content-rich page with multiple actions. This large button also provides a large touchable area for use on touch screens.                                      |
| `xlarge` | When a single page has nothing going on but to promote a single thing with just one button, you should use the extra large button. This button is also great for fast pacing flows with a focus on touch screens. |

## Styles

These are all the styles that are included in all button types (unless stated differently in the types section).

| Style               | Usage                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `default`/`neutral` | The neutral button is used for all generic actions.                                                     |
| `primary`           | There should only be one main action on the page. This action should always be a primary styled button. |
| `secondary`         | For subsequent actions that encourage our users to fill data like selecting a product.                  |
| `danger`            | For all actions that can be destructive, we use the danger styled button.                               |

## Types

These are all the styles that are included in all button types (unless stated differently in the types section).

| Type            | Usage                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Outline**     | Our standard button is for all non-default styles the outline button can transform into a fill button to start encouraging interaction.                                                                    |
| **Fill**        | When taking action is promoted/encouraged we use the fill button. The main CTA should always be a fill. **Not available in default style.**                                                                |
| **Icon + Text** | Bringing visual context to what a button will do, can help the user understand and it manages expectations. When space is limited, but actions are required you might want to use an icon only button.     |
| **Icon**        | A small, often square-shaped button with only an `<Icon>` for CTA. These should be avoided at all costs, unless when dealing with extremely standard usecases. Consider an **Icon + Text** button instead. |

---

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

| Prop            | Type                                                         | Description                                        |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| `children`      | React.ReactNode                                              | The content to display inside the button           |
| `fill`          | boolean                                                      | Displays as fill button                            |
| `size`          | enum['small', 'large', 'xlarge']                             | Sets the size of the button                        |
| `variant`       | enum['primary', 'secondary', 'danger', 'default', 'neutral'] | Sets the color variant of the button               |
| `block`         | boolean                                                      | Displays the button in full width                  |
| `noSpacing`     | boolean                                                      | Remove default spacing between button children     |
| `disabled`      | boolean                                                      | Disables the button                                |
| `loading`       | boolean                                                      | Displays the loading icon and disables the button  |
| `href`          | string                                                       | Creates a `<a>` link instead of a `<button>`       |
| `forcedState`   | enum['active', 'hover']                                      | Forces the visual state of a button                |
| `onClick`       | function                                                     | Callback when button is clicked                    |
| `onFocus`       | function                                                     | Callback when button is focused                    |
| `onBlur`        | function                                                     | Callback when button is blurred                    |
| `html property` | string                                                       | Any extra properties will be added onto the button |

#### Example

```jsx
import React from 'react';
import { Button } from '@lightspeed/flame/Button';

const MyComponent = () => (
  <div>
    <Button>My Button</Button>
  </div>
);

export default MyComponent;
```
