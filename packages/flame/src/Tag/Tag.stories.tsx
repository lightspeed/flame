import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { Tag } from './Tag';
import { Box } from '../Core';
import { Text, TextContent, Heading2, Heading3 } from '../Text';
import TagList from './examples/TagList';
import { Icon } from '../Icon';
import { skipPercy } from '../../.storybook/utils/skip-percy';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const types = () => (
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
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Box as="span" ml={1}>
          🍊 🍋 🍌 🍉 🍇
        </Box>
      </Tag>
    </Box>
  </TextContent>
);

export const sizes = () => (
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
);
skipPercy(sizes);

export const events = () => (
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
);
skipPercy(events);

export const functionality = () => (
  <TextContent>
    <Heading2>Example</Heading2>
    <Heading3>Tag list</Heading3>
    <Box mb={1}>
      <TagList />
    </Box>
    <Text size="small">(Click label or remove icon)</Text>
  </TextContent>
);
skipPercy(events);
