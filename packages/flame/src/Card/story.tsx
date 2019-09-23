import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Card, CardHeader, CardFooter, CardSection } from './Card';
import { TextLink } from '../Text';
import { Divider } from '../Divider/index';
import { Button } from '../Button';
import { Box } from '../Core';

import Readme from './README.md';

const stories = storiesOf('Card', module)
  .addDecorator(withReadme(Readme))
  .addDecorator(storyFn => {
    return <React.Fragment>{storyFn()}</React.Fragment>;
  });

const cardsStyles = { maxWidth: '640px' };
const cardsContent =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quasi, sapiente ducimus maiores accusantium rem architecto eveniet, ut ratione ipsa saepe dolore voluptatem delectus natus totam laudantium quod quia sed necessitatibus culpa sit cupiditate ipsum aliquam quisquam. Delectus debitis!';

stories.add('Types', () => (
  <div style={{ display: 'flex' }}>
    <Box textAlign="center" mr={2}>
      <Card>
        <CardSection>Default Card</CardSection>
      </Card>
    </Box>
    <Box textAlign="center" mr={2}>
      <Card top>
        <CardSection>Top Card</CardSection>
      </Card>
    </Box>
  </div>
));

stories.add('Spacing', () => (
  <div>
    <h3>Card spacing</h3>
    <Box mb={2} style={{ display: 'flex' }}>
      <Box textAlign="center" mr={2}>
        <Card>
          <CardSection>Default</CardSection>
        </Card>
      </Box>
      <Box textAlign="center" mr={2}>
        <Card>
          <CardSection large>Large</CardSection>
        </Card>
      </Box>
      <Box textAlign="center" mr={2}>
        <Card>
          <CardSection noSpacing>No spacing</CardSection>
        </Card>
      </Box>
    </Box>

    <h3>CardSection spacing</h3>
    <Box mb={2} style={cardsStyles}>
      <div>
        <Card>
          <CardSection>Default</CardSection>
          <Divider />
          <CardSection large>Large</CardSection>
          <Divider />
          <CardSection noSpacing>No spacing</CardSection>
          <Divider />
          <CardSection pt={4} pb={1}>
            Custom spacing
          </CardSection>
        </Card>
      </div>
    </Box>

    <h3>CardHeader spacing</h3>
    <Box mb={2} style={cardsStyles}>
      <Box mb={2}>
        <Card>
          <CardHeader title="Header Default" actions={<Button size="small">hello world</Button>} />
          <CardSection>Static Content</CardSection>
        </Card>
      </Box>
      <Box mb={2}>
        <Card>
          <CardHeader
            large
            title="Header Large"
            actions={<Button size="small">hello world</Button>}
          />
          <CardSection>Static Content</CardSection>
        </Card>
      </Box>
      <Box mb={2}>
        <Card>
          <CardHeader
            noSpacing
            title="Header No Spacing"
            actions={<Button size="small">hello world</Button>}
          />
          <CardSection>Static Content</CardSection>
        </Card>
      </Box>
    </Box>

    <h3>Footer spacing</h3>
    <Box mb={2} style={cardsStyles}>
      <Box mb={2}>
        <Card>
          <CardSection>Static Content</CardSection>
          <CardFooter>Footer Default</CardFooter>
        </Card>
      </Box>
      <Box mb={2}>
        <Card>
          <CardSection>Static Content</CardSection>
          <CardFooter large>Footer Large</CardFooter>
        </Card>
      </Box>
    </Box>
  </div>
));

stories.add('Header & Footer', () => (
  <div>
    <h3>Default</h3>
    <Box mb={1} style={cardsStyles}>
      <Card>
        <CardHeader title="Header" />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Box>
    <h3>Default with header actions</h3>
    <Box mb={1} style={cardsStyles}>
      <Card>
        <CardHeader
          title="Header"
          actions={
            <TextLink
              href="https://www.lightspeedhq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cr-regular"
            >
              Action
            </TextLink>
          }
        />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Box>
    <h3>Large</h3>
    <Box mb={2} style={cardsStyles}>
      <Card large>
        <CardHeader title="Header" />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Box>
    <h3>Large with header actions</h3>
    <Box mb={2} style={cardsStyles}>
      <Card large>
        <CardHeader
          title="Header"
          actions={
            <TextLink
              href="https://www.lightspeedhq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cr-regular"
            >
              Action
            </TextLink>
          }
        />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Box>
  </div>
));

stories.add('Card with Divider', () => (
  <div>
    <h3>Card divider</h3>
    <Box mb={2} style={cardsStyles}>
      <Card>
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
      </Card>
    </Box>
    <h3>Card divider within large card</h3>
    <Box mb={2} style={cardsStyles}>
      <Card large>
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
      </Card>
    </Box>
  </div>
));

stories.add('Custom colors', () => (
  <div>
    <h3>Custom colors</h3>
    <Box mb={2} style={cardsStyles}>
      <Card bg="green-100">
        <CardHeader title="Header" color="green-300" />
        <CardSection color="night" bg="snow-100">
          {cardsContent}
        </CardSection>
        <CardFooter color="green-300">Footer</CardFooter>
      </Card>
    </Box>
  </div>
));
