# Toaster

Toaster inform users on the outcome of an action. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.

## Usage

First, wrap your application with the `<ToasterProvider>` component.

```jsx
// App.js
import React from 'react';
import { FlameTheme, FlameGlobalStyles } from '@lightspeed/flame/Core';
import { ToasterProvider } from '@lightspeed/flame/Toaster';

const App = () => (
  <FlameTheme>
    <FlameGlobalStyles />
    <ToasterProvider>
      <div>{/* The rest of your app */}</div>
    </ToasterProvider>
  </FlameTheme>
);
```

Once that is done, you may use the provided hooks to generate a toast notification.

```jsx
// MyComponent.js
import * as React from 'react';
import { useToast } from '@lightspeed/flame/Toaster';

const MyComponent = () => {
  const { addToast } = useToasts();
  return (
    <button
      type="button"
      onClick={() =>
        addToast('This is a toast', {
          appearance: 'success', // set to 'error' for a red error toast
          autoDismiss: false, // set to true to have a timer that automatically closes it
        })
      }
    >
      Create toast
    </button>
  );
};
```

## Components

### `<ToasterProvider />`

A pre-configured `ToastProvider` from the [react-toast-notifications](https://github.com/jossmac/react-toast-notifications) library.

Please consult its documentation for a full list of all the props available.

### `useToast()`

An augmented hook of the original `useToast` found in [react-toast-notifications](https://github.com/jossmac/react-toast-notifications).

The `useToast` hook has the following signature:

```jsx
const {
  addToast,
  addActionableToast,
  removeToast,
  removeAllToasts,
  updateToast,
  toastStack,
} = useToasts();
```

The `addToast` method has three arguments:

1.  The first is the content of the toast, which can be any renderable `Node`.
1.  The second is the `Options` object, which can take any shape you like. `Options.appearance` is required when using the `DefaultToast`. When departing from the default shape, you must provide an alternative, compliant `Toast` component.
1.  The third is an optional callback, which is passed the added toast `ID`.

The `addActionableToast` method has three arguments:

1.  The first is the `ActionableContent` object, which requires 3 properties to be filled. `ActionableContent.content` is the content of the toast, which can be any renderable `Node`. `ActionableContent.actionTitle` is the string that'll be shown for the action button. `ActionableContent.actionCallback` is the function that will be executed when the action button is clicked.
1.  The second is the `Options` object, which can take any shape you like. `Options.appearance` is required when using the `DefaultToast`. When departing from the default shape, you must provide an alternative, compliant `Toast` component.
1.  The third is an optional callback, which is passed the added toast `ID`.

The `removeToast` method has two arguments:

1.  The first is the `ID` of the toast to remove.
1.  The second is an optional callback.

The `removeAllToasts` method has no arguments.

The `updateToast` method has three arguments:

1.  The first is the `ID` of the toast to update.
1.  The second is the `Options` object, which differs slightly from the add method because it accepts a `content` property.
1.  The third is an optional callback, which is passed the updated toast `ID`.

The `toastStack` is an array of objects representing the current toasts, e.g.

```jsx
[
  { content: 'Something went wrong', id: 'generated-string', appearance: 'error' },
  { content: 'Item saved', id: 'generated-string', appearance: 'success' },
];
```
