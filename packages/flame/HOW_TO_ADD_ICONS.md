# How to add new icons

Icons as React components are automatically generated with a build script.

To see changes when adding/updating an icon, add your `.svg` in the `svg/Icon` folder,
navigate to the root directory of the `flame` repo in your terminal and run this command to re-generate the build:

```sh
yarn bootstrap
```

This script will generate the React components and the Icon sprite.

Note that this command will be run automatically when in [local development](https://github.com/lightspeed/flame/blob/master/.github/CONTRIBUTING.md#launch-storybook-for-local-development) and when we publish to npm.

## Designing icons

Our main icon style has been changed from an outlined look to a so-called glyph style. This form will bring a bit more body to the icons and reduces the amount of white in the screens as well. They still have the unique Lightspeed style and are friendly to look at.

The Sketch file for these icons can be found in the **Flame** Abstract project as a library.

### Using icons

Using icons is an excellent way to manage expectations inside navigation and actions. It also makes the overall experience visually more pleasing. The hard part of creating an icon is picking the right metaphor. Always do a little research and iterations to make sure you will be using the brightest and most legible metaphor.

By linking the Flame Icons library, you have access to all available icons inside Sketch. Alternatively, you can grab the source SVG file from the Flame repository.

### Anatomy of a Flame icon

There aren't many rules that apply to achieve our style, but the ones there can be found in this section.

#### Corners and edges

To make them feel as friendly as they are, try to avoid hard corners at all times. On a 16x16 icon you can use `0.25px`,`0.5px` or `1px` border-radius instead. To make them sharp and better scalable try to avoid vector points being off pixel except `0.25`,`0.5` and `0.75`are allowed only if you can't use a full pixel value.

#### Strokes and Fills

Try to avoid strokes as much as possible, and use fills instead.

### Elements and their color

Each icon exists with a maximum of four different layers and two colors, a base, and a detail color. **Use the pre-defined layer styles at all times**

| Layer       | Usage                                                                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `base-1`    | This is the main body of an icon and is always the base colour                                                                                                                                                          |
| `base-2`    | Some icons have two elements for their base shape. When this is the case, the `base-2` layer is the element that is the least important in the hierarchy. The color of this element is the base color with 70% opacity. |
| `details-1` | When there is space and need for a little bit of details inside the icon we use the detail color. in addition, the shape of the `details-1` layer should always be extracted from the `base-1` layer.                   |
| `details-2` | Similar to `base-2` except this is used on a detail level and therefor uses the detail color on 70%. By default this color is `cr-snow`                                                                                 |

## Exporting icons

All icons should be exported from the `Flame Icons.sketch` file of the `Flame` repository in Abstract. Exporting should be done from the Slices in each of the icons (on the Symbols page), and not the Symbol Artboards.

Before exporting try to flatten out shapes as much as possible, the fewer shapes you have in place the better the icon will perform, also try to limit the number of anchor points inside your shapes.

If an Icon contains `details-1`, paths overlapping `base-1` should be also be cut out (using the Sketch Layer -> Combine -> Subtract command).

When adding new SVGs make sure it has the following rules are applied:

1. All paths live inside a group with the icon name inside the `id` in lowercase
2. Sketch layers are called either `"base-1"`, `"base-2"`, `"details-1"` or `"details-2"`
3. `details-1` paths have no fill property in Sketch
4. `details-2` paths have a `"#fff"` white fill
5. `base-2` and `details-2` have `opacity` of `70%`
6. Export the SVG (via the Export button, or by selecting the slice for the icon to be exported)
7. Save the Sketch-generated SVGs to the `svg/` folder.

When a new `.svg` is added, a pre-commit hook will automatically take care of cleaning `svg` files for consumption by Flame. There is no need to manually alter `svg` files once they've been added or committed.
