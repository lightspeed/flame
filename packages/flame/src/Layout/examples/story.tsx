import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { AnnotatedLayout } from '../index';
import Readme from '../README.md';

import { Card, CardSection } from '../../Card';
import { Divider } from '../../Divider';
import { Box, Flex } from '../../Core';
import { Button } from '../../Button';
import { Text } from '../../Text';

const stories = storiesOf('Layout', module).addDecorator(withReadme(Readme));

const FakeContent = () => (
  <React.Fragment>
    <Box mb={3}>
      <Card>
        <CardSection>
          <Flex justifyContent="space-between">
            <Text fontWeight="bold">Settlement ID</Text>
            <Text>test 12345-aef</Text>
          </Flex>
        </CardSection>

        <Divider />

        <CardSection>
          <Text fontWeight="bold">Shops</Text>
        </CardSection>
      </Card>
    </Box>

    <Card>
      <CardSection>
        <Flex justifyContent="space-between">
          <Text size="small">Sales</Text>
          <Text size="small">420.00$</Text>
        </Flex>
      </CardSection>

      <Divider />

      <CardSection>
        <Flex justifyContent="space-between">
          <Text size="small">Refunds</Text>
          <Text size="small">13.37$</Text>
        </Flex>
      </CardSection>

      <Divider />

      <CardSection>
        <Flex justifyContent="space-between">
          <Text fontWeight="bold">Total Settled</Text>
          <Text size="small">406.63$</Text>
        </Flex>
      </CardSection>
    </Card>
  </React.Fragment>
);

stories.addWithPercyOptions('Annotated Layout', { skip: true }, () => (
  <div style={{ maxWidth: '66rem' }}>
    <AnnotatedLayout
      title="Settlement Summary"
      description="Main information of the money you collected through card payments."
    >
      <FakeContent />
    </AnnotatedLayout>
  </div>
));

stories.addWithPercyOptions('Annotated Layout - with actions', { skip: true }, () => (
  <div style={{ maxWidth: '66rem' }}>
    <AnnotatedLayout
      title="Settlement Summary"
      description="Main information of the money you collected through card payments."
      renderExtras={
        <Box>
          <Button>Export</Button>
        </Box>
      }
      mb={5}
    >
      <FakeContent />
    </AnnotatedLayout>
  </div>
));
