import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Tag } from './Tag';
import { Box } from '../Core';
import Readme from './README.md';
import { Text, TextContent, Heading2, Heading3 } from '../Text';
import TagList from './examples/TagList';
import { Icon } from '../Icon';

const stories = storiesOf('Tag', module).addDecorator(withReadme(Readme));

stories.add('Types', () => (
  <TextContent>
    <Heading3>Small</Heading3>
    <Box mb={3}>
      <Tag size="small" onRemove={() => {}}>
        My Tag
      </Tag>
    </Box>
    <Heading3>Default</Heading3>
    <Box mb={3}>
      <Tag>My Tag</Tag>
    </Box>
    <Heading3>Dismissible</Heading3>
    <Box mb={3}>
      <Tag onRemove={() => {}}>My Tag</Tag>
    </Box>
    <Heading3>Long text</Heading3>
    <Box mb={3}>
      <Tag onRemove={() => {}}>
        Long tag on <br /> multiple lines
      </Tag>
    </Box>
    <Heading3>Any element as child</Heading3>
    <Box mb={3}>
      <Tag onRemove={() => {}}>
        <Icon name="small-chevron-down" color="white" />
        <Box as="span" ml={1}>
          🍊 🍋 🍌 🍉 🍇
        </Box>
      </Tag>
    </Box>
  </TextContent>
));

stories.add(
  'Sizes',
  () => (
    <TextContent>
      <Heading2>Tag</Heading2>
      <Heading3>Small</Heading3>
      <Box mb={3}>
        <Tag size="small" onRemove={() => {}}>
          My Tag
        </Tag>
      </Box>
      <Heading3>Normal</Heading3>
      <Box mb={3}>
        <Tag size="normal" onRemove={() => {}}>
          My Tag
        </Tag>
      </Box>
    </TextContent>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Events',
  () => (
    <TextContent>
      <Heading2>Events</Heading2>
      <Heading3>On Click</Heading3>
      <Box mb={1}>
        <Tag onClick={action('onClick')}>My Tag</Tag>
      </Box>
      <Text size="small" mb={3}>
        (See action logger)
      </Text>
      <Heading3>On Click & On Close</Heading3>
      <Box mb={1}>
        <Tag onClick={action('onClick')} onRemove={action('onRemove')}>
          My Tag
        </Tag>
      </Box>
      <Text size="small">(See action logger)</Text>
    </TextContent>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Functionality',
  () => (
    <TextContent>
      <Heading2>Example</Heading2>
      <Heading3>Tag list</Heading3>
      <Box mb={1}>
        <TagList />
      </Box>
      <Text size="small">(Click label or remove icon)</Text>
    </TextContent>
  ),
  { percy: { skip: true } },
);
