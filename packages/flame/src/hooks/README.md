# Hooks!

## useToggle()

Switch between active and inactive state.

### Arguments

- `initialState: boolean`: The initial internal state of the hook.

### Returns

| Return Value  | Type         | description                                           |
| ------------- | ------------ | ----------------------------------------------------- |
| `isActive`    | `boolean`    | Determine whether the internal state is active or not |
| `toggle`      | `() => void` | Switch between active and inactive state              |
| `setActive`   | `() => void` | Set internal state to active                          |
| `setInactive` | `() => void` | Set internal state to inactive                        |

### Example

```jsx
import { useToggle } from '@lightspeed/flame/hooks';

const Example = () => {
  const { isActive, toggle, setActive, setInactive } = useToggle();
  // ...
};
```

## useClickOutside()

Trigger a callback whenever we click outside a given target

### Arguments

- `targetRef: React.ref`: Reference to a dom node in which any events clicked outside of that particular node will trigger a callback.
- `callback: () => void`: Callback function that is executed when clicking outside.

### Example

```jsx
import { useClickOutside } from '@lightspeed/flame/hooks';

const myCallbackFunction = () => {
  console.log('do something');
};

const Example = () => {
  const targetRef = React.createRef();
  useClickOutside(targetRef, myCallbackFunction);

  return (
    <div>
      <div ref={targetRef}>target</div>
      <div>outside</div>
    </div>
  );
};
```

## useEventListener()

Trigger a callback whenever an event is fired. By default, it will listen to the `keypress` event.

### Arguments

- `eventKey: string`: Which event should trigger the callback?
- `callback: (event) => void`: Callback function that is executed whenever an event is triggered
- `target: DOM node`: A DOM node. By default, it is set to document.

### Example

```jsx
import { useEventListener } from '@lightspeed/flame/hooks';

const myCallbackFunction = event => {
  console.log('I will trigger on keypress due to the following event:', event);
};

const Example = () => {
  const targetRef = React.createRef();
  useEventListener('keypress', myCallbackFunction);
  // ...
};
```

## usePopper()

Wrapper hook over the `popper.js` library that manages the instantiation and destruction of popper, as well as sending back relevant data of popper.js internals

### Arguments

- `targetRef: React.ref`: DOM node reference that will be used as an anchor point for the popperRef node
- `popperRef: React.ref`: DOM node reference that will be placed to the targetRef anchor point.
- `options: PopperOptions`: See [the official documentation](https://popper.js.org/popper-documentation.html#Popper) for further details. By default, only the placement is set.

### Returns

| Return Value | Type     | description                   |
| ------------ | -------- | ----------------------------- |
| `placement`  | `string` | Popper.js computed placement. |

### Example

```jsx
import { usePopper } from '@lightspeed/flame/hooks';

const Example = () => {
  const targetRef = React.createRef();
  const popperRef = React.createRef();
  const { placement } = usePopper(targetRef, popperRef);

  return (
    <div>
      <div ref={targetRef}>target</div>
      <div ref={popperRef}>popper content</div>
    </div>
  );
};
```
