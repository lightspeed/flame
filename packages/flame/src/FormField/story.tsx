import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../Input/Input';
import { Select } from '../Select';
import { Box } from '../Core';
import { Heading3, Text } from '../Text';
import { Autocomplete } from '../Autocomplete';
import { Label } from './FormField';

const stories = storiesOf('Components|FormField', module);

const exampleItems = [
  { value: '1', label: 'Red' },
  {
    value: '2',
    label:
      'Color value with a really really really really long label with a really really really really long label',
  },
  {
    value: '3',
    label: 'ReallyReallyReallyReallyReallyReallyReallyReallyLongWord',
  },
  { value: '4', label: 'Blue' },
  { value: '5', label: 'Black' },
  { value: '6', label: 'Gray' },
  { value: '7', label: 'Yellow' },
];

stories.add('Story', () => (
  <div>
    <Heading3>Using the label component</Heading3>
    <Text>The Label component can be used in conjunction with various inputs.</Text>
    <br />
    <Text>
      Be aware, this label component does not take care of positioning proper position of the
      description of Radio and Checkbox. For that purpose, you may want to use{' '}
      <code>RadioLabel</code> and <code>CheckboxLabel</code>
    </Text>
    <br />
    <Box mb={3}>
      <Label htmlFor="animalname">Animal Name</Label>
      <Input id="animalname" placeholder="Write down an animal name" />
    </Box>
    <Box mb={3}>
      <Label htmlFor="animalname2" description="Just some arbitrary description">
        Animal Name
      </Label>
      <Input id="animalname2" placeholder="Write down an animal name" />
    </Box>
    <Box mb={3}>
      <Label htmlFor="select">Select something</Label>
      <Select id="select">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </Box>
    <Box mb={3}>
      <Label htmlFor="color-input" description="Just some arbitrary description">
        Autocomplete something
      </Label>
      <Autocomplete
        id="color-input"
        name="color-input"
        placeholder="Choose a color"
        inputId="color-input"
        options={exampleItems}
        isClearable={true}
      />
    </Box>
  </div>
));
