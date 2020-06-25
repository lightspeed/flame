import { addParameters } from '@storybook/react';
// @TODO: Fix stories that are still using css classes and flush this
import '../src/index.scss';

addParameters({
  options: {
    name: 'Lightspeed Flame-css',
    panelPosition: 'right',
  },
});
