import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Text, TextContent, Heading2 } from '../Text';

import { Switch } from './Switch';
import Readme from './README.md';
import { Group } from '../Group';
import { Button } from '../Button';

import spacing from '../../../flame-tokens/partials/_spacing.scss';

const stories = storiesOf('Switch', module).addDecorator(withReadme(Readme));
const bottomSpace = spacing[`cr-mb-3`];
const descriptionClasses = 'cr-text-s cr-gray-300 cr-mb-1';

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
  <TextContent>
    <Heading2>Switch States</Heading2>
    <div className={descriptionClasses}>Toggle On / Off</div>
    <div className={bottomSpace}>
      <Switch />
    </div>
    <div className={descriptionClasses}>Disabled On / Off</div>
    <div className={bottomSpace}>
      <Group>
        <Switch disabled />
        <Switch checked disabled />
      </Group>
    </div>
  </TextContent>
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
      <div className={bottomSpace}>
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
        <div className={descriptionClasses}>
          Focus + Blur logged inside the <code>ACTION LOGGER</code> panel
        </div>
      </div>
    );
  }
}

stories.addWithPercyOptions('Events', { skip: true }, () => (
  <TextContent>
    <Heading2>Switch Events</Heading2>
    <Text>
      These examples are using <strong>controlled</strong> components.
    </Text>
    <ToggleEventsWrapper />
    <div className={bottomSpace}>
      <SwitchWrapper />
    </div>
  </TextContent>
));
