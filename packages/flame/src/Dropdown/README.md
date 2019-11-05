# The Dropdown Component

A more opinionated version of the Popover component.

Instantiates a button with a menu that will appear at the bottom of the button.

### React Component

#### `<Dropdown>`

#### Props

| Prop            | Type                                         | Default  | Description                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`      | react.node                                   | required | Content to display inside the Dropdown. Can accept a child function that contains the close event as first parameter                                                                                                                                       |
| `buttonContent` | react.node                                   | required | Content to display within the Dropdown Button                                                                                                                                                                                                              |
| `placement`     | ['start', 'center', 'end', PopperPlacements] | 'start'  | Positioning of the Dropdown content. By default, it will be aligned left (aka the start). For a full list of all additional PopperPlacements, please consult [the popper documentation](https://popper.js.org/popper-documentation.html#Popper.placements) |

```js
import React from 'react';
import { Dropdown } from '@lightspeed/flame/Dropdown';

const MyApp = () => (
  <div>
    <Dropdown buttonContent="Button Text">
      This is the content that will appear when we click on the button.
    </Dropdown>

    <Dropdown buttonContent="Another Button">
      {close => (
        <div>
          This is the content that will appear when we click on the button.
          <button type="button" onClick={close}>
            Clicking on me will close the dropdown
          </button>
        </div>
      )}
    </Dropdown>
  </div>
);

export default MyApp;
```

#### `<DropdownContent>`

A pre-styled `<Box>` with the appropriate margins setup. Use it within the Dropdown.

```js
import React from 'react';
import { Dropdown, DropdownContent } from '@lightspeed/flame/Dropdown';

const MyApp = () => (
  <div>
    <Dropdown buttonContent="Button Text">
      <DropdownContent>I will have the correct margin applied to me</DropdownContent>
    </Dropdown>
  </div>
);

export default MyApp;
```

#### `useDropdown()`

A simple hook to access the close event for a Dropdown. You may use this instead of passing a child function.

It's a particularly useful for complex dom structures.

```js
import React from 'react';
import { Dropdown, DropdownContent, useDropdown } from '@lightspeed/flame/Dropdown';

const MyDropdownContent = () => {
  const { closeDropdown } = useDropdown();
  return (
    <div>
      This is the content that will appear when we click on the button.
      <button type="button" onClick={closeDropdown}>
        Clicking on me will close the dropdown
      </button>
    </div>
  );
};

const MyApp = () => (
  <div>
    <Dropdown buttonContent="Button Text">
      <MyDropdownContent />
    </Dropdown>
  </div>
);

export default MyApp;
```

### Building your own dropdown/popover component using hooks

Dropdown and Popover are quite opinionated and might not do everything you want.

But worry not! It's possible to quickly create your own implementation of Dropdown and Popover using a few hooks provided.

Creating your own dropdown component requires using the `usePopper` hook and 2 components that will be linked via the `usePopper` hook.

These two components are called the "Target" and the "Popper".

The "Target" is the component in which we will use as an anchor point for our "Popper".

The "Popper" component will attempt to always attach itself to the "Target".

```jsx
import * as React from 'react';
import { usePopper } from '@lightspeed/flame/hooks';

const MyCustomDropdown = ({ children }) => {
  // Let's create the references for our two components
  const targetRef = React.createRef();
  const popperRef = React.createRef();
  // Let's tell popper to use these two component references.
  usePopper(targetRef, popperRef);

  return (
    <React.Fragment>
      <button ref={targetRef}>Menu Button</button>
      {/* This is the content that will float around the button */}
      <div ref={popperRef}>{children}</div>
    </React.Fragment>
  );
};
```

By default, `usePopper` will attempt to always position the "Popper" component (in the previous example, our `div`) to the bottom of the "Target" component (the `button`). Should you wish to adjust the positioning of the "Popper" component, you may pass in additional options to the hook. For further details, check the [hooks documentation](https://github.com/lightspeed/flame/blob/master/packages/flame/src/hooks/README.md).

Now that we have positioning done, let us add some state to manage whether to display or hide our "Popper" content.

Although you can do this yourself, there is an additional hook called `useToggle` that we can leverage.

```jsx
import * as React from 'react';
import { usePopper, useToggle } from '@lightspeed/flame/hooks';

const MyCustomDropdown = ({ children }) => {
  const targetRef = React.createRef();
  const popperRef = React.createRef();
  usePopper(targetRef, popperRef);

  // Use toggle exports a couple of helper functions/variables
  // But the two main important ones are: `toggle` and `isActive`
  // `toggle` is a function that will automatically swap between active and inactive state
  // `isActive` is a boolean variable that indicates whether or not our state is active or inactive
  const { toggle, isActive } = useToggle();

  return (
    <React.Fragment>
      {/* Bind the toggle function on the button's onClick handler */}
      <button ref={targetRef} onClick={toggle}>
        Menu Button
      </button>
      {/* use `isActive` boolean state to determine whether to show or hide content */}
      {isActive && <div ref={popperRef}>{children}</div>}
    </React.Fragment>
  );
};
```

Now, when we click on the button, we can quickly open/close our popper content.

Of course, we may want to close our content if we click outside the `div` or after pressing a key (like "Escape"). Luckily, we have more little hooks to give use these functionalities.

For further details on the hooks used in the example below, check the [hooks documentation](https://github.com/lightspeed/flame/blob/master/packages/flame/src/hooks/README.md).

```jsx
import * as React from 'react';
import { usePopper, useToggle, useOnClickOutside, useEventListener } from '@lightspeed/flame/hooks';

const MyCustomDropdown = ({ children }) => {
  const targetRef = React.createRef();
  const popperRef = React.createRef();
  usePopper(targetRef, popperRef);
  const { toggle, isActive } = useToggle();

  // if we click outside the popperRef, our callback function gets triggered.
  useOnClickOutside(popperRef, () => isActive && toggle());
  // if we press "Escape" on the keyboard, we trigger the toggle action.
  useEventListener(() => {
    if (event.key === 'Escape' && isActive) {
      toggle();
    }
  }, 'keyup'); // Escape can only be triggered on keyup or keydown events

  return (
    <React.Fragment>
      <button ref={targetRef} onClick={toggle}>
        Menu Button
      </button>
      {isActive && <div ref={popperRef}>{children}</div>}
    </React.Fragment>
  );
};
```

And there we have it, a simple and easy to understand custom Dropdown/Popover component. From here, you may style the "Target" and "Popper" element however you want. You may also use some prebuilt styling from other components that use this pattern. For example, the base `Dropdown` component has exports for the "Popper" container.

```jsx
import * as React from 'react';
// Let's import the DropdownContainer to have a similar styling.
import { DropdownContainer } from '@lightspeed/flame/Dropdown';
import { usePopper, useToggle, useOnClickOutside, useEventListener } from '@lightspeed/flame/hooks';

const MyCustomDropdown = ({ children }) => {
  const targetRef = React.createRef();
  const popperRef = React.createRef();
  usePopper(targetRef, popperRef);
  const { toggle, isActive } = useToggle();
  useOnClickOutside(popperRef, () => isActive && toggle());
  useEventListener(() => {
    if (event.key === 'Escape' && isActive) {
      toggle();
    }
  }, 'keyup');

  return (
    <React.Fragment>
      <button ref={targetRef} onClick={toggle}>
        Menu Button
      </button>
      {/* Simply plug the container in! */}
      {isActive && (
        <DropdownContainer ref={popperRef} light>
          {children}
        </DropdownContainer>
      )}
    </React.Fragment>
  );
};
```
