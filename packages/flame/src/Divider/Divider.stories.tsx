import * as React from 'react';

import { Card, CardHeader, CardSection, CardFooter } from '../Card';
import { Icon } from '../Icon';
import { Box } from '../Core';
import { Divider } from './Divider';
import { skipPercy } from '../../.storybook/utils/skip-percy';

const cardsStyles = { maxWidth: '640px' };
const cardsContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

export default {
  title: 'Components/Divider',
  component: Divider,
};

export const playground = args => (
  <div>
    <h3>Default</h3>
    <Divider {...args} />
    <h3>With content</h3>
    <Divider {...args}>With Content</Divider>
    <h3>Special card interaction</h3>
    <p>Notice how the Divider is colored slightly differently within a Card</p>
    <p>Additionally, a dotted variant is not applied within a Card. This is by design.</p>
    <Card>
      <CardHeader title="Title" />
      <CardSection>{cardsContent}</CardSection>
      <Divider />
      <CardSection>{cardsContent}</CardSection>
      <CardFooter>Footer</CardFooter>
    </Card>
  </div>
);

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
skipPercy(variant);

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
skipPercy(spacing);

export const customColors = () => (
  <div>
    <h3>Using a token (blue-200)</h3>
    <Divider color="blue-200" />
    <h3>Non token value (#F42069)</h3>
    <Divider color="#F42069" />
  </div>
);
skipPercy(customColors);
