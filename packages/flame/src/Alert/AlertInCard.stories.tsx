import * as React from 'react';

import { AlertInCard } from './AlertInCard';
import { Card, CardSection } from '../Card';
import { Heading3 } from '../Text';
import { Box } from '../Core';

export default {
  title: 'Components|AlertInCard',
  component: AlertInCard,
};

export const Playground = (args: any) => <AlertInCard {...args}>This is an alert</AlertInCard>;

const alertTypes = ['info', 'warning', 'success', 'danger'] as const;

export const alertsInCard = () => {
  return (
    <div>
      <h2>Alert in card types</h2>
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
      <h2>Alert in card types (no close button)</h2>
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
    </div>
  );
};

alertsInCard.story = {
  name: 'Alert in Card',
};
