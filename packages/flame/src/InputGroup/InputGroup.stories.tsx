import * as React from 'react';

import { InputGroup, InputGroupAddon } from './index';
import { Input } from '../Input';
import { Box } from '../Core';
import { Button } from '../Button';
import { Dropdown, DropdownContent } from '../Dropdown';
import { Icon } from '../Icon';
import { Select } from '../Select';
import { Text, TextLink } from '../Text';

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

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
};

export const story = () => (
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

    <h3>Adding an input to the mix</h3>

    <Box mb={3}>
      <InputGroup>
        <Button>-</Button>
        <Input defaultValue="this is some value" />
        <Button>+</Button>
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
);

export const inputGroupAddon = () => (
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

    <h3>Custom bg/border/color Addon</h3>
    <p>
      Use <code>bg</code>, <code>border</code> and <code>color</code> Styled System props if
      customization is needed.
    </p>
    <Box mb={3}>
      <InputGroup>
        <InputGroupAddon bg="gray-300" color="white" borderColor="gray-500">
          <Icon name="customers" />
        </InputGroupAddon>
        <Input width="inherit" defaultValue="Some arbitrary value" />
        <Button>Submit</Button>
      </InputGroup>
    </Box>
  </div>
);
