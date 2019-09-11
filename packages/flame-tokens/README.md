# Tokens

## What are `tokens`?

Design Tokens are an abstraction for everything impacting the visual design of an app/platform.

This includes:

- [Colors](#colors)
- [Typography](#typography)
- [Spacing](#spacing)
- [Shadows](#shadows)
- [Radii](#radii)
- [Transitions](#transitions)

Those can eventually be reused for multiple platforms (Web, iOS, Android, etc.)

Some references on the subject:

- [Lightning Design System - Design Tokens](https://www.lightningdesignsystem.com/design-tokens/)
- [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [Salesforce UX - Design Tokens](https://github.com/salesforce-ux/design-system/wiki/Design-Tokens)

## Installation

First, make sure you have been through the [Getting Started](https://github.com/lightspeed/flame#getting-started) steps of adding Flame in your application.

If using [Yarn](https://yarnpkg.com/):

```sh
yarn add @lightspeed/flame-tokens
```

Or using [npm](https://www.npmjs.com/):

```sh
npm i -S @lightspeed/flame-tokens
```

## Contributing

Tokens are kept in JavaScript files for maximum flexibility and are built
as `.scss` (Sass) and `.css` (PostCSS) through a `prepublish` npm script.

To see changes when updating a token or making any changes to this
package code, navigate to this directory in and run this command to
re-generate the build:

```sh
npm run prepublish
```

Note that this command will be run automatically when we publish to npm.

## Usage

### Import SCSS variables

```scss
@import '@lightspeed/flame-tokens/index.scss';
```

### Use as utility classes

You can also use tokens as utility classes by importing partials:

```scss
@import '@lightspeed/flame-tokens/partials/_colors.scss';
@import '@lightspeed/flame-tokens/partials/_typography.scss';
@import '@lightspeed/flame-tokens/partials/_spacing.scss';
@import '@lightspeed/flame-tokens/partials/_shadows.scss';
@import '@lightspeed/flame-tokens/partials/_radii.scss';
@import '@lightspeed/flame-tokens/partials/_transitions.scss';
```

Or include them all in one import:

```scss
@import '@lightspeed/flame-tokens/partials/index.scss';
```

Utility classes follow the same naming convention as variables, except for spacing. Here's a rundown:

---

## Colors

Every color is structured in the following way: We have one base color (_e.g., **blue**_) and each base color has three variants which are scaled on brightness with a numeric system similar to fonts (**blue-100** being the lighter variant and **blue-300** being the darker one\*). That leaves space for potential new colors and makes things clear if you have to pick a non-base color for something.

We name our colors by their original name except for our brand colors. It makes things more clear when you are using a brand color which is a good thing to take in mind.

- Text colors: `.cr-{color}-{value}`
- Background colors: `.cr-bg-{color}-{value}`
- Border colors: `.cr-border-{color}-{value}`

---

## Typography

#### Our Typeface

**Lato** is the font we use as our body and product font. This sans-serif typeface was designed by Łukasz Dziedzic in 2010.

So why do we use Lato over all the others? Simply put, we appreciate its rich character and effortless legibility. With Lato, numbers appear crisp and decipherable no matter the size. This is important for us, given our extensive use of digits across our products (prices, orders, etc.).

#### Font scale

The font scale consists of seven different font sizes. No other sizes are accepted. The `text-xxs` text style should only be used in uppercase because 8 is generally too small for text, by making it uppercase it has the same height as normal `text-xs` text.

- Typefaces: `.cr-serif`, `.cr-sans-serif`, `.cr-monospace`
- Weights: `.cr-regular`, `.cr-bold`
- Sizes: `.cr-text-{size}`
- Letter-spacing: `.cr-letter-spacing-{scale}`

---

## Spacing

We use shorthand notation for spacing to keep things terse. `m` is for margin, `p` is for padding.

- All sides: `.cr-m-{scale}`, `.cr-p-{scale}`
- Top: `.cr-mt-{scale}`, `.cr-pt-{scale}`
- Left: `.cr-ml-{scale}`, `.cr-pl-{scale}`
- Bottom: `.cr-mb-{scale}`, `.cr-pb-{scale}`
- Right: `.cr-mr-{scale}`, `.cr-pr-{scale}`
- Vertical (Top/Bottom): `.cr-mv-{scale}`, `.cr-pv-{scale}`
- Horizontal (Left/Right): `.cr-mh-{scale}`, `.cr-ph-{scale}`

---

## Shadows

Shadows make things tangible on screen. It gives the illusion of things coming off the screen and not being flat. They will also help to create depth levels, which enables hierarchy.

Inputs become more recognizable when they have an inner shadow in place. Also, to provide more feeling to the pressed states of buttons we need to create the illusion that it is being pushed into the background, an inner shadow will help with that.

- Outer: `.cr-shadow-{scale}`
- Inner: `.cr-inner-shadow-{scale}`, `.cr-inner-shadow-n{scale}
- Border: `.cr-border-shadow`

---

## Radii

Border radius applies to all corners. We use them to make our elements look friendlier and softer to the eye.

- Scale: `.cr-radius-{scale}`
- Circle: `.cr-radius-circle`

---

#### Transitions

- Durations: `.cr-transition-duration-{speed}`

#### Using tokens directly (Advanced)

You can import tokens directly in JS, which will give you some additional options that are available.
We recommend using the helper functions (see above) as much as possible, since this will suffice
for most use-cases. If you do need more fine-grain control, importing directly might give you
what you need.

When you import the tokens directly, you will get access to the following modules:

- `typography`
- `spacing`
- `colors`
- `shadows`
- `radii`
- `transitions`

Then in your JavaScript file:

```js
import React from 'react';
import tokens from '@lightspeed/flame-tokens';
// Or import needed token directly:
// import { spacing } from '@lightspeed/flame-tokens';

const styles = {
  padding: tokens.spacing.scale['spacing-2'],
  // Or when importing only needed tokens:
  // padding: spacing.scale['spacing-2'],
};

const MyComponent = () => <div style={styles}>My Component</div>;

export default MyComponent;
```
