import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import spacing from '../../../flame-tokens/partials/_spacing.scss';
import { Card, CardHeader, CardSection, CardFooter } from '../Card';
import { Icon } from '../Icon';
import { Divider } from './Divider';

import Readme from './README.md';

const contentSpace = spacing['cr-mb-2'];

const stories = storiesOf('Divider', module).addDecorator(withReadme(Readme));
const cardsStyles = { maxWidth: '640px' };
const cardsContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

stories.add('Story', () => (
  <div>
    <h3>Default</h3>
    <Divider />
    <h3>With Content</h3>
    <Divider>
      <Icon size="1rem" name="products" className="cr-mr-2" />
      <span>T-Shirt</span>
    </Divider>
    <h3>Between Elements</h3>
    <div className={contentSpace} style={cardsStyles}>
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
    </div>
    <h3>Between CardSection</h3>
    <div className={contentSpace} style={cardsStyles}>
      <Card>
        <CardHeader title="Title" />
        <CardSection>{cardsContent}</CardSection>
        <Divider />
        <CardSection>{cardsContent}</CardSection>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
    <div>
      <h3>Default</h3>
      <Divider />
      <h3>Dotted</h3>
      <Divider variant="dotted" />
      <h3>With Content</h3>
      <Divider variant="dotted">
        <Icon size="1rem" name="products" className="cr-mr-2" />
        <span>T-Shirt</span>
      </Divider>
    </div>
    <div>
      <h3>Spacing</h3>
      <div className={contentSpace} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <h3>Even Spacing</h3>
      <div className={contentSpace} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider py={4} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <h3>Uneven Spacing</h3>
      <div className={contentSpace} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider pt={5} pb={10} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
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
        <Icon size="1rem" name="products" className="cr-mr-2" />
        <span>T-Shirt</span>
      </Divider>
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Spacing',
  () => (
    <div>
      <h3>Default</h3>
      <div className={contentSpace} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <h3>Even Spacing</h3>
      <div className={contentSpace} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider py={4} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <h3>Uneven Spacing</h3>
      <div className={contentSpace} style={cardsStyles}>
        <Card>
          <CardHeader title="Title" />
          <CardSection>{cardsContent}</CardSection>
          <Divider pt={5} pb={10} />
          <CardSection>{cardsContent}</CardSection>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </div>
  ),
  { percy: { skip: true } },
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
  { percy: { skip: true } },
);
