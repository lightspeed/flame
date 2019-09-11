# Tag

Tag component.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

`<Tag />`

| Prop         | Type              | Default  | Description                                                                                                 |
| ------------ | ----------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `children`   | `node`            | required | Tag content                                                                                                 |
| `size`       | `normal`, `small` | normal   | Tag size                                                                                                    |
| `onClick`    | `function`        | () => {} | Handler called when clicking the Tag                                                                        |
| `onRemove`   | `function`        | () => {} | Handler that enables the dismissible functionality and is called when clicking the remove button of the Tag |
| `[property]` | `any`             | any      | Any extra properties passed will be added to the Tag component                                              |

`<TagLabel />`

| Prop         | Type              | Default  | Description                                                         |
| ------------ | ----------------- | -------- | ------------------------------------------------------------------- |
| `children`   | `node`            | required | TagLabel content                                                    |
| `size`       | `normal`, `small` | normal   | TagLabel size                                                       |
| `onClick`    | `function`        | () => {} | Handler called when clicking the TagLabel                           |
| `[property]` | `any`             | any      | Any extra properties passed will be added to the TagLabel component |

`<TagRemove />`

| Prop         | Type       | Default  | Description                                                          |
| ------------ | ---------- | -------- | -------------------------------------------------------------------- |
| `onClick`    | `function` | () => {} | Handler called when clicking the TagRemove                           |
| `[property]` | `any`      | any      | Any extra properties passed will be added to the TagRemove component |

#### Example

See the [examples folder](https://github.com/lightspeed/flame/tree/master/packages/flame/src/Tag/examples) for this component.
