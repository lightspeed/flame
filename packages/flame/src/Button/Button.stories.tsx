import * as React from 'react';

import { Button } from './Button';
import { Box, Flex } from '../Core';
import { InputGroup } from '../InputGroup';
import { Icon } from '../Icon';

import { SpacedGroup } from '../../.storybook/components/SpacedGroup';

export default {
  title: 'Components/Button',
};

type ButtonPresenterState = {
  isDisabled?: boolean;
  isLoading?: boolean;
};
class ButtonPresenter extends React.PureComponent<{}, ButtonPresenterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isDisabled: false,
      isLoading: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isDisabled: true,
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isDisabled: false,
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    const { isDisabled, isLoading } = this.state;

    return (
      <Button size="large" disabled={isDisabled} loading={isLoading} onClick={this.handleClick}>
        Click Me
      </Button>
    );
  }
}

export const stressTest = () => {
  return (
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
      <Flex flexDirection="column">
        <h3>Hover on the links to ensure coloring is done correctly</h3>
        {['primary', 'secondary', 'danger', 'neutral'].map(variation => (
          <Button href="http://www.lightspeedhq.com" variant={variation} mb="1">
            Button with link
          </Button>
        ))}
        {['primary', 'secondary', 'danger', 'neutral'].map(variation => (
          <Button href="http://www.lightspeedhq.com" variant={variation} fill mb="1">
            Button with link
          </Button>
        ))}
        {['primary', 'secondary', 'danger', 'neutral'].map(variation => (
          <Button href="http://www.lightspeedhq.com" variant={variation} mb="1">
            <Icon name="orders" /> Button with link
          </Button>
        ))}
        {['primary', 'secondary', 'danger', 'neutral'].map(variation => (
          <Button href="http://www.lightspeedhq.com" variant={variation} fill mb="1">
            <Icon name="orders" /> Button with link
          </Button>
        ))}
      </Flex>
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
    </div>
  );
};
