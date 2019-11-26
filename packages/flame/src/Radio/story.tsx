import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Text, Heading2, Heading3, TextContent } from '../Text';
import RadioWrapper from './examples';
import { Radio, BaseRadio, RadioLabel } from './Radio';
import { Box } from '../Core';

import Readme from './README.md';

const stories = storiesOf('Components|Radio', module).addDecorator(withReadme(Readme));

stories.add('Story', () => (
  <div>
    <Heading3 mb={2}>Form Radio</Heading3>
    <Box mb={1}>
      <Radio name="animal_radio" id="radio_animal_1" label="Lion" />
    </Box>
    <Box mb={1}>
      <Radio name="animal_radio" id="radio_animal_2" label="Tiger" />
    </Box>
    <Box mb={1}>
      <Radio name="animal_radio" id="radio_animal_3" label="Bear" />
    </Box>
    <Box mb={1}>
      <Radio name="animal_radio" id="radio_animal_4" label="Lama" disabled />
    </Box>

    <Heading3 mb={2}>Radio with label and description</Heading3>
    <Box mb={3}>
      <Radio
        name="radiolabelanddescription"
        id="radiolabelanddescription"
        label="Label"
        description="Description text"
        checked={false}
      />
    </Box>

    <Heading3 mb={2}>Radio with long label and description in a 50% container</Heading3>
    <Box mb={3} style={{ width: '50%' }}>
      <Radio
        name="radiolong"
        id="radiolong"
        label="Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label"
        description="Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description"
        checked={false}
      />
    </Box>
    <Heading3 mb={2}>Radio with custom label and description</Heading3>
    <Box mb={3}>
      <Radio
        name="radio-custom"
        id="radio-custom"
        checked={false}
        label={<Text color="red">Customizing the radio label</Text>}
        description={
          <Text color="blue" fontSize="large" mt={2}>
            Customizing the radio label description
          </Text>
        }
      />
    </Box>

    <Heading3 mb={2}>Radio states</Heading3>
    <Box mb={3}>
      <Radio id="unchecked" label="Unchecked" checked={false} onChange={() => {}} />
    </Box>
    <Box mb={3}>
      <Radio id="checked" label="Checked" checked onChange={() => {}} />
    </Box>
    <Box mb={3}>
      <Radio id="disabled" label="Disabled" disabled checked={false} onChange={() => {}} />
    </Box>
    <Box mb={3}>
      <Radio id="checked-disabled" label="Checked Disabled" checked onChange={() => {}} disabled />
    </Box>
  </div>
));

stories.add('Rebuilding using the base components', () => (
  <div>
    <TextContent>
      <Heading2>Using BaseRadio</Heading2>
      <Heading3>Radio with label</Heading3>
      <Box mb={3}>
        <Text>To add a label and description, we can use the FormField component</Text>
        <RadioLabel htmlFor="radiolabel">
          <BaseRadio id="radiolabel" />
          Label
        </RadioLabel>
      </Box>
      <Box mb={3} style={{ width: '50%' }}>
        <RadioLabel
          htmlFor="radiolong"
          description="Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description"
        >
          <BaseRadio id="radiolong" checked={false} onChange={() => {}} />
          Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label
          Long Label
        </RadioLabel>
      </Box>
      <Heading3>Using custom elements</Heading3>
    </TextContent>
    <TextContent>
      <Heading2>Radio states</Heading2>
      <Box mb={3}>
        <RadioLabel htmlFor="unchecked">
          <BaseRadio id="unchecked" checked={false} />
          Unchecked
        </RadioLabel>
      </Box>
      <Box mb={3}>
        <RadioLabel htmlFor="checked">
          <BaseRadio id="checked" checked />
          Checked
        </RadioLabel>
      </Box>
      <Box mb={3}>
        <RadioLabel htmlFor="disabled">
          <BaseRadio id="disabled" disabled />
          <Text color="disabled">Disabled</Text>
        </RadioLabel>
      </Box>
      <Box mb={3}>
        <RadioLabel htmlFor="checked-disabled">
          <BaseRadio id="checked-disabled" disabled checked />
          <Text color="disabled">Checked Disabled</Text>
        </RadioLabel>
      </Box>
    </TextContent>
  </div>
));

stories.add(
  'Uncontrolled state',
  () => (
    <TextContent>
      <Heading2>Uncontrolled Radio states</Heading2>
      <Box mb={3}>
        <Radio id="option_1" name="test" label="Lion" />
      </Box>
      <Box mb={3}>
        <Radio id="option_2" name="test" label="Tiger" />
      </Box>
      <Box mb={3}>
        <Radio id="option_3" name="test" label="Bear" />
      </Box>
    </TextContent>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Events',
  () => (
    <TextContent>
      <Heading2>Radio events</Heading2>
      <Box mb={3}>
        <Text as="div" fontWeight="bold" mb={1}>
          Input with onChange event
        </Text>
        <Radio
          id="onChange"
          label="Click me"
          onChange={action('onChange')}
          checked={false}
          className="cr-mb-1"
        />
        <Text as="div" size="small" color="gray-300">
          (See action logger)
        </Text>
      </Box>
      <Box mb={3}>
        <Text as="div" size="small" fontWeight="bold" mb={1}>
          Input with onFocus & onBlur events
        </Text>
        <Radio
          id="onFocusOnBlur"
          label="Click me"
          value="Test"
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
          onChange={() => {}}
          checked
          className="cr-mb-1"
        />
        <Text as="div" size="small" color="gray-300">
          (See action logger)
        </Text>
      </Box>
      <Box mb={3}>
        <Text as="div" size="small" fontWeight="bold" mb={1}>
          Input with state management
        </Text>
        <RadioWrapper action={action('onChange')} />
        <Text as="div" size="small" color="gray-300">
          (See action logger)
        </Text>
      </Box>
    </TextContent>
  ),
  { percy: { skip: true } },
);
