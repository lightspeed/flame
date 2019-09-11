import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { TextContent, Heading3 } from '../Text';

import SelectExample from './examples';
import Readme from './README.md';

const stories = storiesOf('Select', module).addDecorator(withReadme(Readme));

const bottomSpace = 'cr-mb-1';

stories.add('Story', () => (
  <TextContent>
    <Heading3>Default</Heading3>
    <SelectExample className={bottomSpace}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </SelectExample>
    <Heading3>Option variants</Heading3>
    <SelectExample className={bottomSpace}>
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
    </SelectExample>
    <Heading3>Disabled</Heading3>
    <SelectExample disabled className={bottomSpace}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </SelectExample>
  </TextContent>
));
