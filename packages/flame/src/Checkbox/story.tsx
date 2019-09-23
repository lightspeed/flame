import React, { ChangeEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Heading2, Heading3, TextContent } from '../Text';
import { Box } from '../Core';

import { Checkbox, CheckboxLabel, CheckboxDescription, CheckboxProps } from './Checkbox';
import Readme from './README.md';

const stories = storiesOf('Checkbox', module).addDecorator(withReadme(Readme));

const noop = () => {};

class StatefulCheckbox extends React.Component<CheckboxProps, { checked?: boolean }> {
  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      checked: props.checked,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  render() {
    return (
      <Checkbox
        {...(this.props as any)}
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    );
  }
}

(StatefulCheckbox as any).defaultProps = {
  checked: false,
};

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

stories.add('Story', () => (
  <div>
    <TextContent>
      <Heading2>Checkbox types</Heading2>
      <Heading3>Checkbox with label</Heading3>
      <Box mb={3}>
        <StatefulCheckbox id="simple" label="Label" />
      </Box>
      <Heading3>Checkbox with label and description</Heading3>
      <Box mb={3}>
        <StatefulCheckbox id="checked" label="Label" description="Description text" checked />
      </Box>
      <Heading3>Checkbox with long label and description in a 50% container</Heading3>
      <Box mb={3} style={{ width: '50%' }}>
        <StatefulCheckbox
          id="longLabel"
          label="Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label Long Label"
          description="Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description"
          indeterminate
        />
      </Box>
      <Heading3>Using custom elements</Heading3>
      <Box mb={3}>
        <StatefulCheckbox
          id="longLabel"
          label={() => (
            <CheckboxLabel ml="4" width="100%" color="red" fontWeight="normal">
              Customizing the base exported `CheckboxLabel`
            </CheckboxLabel>
          )}
          description={() => (
            <CheckboxDescription color="blue" ml={4} mt={1} size="large">
              Customizing the base exported `CheckboxDescription`
            </CheckboxDescription>
          )}
        />
      </Box>
    </TextContent>

    <TextContent>
      <Heading2>Checkbox states</Heading2>

      <Box mb={3}>
        <StatefulCheckbox id="unchecked" label="Unchecked" />
      </Box>
      <Box mb={3}>
        <StatefulCheckbox id="indeterminate" label="Indeterminate" indeterminate />
      </Box>
      <Box mb={3}>
        <StatefulCheckbox id="checked" label="Checked" checked />
      </Box>
      <Box mb={3}>
        <StatefulCheckbox id="disabled" label="Disabled" disabled />
      </Box>
      <Box mb={3}>
        <StatefulCheckbox
          id="indeterminate-disabled"
          label="Indeterminate Disabled"
          indeterminate
          disabled
        />
      </Box>
      <Box mb={3}>
        <StatefulCheckbox id="checked-disabled" label="Checked Disabled" checked disabled />
      </Box>
    </TextContent>
  </div>
));

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
  { percy: { skip: true } },
);
