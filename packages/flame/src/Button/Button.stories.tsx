import * as React from 'react';

import { Button } from './Button';
import { Box, Flex } from '../Core';
import { Divider } from '../Divider';
import { Icon } from '../Icon';
import { InputGroup } from '../InputGroup';

import { SpacedGroup } from '../../../../.storybook/components/SpacedGroup';
import { disableDocsStory } from '../../../../.storybook/story-modifiers';

const variations = ['primary', 'secondary', 'danger', 'neutral'] as const;

const ButtonPresenter = () => {
  const [state, setState] = React.useState({
    isDisabled: false,
    isLoading: false,
  });

  const handleClick = () => {
    setState({
      isDisabled: true,
      isLoading: true,
    });

    setTimeout(() => {
      setState({
        isDisabled: false,
        isLoading: false,
      });
    }, 2000);
  };

  const { isDisabled, isLoading } = state;

  return (
    <Button size="large" disabled={isDisabled} loading={isLoading} onClick={handleClick}>
      Click Me
    </Button>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onChange: { action: 'on change' },
    onClick: { action: 'on click' },
    onFocus: { action: 'on focus' },
    onBlur: { action: 'on blur' },
  },
};

export const styles = () => (
  <div>
    <h3>Outline</h3>
    <SpacedGroup>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </SpacedGroup>
    <hr />
    <h3>Fill</h3>
    <SpacedGroup>
      <Button fill>Default</Button>
      <Button variant="primary" fill>
        Primary
      </Button>
      <Button variant="secondary" fill>
        Secondary
      </Button>
      <Button variant="danger" fill>
        Danger
      </Button>
    </SpacedGroup>
    <hr />
    <h3>Input</h3>
    <SpacedGroup>
      <Button variant="input">Segment</Button>
      <InputGroup>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </InputGroup>
    </SpacedGroup>
  </div>
);

export const sizes = () => (
  <div>
    <Box mb={3}>
      <SpacedGroup>
        <Button size="small">Small</Button>
        <Button variant="primary">Medium</Button>
        <Button variant="secondary" size="large">
          Large
        </Button>
        <Button variant="danger" size="xlarge">
          Extra Large
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <SpacedGroup flexDirection="column">
        <Button size="small" block>
          Small Block
        </Button>
        <Button variant="primary" block>
          Medium Block
        </Button>
        <Button variant="secondary" size="large" block>
          Large Block
        </Button>
        <Button variant="danger" size="xlarge" block>
          Extra Large Block
        </Button>
      </SpacedGroup>
    </Box>
    <Divider mt={3} />
    <h3>Multiline</h3>
    <div style={{ width: '180px' }}>
      <Button mb={2} size="small">
        This is a small button with a very long text, even longer for small
      </Button>
      <Button mb={2} variant="primary">
        This is a normal button with a very long text, even longer
      </Button>
      <Button mb={2} variant="secondary" size="large">
        This is a large button with a very long text
      </Button>
      <Button variant="danger" size="xlarge">
        This is a extra large button with a very long text
      </Button>
    </div>
  </div>
);
disableDocsStory(sizes);

export const buttonAsLinks = () => (
  <Flex flexDirection="column">
    {variations.map(variation => (
      <Button href="http://www.lightspeedhq.com" variant={variation} mb="1">
        Button with link
      </Button>
    ))}
    {variations.map(variation => (
      <Button href="http://www.lightspeedhq.com" variant={variation} fill mb="1">
        Button with link
      </Button>
    ))}
    {variations.map(variation => (
      <Button href="http://www.lightspeedhq.com" variant={variation} mb="1">
        <Icon name="orders" /> Button with link
      </Button>
    ))}
    {variations.map(variation => (
      <Button href="http://www.lightspeedhq.com" variant={variation} fill mb="1">
        <Icon name="orders" /> Button with link
      </Button>
    ))}
  </Flex>
);
disableDocsStory(buttonAsLinks);

export const events: React.FC<{
  onClick: () => void;
  onFocus: () => void;
  onBlur: () => void;
}> = ({ onClick, onFocus, onBlur }) => (
  <div>
    <Box mb={3}>
      <SpacedGroup flexDirection="column">
        <Button onClick={onClick}>Button with onClick event (see Action Logger)</Button>
        <Button onFocus={onFocus}>Button with onFocus event (see Action Logger)</Button>
        <Button onBlur={onBlur}>Button with onBlur event (see Action Logger)</Button>
        <Button href="http://www.lightspeedhq.com">Button with link</Button>
        <Button href="http://www.google.com" target="_blank">
          Button with external link
        </Button>
        <Button onClick={onClick} onFocus={onFocus} onBlur={onBlur} disabled>
          Disabled button nullifies all events
        </Button>
        <Button href="http://google.com" target="_blank" disabled>
          Disabled link removes href and target
        </Button>
      </SpacedGroup>
    </Box>
  </div>
);
disableDocsStory(events);

