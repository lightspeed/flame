import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Card, CardHeader, CardSection, CardFooter } from '../Card';
import { Icon } from '../Icon';
import { Box } from '../Core';
import { Divider } from './Divider';

import Readme from './README.md';

const stories = storiesOf('Components|Divider', module).addDecorator(withReadme(Readme));
const cardsStyles = { maxWidth: '640px' };
const cardsContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

stories.add('Story', () => (
  <div>
    <h3>Default</h3>
    <Divider />
    <h3>With Content</h3>
    <Divider>
      <Icon size="1rem" name="products" />
      <Box ml={2}>T-Shirt</Box>
    </Divider>
    <h3>Between Elements</h3>
    <Box mb={2} style={cardsStyles}>
      <Card>
        <CardHeader title="Title" />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Divider p={2} />
      <Card>
        <CardHeader title="Title" />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Box>
    <h3>Between CardSection</h3>
    <Box mb={2} style={cardsStyles}>
      <Card>
        <CardHeader title="Title" />
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Box>
    <div>
      <h3>Default</h3>
      <Divider />
      <h3>Dotted</h3>
      <Divider variant="dotted" />
      <h3>With Content</h3>
      <Divider variant="dotted">
        <Icon size="1rem" name="products" />
        <Box ml={2}>T-Shirt</Box>
      </Divider>
    </div>
    <div>
      <h3>Spacing</h3>
      <Box mb={2} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Box>
      <h3>Even Spacing</h3>
      <Box mb={2} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider py={4} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Box>
      <h3>Uneven Spacing</h3>
      <Box mb={2} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider pt={5} pb={10} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Box>
    </div>
    <div>
      <h2>Custom Colors</h2>
      <h3>Using a token (blue-200)</h3>
      <Divider color="blue-200" />
      <h3>Non token value (#F42069)</h3>
      <Divider color="#F42069" />
    </div>
  </div>
));

stories.add(
  'Variant',
  () => (
    <div>
      <h3>Default</h3>
      <Divider />
      <h3>Dotted</h3>
      <Divider variant="dotted" />
      <h3>With Content</h3>
      <Divider variant="dotted">
        <Icon size="1rem" name="products" />
        <Box ml={2}>T-Shirt</Box>
      </Divider>
    </div>
  ),
  { chromatic: { disable: true } },
);

stories.add(
  'Spacing',
  () => (
    <div>
      <h3>Default</h3>
      <Box mb={2} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Box>
      <h3>Even Spacing</h3>
      <Box mb={2} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider py={4} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Box>
      <h3>Uneven Spacing</h3>
      <Box mb={2} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider pt={5} pb={10} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Box>
    </div>
  ),
  { chromatic: { disable: true } },
);

stories.add(
  'Custom Colors',
  () => (
    <div>
      <h3>Using a token (blue-200)</h3>
      <Divider color="blue-200" />
      <h3>Non token value (#F42069)</h3>
      <Divider color="#F42069" />
    </div>
  ),
  { chromatic: { disable: true } },
);
