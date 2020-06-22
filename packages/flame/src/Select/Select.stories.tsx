import * as React from 'react';

import { TextContent, Heading3 } from '../Text';
import { Box } from '../Core';

import { Select } from './index';

export default {
  title: 'Components|Select',
  component: Select,
};

export const story = () => (
  <TextContent>
    <Heading3>Default</Heading3>
    <Box mb={1}>
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </Box>
    <Heading3>Option variants</Heading3>
    <Box mb={1}>
      <Select>
        <option value="1">Option 1</option>
        <option value="2" disabled>
          Option 2 (disabled)
        </option>
        <option value="3">Option 3</option>
        <optgroup label="Option group">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
      </Select>
    </Box>
    <Heading3>Disabled</Heading3>
    <Box mb={1}>
      <Select disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </Box>
  </TextContent>
);
