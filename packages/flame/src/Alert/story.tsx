import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Alert } from './Alert';
import { AlertInCard } from './AlertInCard';
import { AlertIcons } from './AlertIcons';
import { Card, CardSection } from '../Card';
import { Text, Heading2, Heading3 } from '../Text';
import { Box } from '../Core';
import { IconApple } from '../Icon/Apple';
import Readme from './README.md';

const stories = storiesOf('Components|Alert', module).addDecorator(withReadme(Readme));

const alertTypes = ['info', 'warning', 'success', 'danger'];
const Alerts = () => (
  <React.Fragment>
    <Heading2 mb={2}>Alert Types</Heading2>
    {alertTypes.map(type => {
      return (
        <Alert
          key={type}
          type={type}
          title={`${type[0].toUpperCase().concat(type.slice(1))}`}
          icon={<AlertIcons type={type} />}
          mb={2}
        >
          <Text as="p" m={0}>
            Description of alert.
          </Text>
        </Alert>
      );
    })}
    <Heading2 mb={2}>Alert Types (no close button)</Heading2>
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
          <Text as="p" m={0}>
            Description of alert with no close button.
          </Text>
        </Alert>
      );
    })}
  </React.Fragment>
);

const AlertsInCard = () => (
  <React.Fragment>
    <Heading2 mb={2}>Alert in card types</Heading2>
    {alertTypes.map(type => {
      return (
        <Box mb={2}>
          <Card>
            <CardSection>
              <Heading3>This is a card</Heading3>
              <AlertInCard key={type} type={type}>
                This is an alert of type {`"${type}"`} within in a card
              </AlertInCard>
            </CardSection>
          </Card>
        </Box>
      );
    })}
    <Heading2 mb={2}>Alert in card types (no close button)</Heading2>
    {alertTypes.map(type => {
      return (
        <Box mb={2}>
          <Card>
            <CardSection>
              <Heading3>This is a card</Heading3>
              <AlertInCard key={type} type={type} noCloseBtn>
                This is an alert of type {`"${type}"`} within in a card, without a button
              </AlertInCard>
            </CardSection>
          </Card>
        </Box>
      );
    })}
  </React.Fragment>
);

stories.add('Story', () => {
  return (
    <div>
      <Alerts />
      <AlertsInCard />
    </div>
  );
});

stories.add('to be deprecated feature', () => {
  return (
    <div>
      <Box mb={2}>
        Custom icons will be deprecated. Instead, we will automatically assign icons (regardless of
        the presence of the icon prop) to an alert starting from next major version.
      </Box>
      {alertTypes.map(type => {
        return (
          <Alert
            key={type}
            type={type}
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
});
