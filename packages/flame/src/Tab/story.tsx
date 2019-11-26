import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import Readme from './README.md';
import { Tab, TabContainer } from './Tab';
import { Card, CardSection } from '../Card';

const stories = storiesOf('Components|Tab', module).addDecorator(withReadme(Readme));

const StoryTab = () => {
  const [state, setState] = React.useState(0);

  return (
    <Card>
      <TabContainer>
        <Tab onClick={() => setState(0)} active={state === 0}>
          Lions
        </Tab>
        <Tab onClick={() => setState(1)} active={state === 1}>
          Tigers
        </Tab>
        <Tab onClick={() => setState(2)} active={state === 2}>
          Bears
        </Tab>
      </TabContainer>
      <CardSection>
        Current animal:
        {state === 0 && '🦁'}
        {state === 1 && '🐯'}
        {state === 2 && '🐻'}
      </CardSection>
    </Card>
  );
};
stories.add('Story', () => (
  <div>
    <h3>Tab</h3>
    <StoryTab />
  </div>
));
