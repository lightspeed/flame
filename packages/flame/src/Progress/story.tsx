import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import DeterminateProgress from './examples/Determinate';
import IndeterminateProgress from './examples/Indeterminate';
import StaticProgress from './examples/Static';

import { Heading2, Heading3, TextContent } from '../Text';
import { Box } from '../Core';
import Readme from './README.md';

const stories = storiesOf('Components|Progress', module).addDecorator(withReadme(Readme));

stories.add('Linear', () => (
  <TextContent>
    <Heading2>Progress - linear</Heading2>
    <Heading3>Determinate</Heading3>
    <Box mb={3}>
      <DeterminateProgress />
    </Box>
    <Heading3>Indeterminate</Heading3>
    <Box mb={3}>
      <IndeterminateProgress />
    </Box>
    <Heading3>Static</Heading3>
    <Box mb={3}>
      <StaticProgress />
    </Box>
  </TextContent>
));
