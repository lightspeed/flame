import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Spinner } from './Spinner';
import Readme from './README.md';
import { Group } from '../Group';
import { Box } from '../Core';
import { Text } from '../Text';

const stories = storiesOf('Spinner', module).addDecorator(withReadme(Readme));

stories.add('Story', () => (
  <div>
    <Box mb={3}>
      <Text fontSize="small" mb={1}>
        Default
      </Text>
      <Spinner />
    </Box>

    <Box mb={3}>
      <Text fontSize="small" mb={1}>
        Resized
      </Text>
      <Group>
        <Spinner size="small" />
        <Spinner size="large" />
        <Spinner size="xlarge" />
        <Spinner size="xxlarge" />
        <Spinner size="4rem" />
      </Group>
    </Box>

    <Box mb={3}>
      <Text fontSize="small" mb={1}>
        Colored
      </Text>
      <Group>
        <Spinner size="xxlarge" color="blue" />
        <Spinner size="xxlarge" color="blue" baseColor2="night-100" />
        <Spinner size="xxlarge" color="green-200" />
        <Spinner size="xxlarge" color="maple-200" />
        <Spinner size="xxlarge" color="yellow-200" baseColor2="night-100" />
        <div className="cr-p-2" style={{ backgroundColor: '#212424', display: 'inline-flex' }}>
          <Spinner size="xxlarge" color="snow" />
        </div>
      </Group>
    </Box>
  </div>
));
