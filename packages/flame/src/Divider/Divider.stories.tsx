import * as React from 'react';

import { Divider } from './Divider';

import { Box } from '../Core';
import { Card, CardHeader, CardSection, CardFooter } from '../Card';
import { Icon } from '../Icon';

import { disableChromaticSnapshots } from '../../../../.storybook/story-modifiers';

const cardsStyles = { maxWidth: '640px' };
const cardsContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

export default {
  title: 'Components/Divider',
  component: Divider,
};

export const story = () => (
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
);

export const variant = () => (
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
);
disableChromaticSnapshots(variant);

export const spacing = () => (
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
);
disableChromaticSnapshots(spacing);

export const customColors = () => (
  <div>
    <h3>Using a token (blue-200)</h3>
    <Divider color="blue-200" />
    <h3>Non token value (#F42069)</h3>
    <Divider color="#F42069" />
  </div>
);
disableChromaticSnapshots(customColors);
