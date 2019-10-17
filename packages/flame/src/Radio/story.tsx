import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Text, Heading2, Heading3, TextContent } from '../Text';
import RadioWrapper from './examples';
import { Radio, RadioLabel, RadioDescription } from './Radio';
import { Box } from '../Core';
import { percyBreakpoints, percySkip } from '../../../../stories/helpers/percy';

import Readme from './README.md';

const stories = storiesOf('Radio', module).addDecorator(withReadme(Readme));

stories.add(
  'Story',
  () => (
    <div>
      <TextContent>
        <Heading2>Radio types</Heading2>
        <Heading3>Radio with label</Heading3>
        <Box mb={3}>
          <Radio id="simple" label="Label" checked={false} onChange={() => {}} />
        </Box>
        <Heading3>Radio with label and description</Heading3>
        <Box mb={3}>
          <Radio
            id="checked"
            label="Label"
            description="Description text"
            checked
            onChange={() => {}}
          />
        </Box>
        <Heading3>Radio with long label and description in a 50% container</Heading3>
        <Box mb={3} style={{ width: '50%' }}>
          <Radio
            id="longLabel"
            label="Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label"
            description="Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description"
            checked={false}
            onChange={() => {}}
          />
        </Box>
        <Heading3>Using custom elements</Heading3>
        <Box mb={3}>
          <Radio
            id="longLabel"
            label={() => (
              <RadioLabel ml="4" width="100%" color="red" fontWeight="normal">
                Customizing the base exported `RadioLabel`
              </RadioLabel>
            )}
            description={() => (
              <RadioDescription color="blue" ml={4} mt={1} size="large">
                Customizing the base exported `RadioDescription`
              </RadioDescription>
            )}
            checked={false}
            onChange={() => {}}
          />
        </Box>
      </TextContent>
      <TextContent>
        <Heading2>Radio states</Heading2>
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
          <Radio
            id="checked-disabled"
            label="Checked Disabled"
            checked
            onChange={() => {}}
            disabled
          />
        </Box>
      </TextContent>
    </div>
  ),
  { ...percyBreakpoints },
);

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
  { ...percySkip },
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
  { ...percySkip },
);
