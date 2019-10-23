import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { SpacedGroup } from './index';
import Readme from './README.md';
import { Input } from '../Input';
import { Button } from '../Button';
import { Badge } from '../Badge';

const stories = storiesOf('SpacedGroup', module).addDecorator(withReadme(Readme));

stories.add('Story', () => (
  <div>
    <h3>Spaced Group</h3>

    <SpacedGroup mb={3}>
      <Button>-</Button>
      <Input defaultValue="0" />
      <Button>+</Button>
    </SpacedGroup>

    <SpacedGroup mb={3}>
      <Input placeholder="Country" />
      <Input placeholder="State" />
      <Input placeholder="City" />
    </SpacedGroup>

    <SpacedGroup mb={3}>
      <Button>First Button</Button>
      <Button>Second Button</Button>
      <Button>Third Button</Button>
    </SpacedGroup>

    <SpacedGroup mb={3}>
      <Badge type="success">Success</Badge>
      <Badge type="info">Info</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="important">Important</Badge>
    </SpacedGroup>

    <h3>Spaced Group - Column layout</h3>

    <SpacedGroup flexDirection="column">
      <Button width="100%">First Button</Button>
      <Button width="100%">Second Button</Button>
      <Button width="100%">Third Button</Button>
    </SpacedGroup>
  </div>
));
