import { CSSObject } from '@emotion/core';

declare global {
  declare module '*.svg';
  declare module '*.json';
}

declare module '*.md' {
  const value: any;
  export default value;
}

declare module '*.scss';

declare module '@storybook';
declare module 'storybook-readme';
declare module 'test-utils';

// Hush now, until I type things properly..
declare module '@lightspeed/flame-tokens/dist/theme/default';