export const withChildren = () => (
  <div>
    <Box mb={3}>
      <SpacedGroup>
        <Button size="small">
          <Icon name="orders" />
        </Button>
        <Button>
          <Icon name="orders" />
        </Button>
        <InputGroup>
          <Button>
            <Icon name="small-chevron-left" />
          </Button>
          <Button>
            <Icon name="small-chevron-right" />
          </Button>
        </InputGroup>
        <Button size="large">
          <Icon name="orders" />
        </Button>
        <Button size="xlarge">
          <Icon name="orders" />
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <SpacedGroup>
        <Button variant="primary">
          <Icon name="chevron-left" /> Back
        </Button>
        <Button variant="primary" fill>
          <Icon name="dashboard" /> Dashboard
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <SpacedGroup>
        <Button variant="secondary">
          View Product <Icon name="arrow-right" />
        </Button>
        <Button variant="secondary" fill>
          Customers <Icon name="customers" />
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <Button variant="danger">
        Export <Icon name="export" /> Documents
      </Button>
      <Button variant="danger" fill>
        Print <Icon name="printers" /> Documents
      </Button>
    </Box>
    <Box mb={3}>
      <SpacedGroup flexDirection="column">
        <Button size="small" block>
          <Icon name="users" /> Small Block
        </Button>
        <Button variant="primary" block>
          <Icon name="receipt" /> Medium Block
        </Button>
        <Button variant="primary" block noSpacing>
          <Icon name="receipt" /> Medium Block `noSpacing`
        </Button>
        <Button variant="secondary" size="large" block>
          <Icon name="support-tickets" /> Large Block
        </Button>
        <Button size="xlarge" block>
          Extra Large Block
        </Button>
        <Button size="xlarge" block>
          <Icon name="image" size="xsmall" /> Custom icon size in Extra Large Block
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <SpacedGroup flexDirection="column">
        <Button size="small" block>
          <Icon name="users" /> Small Block
        </Button>
        <Button variant="primary" block>
          <Icon name="receipt" /> Medium Block
        </Button>
        <Button variant="primary" block noSpacing>
          <Icon name="receipt" /> Medium Block `noSpacing`
        </Button>
        <Button variant="secondary" size="large" block>
          <Icon name="support-tickets" /> Large Block
        </Button>
        <Button size="xlarge" block>
          Extra Large Block
        </Button>
        <Button size="xlarge" block>
          <Icon name="image" size="xsmall" /> Custom icon size in Extra Large Block
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <h3>Icons with details should be colored properly</h3>
      <SpacedGroup>
        <Button variant="primary" fill>
          <Icon name="dashboard" /> Dashboard
        </Button>
        <Button variant="secondary" fill>
          <Icon name="dashboard" /> Dashboard
        </Button>
        <Button variant="danger" fill>
          <Icon name="dashboard" /> Dashboard
        </Button>
        <Button fill>
          <Icon name="dashboard" /> Dashboard
        </Button>
      </SpacedGroup>
    </Box>
  </div>
);
disableDocsStory(withChildren);

export const loading = () => (
  <div>
    <Box mb={3}>
      <SpacedGroup>
        <Button loading>Default</Button>
        <Button variant="primary" loading>
          Primary
        </Button>
        <Button variant="secondary" loading>
          Secondary
        </Button>
        <Button variant="danger" loading>
          Danger
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <SpacedGroup>
        <Button size="small" variant="primary" fill loading>
          Primary
        </Button>
        <Button size="large" variant="secondary" fill loading>
          Secondary
        </Button>
        <Button size="xlarge" variant="danger" fill loading>
          Danger
        </Button>
      </SpacedGroup>
    </Box>
    <Box mb={3}>
      <ButtonPresenter />
    </Box>
    <div>
      <h3>Loading should always have priority over disabled</h3>
      <Button
        size="small"
        variant="primary"
        fill
        loading
        disabled={false}
        onClick={() => {
          // eslint-disable-next-line
          alert('if you see me, we are doing something wrong');
        }}
      >
        Loading takes priority over disabled.
      </Button>
    </div>
  </div>
);
disableDocsStory(loading);
