# Popover

Popover with content that appears when clicking on a target element.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

This component supports the following properties from [Styled System](https://github.com/jxnblk/styled-system/blob/master/docs/api.md):

- zIndex

#### Props

| Prop            | Type       | Default        | Description                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`      | react.node | required       | Content to display inside the popover                                                                                                                                                                                                                                                                                                                                          |
| `placement`     | string     | `bottom-start` | Position of the `Popover` in relation with the targeted element.                                                                                                                                                                                                                                                                                                               |
| `target`        | function   | required       | Target that will toggle the popover. Must return a React element that will be rendered. The function receives the following props: `({ targetProps: object, targetEvents: object, active: boolean })`. `targetProps` and `targetEvents` are required to be passed to the target. Uses the [render props](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) pattern |
| `light`         | boolean    | `undefined`    | Displays popover on a light background                                                                                                                                                                                                                                                                                                                                         |
| `noArrow`       | boolean    | `undefined`    | Doesn't show arrow for the popover                                                                                                                                                                                                                                                                                                                                             |
| `isOpen`        | boolean    | `false`        | Opened and closed state                                                                                                                                                                                                                                                                                                                                                        |
| `isFlipEnabled` | boolean    | `true`         | When enabled the popover repositions itself based on the screen size                                                                                                                                                                                                                                                                                                           |
| `onOpen`        | function   | `() => {}`     | Called when the popover is opened                                                                                                                                                                                                                                                                                                                                              |
| `onClose`       | function   | `() => {}`     | Called when the popover is closed                                                                                                                                                                                                                                                                                                                                              |
| `autoClose`     | boolean    | `true`         | Whether the component should call `onClose` when clicking outside of the popover                                                                                                                                                                                                                                                                                               |
| `positionFixed` | boolean    | `false`        | Whether you want the popover to use the `position: fixed` strategy to position the popper element                                                                                                                                                                                                                                                                              |

#### Example

```js
import React from 'react';
import { Popover } from '@lightspeed/flame/Popover';

const MyComponent = () => (
  <div>
    <Popover
      target={({ targetProps, targetEvents }) => (
        <button {...targetProps} {...targetEvents}>
          Target {active && '(is active)'}
        </button>
      )}
    >
      <div>Content</div>
    </Popover>
  </div>
);

export default MyComponent;
```

### CSS Component

You can use CSS classes along with [`popper.js`](https://popper.js.org/) (the library used by the React component) to enable popovers outside a React application. Here's the available classes:

| Type      | Class                    |
| --------- | ------------------------ |
| box       | `.cr-popover`            |
| placement | `[data-placement="top"]` |
| light     | `.cr-popover--light`     |
| arrow     | `.cr-popover__arrow`     |
