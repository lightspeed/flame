# Flame css

A pure CSS alternative offering to basic [Flame React](https://github.com/lightspeed/flame#readme) components.

@TODO:

- [ ] Hook flame-tokens/flame-foundations as primary variables
- [x] Storybook setup
- [x] Write all stories
- [ ] Visual Snapshot testing

## Installing

### Loading the styles

You will need to import the `.css` file into the root of your app.

Before doing so, please ensure you have the appropriate loaders before importing a `.css` file

If you never added `style-loader` into your webpack config, we recommend you follow the instructions provided by
the [style-loader webpack documentation](https://webpack.js.org/loaders/style-loader/).

Once done, you will want to import this at the root of your application

```js
// index.js
import '@lightspeed/flame-css/dist/css/style.min.css';
```

### Adding fonts

The Flame design system uses Lato as it's primary font.

Add this `<link>` tag to your `<head>` to load the required fonts:

```html
<link
  href="https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin-ext"
  rel="stylesheet"
/>
```

## Caveat

Although we are bundling the sass source code, for the most part, you should only be using the generated css file.

`flame-css` is not meant to be a complete replacement to `flame`, as it lacks many more complex functionalities
that just are not possible without some front-end framework.

However, `flame-css` provides all the necessary basic components and utility functions to build out the complex
functionalities in whatever framework you choose.
