import React, { ChangeEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Text, Heading2, Heading3, TextContent } from '../Text';
import { Box } from '../Core';
import { percyBreakpoints, percySkip } from '../../../../stories/helpers/percy';

import { Checkbox } from './Checkbox';
import Readme from './README.md';

const stories = storiesOf('Checkbox', module).addDecorator(withReadme(Readme));

const noop = () => {};

// eslint-disable-next-line react/no-multi-comp
class CheckBoxWrapper extends React.Component<{}, { checked: boolean; indeterminate: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
      indeterminate: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickIndeterminate = this.handleClickIndeterminate.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ checked: !prevState.checked, indeterminate: false }));
  }

  handleClickIndeterminate() {
    this.setState({ checked: false, indeterminate: true });
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return (
      <div>
        <Checkbox
          id="simple"
          label="Input with parent shared state"
          description="(click the buttons below to change state)"
          checked={this.state.checked}
          indeterminate={this.state.indeterminate}
          onChange={this.handleChange}
        />
        <br />
        <button type="button" onClick={this.handleClick}>
          {this.state.checked && <span>Uncheck</span>}
          {!this.state.checked && <span>Check</span>}
        </button>
        &nbsp;
        <button type="button" onClick={this.handleClickIndeterminate}>
          Set indeterminate
        </button>
      </div>
    );
  }
}
stories.add(
  'Story',
  () => (
    <div>
      <TextContent>
        <Heading2>Checkbox types</Heading2>
        <Heading3>Checkbox with label</Heading3>
        <Box mb={3}>
          <Checkbox id="simple" label="Label" />
        </Box>
        <Heading3>Checkbox with label and description</Heading3>
        <Box mb={3}>
          <Checkbox id="description" label="Label" description="Description text" />
        </Box>
        <Heading3>Checkbox with long label and description in a 50% container</Heading3>
        <Box mb={3} style={{ width: '50%' }}>
          <Checkbox
            id="longdescription"
            label="Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label"
            description="Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description"
          />
        </Box>
        <Heading3>Using custom elements</Heading3>
        <Box mb={3}>
          <Checkbox
            id="customlabel"
            label={<Text color="red">Customizing the base exported `CheckboxLabel`</Text>}
            description={
              <Text color="blue" fontSize="large" mt={2}>
                Customizing the base exported `CheckboxDescription`
              </Text>
            }
          />
        </Box>
      </TextContent>

      <TextContent>
        <Heading2>Checkbox states</Heading2>
        <Box mb={3}>
          <Checkbox id="unchecked" label="Unchecked" checked={false} />
        </Box>
        <Box mb={3}>
          <Checkbox id="indeterminate" label="Indeterminate" indeterminate />
        </Box>
        <Box mb={3}>
          <Checkbox id="checked" label="Checked" checked />
        </Box>
        <Box mb={3}>
          <Checkbox id="disabled" label="Disabled" disabled />
        </Box>
        <Box mb={3}>
          <Checkbox
            id="indeterminate-disabled"
            label="Indeterminate Disabled"
            disabled
            indeterminate
          />
        </Box>
        <Box mb={3}>
          <Checkbox id="checked-disabled" label="Checked Disabled" disabled checked />
        </Box>
      </TextContent>
    </div>
  ),

  {
    ...percyBreakpoints,
  },
);

stories.add(
  'Events',
  () => (
    <div>
      <TextContent>
        <Heading2>Checkbox events</Heading2>
        <Box mb={3}>
          <Checkbox
            id="onChange"
            label="Input with onChange event"
            description="(see Action Logger)"
            onChange={action('onChange')}
          />
        </Box>
        <Box mb={3}>
          <Checkbox
            id="onFocusOnBlur"
            label="Input with onFocus & onBlur events"
            description="(see Action Logger)"
            value="Test"
            onFocus={action('onFocus')}
            onBlur={action('onBlur')}
            checked
            onChange={noop}
          />
        </Box>
        <Box mb={3}>
          <CheckBoxWrapper />
        </Box>
      </TextContent>
    </div>
  ),
  { ...percySkip },
);
