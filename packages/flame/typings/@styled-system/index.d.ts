import { CSSObject, InterpolationWithTheme } from '@emotion/core';

declare module '@styled-system/theme-get';

/*
  Someplace, somewhere, there's a typing that does some funky things with our
  emotion css props and things just do not line up anymore.

  Due to how we split storybook to the top level and emotion at the lower level,
  we end up with this wack potential mismatch between typing.

  And because its incredibly difficult to drill down WHAT is the root cause,
  we're just gonna declare the entire library a mystery.

  TODO: Move storybook DOWN to the flame package.
*/

declare module '@styled-system/css' {
  export function css(input?: SystemStyleObject): InterpolationWithTheme<any>;
}
