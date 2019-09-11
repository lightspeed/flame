import * as React from 'react';
import cn from 'classnames';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import spacing from '../../../flame-tokens/partials/_spacing.scss';

import { Card, CardHeader, CardFooter, CardSection } from './Card';
import { TextLink } from '../Text';
import { Divider } from '../Divider/index';
import { Button } from '../Button';
import Readme from './README.md';

const leftSpace = spacing['cr-mr-2'];
const contentSpace = spacing['cr-mb-2'];

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
    <div className={cn('text-center', leftSpace)}>
      <Card>
        <CardSection>Default Card</CardSection>
      </Card>
    </div>
    <div className={cn('text-center', leftSpace)}>
      <Card top>
        <CardSection>Top Card</CardSection>
      </Card>
    </div>
  </div>
));

stories.add('Spacing', () => (
  <div>
    <h3>Card spacing</h3>
    <div className={contentSpace} style={{ display: 'flex' }}>
      <div className={cn('text-center', leftSpace)}>
        <Card>
          <CardSection>Default</CardSection>
        </Card>
      </div>
      <div className={cn('text-center', leftSpace)}>
        <Card>
          <CardSection large>Large</CardSection>
        </Card>
      </div>
      <div className={cn('text-center', leftSpace)}>
        <Card>
          <CardSection noSpacing>No spacing</CardSection>
        </Card>
      </div>
    </div>

    <h3>CardSection spacing</h3>
    <div className={contentSpace} style={cardsStyles}>
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
    </div>

    <h3>CardHeader spacing</h3>
    <div className={contentSpace} style={cardsStyles}>
      <div className={contentSpace}>
        <Card>
          <CardHeader title="Header Default" actions={<Button size="small">hello world</Button>} />
          <CardSection>Static Content</CardSection>
        </Card>
      </div>
      <div className={contentSpace}>
        <Card>
          <CardHeader
            large
            title="Header Large"
            actions={<Button size="small">hello world</Button>}
          />
          <CardSection>Static Content</CardSection>
        </Card>
      </div>
      <div className={contentSpace}>
        <Card>
          <CardHeader
            noSpacing
            title="Header No Spacing"
            actions={<Button size="small">hello world</Button>}
          />
          <CardSection>Static Content</CardSection>
        </Card>
      </div>
    </div>

    <h3>Footer spacing</h3>
    <div className={contentSpace} style={cardsStyles}>
      <div className={contentSpace}>
        <Card>
          <CardSection>Static Content</CardSection>
          <CardFooter>Footer Default</CardFooter>
        </Card>
      </div>
      <div className={contentSpace}>
        <Card>
          <CardSection>Static Content</CardSection>
          <CardFooter large>Footer Large</CardFooter>
        </Card>
      </div>
    </div>
  </div>
));

stories.add('Header & Footer', () => (
  <div>
    <h3>Default</h3>
    <div className={contentSpace} style={cardsStyles}>
      <Card>
        <CardHeader title="Header" />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
    <h3>Default with header actions</h3>
    <div className={contentSpace} style={cardsStyles}>
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
    </div>
    <h3>Large</h3>
    <div className={contentSpace} style={cardsStyles}>
      <Card large>
        <CardHeader title="Header" />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
    <h3>Large with header actions</h3>
    <div className={contentSpace} style={cardsStyles}>
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
    </div>
  </div>
));

stories.add('Card with Divider', () => (
  <div>
    <h3>Card divider</h3>
    <div className={contentSpace} style={cardsStyles}>
      <Card>
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
      </Card>
    </div>
    <h3>Card divider within large card</h3>
    <div className={contentSpace} style={cardsStyles}>
      <Card large>
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
      </Card>
    </div>
  </div>
));

stories.add('Custom colors', () => (
  <div>
    <h3>Custom colors</h3>
    <div className={contentSpace} style={cardsStyles}>
      <Card bg="green-100">
        <CardHeader title="Header" color="green-300" />
        <CardSection color="night" bg="snow-100">
          {cardsContent}
        </CardSection>
        <CardFooter color="green-300">Footer</CardFooter>
      </Card>
    </div>
  </div>
));
