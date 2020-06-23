import * as React from 'react';

import { Alert } from './Alert';
import { AlertIcons } from './AlertIcons';
import { Text } from '../Text';
import { IconApple } from '../Icon/Apple';

export default {
  title: 'Components|Alert',
  component: Alert,
  includeStories: ['ToBeDeprecatedFeature', 'types'],
};

const alertTypes = ['info', 'warning', 'success', 'danger'] as const;

export const types = () => {
  return (
    <div>
      <h2>Alert Types</h2>
      {alertTypes.map(type => {
        return (
          <Alert
            key={type}
            type={type}
            title={`${type[0].toUpperCase().concat(type.slice(1))}`}
            mb={2}
          >
            Description of alert.
          </Alert>
        );
      })}
      <h2>Alert Types (no close button)</h2>
      {alertTypes.map(type => {
        return (
          <Alert
            key={type}
            type={type}
            title={`${type[0].toUpperCase().concat(type.slice(1))}`}
            icon={<AlertIcons type={type} />}
            mb={2}
            noCloseBtn
          >
            Description of alert with no close button.
          </Alert>
        );
      })}
    </div>
  );
};

types.story = {
  name: 'Alert',
};

export const ToBeDeprecatedFeature = () => {
  return (
    <div>
      <p>
        Custom icons will be deprecated. Instead, we will automatically assign icons (regardless of
        the presence of the icon prop) to an alert starting from next major version.
      </p>
      {alertTypes.map(type => {
        return (
          <Alert
            key={type}
            type={type as any}
            title={`${type[0].toUpperCase().concat(type.slice(1))}`}
            icon={<IconApple />}
            mb={2}
          >
            <Text as="p" m={0}>
              Description of alert.
            </Text>
          </Alert>
        );
      })}
    </div>
  );
};

ToBeDeprecatedFeature.story = {
  name: 'To be deprecated feature',
};
