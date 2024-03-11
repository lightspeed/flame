import * as React from 'react';
// eslint-disable-next-line
import { action } from '@storybook/addon-actions';

import { Switch } from './Switch';

import { Button } from '../Button';
import { Box } from '../Core';
import { Text, Heading2 } from '../Text';

import { SpacedGroup } from '../../../../.storybook/components/SpacedGroup';
import {
  disableChromaticSnapshots,
  disableDocsStory,
} from '../../../../.storybook/story-modifiers';

export default {
  title: 'Components/Switch',
  component: Switch,
};

const Description: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Text fontSize="text-s" mb={1}>
    {children}
  </Text>
);

const SwitchWrapper = () => {
  const [isChecked, setChecked] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);

  return (
    <div>
      <Switch
        id="feature2"
        onChange={e => setChecked((e as React.ChangeEvent<HTMLInputElement>).target.checked)}
        disabled={isDisabled}
        checked={isChecked}
      />
      <br />
      <br />
      <Button onClick={() => setChecked(s => !s)}>
        {isChecked ? <span>Uncheck</span> : <span>Check</span>}
      </Button>{' '}
      <Button onClick={() => setDisabled(s => !s)}>
        {isDisabled ? <span>Enable</span> : <span>Disable</span>}
      </Button>
    </div>
  );
};

const ToggleEventsWrapper = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Box mb={3}>
      <SpacedGroup>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="toggle-events">Toggle Events</label>
        <Switch
          id="toggle-events-id"
          name="toggle-events"
          checked={checked}
          onChange={() => {
            setChecked(s => !s);
          }}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </SpacedGroup>
      <Text size="small">
        onChange value (checked): <strong>{checked.toString()}</strong>
      </Text>
      <Description>
        Focus + Blur logged inside the <code>ACTION LOGGER</code> panel
      </Description>
    </Box>
  );
};

export const states = () => (
  <div>
    <Heading2 mb={2}>Switch States</Heading2>
    <Description>Toggle On / Off</Description>
    <Box mb={3}>
      <Switch />
    </Box>
    <Description>Disabled On / Off</Description>
    <Box mb={3}>
      <SpacedGroup>
        <Switch disabled />
        <Switch checked disabled />
      </SpacedGroup>
    </Box>
  </div>
);

export const events = () => (
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
);
disableChromaticSnapshots(events);
disableDocsStory(events);
