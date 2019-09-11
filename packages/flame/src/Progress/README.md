# Progress

Give your users a bit of feedback on how much is left with the Progress component.

## Usage

First, make sure you have been through the [Getting started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

### React Component

#### Props

| Prop         | Type                                     | Default       | Description                                                             |
| ------------ | ---------------------------------------- | ------------- | ----------------------------------------------------------------------- |
| `type`       | 'determinate', 'indeterminate', 'static' | 'determinate' | Progress variant                                                        |
| `current`    | `number`                                 | 0             | Current value of the progress                                           |
| `total`      | `number`                                 | 100           | Total value of the progress                                             |
| `[property]` | `any`                                    | any           | Any extra properties passed will be added to the `<Progress>` component |

#### Example

See the [examples folder](https://github.com/lightspeed/flame/tree/master/packages/Progress/examples) for this component.
