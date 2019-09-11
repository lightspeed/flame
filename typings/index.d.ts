import { Story as StoryBase } from '@storybook/react';

declare global {
  declare module '*.md' {
    const value: any;
    export default value;
  }

  declare module '*.scss';
  declare module '*.svg';
  declare module '*.json';
}

declare module '@storybook';
declare module 'storybook-readme';
declare module 'test-utils';

// Hush now, until I type things properly..
declare module '@lightspeed/flame-tokens/dist/theme/default';

declare module '@styled-system/theme-get';

declare module '@storybook/react' {
  export interface Story extends StoryBase {
    addWithPercyOptions(any, any, any): any;
  }
}

export {};
