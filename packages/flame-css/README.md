# Flame css

`flame-css` is an alternative offering to `flame`.

It offers a sass codebase and an easy to consume css file.

@TODO:

- [ ] Hook flame-tokens/flame-foundations as primary variables
- [ ] Integrate tailwind to output utility classes
- [x] Storybook setup
- [x] Write all stories
- [ ] Snapshot testing
- [ ] Publishing

## Caveat

Although we are bundling the sass source code, for the most part, you should only be using the generated css file.

`flame-css` is not meant to be a complete replacement to `flame`, as it lacks many more complex functionalities
that just are not possible without some front-end framework.

However, `flame-css` provides all the necessary basic components and utility functions to build out the complex
functionalities in whatever framework you choose.

## Installing

If you are leveraging some form of bundler (webpack, parcel...), you may wish to import the compiled css file
into the root of your app.

Please ensure you have the appropriate loaders before importing a `.css` file

```js
// index.js
import '@lightspeed/flame-css/dist/css/style.min.css';
```
