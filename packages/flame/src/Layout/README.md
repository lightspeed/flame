# Layout

A set of commonly used responsive layouts, exposed in a highly opinionated fashion.

## Usage

### Components

#### `<AnnotatedLayout>`

A 2 column layout in which the first column is reserved for a title, description and some actions. The second column is reserved for the actual content.

This layout is responsive.

| Prop            | Type            | Description                                                                                                                                |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`         | `string`        | Heading of the Layout                                                                                                                      |
| `description`   | `string`        | Information pertaining to the current layout.                                                                                              |
| `renderExtras?` | `React.Element` | Additional custom content to be rendered in the first column, underneath the title and description. Usually reserved for a list of buttons |
| `children`      | `React.Element` | Content to be rendered in the second column.                                                                                               |

#### Example

```jsx
import React from 'react';
import { AnnotatedLayout } from '@lightspeed/flame/Layout';

const MyComponent = () => (
  <AnnotatedLayout title="My Title" description="This is the description of the layout">
    <div>Card Content</div>
  </AnnotatedLayout>
);

export default MyComponent;
```
