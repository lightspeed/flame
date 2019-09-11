# The Core package

Core has a simple task:

Give access to the the most basic/elemetary components/functions you can freely use (like, Box and Text) that are connected to the token system.

### React Component

#### `<FlameTheme>`

Simple wrapper around emotion's theme provider.

```js
import React from 'react';
import { FlameTheme } from '@lightspeed/flame/Core';
import { Button } from '@lightspeed/flame/Button';

const MyApp = () => (
  <FlameTheme>
    <div>
      <Button>My Button</Button>
    </div>
  </FlameTheme>
);

export default MyApp;
```

#### `<FlameText>`

Simple component to output the fonts we use throughout flame.

Add this component to the `<head />` of your application.

```js
import React from 'react';
import { FlameText } from '@lightspeed/flame/Core';

const MyApp = () => (
  <html>
    <head>
      <FlameText />
    </head>
    <body>
      <div>Hello World</div>
    </body>
  </html>
);

export default MyApp;
```
