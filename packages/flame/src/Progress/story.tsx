import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import DeterminateProgress from './examples/Determinate';
import IndeterminateProgress from './examples/Indeterminate';
import StaticProgress from './examples/Static';

import { Heading2, Heading3, TextContent } from '../Text';
import Readme from './README.md';

import spacing from '../../../flame-tokens/partials/_spacing.scss';

const stories = storiesOf('Progress', module).addDecorator(withReadme(Readme));

const bottomSpace = spacing[`cr-mb-3`];

stories.add('Linear', () => (
  <TextContent>
    <Heading2>Progress - linear</Heading2>
    <Heading3>Determinate</Heading3>
    <div className={bottomSpace}>
      <DeterminateProgress />
    </div>
    <Heading3>Indeterminate</Heading3>
    <div className={bottomSpace}>
      <IndeterminateProgress />
    </div>
    <Heading3>Static</Heading3>
    <div className={bottomSpace}>
      <StaticProgress />
    </div>
  </TextContent>
));
