import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Text, Heading2 } from '../Text';

import { Switch } from './Switch';
import Readme from './README.md';
import { Group } from '../Group';
import { Button } from '../Button';
import { Box } from '../Core';

const stories = storiesOf('Switch', module).addDecorator(withReadme(Readme));

const Description: React.FC = ({ children }) => (
  <Text fontSize="text-s" mb={1}>
    {children}
  </Text>
);

type State = {
  checked?: boolean;
  disabled?: boolean;
};
class SwitchWrapper extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChecked() {
    this.setState(({ checked }) => ({ checked: !checked }));
  }

  handleDisabled() {
    this.setState(({ disabled }) => ({ disabled: !disabled }));
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return (
      <div>
        <Switch
          id="feature2"
          onChange={this.handleChange}
          disabled={this.state.disabled}
          checked={this.state.checked}
        />
        <br />
        <br />
        <Button onClick={this.handleChecked}>
          {this.state.checked ? <span>Uncheck</span> : <span>Check</span>}
        </Button>{' '}
        <Button onClick={this.handleDisabled}>
          {this.state.disabled ? <span>Enable</span> : <span>Disable</span>}
        </Button>
      </div>
    );
  }
}

stories.add('States', () => (
  <div>
    <Heading2 mb={2}>Switch States</Heading2>
    <Description>Toggle On / Off</Description>
    <Box mb={3}>
      <Switch />
    </Box>
    <Description>Disabled On / Off</Description>
    <Box mb={3}>
      <Group>
        <Switch disabled />
        <Switch checked disabled />
      </Group>
    </Box>
  </div>
));

// eslint-disable-next-line react/no-multi-comp
class ToggleEventsWrapper extends React.Component<{}, { checked?: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    const { checked } = this.state;

    return (
      <Box mb={3}>
        <Group>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="toggle-events">Toggle Events</label>
          <Switch
            id="toggle-events-id"
            name="toggle-events"
            checked={checked}
            onChange={this.handleChange}
            onFocus={action('onFocus')}
            onBlur={action('onBlur')}
          />
        </Group>
        <Text size="small">
          onChange value (checked): <strong>{checked.toString()}</strong>
        </Text>
        <Description>
          Focus + Blur logged inside the <code>ACTION LOGGER</code> panel
        </Description>
      </Box>
    );
  }
}

stories.add(
  'Events',
  () => (
    <div>
      <Heading2 mb={2}>Switch Events</Heading2>
      <Text>
        These examples are using <strong>controlled</strong> components.
      </Text>
      <ToggleEventsWrapper />
      <Box mb={3}>
        <SwitchWrapper />
      </Box>
    </div>
  ),
  { percy: { skip: true } },
);
