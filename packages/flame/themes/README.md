## How this works

Here lies the theme files for Flame.

While it might be super tempting to use these files directly from a component, do not attempt to do this.

These theme files will be re-generated back into the `Core` folder and should be used in conjunction with the emotion theme provider.

Never refer to a token directly in a component. Instead, rely on `themeGet` (or other styled-system helpers) to get things going.
