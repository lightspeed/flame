import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Tag } from './Tag';
import Readme from './README.md';
import { Text, TextContent, Heading2, Heading3 } from '../Text';
import TagList from './examples/TagList';
import { Icon } from '../Icon';

const stories = storiesOf('Tag', module).addDecorator(withReadme(Readme));
const bottomSpace = 'cr-mb-3';
const bottomSpaceAction = 'cr-mb-1';

stories.add('Types', () => (
  <TextContent>
    <Heading3>Small</Heading3>
    <div className={bottomSpace}>
      <Tag size="small" onRemove={() => {}}>
        My Tag
      </Tag>
    </div>
    <Heading3>Default</Heading3>
    <div className={bottomSpace}>
      <Tag>My Tag</Tag>
    </div>
    <Heading3>Dismissible</Heading3>
    <div className={bottomSpace}>
      <Tag onRemove={() => {}}>My Tag</Tag>
    </div>
    <Heading3>Long text</Heading3>
    <div className={bottomSpace}>
      <Tag onRemove={() => {}}>
        Long tag on <br /> multiple lines
      </Tag>
    </div>
    <Heading3>Any element as child</Heading3>
    <div className={bottomSpace}>
      <Tag onRemove={() => {}}>
        <Icon name="small-chevron-down" color="snow" className="cr-mr-1" />
        🍊 🍋 🍌 🍉 🍇
      </Tag>
    </div>
  </TextContent>
));

stories.add(
  'Sizes',
  () => (
    <TextContent>
      <Heading2>Tag</Heading2>
      <Heading3>Small</Heading3>
      <div className={bottomSpace}>
        <Tag size="small" onRemove={() => {}}>
          My Tag
        </Tag>
      </div>
      <Heading3>Normal</Heading3>
      <div className={bottomSpace}>
        <Tag size="normal" onRemove={() => {}}>
          My Tag
        </Tag>
      </div>
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
      <div className={bottomSpaceAction}>
        <Tag onClick={action('onClick')}>My Tag</Tag>
      </div>
      <Text size="small" className={bottomSpace}>
        (See action logger)
      </Text>
      <Heading3>On Click & On Close</Heading3>
      <div className={bottomSpaceAction}>
        <Tag onClick={action('onClick')} onRemove={action('onRemove')}>
          My Tag
        </Tag>
      </div>
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
      <div className={bottomSpaceAction}>
        <TagList />
      </div>
      <Text size="small">(Click label or remove icon)</Text>
    </TextContent>
  ),
  { percy: { skip: true } },
);
