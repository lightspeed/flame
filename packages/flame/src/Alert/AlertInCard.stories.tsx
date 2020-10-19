import * as React from 'react';
import { AlertInCard } from './AlertInCard';

import { Box } from '../Core';
import { Card, CardSection } from '../Card';
import { Heading3 } from '../Text';

export default {
  title: 'Components/Alert in Card',
  component: AlertInCard,
};

const alertTypes = ['info', 'warning', 'success', 'danger'];

export const types = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
