<p align="center">
  <img alt="Lightspeed Flame" width="204px" src="https://user-images.githubusercontent.com/24464151/67687230-648a1300-f96e-11e9-9de0-7735ea1682c0.png" />
</p>
<h3 align="center">Component library for building Lightspeed products.</h3>

---

[![npm version](https://badge.fury.io/js/%40lightspeed%2Fflame.svg)](https://badge.fury.io/js/%40lightspeed%2Fflame) [![GitHub Actions workflow status badge](https://github.com/lightspeed/flame/workflows/Test/badge.svg)](https://github.com/lightspeed/flame/actions) [![codecov](https://codecov.io/gh/lightspeed/flame/branch/next/graph/badge.svg)](https://codecov.io/gh/lightspeed/flame)

### Storybook

For the deployed version of our development environment visit https://lightspeed-flame.netlify.com.

### Playground

Fork this CodeSandbox and start playing around with components:

[![Edit Flame Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/lightspeed-flame-components-g6u5n)

## Installing

Install the package:

```sh
yarn add @lightspeed/flame
```

And its required peer dependencies:

```sh
yarn add react@^16 react-dom@^16 @emotion/core@^10 @emotion/styled@^10 emotion-theming@^10
```

## Getting Started

Before being able to implement Flame in your application, there are a few steps to bootstrap the components properly. We also assume that your React application is using a bundler such as webpack.

**Steps required:**

- Link fonts
- Hook the theme provider
- Load global styles
- Import components via their namespace

### Link fonts

There are two ways to load the proper fonts:

Add this `<link>` tag to your `<head>` to load the required fonts:

```html
<link href="//vendfrontendassets.freetls.fastly.net/fonts/fonts-v2.css" rel="stylesheet" />
```

### Hook the theme provider, load global styles, and import components

In order to have the proper styling, it is necessary to load the theme object into the application.

To do so, wrap the `<FlameTheme>` provider on your app and add `FlameGlobalStyles`:

```jsx
import React from 'react';
import { FlameTheme, FlameGlobalStyles } from '@lightspeed/flame/Core';
// Access components via their namespace
import { Button } from '@lightspeed/flame/Button';
import { Heading1, Text } from '@lightspeed/flame/Text';

// Within your root app component
class App extends React.Component {
  render() {
    return (
      <FlameTheme>
        {/* Wrapping `<div>` is necessary since `<FlameTheme>` is a Provider */}
        <div>
          {/* We set some global styles, like fonts and minimal resets */}
          <FlameGlobalStyles />

          {/* A Flame styled h1, paragraph, and button 🎉 */}
          <Heading1>My heading</Heading1>
          <Text as="p">Welcome to Flame</Text>
          <Button variant="primary" fill={true}>
            It's happening!
          </Button>
        </div>
      </FlameTheme>
    );
  }
}
```

**Please note**

If you have Emotion already installed and you would like to use the theme values provided from Flame, you will still need to wrap your application with an Emotion `<ThemeProvider />` and pass in the theme object.

```jsx
import React from 'react';
import { FlameTheme, lightTheme } from '@lightspeed/flame/Core';
import { ThemeProvider } from 'emotion-theming';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <FlameTheme>
          <div>{/* ... */}</div>
        </FlameTheme>
      </ThemeProvider>
    );
  }
}
```

This is intentional since we do not want changes on `FlameTheme` to potentially affect your underlying components, as you might already have custom theme values being added.

## Testing your app with Flame components

It's important to wrap your tests with the appropriate theme provider. This is because some flame components requires theme values to be passed in order to compute new color values.

Before rendering your component inside of your tests, ensure you wrap it up with `FlameTheme`.

For example:

```jsx
describe('Some component', () => {
  it('renders', () => {
    const component = someTestRenderFunction(
      <FlameTheme>
        <Button />
      </FlameTheme>,
    );
  });
});
```

## Getting started with server-side rendering (SSR)

Flame supports SSR out of the box without any additional configuration needed.

Since Flame uses the latest `@emotion` package, when loading components on the server, components will automatically have their styles extracted without any required setup.

## Styled System props

Many of flame components have been augmented with [Styled System](https://github.com/jxnblk/styled-system) props.

```jsx
<Alert mb={3}>
  This Alert will now have a margin bottom (mb) of 1.125rem. That value corresponds to the 3rd
  spacing value of the design system.
</Alert>
```

These props are essentially a way to quickly customize various css properties of a component without the need of writing a custom css class or component. These props are automatically attached to the values of the design system, so long as the application was properly wrapped with the `<FlameTheme>` component.

_Please consult the packages READMEs for a list of all activated props:_

- [Flame](https://github.com/lightspeed/flame/tree/master/packages/flame/README.md)

## Contributing

See the [contributing guidelines](.github/CONTRIBUTING.md).

## Licenses

The source code is licensed with a [custom license](https://github.com/lightspeed/flame/blob/master/LICENSE).
