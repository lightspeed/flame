import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { InputGroup, InputGroupAddon, SpacedGroup } from './index';
import Readme from './README.md';
import { Input } from '../Input';
import { Box } from '../Core';
import { Button } from '../Button';
import { Dropdown, DropdownContent } from '../Dropdown';
import { Icon } from '../Icon';
import { Select } from '../Select';
import { Text, TextLink } from '../Text';
import { Badge } from '../Badge';

const SampleDropdownContent = () => (
  <DropdownContent width="100px">
    <Box my={2}>
      <TextLink href="#">Tasks</TextLink>
    </Box>
    <Box my={2}>
      <TextLink href="#">My account</TextLink>
    </Box>
    <Box my={2}>
      <TextLink href="#" color="danger">
        Logout
      </TextLink>
    </Box>
  </DropdownContent>
);

const stories = storiesOf('Groups', module).addDecorator(withReadme(Readme));

stories.add('Story', () => (
  <div>
    <h3>Input Group</h3>

    <p>
      Input Group will attempt to forward the appropriate border props to the underlying components
      in attempt to glue them together as one seamless component
    </p>

    <h3>Grouping buttons together</h3>
    <Box mb={3}>
      <InputGroup>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </InputGroup>
    </Box>

    <h3>Adding an input to the mix</h3>

    <Box mb={3}>
      <InputGroup>
        <Button>-</Button>
        <Input defaultValue="this is some value" />
        <Button>+</Button>
      </InputGroup>
    </Box>

    <h3>Search bar pattern</h3>

    <Box mb={3}>
      <InputGroup>
        <Input defaultValue="Some arbitrary value" />
        <Button>Submit</Button>
      </InputGroup>
    </Box>

    <h3>Grouping Select</h3>
    <Box mb={3}>
      <InputGroup>
        <Input defaultValue="this is some value" />
        <Select width="inherit">
          <option>cm</option>
          <option>m</option>
          <option>km</option>
        </Select>
      </InputGroup>
    </Box>

    <h3>Using the Dropdown component</h3>
    <Box mb={3}>
      <InputGroup>
        <Input defaultValue="this is some value" />
        <Dropdown buttonContent="Menu">
          <SampleDropdownContent />
        </Dropdown>
      </InputGroup>
    </Box>

    <h3>Resizing components</h3>

    <p>
      Resizing is entirely based on the underlying components. <code>InputGroup</code> will not
      handle any sizing.
    </p>

    <p>
      Should the component support it, you may use either the <code>width</code> or{' '}
      <code>flex</code> props.
    </p>

    <Box mb={3}>
      <InputGroup>
        <Input width="inherit" defaultValue="Some arbitrary value" />
        <Button>Submit</Button>
      </InputGroup>
    </Box>

    <Box mb={3}>
      <InputGroup>
        <Button width={1 / 3}>Action 1</Button>
        <Button width={1 / 3}>Action 2</Button>
        <Button width={1 / 3}>Action 3</Button>
      </InputGroup>
    </Box>
  </div>
));

stories.add('Input Group Addon', () => (
  <div>
    <h3>Input Group Addon</h3>

    <Box mb={3}>
      <InputGroup>
        <InputGroupAddon>
          <Icon name="customers" />
        </InputGroupAddon>
        <Input width="inherit" defaultValue="Some arbitrary value" />
        <Button>Submit</Button>
      </InputGroup>
    </Box>

    <Box mb={3}>
      <InputGroup>
        <Input width="inherit" defaultValue="Some arbitrary value" />
        <InputGroupAddon>
          <Icon name="customers" />
        </InputGroupAddon>
        <Button>Submit</Button>
      </InputGroup>
    </Box>

    <h3>Positioning Addon</h3>
    <p>
      Positioning is done via flex properties. This is because <code>InputGroupAddon</code> extends
      the <code>Flex</code>component
    </p>
    <Box mb={3}>
      <InputGroup>
        <InputGroupAddon width="200px" justifyContent="flex-start">
          <Text size="small">Fixed width of 200px</Text>
        </InputGroupAddon>
        <Input width="inherit" defaultValue="Some arbitrary value" />
      </InputGroup>
    </Box>

    <Box mb={3}>
      <InputGroup>
        <InputGroupAddon width="200px" justifyContent="center">
          <Text size="small">Fixed width of 200px</Text>
        </InputGroupAddon>
        <Input width="inherit" defaultValue="Some arbitrary value" />
      </InputGroup>
    </Box>

    <Box mb={3}>
      <InputGroup>
        <InputGroupAddon width="200px" justifyContent="flex-end">
          <Text size="small">Fixed width of 200px</Text>
        </InputGroupAddon>
        <Input width="inherit" defaultValue="Some arbitrary value" />
      </InputGroup>
    </Box>
  </div>
));

stories.add('Spaced Group', () => (
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
