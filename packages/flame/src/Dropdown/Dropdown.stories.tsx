import * as React from 'react';

import { Dropdown, DropdownContent, useDropdown } from './Dropdown';

import { Box, Flex } from '../Core';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { Divider } from '../Divider';
import { Button } from '../Button';
import { Select } from '../Select';
import { Heading3, TextLink } from '../Text';

import {
  disableDocsStory,
  disableChromaticSnapshots,
} from '../../../../.storybook/story-modifiers';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

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

const DropdownContentWithHook = () => {
  const { closeDropdown } = useDropdown();

  return (
    <DropdownContent width="200px">
      <Button onClick={closeDropdown}>Close with a hook!</Button>
    </DropdownContent>
  );
};

export const story = () => (
  <div>
    <h3>Story</h3>

    <h4>Dropdown</h4>
    <Flex justifyContent="flex-start">
      <Dropdown buttonContent="Menu">
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Dropdown - Menu on the right</h4>
    <Flex justifyContent="flex-start">
      <Dropdown buttonContent="Menu" placement="right-start">
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Dropdown - Menu on the left</h4>
    <Flex justifyContent="flex-end">
      <Dropdown buttonContent="Menu" placement="left-start">
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Dropdown - Menu on the top</h4>
    <Flex justifyContent="flex-start">
      <Dropdown buttonContent="Menu" placement="top-start">
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Dropdown - Content positioned right</h4>
    <Flex justifyContent="flex-end">
      <Dropdown buttonContent="Menu" placement="end">
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Dropdown - Initially Open</h4>
    <Flex justifyContent="flex-start">
      <Dropdown buttonContent="Menu" initiallyOpen>
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Using an Icon</h4>
    <Flex>
      <Dropdown
        buttonContent={
          <span>
            <Icon name="tools" />
            &nbsp;&nbsp;Customize
          </span>
        }
      >
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Changing the button style</h4>
    <Flex>
      <Dropdown buttonContent="Secondary Menu" variant="secondary" fill>
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <h4>Closing the dropdown from within</h4>
    <Flex>
      <Dropdown buttonContent="Menu">
        {(close: any) => (
          <DropdownContent width="200px">
            <Button onClick={close}>Click me to close</Button>
          </DropdownContent>
        )}
      </Dropdown>
    </Flex>

    <h4>Closing a dropdown using hooks</h4>
    <Dropdown buttonContent="Menu">
      <DropdownContentWithHook />
    </Dropdown>

    <h4>With some content underneath</h4>
    <Flex flexDirection="column">
      <Dropdown buttonContent="Block menu">
        <SampleDropdownContent />
      </Dropdown>
      <Box mt={1}>
        <Input label="Sample Input" placeholder="The dropdown menu should be over me" />
      </Box>
    </Flex>

    <h4>Dropdown - Complex content layout</h4>
    <Flex flexDirection="column">
      <Dropdown buttonContent="Filters">
        <DropdownContent width="300px">
          <Heading3>Amount</Heading3>
          <Flex justifyContent="space-between" alignItems="center" mt={2}>
            <Box mr={1}>
              <Select>
                <option>is smaller than...</option>
                <option>is equal to...</option>
                <option>is bigger than...</option>
              </Select>
            </Box>
            <Box>
              <Input placeholder="$" />
            </Box>
          </Flex>
        </DropdownContent>
        <Divider />
        <DropdownContent>
          <Flex justifyContent="space-between" alignItems="center">
            <TextLink>Reset</TextLink>
            <Button variant="primary" fill>
              Apply
            </Button>
          </Flex>
        </DropdownContent>
      </Dropdown>
    </Flex>
  </div>
);
disableChromaticSnapshots(story);

export const storyForPercy = () => (
  <div>
    <Flex justifyContent="flex-start">
      <Dropdown buttonContent="Menu" placement="left-start" initiallyOpen>
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <Flex justifyContent="flex-end" mt={8}>
      <Dropdown buttonContent="Menu" placement="right-start" initiallyOpen>
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <Flex justifyContent="flex-start" mt={8}>
      <Dropdown buttonContent="Menu" placement="top-start" initiallyOpen>
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <Flex justifyContent="flex-start" mt={8}>
      <Dropdown buttonContent="Menu" initiallyOpen>
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <Flex justifyContent="flex-end" mt={8}>
      <Dropdown buttonContent="Menu" placement="end" initiallyOpen>
        <SampleDropdownContent />
      </Dropdown>
    </Flex>

    <Flex flexDirection="column" mt={8}>
      <Dropdown buttonContent="Filters" initiallyOpen>
        <DropdownContent width="300px">
          <Heading3>Amount</Heading3>
          <Flex justifyContent="space-between" alignItems="center" mt={2}>
            <Box mr={1}>
              <Select>
                <option>is smaller than...</option>
                <option>is equal to...</option>
                <option>is bigger than...</option>
              </Select>
            </Box>
            <Box>
              <Input placeholder="$" />
            </Box>
          </Flex>
        </DropdownContent>
        <Divider />
        <DropdownContent>
          <Flex justifyContent="space-between" alignItems="center">
            <TextLink>Reset</TextLink>
            <Button variant="primary" fill>
              Apply
            </Button>
          </Flex>
        </DropdownContent>
      </Dropdown>
    </Flex>
  </div>
);
disableDocsStory(storyForPercy);
