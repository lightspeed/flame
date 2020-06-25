import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Spinner } from './Spinner';
import Readme from './README.md';
import { Box, Flex } from '../Core';
import { Text } from '../Text';

import { SpacedGroup } from '../../../../.storybook/components/SpacedGroup';

const stories = storiesOf('Components|Spinner', module).addDecorator(withReadme(Readme));

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
      <SpacedGroup>
        <Flex>
          <Spinner size="small" />
        </Flex>
        <Flex>
          <Spinner size="large" />
        </Flex>
        <Flex>
          <Spinner size="xlarge" />
        </Flex>
        <Flex>
          <Spinner size="xxlarge" />
        </Flex>
        <Flex>
          <Spinner size="4rem" />
        </Flex>
      </SpacedGroup>
    </Box>

    <Box mb={3}>
      <Text fontSize="small" mb={1}>
        Colored
      </Text>
      <SpacedGroup>
        <Flex>
          <Spinner size="xxlarge" color="blue" />
        </Flex>
        <Flex>
          <Spinner size="xxlarge" color="blue" baseColor2="night-100" />
        </Flex>
        <Flex>
          <Spinner size="xxlarge" color="green-200" />
        </Flex>
        <Flex>
          <Spinner size="xxlarge" color="maple-200" />
        </Flex>
        <Flex>
          <Spinner size="xxlarge" color="yellow-200" baseColor2="night-100" />
        </Flex>
        <div className="cr-p-2" style={{ backgroundColor: '#212424', display: 'inline-flex' }}>
          <Spinner size="xxlarge" color="snow" />
        </div>
      </SpacedGroup>
    </Box>
  </div>
));
