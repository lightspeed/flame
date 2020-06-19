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

## useOnClickOutside()

Trigger a callback whenever we click outside a given target

### Arguments

- `targetRef: React.ref`: Reference to a dom node in which any events clicked outside of that particular node will trigger a callback.
- `callback: () => void`: Callback function that is executed when clicking outside.

### Example

```jsx
import { useOnClickOutside } from '@lightspeed/flame/hooks';

const myCallbackFunction = () => {
  console.log('do something');
};

const Example = () => {
  const targetRef = React.createRef();
  useOnClickOutside(targetRef, myCallbackFunction);

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

Since we're already using `popper` internally, we are simply re-exporting the related hook.

### Arguments

- `targetRef: Element`: DOM node reference that will be used as an anchor point for the popperRef node
- `popperRef: Element`: DOM node reference that will be placed to the targetRef anchor point.
- `options: PopperOptions`: See [the official documentation](https://popper.js.org/react-popper/) for further details. By default, only the placement is set.

### Example

```jsx
import { usePopper } from '@lightspeed/flame/hooks';

const Example = () => {
  const [targetRef, setTargetRef] = React.useState(null);
  const [popperRef, setTargetRef] = React.useState(null);
  const { styles } = usePopper(targetRef, popperRef);

  return (
    <div>
      <div ref={setTargetRef}>target</div>
      <div ref={setPopperRef} style={styles.popper}>
        popper content
      </div>
    </div>
  );
};
```
